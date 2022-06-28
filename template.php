<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<script>
		if ( /[?&]receiver/i.test( window.location.search ) ) {
			document.documentElement.classList.add( 'receiver' );
		}
	</script>
	<?php wp_head(); ?>
	<style>
		ul#wp-admin-bar-root-default li.slide-button {
			margin: 0 5px;
			cursor: pointer;
			display: block;
		}

		ul#wp-admin-bar-root-default li.slide-button .dashicons::before {
			top: 2px;
		}

		@media screen and (max-width: 782px) {
			ul#wp-admin-bar-root-default li.slide-button .dashicons {
				text-indent: 100%;
				font-size: 0;
				white-space: nowrap;
				width: 52px;
				padding: 0;
				color: #a7aaad;
				position: relative;
			}
			ul#wp-admin-bar-root-default li.slide-button .dashicons::before {
				font: normal 32px/1 dashicons;
				left: -52px;
				top: 0;
				width: 52px;
				line-height: 1.33333333;
				height: 46px!important;
				text-align: center;
				display: block;
			}
		}

		#wpadminbar {
			opacity: 0.5;
			transition: opacity 0.5s ease;
		}

		#wpadminbar:hover {
			opacity: 1;
		}

		.print-pdf #wpadminbar,
		.receiver #wpadminbar {
			display: none;
		}

		figure.alignleft {
			float: left;
			margin-right: 1em;
		}

		figure.alignright {
			float: right;
			margin-left: 1em;
		}

		.wp-block-embed.alignleft {
			width: auto;
			max-width: none;
		}

		/* Remove margin for admin bar. */
		html {
			margin-top: 0 !important;
		}

		.presentation-contain html,
		.presentation-contain body {
			background: #000;
		}

		.reveal .slides {
			text-align: inherit;
			justify-content: center;
			display: flex;
			flex-direction: column;
		}

		.print-pdf .slides {
			display: block;
		}

		.print-pdf .pdf-page {
			justify-content: center;
			display: flex;
			flex-direction: column;
		}

		.pdf-page,
		.presentation-contain .slides {
			overflow: hidden;
			padding: 28.125px 50px;
			box-sizing: border-box;
		}

		.reveal .slides .pdf-page > section {
			position: static !important;
			z-index: 1;
			width: 100% !important;
		}

		.presentation-contain .slides > section {
			left: 50px;
			right: 50px;
			width: auto;
		}

		.receiver .reveal .slides *,
		.receiver .reveal .backgrounds * {
			pointer-events: none;
		}

		.reveal .controls,
		.reveal .progress {
			color: currentColor;
		}

		.wp-block-slide-slide img,
		.wp-block-slide-slide video,
		.wp-block-slide-slide iframe {
			max-width: 100%;
			max-height: 100%;
		}

		.wp-block-media-text {
			/* Maybe table? */
			display: flex;
		}

		.wp-block-media-text.has-media-on-the-right {
			flex-direction: row-reverse;
		}

		.wp-block-media-text__media,
		.wp-block-media-text__content {
			flex-basis: 50%;
		}

		html:not( .presentation-contain ) .alignfull {
			width: 100vw;
			left: 50%;
			position: relative;
			transform: translate(-50%, 0);
			max-width: none;
			max-height: 100vh;
		}

		.reveal[data-background-transition="none"] .slide-background {
			transition: none;
		}

		/* Dynamic */
		<?php
		$slide_p_color       = sanitize_hex_color( get_post_meta( get_the_ID(), 'presentation-color', true ) );
		$slide_p_font_size   = (int) get_post_meta( get_the_ID(), 'presentation-font-size', true );
		$slide_p_font_family = get_post_meta( get_the_ID(), 'presentation-font-family', true );

		$slide_p_font_family_heading = get_post_meta( get_the_ID(), 'presentation-font-family-heading', true );
		$slide_p_font_weight_heading = get_post_meta( get_the_ID(), 'presentation-font-weight-heading', true );

		$slide_p_background_color    = sanitize_hex_color( get_post_meta( get_the_ID(), 'presentation-background-color', true ) );
		$slide_p_background_gradient = sanitize_hex_color( get_post_meta( get_the_ID(), 'presentation-background-gradient', true ) );

		$slide_p_background_url      = get_post_meta( get_the_ID(), 'presentation-background-url', true );
		$slide_p_background_position = get_post_meta( get_the_ID(), 'presentation-background-position', true );
		$slide_p_background_opacity  = (int) get_post_meta( get_the_ID(), 'presentation-background-opacity', true );

		$slide_p_vertical_padding   = get_post_meta( get_the_ID(), 'presentation-vertical-padding', true );
		$slide_p_horizontal_padding = get_post_meta( get_the_ID(), 'presentation-horizontal-padding', true );
		?>
		.reveal {
			color: <?php echo esc_html( $slide_p_color ? $slide_p_color : '#000' ); ?>;
			font-size: <?php echo esc_html( $slide_p_font_size ? $slide_p_font_size : 42 ); ?>px;
			font-family: <?php echo esc_html( $slide_p_font_family ? $slide_p_font_family : 'Helvetica, sans-serif' ); ?>;
		}

		.reveal h1,
		.reveal h2,
		.reveal h3,
		.reveal h4,
		.reveal h5,
		.reveal h6 {
			font-family: <?php echo esc_html( $slide_p_font_family_heading ? $slide_p_font_family_heading : 'inherit' ); ?>;
			font-weight: <?php echo esc_html( $slide_p_font_weight_heading ? $slide_p_font_weight_heading : 'inherit' ); ?>;
		}

		/* Extra specificity to override reveal background. */
		.reveal .slide-background {
			background-color: <?php echo esc_html( $slide_p_background_color ? $slide_p_background_color : '#fff' ); ?>;
			background-image: <?php echo esc_html( $slide_p_background_gradient ? $slide_p_background_gradient : 'none' ); ?>;
		}

		/* If a background color is set, disable the global gradient. */
		.reveal .slide-background[style*="background-color"] {
			background-image: none;
		}

		.reveal .slide-background .slide-background-content {
			background-image: url("<?php echo esc_html( $slide_p_background_url ? $slide_p_background_url : 'none' ); ?>");
			background-position: <?php echo esc_html( $slide_p_background_position ? $slide_p_background_position : '50% 50%' ); ?>;
			opacity: <?php echo esc_html( ( $slide_p_background_opacity / 100 ) ? ( $slide_p_background_opacity / 100 ) : 1 ); ?>;
		}

		.reveal .slides section.wp-block-slide-slide {
			top: auto !important;
			padding-top: <?php echo esc_html( $slide_p_vertical_padding ? $slide_p_vertical_padding : '0.2em' ); ?> !important;
			padding-bottom: <?php echo esc_html( $slide_p_vertical_padding ? $slide_p_vertical_padding : '0.2em' ); ?> !important;
			padding-left: <?php echo esc_html( $slide_p_horizontal_padding ? $slide_p_horizontal_padding : '0.2em' ); ?> !important;
			padding-right: <?php echo esc_html( $slide_p_horizontal_padding ? $slide_p_horizontal_padding : '0.2em' ); ?> !important;
		}

		.presentation-contain .alignfull {
			margin: 0 calc( -50px - <?php echo esc_html( $slide_p_horizontal_padding ? $slide_p_horizontal_padding : '0.2em' ); ?> );
			max-width: none;
		}

		.reveal .slides > section,
		.reveal .slides > section > section {
			padding:  <?php echo esc_html( $slide_p_vertical_padding ? $slide_p_vertical_padding : '0.2em' ); ?> 0;
		}
		.admin-bar .reveal {
			margin-top: 32px;
			height: calc(100% - 32px);
		}

		.admin-bar .reveal .slides {
			margin-top: 32px;
		}
		.receiver .admin-bar .reveal {
			margin-top: 0;
			height: 100%;
		}
		.receiver .admin-bar .reveal .slides {
			margin-top: 0;
		}
		.receiver .reveal .controls, .reveal .progress {
			display: none !important;
		}
	</style>
	<style>
		<?php
			// Allow quotes.
			echo str_replace( '<', '', get_post_meta( get_the_ID(), 'presentation-css', true ) ); //phpcs:ignore.
		?>
	</style>
</head>
<body <?php echo body_class(); ?>>
	<div class="reveal">
		<div class="slides">
			<?php the_content(); ?>
		</div>
	</div>
	<?php wp_footer(); ?>
</body>
</html>
