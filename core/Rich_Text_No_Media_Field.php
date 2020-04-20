<?php

namespace Carbon_Field_Rich_Text_No_Media;

use Carbon_Fields\Field\Textarea_Field;

class Rich_Text_No_Media_Field extends Textarea_Field
{

    /**
     * Defines if the rich text field should be loaded only when scrolled into view
     *
     * @var boolean
     */
    protected $lazyload = true;

    /**
     * Prepare the field type for use
     * Called once per field type when activated
     */
    public static function field_type_activated()
    {
        $dir = \Carbon_Field_Rich_Text_No_Media\DIR . '/languages/';
        $locale = get_locale();
        $path = $dir . $locale . '.mo';
        load_textdomain('carbon-field-rich-text-no-media', $path);
        add_action('in_admin_header', array(get_class(), 'editor_init'));
    }

    /**
     * Enqueue scripts and styles in admin
     * Called once per field type
     */
    public static function admin_enqueue_scripts()
    {
        $root_uri = \Carbon_Fields\Carbon_Fields::directory_to_url(\Carbon_Field_Rich_Text_No_Media\DIR);

        // Enqueue field styles.
        wp_enqueue_style(
            'carbon-field-rich-text-no-media',
            $root_uri . '/build/bundle' . ((defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ? '' : '.min') . '.css'
        );
        // Enqueue field scripts.
        wp_enqueue_script(
            'carbon-field-rich-text-no-media',
            $root_uri . '/build/bundle' . ((defined('SCRIPT_DEBUG') && SCRIPT_DEBUG) ? '' : '.min') . '.js',
            array('carbon-fields-core')
        );
    }

    /**
     * Display the editor.
     *
     * Instead of enqueueing all required scripts and stylesheets and setting up TinyMCE,
     * wp_editor() automatically enqueues and sets up everything.
     */
    public static function editor_init()
    {
        ?>
        <div style="display:none;">
            <?php
            $settings = array(
                'tinymce' => array(
                    'resize' => true,
                    'autoresize_min_height' => 100,
                    'wp_autoresize_on' => true,
                    'plugins' => 'wpautoresize'
                )
            );
            wp_editor('', 'carbon_settings', $settings);
            ?>
        </div>
        <?php
    }

    /**
     * Returns an array that holds the field data, suitable for JSON representation.
     *
     * @param bool $load  Should the value be loaded from the database or use the value from the current instance.
     * @return array
     */
    public function to_json($load)
    {
        $field_data = parent::to_json($load);

        ob_start();
        remove_action('media_buttons', 'media_buttons');
        do_action('media_buttons');
        add_action('media_buttons', 'media_buttons');
        $media_buttons = ob_get_clean();

        $field_data = array_merge($field_data, array(
            'rich_editing' => user_can_richedit(),
            'media_buttons' => $media_buttons,
        ));

        return $field_data;
    }
}
