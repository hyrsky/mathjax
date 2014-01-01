<?php

/**
 * @file
 * Definition of Drupal\mathjax\Tests\MathjaxWebTest.
 */

namespace Drupal\mathjax\Tests;

use Drupal\simpletest\WebTestBase;

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
  public static $modules = array('mathjax');

  /**
   * Set up the test evironment.
   */
  protected function setUp() {
    parent::setUp();

    $this->administrator = $this->drupalCreateUser(array(
      'administer mathjax',
    ));
  }

  /**
   * Test the default configuration.
   */
  public function testDefaults() {
    $path = '<front>';

    // Initial text on form load.
    $this->drupalGet($path);
    $this->assertRaw(mathjax_default('cdn url'), 'Default CDN URL found.');
    $this->assertRaw('<script type="text/x-mathjax-config">' . mathjax_default('config string') . '</script>', 'Default configuration string found.');
  }

  /**
   * Test the administration functions.
   */
  public function testAdmin() {

    $this->drupalLogin($this->administrator);
    $this->drupalGet('admin/config/content/mathjax');
    $this->assertTitle('MathJax | Drupal', 'Page title set.');
    $this->assertText('MathJax CDN URL');
    $this->assertFieldByName('mathjax_cdn_url', mathjax_default('cdn url'), 'Default CDN config string found.');
    $this->assertText('Enter the Mathjax CDN url here or leave it unchanged to use the one provided by www.mathjax.org.');
    $this->assertText('Configuration Type');
    $this->assertFieldByName('mathjax_config_type', 0);

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
      'mathjax_config_type' => 1,
      'mathjax_config_string' => $custom,
    );

    $this->drupalPostForm($path, $edit, t('Save configuration'));
    $this->assertText('Enter a JavaScript configuration string as documented');
    $this->assertRaw('<script type="text/x-mathjax-config">' . $custom . '</script>', 'Custom configuration string found.');

  }
}
