<?php
/**
 * @file
 * Contains \Drupalfoodmenulist\Controller\ReportController.
 */

namespace Drupal\tw_food_menu\Controller;

use Drupal\Core\Controller\ControllerBase;
use Drupal\Core\Database\Database;
use Drupal\jsonapi\JsonApiResource\Data;

/**
 * Controller for TW Food Menu List Report
 */

class ReportController extends ControllerBase{
  /**
  * Gets all Food Menu for all nodes
  *
  * @return array
   */
  Protected function load(){
    $select = Database::getConnection()->select('tw_food_menu', 't');
    //join the users table, so we can get entry creator's username.
    $select->join('users_field_data','u','t.uid = u.uid');
    //join the node table so that we can get food menu items
    $select->join('node_field_data','n', 't.nid = n.nid');
    //select these specific fields for the output
    $select->addField('u','name','username');
    $entries = $select->execute()->fetchAll(\PDO::FETCH_ASSOC);
    return $entries;
  }

  /**
  * creates the report page
  *
  * @return array
  * Render array for report output.
  */
  public function report(){
    $content = array();
    $content['message'] = array('#mark' => $this->t('List of Menu Items'));
    $headers = array(
      $this->t('Name'),
      $this->t('Description'),
      $this->t('Rate')
    );
    $rows = array();
    foreach($entries = $this->load() as $entry){
      //sanitize each entry
      $rows[] = array_map('\Drupal\Component\Utility\Html::escape', $entry);
    }
    $content['table'] = array(
    '#type'=>'table',
    '#header' => $headers,
    '#rows' => $rows,
    '#empty' => $this->t('No entries available'),
    );

    //do not cache this page
    $content['#catch']['max-age'] = 0;
    return $content;
    
  }
}