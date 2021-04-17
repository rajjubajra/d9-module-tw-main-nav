<?php 

namespace Drupal\tw_food_menu\Plugin\Block;

use Drupal\Core\Block\BlockBase;

/**
 * Provides a Food menu item Block.
 *
 * @Block(
 *   id = "food_menu_items",
 *   admin_label = @Translation("Food menu items"),
 *   category = @Translation("Food Menu"),
 * )
 */


class FoodmenuitemBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function build() {

    // Create an object of type Select.
    $database = \Drupal::database();
    $query = $database->select('tw_food_menu', 'fm');
    //$query->join('users_field_data','u','fm.uid = u.uid');

    // Add extra detail to this query object: a condition, fields and a range.
    $query->condition('fm.uid', 0, '<>');
    $query->fields('fm', ['uid', 'name', 'details', 'created', 'rate']);
    $query->range(0, 50);
    $result = $query->execute()->fetchAll();
    

    $output = $result;

    return [
      '#theme' => 'food-menu-template',
      '#data' => $output,
    ];
  }

}