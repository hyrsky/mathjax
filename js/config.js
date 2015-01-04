/**
 * @file
 * Stages the MathJax configuration.
 */

(function (settings) {

  "use strict";
  window.MathJax = JSON.parse(settings.mathjax.config_string);

}(drupalSettings));
