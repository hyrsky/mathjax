<?php

/**
 * @file
 * Definition of Drupal\mathjax\Tests\MathjaxWebTest.
 */

namespace Drupal\mathjax\Tests;

use Drupal\simpletest\WebTestBase;
use Drupal;

/**
 * Configuration test case for the module.
 */
class MathjaxWebTest extends WebTestBase {

  /**
   * Provide info on these tests to the admin interface.
   */
  public static function getInfo() {
    return array(
      'name' => 'MathJax tests',
      'description' => 'Tests the default configuration and admin functions.',
      'group' => 'MathJax',
    );
  }

  /**
   * Modules to enable.
   *
   * @var array
   */
  public static $modules = array('mathjax', 'filter');

  /**
   * Set up the test evironment.
   */
  protected function setUp() {
    parent::setUp();

    $this->administrator = $this->drupalCreateUser(array(
      'administer mathjax',
      'administer filters',
      'access administration pages',
    ));
  }

  /**
   * Test the default configuration.
   */
  public function testDefaults() {
    $path = '<front>';

    // Initial text on form load.
    $this->drupalGet($path);
    $config = Drupal::config('mathjax.settings');
    $this->assertRaw($config->get('cdn_url', 'Default CDN URL found.'));
    $this->assertRaw($config->get('config_string', 'Default configuration string found.'));
  }

  /**
   * Test the administration functions.
   */
  public function testAdmin() {
    $config = Drupal::config('mathjax.settings');
    $this->drupalLogin($this->administrator);
    $this->drupalGet('admin/config');
    $this->assertText('Configure global settings for MathJax.');
    $this->drupalGet('admin/config/content/formats/add');
    $this->assertText('Mathematics inside the configured delimiters is rendered by MathJax');
    $this->drupalGet('admin/config/content/mathjax');
    $this->assertTitle('MathJax | Drupal', 'Page title set.');
    $this->assertText('MathJax CDN URL');
    $this->assertFieldByName('cdn_url', $config->get('cdn_url'), 'Default CDN config string found.');
    $this->assertText('Enter the Mathjax CDN url here or leave it unchanged to use the one provided by www.mathjax.org.');
    $this->assertText('Configuration Type');
    $this->assertFieldByName('config_type', 0);

    $custom = "MathJax.Hub.Config({
      extensions: ['tex2jax.js'],
      jax: ['input/TeX','output/HTML-CSS'],
      tex2jax: {
        inlineMath: [ ['$','$'], ['\\\\(','\\\\)'] ],
        processEscapes: true
      }
    });";
    $path = 'admin/config/content/mathjax';
    $edit = array(
      'config_type' => 1,
      'config_string' => $custom,
    );

    $this->drupalPostForm($path, $edit, t('Save configuration'));
    $this->assertText('Enter a JavaScript configuration string as documented');
    $this->assertRaw($custom, 'Custom configuration string found.');

  }
}
