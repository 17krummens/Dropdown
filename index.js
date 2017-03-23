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
            // set up object
            var elementID = $.dropdown.generateID();
            $(this).data('dropdownid',elementID);
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

            // set up event listeners
            $(this).hide();

            var $dropdown = $('<div></div>').attr('class','dropdown');
            var $select = $('<div></div>').attr('class','dropdown-select');
            for(var i = 0; i < Object.keys($.dropdown.elements[elementID].options).length; i++) {
              var option = $.dropdown.elements[elementID].options[i];
              var text = option.text;
              var $div = $('<div>' + text + '</div>');
              $div.attr('class','dropdown-select-option');
              $div.data('dropdown-option',i);
              $select.append($div);
            }

            $dropdown.append($select);
            $(this).after($dropdown);

            var maxWidth = 0;

            $dropdown.find('.dropdown-select-option').each(function() {
              if($(this).outerWidth() > maxWidth) {
                maxWidth = $(this).outerWidth();
              }
            });

            $dropdown.outerWidth(maxWidth + 'px');

          }
          else {
            console.warn('This element is not a SELECT input');
          }
        });
    },

    dropdownVal : function() {
      if(this.length == 1) {

      }
      else {
        console.warn('dropdownVal can only return the value from one dropdown. ' + this.length + ' dropdowns given');
      }
    }
});
})($);

$(document).ready(function() {
    $('#attempts').dropdown();
});

