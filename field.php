<?php
use Carbon_Fields\Carbon_Fields;
use Carbon_Field_Rich_Text_No_Media\Rich_Text_No_Media_Field;

define( 'Carbon_Field_Rich_Text_No_Media\\DIR', __DIR__ );

Carbon_Fields::extend( Rich_Text_No_Media_Field::class, function( $container ) {
	return new Rich_Text_No_Media_Field( $container['arguments']['type'], $container['arguments']['name'], $container['arguments']['label'] );
} );