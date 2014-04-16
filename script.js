function Banners(selector) {
  var element = $(selector);
  var timer;

  this.next = function () {
    var active = element.find('.active');
    var next = active.next();
    if (next.length === 0) {
      next = element.children().eq(0);
    }
    console.log(next.length);
    active.removeClass('active');
    next.addClass('active');
  };

  this.auto = function (seconds) {
    timer = setTimeout(function () {
      this.next();
      this.auto(seconds);
    }, seconds * 1000);
  };

  return this;
}
