(function ($) {

  $.dropdown = $.dropdown || {};
  
  $.dropdown.elements = {};
  $.dropdown.generateID = function() {
    var x = Math.floor((Math.random() * 100000000000000000) + 1);
    while($.dropdown.elements.hasOwnProperty(x)) {
      x = Math.floor((Math.random() * 100000000000000000) + 1);
      return x;
    }
  };

  $.fn.extend({
    dropdown : function() {
        return this.each(function() {
          if($(this).is('select')) {
            console.log($.dropdown.generateID());
          }
          else {
            console.warn('This element is not a SELECT input');
          }
        });
    }
});
})($);

$(document).ready(function() {
    $('#attempts').dropdown();
})
