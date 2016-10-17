/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.imgWidget", $.vd.baseWidget, {

		options: {
			classes: "",
			source: 'http://placehold.it/150',
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

			this.element.addClass("vd-img-widget");

			this._super( "_create" );

			this.element.attr('src', this.options.source);
			this.element.attr('alt', 'My website has V.D...it\'s actually pretty good :D');

			gMarkupBuilder.trigger('onCreateImgWidget', {widget: this, type: this.prototype});
		}
	});


})(jQuery);