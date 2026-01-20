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

/*****************************************************************************\
 * Adds a required rule for the given selector, using message as error text
\*****************************************************************************/
function form_add_required_rule(selector, message) {
	$(selector).rules('add', {
		required: true,
		messages: {
			required: message
		}
	});
}

/*****************************************************************************\
 * Adds specific validation rules for custom fields.
 * This function is added as example (although we use it as such) to show that
 * validation is possible on two custom fields, where at least one field must
 * have a value. None of the two fields is marked as required in the field
 * definition in MantisBT
\*****************************************************************************/
function form_custom_fields_add_rules(message) {
	$('[name="custom_field_1"]').rules('add', {
		required: {
			depends: function(element) {
				return ($('#custom_field_3').length && $('#custom_field_3').val().length == 0);
			}
		},
		messages: {
			required: message
		}
	});

	$('[name="custom_field_3"]').rules('add', {
		required: {
			depends: function(element) {
				return ($('#custom_field_1').length && $('#custom_field_1').val().length == 0);
			}
		},
		messages: {
			required: message
		}
	});
}

/*****************************************************************************\
 * Entry point for the javascript of the plugin.
\*****************************************************************************/
$(function () {
	// Use the form ID to allow specific validation for a form
	if ($("#report_bug_form").length) {
		// Form MUST be validated before rules can be added
		$("#report_bug_form").validate();
		
		// Add rules for default fields.
		form_add_required_rule('[name="category_id"]', "Please select a category");
		form_add_required_rule('[name="summary"]',     "Please enter a good summary");
		form_add_required_rule('[name="description"]', "Please explain the issue");
		
		// Add specific rules for custom fields
		// Uncomment when you have custom fields, and adapt the function content to your liking
		//form_custom_fields_add_rules("Please enter a Project Number OR Service Order number or both");
	}
	
	// Use the form ID to allow specific validation for a form
	if ($("#update_bug_form").length) {
		// Form MUST be validated before rules can be added
		$("#update_bug_form").validate();
		
		// Add rules for default fields.
		form_add_required_rule('[name="category_id"]', "Please select a category");
		form_add_required_rule('[name="summary"]',     "Please enter a good summary");
		form_add_required_rule('[name="description"]', "Please explain the issue");
		
		// Add specific rules for custom fields
		// Uncomment when you have custom fields, and adapt the function content to your liking
		//form_custom_fields_add_rules("Please enter a Project Number OR Service Order number or both");
	}
});
