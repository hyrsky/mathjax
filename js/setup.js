/**
 * @file
 * Javascript behaviors for MathJax.
 */

/*global MathJax*/

(function ($, Drupal, document) {

  "use strict";

  /**
   * Attaches behaviors for MathJax.
   */
  Drupal.behaviors.mathjax = {
    attach: function (context, settings) {
      $(document).ajaxComplete(function () {
        MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
      });
      if (settings.mathjax.config_type === 0) {
        $('body').addClass('tex2jax_ignore');
      }
    }
  };

}(jQuery, Drupal, document));
