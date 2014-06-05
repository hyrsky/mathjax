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
  const CDNURL = 'https://c328740.ssl.cf1.rackcdn.com/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';
  const CONFIG = "
window.MathJax = {
  extensions: ['tex2jax.js'],
  jax: ['input/TeX','output/HTML-CSS'],
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
