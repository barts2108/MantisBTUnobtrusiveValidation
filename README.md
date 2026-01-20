# MantisBT Unobtrusive Validation
Plugin for Mantis Bugtracker that allows adding jquery unobtrusive validation to Mantis bugtracker forms. 

Tested with MantisBT 2.25.7

The plugin adds a css file and javascript files to the MantisBT pages. 

# Installation
Copy MantisBTUnobtrusiveValidation catalogue to mantisbt plugin directory.

# Features
Allows to add rules and styling for validation. Validation takes place before the data is submitted. In some cases when submitting the report issue form, an error page was shown (e.g. when the category was forgotten). Then after using the back button on the error page, finding out that all fields are empty again. 

This plugin adds jquery unobtrusive validation, and has default examples how validation rules can be added to the forms. The validation takes place before the data is submitted, with clearer colors, and custom messages.


# References
Reference | Link
:---:|---
jquery.validate   | [jquery.validate](https://jqueryvalidation.org/)
jquery.validate.unobtrusive   | [jquery.validate](https://github.com/aspnet/jquery-validation-unobtrusive)

## Note on references
The files jquery files that are included may not be the latest version.
Their licenses are present in the same folder as the files.

# Coffee
If you like the plugin you could [donate](https://paypal.me/barts2108) something for the effort

