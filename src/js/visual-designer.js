/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */

;(function ( $, window, document, undefined ) {

	$.widget( "vd.visualDesigner", $.vd.baseWidget, {

		options: {
			height: "test",  
			classes: "",
			menuBtns: [
				{
					name: "add-row", 
					icon: "glyphicon-minus",
					callback: function() {
						this.addRow();
					}
				}
			],
			markupBuilderOptions: {}, // todo: implement Bootstrap Builder, Wordpress Builder, Joomla Builder, etc.
			markupBuilder: $()
		},

		_create: function () {

			this.element.addClass("vd-main row"); 
			this.element.addClass(this.options.classes);
			this.element.height(this.options.height);

			this.options.markupBuilder = $('<div></div>')
				.appendTo($('body'))
				.markupBuilderWidget(this.options.markupBuilderOptions);

			gMarkupBuilder = this.options.markupBuilder;

			this._super( "_create" );

			gMarkupBuilder.trigger('onCreateVD', {widget: this, type: this.prototype});
		},

		addRow: function(evt) {

			var row = this._super('addRow');

			this.menu.css('top', '100%');
			this.menu.css('transform', 'translate(-50%, -100%)');
		}
	});

	$(document).ready(function() {

		var gMarkupBuilder;
	});

})( jQuery, window, document );