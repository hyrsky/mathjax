<?php

/**
 * @file
 * Contains \Drupal\mathjax\Form\MathjaxSettingsForm.
 */

namespace Drupal\mathjax\Form;

use Drupal\Core\Form\ConfigFormBase;

/**
 * Todo: Document this class.
 */
class MathjaxSettingsForm extends ConfigFormBase {

  /**
   * {@inheritdoc}
   */
  public function getFormId() {
    return 'mathjax_admin_settings';
  }

  /**
   * {@inheritdoc}
   */
  public function buildForm(array $form, array &$form_state) {
    $config = $this->config('mathjax.settings');

    $form['mathjax']['mathjax_use_cdn'] = array(
      '#type' => 'checkbox',
      '#title' => t('Use MathJax Content Delivery Network (CDN)'),
      '#default_value' => !is_null($config->get('mathjax_use_cdn')) ? $config->get('mathjax_use_cdn') : TRUE,
      '#description' => t('Check this box to load MathJax source from MathJax servers (recommended) or from the link you can provide below.'),
    );
    $form['mathjax']['mathjax_cdn_url'] = array(
      '#type' => 'textfield',
      '#title' => t('MathJax CDN URL'),
      '#default_value' => !is_null($config->get('mathjax_cdn_url')) ? $config->get('mathjax_cdn_url') : mathjax_default('cdn url'),
      '#description' => t("Enter the Mathjax CDN url here or leave it unchanged to use the one provided by <a target='_blank' href='@mathjax-homepage'>www.mathjax.org</a>.", array('@mathjax-homepage' => url('http://www.mathjax.org'))),
    );
    $form['mathjax']['mathjax_config_type'] = array(
      '#type' => 'radios',
      '#title' => t('Configuration Type'),
      '#options' => array(
        0 => t('Text Format (Recommended&mdash;Add the MathJax filter to a <a href="@textformats">text format</a>.)', array('@textformats' => url('admin/config/content/formats'))),
        1 => t('Custom'),
      ),
      '#default_value' => !is_null($config->get('mathjax_config_type')) ? $config->get('mathjax_config_type') : 0,
    );
    $form['mathjax']['mathjax_note_default'] = array(
      '#type' => 'item',
      '#prefix' => '<span class="tex2jax_ignore">',
      '#markup' => t('MathJax
      will be available as a text filter. Mathematics inside the
      default delimiters will be rendered by MathJax. The
      default math delimiters are $$...$$ and \[...\] for displayed mathematics,
      and $...$ and \(...\) for in-line mathematics. <strong>You must add
      the MathJax filter to a <a href="@textformats">text format</a> and put
      MathJax at the bottom of the filter processing order.</strong>', array('@textformats' => url('admin/config/content/formats'))),
      '#suffix' => '</span>',
      '#states' => array(
        'invisible' => array(
          ':input[name="mathjax_config_type"]' => array('value' => 1),
        ),
      ),
    );
    $form['mathjax']['mathjax_config_string'] = array(
      '#type' => 'textarea',
      '#title' => t('Custom configuration'),
      '#default_value' => !is_null($config->get('mathjax_config_string')) ? $config->get('mathjax_config_string') : mathjax_default('config string'),
      '#description' => t("Enter a JavaScript configuration string as documented on  <a target='_blank' href='@mathjax-help'>MathJax help</a>. Use with caution as you may introduce JavaScript errors.", array('@mathjax-help' => url('http://docs.mathjax.org/en/latest/'))),
      '#states' => array(
        'invisible' => array(
          ':input[name="mathjax_config_type"]' => array('value' => 0),
        ),
      ),
    );
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, array &$form_state) {
    $this->config('mathjax.settings')
        ->set('mathjax_use_cdn', $form_state['values']['mathjax_use_cdn'])
        ->set('mathjax_cdn_url', $form_state['values']['mathjax_cdn_url'])
        ->set('mathjax_config_type', $form_state['values']['mathjax_config_type'])
        ->set('mathjax_config_string', $form_state['values']['mathjax_config_string'])
        ->save();

    parent::submitForm($form, $form_state);
  }

}
