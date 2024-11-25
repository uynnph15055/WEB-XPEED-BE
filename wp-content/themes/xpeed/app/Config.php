<?php
$header_menu = 'header-menu';
$footer_menu = 'footer-menu';
$languages = pll_the_languages(array(
      'raw' => true,
));
$current_lang = pll_current_language();

if ($current_lang === 'es') {
      $header_menu = 'header-menu-es';
      $footer_menu = 'footer-menu-es';
}

$locations = get_nav_menu_locations();
$headers = [];
$footers = [];

function renderMenu($menu_name, $locations = null)
{
      $menu_id = isset($locations[$menu_name]) ? $locations[$menu_name] : null;
      if ($menu_id) {
            $menu_items = wp_get_nav_menu_items($menu_id);

            $parent_menu_items = [];
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

            return $parent_menu_items;
      }
}

$headers = renderMenu($header_menu, $locations);
$footers = renderMenu($footer_menu, $locations);
set_query_var('headers', $headers);
set_query_var('footers', $footers);
set_query_var('current_lang', $current_lang);
set_query_var('languages', $languages);

// --------------------------
function containsAtN($string)
{
      if (strpos($string, '@N') !== false) {
            return '<span class="header_main-submenu__badge"
                                        >N</span
                                      >';
      }
      return '';
}

function render_submenu_by_parent_id($parent_id, $header_menu = 'header-menu', $locations = null)
{
      if (isset($locations[$header_menu])) {
            $menu_id = $locations[$header_menu];

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

                        render_submenu_by_parent_id($submenu_item->ID, $header_menu, $locations);

                        echo '</li>';
                  }
                  echo '</ul>';
            }
      }
}
