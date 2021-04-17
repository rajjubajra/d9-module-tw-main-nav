<?php
/**
 * @file
 * Contains \Drupal\tw_food_menu\Form\FooMenuEntryForm
 */

namespace Drupal\tw_food_menu\Form;

use Drupal\Core\Database\Database;
use Drupal\Core\Form\FormBase;
use Drupal\Core\Form\FormStateInterface;

/**
 * Provides Food menu entry form
 */

class FoodMenuEntryForm extends FormBase{
    /**
     * (@inheritdoc)
     */
    public function getFormId()
    {
      return 'tw_food_menu_entry_form';
    }

    /**
     * (@inheritdoc)
     */
    public function buildForm(array $form, FormStateInterface $form_state)
    {
      $node = \Drupal::routeMatch()->getParameter(('node'));
      $nid = $node->nid->value;
      
      $form['name'] = array(
        '#title'=> $this->t('Name'),
        '#type'=> 'textfield',
        '#size' => 25,
        '#description' => $this->t('Menu Item name of the food'),
        '#required' => TRUE,
        '#attributes' => [
          'class' => ['tw-border tw-p-2 tw-outline-none']],
      );

      $form['details'] = array(
        '#title'=> $this->t('Details'),
        '#type' => 'textarea',
        '#size' => 20,
        '#description' => $this->t('Description of the menu item'),
        '#required' => TRUE,
        '#attributes' => [
          'class' => ['tw-border tw-p-2 tw-outline-none']],
      );

      $form['rate'] = array(
        '#title'=> $this->t('Rate'),
        '#type' => 'textfield',
        '#size' => 10,
        '#description' => $this->t('Rate of the menu item'),
        '#required' => TRUE,
        '#attributes' => [
          'class' => ['tw-border tw-p-2 tw-outline-none']],
      );

      // $form['food_menu_image'] = [
      //   '#title' => $this->t('Food Menu Image'),
      //   '#type' => 'managed_file',
      //   '#description' => $this->t('Image description'),
      //   '#upload_validators' => array(
      //     'file_validate_extensions' => array('gif png jpg jpeg svg'),
      //     'file_validate_size' => array(25600000),
      //   ),
      //   //** '#theme' => 'image_widge', **
      //   //** '#preview_image_style' => 'medium', **
      //   '#uload_location' => 'public://',
      //   '#required' => FALSE,
      // ];
      
      $form['submit']= array(
        '#type'=> 'submit',
        '#value'=> $this->t('submit'),
      );
      $form['nid'] = array(
        '#type' => 'hidden',
        '#value'=> $nid
      );
      return $form;
    }
    /**
     * (@inheritdoc)
     */
    public function submitForm(array &$form, FormStateInterface $form_state)
    {
      $user = \Drupal\user\Entity\User::load(\Drupal::currentUser()->id());
      \Drupal::database()->insert('tw_food_menu')->fields(
        array(
          'name'=>$form_state->getValue('name'),
          'details'=>$form_state->getValue('details'),
          'rate'=>$form_state->getValue('rate'),
          //'food_menu_image' => $form_state->getValue('food_menu_image'),
          'nid'=> $form_state->getValue('nid'),
          'uid'=> $user->id(),
          'created'=>time()
        )
      )->execute();
      $this->messenger()->addStatus($this->t('This form works fine'));
    }
}