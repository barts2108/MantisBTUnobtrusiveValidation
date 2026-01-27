 <?php

/*****************************************************************************\
 *  Copyright (c) 2026 Bart Schonewille
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *           http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
\*****************************************************************************/

class MantisBTUnobtrusiveValidationPlugin
extends MantisPlugin
{

	//-------------------------------------------------------
	// plugin registration
	//-------------------------------------------------------
	function register()
	{
		$this->name =  plugin_lang_get("title");
		$this->description = plugin_lang_get("description");

		$this->version = '1.0.1';
		$this->requires = array(
			'MantisCore' => '2.0.0',
		);

		$this->author = 'Bart Schonewille';
		$this->url = 'https://github.com/barts2108/MantisBTUnobtrusiveValidation';
	}

	//-------------------------------------------------------
	// hook layout resources to add css file(s) to the header
	// hook body end to load the scripts before the /body tag
	//-------------------------------------------------------
	function hooks()
	{
		return array(
			'EVENT_LAYOUT_RESOURCES' => 'add_css',
			'EVENT_LAYOUT_BODY_END'  => 'add_js'
		);
	}

	//-------------------------------------------------------
	// adds css file(s)
	//-------------------------------------------------------
	function add_css( $p_event )
	{
			echo '<link rel="stylesheet" type="text/css" href="' . plugin_file( 'validate.rules.css' ) . '" />' . "\n";
	}

	//-------------------------------------------------------
	// adds javascript file(s)
	//-------------------------------------------------------
	function add_js( $p_event )
	{
		echo  '<script type="text/javascript" src="' .  plugin_file( 'jquery.validate.min.js' ) . '"></script>' . "\n";
		echo  '<script type="text/javascript" src="' .  plugin_file( 'jquery.validate.unobtrusive.min.js' ) . '"></script>' . "\n";
		echo  '<script type="text/javascript" src="' .  plugin_file( 'additional-methods.min.js' ) . '"></script>' . "\n";
		echo  '<script type="text/javascript" src="' .  plugin_file( 'validate.rules.js' ) . '"></script>' . "\n";
	}
}