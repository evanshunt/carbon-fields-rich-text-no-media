/**
 * External dependencies.
 */
import { registerFieldType } from '@carbon-fields/core';

/**
 * Internal dependencies.
 */
import './style.scss';
import RichTextNoMediaField from './main';

registerFieldType('rich_text_no_media', RichTextNoMediaField);