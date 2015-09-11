/**
 * @file
 * Javascript behaviors for MathJax.
 */

/*global MathJax, window, drupalSettings*/

(function (settings) {

  "use strict";
  window.MathJax = settings.mathjax.config;

}(drupalSettings));
