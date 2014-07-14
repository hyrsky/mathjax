<?php

/**
 * @file
 * Contains \Drupal\mathjax\Mathjax\Defaults.
 */

namespace Drupal\mathjax\Mathjax;

/**
 * Contains default settings.
 */
class Defaults {
  const CDNURL = 'https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  const CONFIG = "
window.MathJax = {
  tex2jax: {
    inlineMath: [ ['$','$'], ['\\\\(','\\\\)'] ],
    processEscapes: true,
    processClass: 'tex2jax',
    ignoreClass: 'html'
  },
  showProcessingMessages: false,
  messageStyle: 'none'
};
";
}
