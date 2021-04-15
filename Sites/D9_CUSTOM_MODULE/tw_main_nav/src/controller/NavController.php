<?php
/**
* @file
* Contains \Drupal\tw_main_nav\Controller\TwMainNavContrller.
*/

namespace Drupal\tw_main_nav\Controller;

use Drupal\Core\Controller\ControllerBase;

class NavController extends ControllerBase{

  public function about(){
    return array(
    '#type' => 'markup',
    '#markup'=> $this->t('This is Tailwind css ABOUT PAGE page'),
    '#attributes' => ['class' => ['container']]
    );
  }

  public function foodmenu(){
      return array(
      '#type' => 'markup',
      '#markup'=> $this->t('This is Food Menu Page')
      );
  }

  public function tablebooking(){
    return array(
    '#type' => 'markup',
    '#markup'=> $this->t('This is Table Booking'),
    '#attributes' => ['class' => ['container']]
    );

  }

  public function gallery(){
      return array(
        '#type' => 'markup',
        '#markup' => $this->t('This is Gallery Page')
        );
  }

  public function reviews(){
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('This is Reviews Page')
      );
}

  public function events(){
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('This is Event Page')
      );
  }

  public function contact(){
    return array(
      '#type' => 'markup',
      '#markup' => $this->t('This is Contact Page')
      );
  }



}/** class closed */