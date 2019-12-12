/**
 * @file
 * YMCA Feature Cards JS.
 */

(function ($) {

  "use strict";
  Drupal.ymcaFeatureCards = Drupal.ymcaFeatureCards || {};

  // Features normalization.
  Drupal.behaviors.field_prgf_feature_cards = {
    attach: function (context, settings) {

      // Handle clicking the full feature card.
      $('.link-card .feature-square-container').on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $link = $this.siblings('.feature-square-link');
        $link[0].click();
      });


      // Match the heights for the specific features sections separately.
      $('.features-paragraph-container').each(function() {
        var _this = $(this);
        _this.find('.feature-square-container').matchHeight();
        _this.find('.feature-square-title').matchHeight();
        _this.find('.feature-square-description').matchHeight();
      });

      // $('.features-paragraph').not('.horizontal-features-paragraph').find('.features-paragraph-container').each(function() {
      //   var _this = $(this);
      //   // Find out how many cards there are so we can center things.
      //   var children = _this.find('.row').children('div').not('.clearfix');
      //
      //   // Count the children so we can get our modulus.
      //   var num_children =  children.length;
      //   var mod = num_children % 3;
      //
      //   // We need to center the last couple
      //   if(mod > 0) {
      //     var count = 0;
      //     children.slice(mod * -1).each(function() {
      //
      //       if(mod === 1) {
      //         $(this).find('.feature-square').addClass('feature-center-one');
      //       }
      //       else if (mod === 2) {
      //         if(count === 0) {
      //           $(this).find('.feature-square').addClass('feature-center-two-left');
      //         }
      //         else {
      //           $(this).find('.feature-square').addClass('feature-center-two-right');
      //         }
      //       }
      //       count++;
      //     });
      //   }
      // });



      // $(window).resize(function() {
      //   descriptionMargin();
      // });
      // descriptionMargin();
      //
      //
      // function descriptionMargin() {
      //   var paragraph = $('.features-paragraph');
      //   paragraph.each(function() {
      //     var _this = $(this);
      //     var button = _this.find('.feature-square-button');
      //     var description = _this.find('.feature-square-description');
      //     description.css('margin-bottom', button.outerHeight(true));
      //   });
      // }
    }
  };

})(jQuery);
