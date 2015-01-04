<?php

/**
 * @file
 * Contains \Drupal\mathjax\Form\MathjaxSettingsForm.
 */

namespace Drupal\mathjax\Form;

use Drupal\Core\Form\ConfigFormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Presents the module settings form.
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
  public function buildForm(array $form, FormStateInterface $form_state) {
    $config = $this->config('mathjax.settings');

    $form['test'] = array(
      '#type' => 'fieldset',
      '#title' => 'MathJax Test',
    );

    $form['test']['library'] = array(
      '#type' => 'item',
      '#markup' => '<div class="tex2jax_process"><p>If the MathJax library is installed properly, you should see the square root of x here: $ \sqrt{x} $ and the square root of y here: \(\sqrt{y}\)</p><p>$$\text{The quadratic formula should appear here: } x = \frac {-b \pm \sqrt {b^2 - 4ac}}{2a}$$</p><p>\[\text{The cubic equation should appear here: } a x^3\; +\; b x^2\; +\; c x\; +\; d\; =\; 0\]</p></div>',
    );

    $form['use_cdn'] = array(
      '#type' => 'checkbox',
      '#title' => $this->t('Use MathJax Content Delivery Network (CDN)'),
      '#default_value' => $config->get('use_cdn', TRUE),
      '#description' => $this->t('Check this box to load MathJax source from MathJax servers (recommended) or from the link you can provide below.'),
    );
    $form['cdn_url'] = array(
      '#type' => 'textfield',
      '#title' => $this->t('MathJax CDN URL'),
      '#default_value' => $config->get('cdn_url'),
      '#description' => $this->t("Enter the Mathjax CDN url here or leave it unchanged to use the one provided by <a target='_blank' href='@mathjax-homepage'>www.mathjax.org</a>.", array('@mathjax-homepage' => 'http://www.mathjax.org')),
    );
    $form['config_type'] = array(
      '#type' => 'radios',
      '#title' => $this->t('Configuration Type'),
      '#options' => array(
        0 => $this->t('Text Format (Recommended&mdash;Add the MathJax filter to a <a href="@textformats">text format</a>.)', array('@textformats' => $this->url('filter.admin_overview'))),
        1 => $this->t('Custom'),
      ),
      '#default_value' => $config->get('config_type'),
    );
    $form['mathjax_note_default'] = array(
      '#type' => 'item',
      '#prefix' => '<span class="tex2jax_ignore">',
      '#markup' => $this->t('MathJax
      will be available as a text filter. Mathematics inside the
      default delimiters will be rendered by MathJax. The
      default math delimiters are $$...$$ and \[...\] for displayed mathematics,
      and $...$ and \(...\) for in-line mathematics. <strong>You must add
      the MathJax filter to a <a href="@textformats">text format</a> and put
      MathJax at the bottom of the filter processing order.</strong>', array('@textformats' => $this->url('filter.admin_overview'))),
      '#suffix' => '</span>',
      '#states' => array(
        'invisible' => array(
          ':input[name="config_type"]' => array('value' => 1),
        ),
      ),
    );
    $form['config_string'] = array(
      '#type' => 'textarea',
      '#title' => $this->t('Custom configuration'),
      '#default_value' => ($config->get('config_string')) ? $config->get('config_string') : $config->get('default_config_string'),
      '#description' => $this->t("Enter a JSON configuration string as documented on  <a target='_blank' href='@mathjax-help'>MathJax help</a>. Use with caution as you may introduce JavaScript errors.", array('@mathjax-help' => 'http://docs.mathjax.org/en/latest/')),
      '#states' => array(
        'invisible' => array(
          ':input[name="config_type"]' => array('value' => 0),
        ),
      ),
    );
    return parent::buildForm($form, $form_state);
  }

  /**
   * {@inheritdoc}
   */
  public function submitForm(array &$form, FormStateInterface $form_state) {
    $this->config('mathjax.settings')
        ->set('use_cdn', $form_state->getValue('use_cdn'))
        ->set('cdn_url', $form_state->getValue('cdn_url'))
        ->set('config_type', $form_state->getValue('config_type'))
        ->set('config_string', $form_state->getValue('config_string'))
        ->save();

    parent::submitForm($form, $form_state);
  }

}
