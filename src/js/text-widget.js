/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.textWidget", $.vd.baseWidget, {

		options: {
			classes: "vd-text-widget",
			menuBtns: [
				{
					name: "list",
					icon: "glyphicon-th-list",
					//callback: this._trashWidget
				},
				{
					name: "header",
					icon: "glyphicon-header",
					//callback: this._trashWidget
				},
				{
					name: "link",
					icon: "glyphicon-link",
					//callback: this._trashWidget
				},
				{
					name: "font",
					icon: "glyphicon-font",
					//callback: this._trashWidget
				},
				{
					name: "font-size",
					icon: "glyphicon-text-size",
					//callback: this._trashWidget
				},
				{
					name: "text-colour",
					icon: "glyphicon-text-color",
					//callback: this._trashWidget
				},
				{
					name: "text-background-colour",
					icon: "glyphicon-text-background",
					//callback: this._trashWidget
				},
				{
					name: "bold",
					icon: "glyphicon-bold",
					//callback: this._trashWidget
				},
				{
					name: "italic",
					icon: "glyphicon-italic",
					//callback: this._trashWidget
				},
				{
					name: "align",
					icon: "glyphicon-object-align-top",
					//callback: this._trashWidget
				},
				{
					name: "trash",
					icon: "glyphicon-trash",
					//callback: this._trashWidget
				}
			]
		},

		_create: function () {

			this.element.addClass("vd-text-widget");

			this._super( "_create" );

			gMarkupBuilder.trigger('onCreateTextWidget', {widget: this, type: this.prototype});
		}
	});


})(jQuery);