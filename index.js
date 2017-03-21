(function ($) {

  $.dropdown = $.dropdown || {};

  $.dropdown.elements = {};
  $.dropdown.generateID = function() {
    var x = Math.floor((Math.random() * 100000000000000000) + 1);
    while(!$.dropdown.elements.hasOwnProperty(x)) {
      x = Math.floor((Math.random() * 100000000000000000) + 1);
      return x;
    }
  };

  $.fn.extend({
    dropdown : function() {
        return this.each(function() {
          if($(this).is('select')) {
            var elementID = $.dropdown.generateID();
            $.dropdown.elements[elementID] = {
              parent : $(this),
              options : {}
            }
            $(this).children('option').each(function(i) {
              $.dropdown.elements[elementID].options[i] = {
                value : $(this).val(),
                text : $(this).text()
              };
            });
            console.log($.dropdown);
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
});
