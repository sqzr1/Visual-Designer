/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.btnWidget", $.vd.baseWidget, {

		options: {
			classes: "",
			menuBtns: [
				{
					name: "text-colour",
					icon: "glyphicon-text-color"
				},
				{
					name: "text-background-colour",
					icon: "glyphicon-text-background"
				},
				{
					name: "link",
					icon: "glyphicon-link"
				},
				{
					name: "align",
					icon: "glyphicon-object-align-top"
				},
				{
					name: "trash",
					icon: "glyphicon-trash"
				}
			]
		},

		_create: function () {

			this.element.addClass("vd-btn-widget");

			this._super( "_create" );

			gMarkupBuilder.trigger('onCreateBtnWidget', {widget: this, type: this.prototype});
		}
	});


})(jQuery);