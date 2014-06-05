<?php

/**
 * @file
 * Contains \Drupal\mathjax\Plugin\Filter\MathjaxFilter.
 */

namespace Drupal\mathjax\Plugin\Filter;

use Drupal\filter\Annotation\Filter;
use Drupal\Core\Annotation\Translation;
use Drupal\filter\Plugin\FilterBase;

/**
 * Provides a filter to format text with Mathjax.
 *
 * Wraps the text in a div with a class name that is looked-for
 * by the Mathjax Javascript library.
 *
 * @Filter(
 *   id = "filter_mathjax",
 *   module = "mathjax",
 *   title = @Translation("MathJax"),
 *   description = @Translation("Mathematics inside the configured delimiters is rendered by MathJax."),
 *   type = Drupal\filter\Plugin\FilterInterface::TYPE_MARKUP_LANGUAGE,
 *   weight = 100
 * )
 */
class MathjaxFilter extends FilterBase {
  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode, $cache, $cache_id) {
    return '<div class="tex2jax">' . $text . '</div>';
  }
  
  /**
   * {@inheritdoc}
   */
  public function tips($long = FALSE) {
    return $this->t('<span class="tex2jax_ignore">Mathematics inside the <a href="@url">configured delimiters</a> is
      rendered by MathJax. The default math delimiters are $$...$$ and \[...\] for
      displayed mathematics, and $...$ and \(...\) for in-line mathematics.</span>',
        array('@url' => url('admin/config/content/mathjax'))
    );
  }
}