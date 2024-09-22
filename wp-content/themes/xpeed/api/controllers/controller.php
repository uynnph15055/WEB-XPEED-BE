<?php

$header_menu_name = 'header-menu';
$locations = get_nav_menu_locations();
$menu_id = $locations[$header_menu_name];
$menu = wp_get_nav_menu_object($locations[$header_menu_name]);

$header_menu_items = wp_get_nav_menu_items($menu->term_id, array('order' => 'DESC'));

// $menu_items_by_parent = array();
// $menu_parents = array();

// Phân loại các mục menu theo ID cha
// foreach ($header_menu_items as $item) {
//       $parent_id = $item->menu_item_parent;
//       if (!isset($menu_items_by_parent[$parent_id])) {
//             $menu_items_by_parent[$parent_id] = array();
//       }
//       $menu_items_by_parent[$parent_id][] = $item;
//       if ($parent_id == 0) {
//             $menu_parents[] = $item;
//       }
// }

// dd($menu_parents);