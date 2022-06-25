<?php
/*
 * Plugin Name: Slide
 * Plugin URI:  https://wordpress.org/plugins/slide/
 * Description: Creates a custom post type “Presentation”, which will render as a presentation on the front end using Reveal.js.
 * Version:     0.0.40
 * Author:      ellatrix, wordpressdotorg, AbstractWP, isvictorious, danhthong, arlyons
 * Author URI:  https://www.abstractwp.com/
 * Text Domain: slide
 * License:     GPL-2.0-or-later
 * License URI  https://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

define( 'SLIDER_VER', '0.040' );

add_action(
	'admin_enqueue_scripts',
	function() {
		if ( get_post_type() !== 'presentation' ) {
			return;
		}

		wp_enqueue_code_editor( array( 'type' => 'text/css' ) );

		wp_enqueue_script(
			'slide',
			plugins_url( 'build/js/index.js', __FILE__ ),
			array(
				'wp-element',
				'wp-i18n',
				'wp-blocks',
				'wp-rich-text',
				'wp-plugins',
				'wp-edit-post',
				'wp-data',
				'wp-components',
				'wp-block-editor',
				'wp-url',
				'wp-compose',
				'wp-hooks',
			),
			filemtime( dirname( __FILE__ ) . '/build/js/index.js' ),
			true
		);

		wp_enqueue_style(
			'slide',
			plugins_url( 'index.css', __FILE__ ),
			array(),
			filemtime( dirname( __FILE__ ) . '/index.css' )
		);

		wp_deregister_style( 'wp-block-library-theme' );
		wp_register_style(
			'wp-block-library-theme',
			plugins_url( 'common.css', __FILE__ ),
			array(),
			filemtime( dirname( __FILE__ ) . '/common.css' )
		);

		global $wp_styles;

		$template_directory_uri = get_template_directory_uri();

		foreach ( $wp_styles->queue as $handle ) {
			$info = $wp_styles->registered[ $handle ];

			if ( substr( $info->src, 0, strlen( $template_directory_uri ) ) === $template_directory_uri ) {
				wp_dequeue_style( $handle );
			}
		}
	},
	99999
);

add_action(
	'wp_enqueue_scripts',
	function() {
		if ( ! is_singular( 'presentation' ) ) {
			return;
		}

		wp_deregister_style( 'wp-block-library-theme' );
		wp_register_style(
			'wp-block-library-theme',
			plugins_url( 'common.css', __FILE__ ),
			array(),
			filemtime( dirname( __FILE__ ) . '/common.css' )
		);
	},
	99999
);

add_action(
	'init',
	function() {
		require 'register.php';
	}
);

register_activation_hook(
	__FILE__,
	function() {
		require 'register.php';
		flush_rewrite_rules();
	}
);

add_filter(
	'template_include',
	function( $path ) {
		if ( ! is_singular( 'presentation' ) ) {
			return $path;
		}

		if ( isset( $_GET['speaker'] ) ) { // phpcs:ignore.
			return dirname( __FILE__ ) . '/speaker.php';
		}

		the_post();

		return dirname( __FILE__ ) . '/template.php';
	}
);

// Dequeue the theme style. It is not needed for the presentations, as they are
// individually crafted.
add_action(
	'wp_enqueue_scripts',
	function() {
		if ( ! is_singular( 'presentation' ) ) {
			return;
		}

		global $wp_styles;

		$template_directory_uri = get_template_directory_uri();

		foreach ( $wp_styles->queue as $handle ) {
			$info = $wp_styles->registered[ $handle ];

			if ( substr( $info->src, 0, strlen( $template_directory_uri ) ) === $template_directory_uri ) {
				wp_dequeue_style( $handle );
			}
		}

		if ( isset( $_GET['speaker'] ) ) { // phpcs:ignore.
			wp_enqueue_script(
				'slide-speaker',
				plugins_url( 'build/js/speaker.js', __FILE__ ),
				array(),
				filemtime( dirname( __FILE__ ) . '/build/js/speaker.js' ),
				true
			);

			wp_enqueue_style(
				'slide-speaker',
				plugins_url( 'speaker.css', __FILE__ ),
				array(),
				filemtime( dirname( __FILE__ ) . '/speaker.css' )
			);

			return;
		}

		wp_enqueue_script(
			'slide-reveal',
			plugins_url( 'reveal/reveal.min.js', __FILE__ ),
			array(),
			'3.8.0',
			true
		);

		wp_enqueue_script(
			'slide-reveal-notes',
			plugins_url( 'reveal/notes.min.js', __FILE__ ),
			array( 'slide-reveal' ),
			filemtime( dirname( __FILE__ ) . '/reveal/notes.min.js' ),
			true
		);

		wp_enqueue_script(
			'slide-template',
			plugins_url( 'build/js/template.js', __FILE__ ),
			array( 'slide-reveal', 'slide-reveal-notes', 'wp-i18n' ),
			filemtime( dirname( __FILE__ ) . '/build/js/template.js' ),
			true
		);

		$post_id = get_the_ID();
		$contain = (bool) get_post_meta( $post_id, 'presentation-contain', true ) ? get_post_meta( $post_id, 'presentation-contain', true ) : false;

		wp_localize_script(
			'slide-template',
			'slideTemplate',
			array(
				'revealSettings' => array(
					'transition'           => get_post_meta( $post_id, 'presentation-transition', true ) ? get_post_meta( $post_id, 'presentation-transition', true ) : 'none',
					'backgroundTransition' => get_post_meta( $post_id, 'presentation-background-transition', true ) ? get_post_meta( $post_id, 'presentation-background-transition', true ) : 'none',
					'transitionSpeed'      => get_post_meta( $post_id, 'presentation-transition-speed', true ) ? get_post_meta( $post_id, 'presentation-transition-speed', true ) : 'default',
					'controls'             => (bool) get_post_meta( $post_id, 'presentation-controls', true ) ? get_post_meta( $post_id, 'presentation-controls', true ) : false,
					'progress'             => (bool) get_post_meta( $post_id, 'presentation-progress', true ) ? get_post_meta( $post_id, 'presentation-progress', true ) : false,
					'hash'                 => true,
					'history'              => true,
					'preloadIframes'       => true,
					'hideAddressBar'       => true,
					'height'               => 720,
					'width'                => (int) get_post_meta( $post_id, 'presentation-width', true ) ? get_post_meta( $post_id, 'presentation-width', true ) : 960,
					'margin'               => $contain ? 0 : 0.08,
					'keyboard'             => array(
						'38' => 'prev',
						'40' => 'next',
					),
					'overview'             => false,
					// We center in CSS.
					'center'               => false,
					'pdfMaxPagesPerSlide'  => 1,
				),
				'contain'        => $contain,
			)
		);

		wp_enqueue_style(
			'slide-reveal',
			plugins_url( 'reveal/reveal.min.css', __FILE__ ),
			array(),
			'3.8.0'
		);

		if ( isset( $_GET['print-pdf'] ) ) { // phpcs:ignore.
			wp_enqueue_style(
				'slide-reveal-pdf',
				plugins_url( 'reveal/pdf.min.css', __FILE__ ),
				array(),
				'3.8.0'
			);
		}

		$font_url = get_post_meta( get_the_ID(), 'presentation-font-family-url', true );

		if ( $font_url ) {
			wp_enqueue_style(
				'slide-default-font',
				$font_url,
				array(),
				SLIDER_VER
			);
		}

		$heading_font_url = get_post_meta( get_the_ID(), 'presentation-font-family-heading-url', true );

		if ( $heading_font_url ) {
			wp_enqueue_style(
				'slide-heading-font',
				$heading_font_url,
				array(),
				SLIDER_VER
			);
		}

		wp_enqueue_style(
			'slide-common',
			plugins_url( 'common.css', __FILE__ ),
			array(),
			filemtime( dirname( __FILE__ ) . '/common.css' )
		);
	},
	99999
);

foreach ( array(
	'load-post.php',
	'load-post-new.php',
) as $slide_tag ) {
	add_action(
		$slide_tag,
		function() {
			if ( 'presentation' !== get_current_screen()->post_type ) {
				return;
			}

			remove_editor_styles();
			remove_theme_support( 'editor-color-palette' );
			remove_theme_support( 'editor-font-sizes' );
			add_theme_support( 'align-wide' );

			if ( ! isset( $_GET['post'] ) ) {  // phpcs:ignore.
				return;
			}

			$post = get_post( $_GET['post'] ); // phpcs:ignore.

			if ( ! $post ) {
				return;
			}

			$palette = get_post_meta( $post->ID, 'presentation-color-palette', true );

			if ( ! $palette ) {
				return;
			}

			$palette = explode( ',', $palette );
			$palette = array_map( 'trim', $palette );
			$palette = array_map( 'sanitize_hex_color', $palette );
			$palette = array_map(
				function( $hex ) {
					return array( 'color' => $hex );
				},
				$palette
			);

			if ( count( $palette ) ) {
				add_theme_support( 'editor-color-palette', $palette );
			}
		},
		99999
	);
}

add_filter(
	'block_editor_settings',
	function( $settings ) {
		if ( 'presentation' !== get_current_screen()->post_type ) {
			return $settings;
		}

		$settings['styles'] = array();
		return $settings;
	},
	99999
);

add_filter(
	'default_content',
	function( $post_content, $post ) {
		if ( 'presentation' !== $post->post_type ) {
			return $post_content;
		}

		return file_get_contents( __DIR__ . '/default-content.html' ); // phpcs:ignore.
	},
	10,
	2
);

add_filter(
	'render_block',
	function( $block_content, $block ) {
		if ( ! current_user_can( 'edit_posts' ) ) {
			return $block_content;
		}

		if ( 'slide/slide' !== $block['blockName'] ) {
			return $block_content;
		}

		if ( empty( $block['attrs']['notes'] ) ) {
			return $block_content;
		}

		$pos   = strrpos( $block_content, '</section>', -1 );
		$notes = '<aside class="notes">' . $block['attrs']['notes'] . '</aside>';

		return substr_replace( $block_content, $notes, $pos, 0 );
	},
	10,
	2
);
