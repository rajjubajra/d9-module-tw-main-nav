<?php

/**
 * @file
 * @author
 * Contains \Drupal\testing_module\Controller\TestingController.
 */

namespace Drupal\tw_food_menu\Controller;

/**
* Provides route response for the module
*/

class FoodmenuController{
  /**
   * Returns a simpla page
   * 
   * @return array
   *   Food Menu Items array
   */
  public function foodmenuItems(){
    $element = array(
      '#theme' => 'food-menu-template',
      '#data' => 'Hello',

    );
    return $element;
  }

}