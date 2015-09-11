<?php

/**
 * @file
 * Contains \Drupal\mathjax\Plugin\Filter\MathjaxFilter.
 */

namespace Drupal\mathjax\Plugin\Filter;

use Drupal\filter\Annotation\Filter;
use Drupal\Core\Annotation\Translation;
use Drupal\filter\Plugin\FilterBase;
use Drupal\filter\FilterProcessResult;

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
 *   weight = 50
 * )
 */
class MathjaxFilter extends FilterBase {
  /**
   * {@inheritdoc}
   */
  public function process($text, $langcode) {
    $wrapped = '<div class="tex2jax_process">' . $text . '</div>';
    $result = new FilterProcessResult($wrapped);
    $config = \Drupal::config('mathjax.settings');
    $result->setAttachments([
      'library' => [
        'mathjax/config',
        'mathjax/source',
        'mathjax/setup',
      ],
      'drupalSettings' => [
        'mathjax' => [
          'config_type' => 0,
          'config' => json_decode($config->get('default_config_string')),
        ]
      ]
    ]);

    return $result;
  }

  /**
   * {@inheritdoc}
   */
  public function tips($long = FALSE) {
    return $this->t('<span class="tex2jax_ignore">Mathematics inside the <a href="@url">configured delimiters</a> is
      rendered by MathJax. The default math delimiters are $$...$$ and \[...\] for
      displayed mathematics, and $...$ and \(...\) for in-line mathematics.</span>',
        array('@url' => \Drupal::url('mathjax.settings'))
    );
  }
}
