<?php
$current_language = pll_current_language();
$menu_name =  'header-menu';
$locations = get_nav_menu_locations();
$menu_id = $locations[$menu_name];
$menu_items = wp_get_nav_menu_items($menu_id);

$parent_menu_items = array();
foreach ($menu_items as $menu_item) {
      if ($menu_item->menu_item_parent == 0) {
            $submenu_count = 0;

            foreach ($menu_items as $sub_item) {
                  if ($sub_item->menu_item_parent == $menu_item->ID) {
                        $submenu_count++;
                  }
            }

            $menu_item->submenu_count = $submenu_count;
            $parent_menu_items[] = $menu_item;
      }
}

function containsAtN($string)
{
      if (strpos($string, '@N') !== false) {
            return '<span class="header_main-submenu__badge"
                                        >N</span
                                      >';
      }
      return '';
}

function render_submenu_by_parent_id($parent_id, $menu_name = 'header-menu', $locations = null)
{
      if (isset($locations[$menu_name])) {
            $menu_id = $locations[$menu_name];

            $menu_items = wp_get_nav_menu_items($menu_id);

            $submenu_items = array();
            foreach ($menu_items as $menu_item) {
                  if ($menu_item->menu_item_parent == $parent_id) {
                        $submenu_count = 0;

                        foreach ($menu_items as $sub_item) {
                              if ($sub_item->menu_item_parent == $menu_item->ID) {
                                    $submenu_count++;
                              }
                        }

                        $menu_item->submenu_count = $submenu_count;
                        $submenu_items[] = $menu_item;
                  }
            }

            if (count($submenu_items) > 0) {
                  echo '<div class="header_main-submenu">
                                <ul class="header_main-submenu-list">';
                  foreach ($submenu_items as $submenu_item) {
                        echo ' <li class="header_main-submenu--item">';
                        echo '<a class="header_main-submenu--item-link" href="' . esc_url($submenu_item->url) . '">' . esc_html(str_replace('@N', '', $submenu_item->title)) .
                              containsAtN($submenu_item->title);
                        echo $submenu_item->submenu_count > 0 ? ' <ion-icon
                                  class="icon-down"
                                  name="caret-forward-outline"
                                ></ion-icon>' : '';
                        echo  '</a>';

                        render_submenu_by_parent_id($submenu_item->ID, $menu_name, $locations);

                        echo '</li>';
                  }
                  echo '</ul>';
            }
      }
}
