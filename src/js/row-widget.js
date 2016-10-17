/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.rowWidget", $.vd.baseWidget, {

		options: {
			classes: "",
			menuBtns: [
				{
					name: "add-column",
					icon: "glyphicon-th",
					buttonColumns: 3, 
					buttons: [
						{
							name: "add-1-column",
							icon: "glyphicon-minus",	
							callback: function() {
								this.addColumn(1);
							}
						},
						{
							name: "add-2-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(2);
							}
						},
						{
							name: "add-3-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(3);
							}
						},
						{
							name: "add-4-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(4);
							}
						},
						{
							name: "add-5-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(5);
							}
						},
						{
							name: "add-6-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(6);
							}
						},
						{
							name: "add-7-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(7);
							}
						},
						{
							name: "add-8-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(8);
							}
						},
						{
							name: "add-9-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(9);
							}
						},
						{
							name: "add-10-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(10);
							}
						},
						{
							name: "add-11-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(11);
							}
						},
						{
							name: "add-12-column",
							icon: "glyphicon-minus",
							callback: function() {
								this.addColumn(12);
							}
						}
					]
				},
				{
					name: "trash",
					icon: "glyphicon-trash",
					callback: function() {
						this.destroy();
					}
				}
			]
		},

		_create: function () {

			this._super( "_create" ); 

			this.element.addClass('vd-row-widget');

			this.element.on('removeColumn', this.onRemoveColumn);

			gMarkupBuilder.trigger('onCreateRowWidget', {widget: this, type: this.prototype});
		},

		addColumn: function (colNum) {
			 
			// TODO: remove existing columns and merge existing column content into new columns
			var _this = this.element;
			var columnOptions = gMarkupBuilder.markupBuilderWidget('getColumnOptions', colNum);
			
			$.each(columnOptions, function(index, value) {

				var btn = $('<div></div>')
	  				.appendTo(_this)
	  				.columnWidget(value);
			});

			this.menu.css('top', '100%');
			this.menu.css('transform', 'translate(-50%, -100%)');
			$('[vd-name="add-column"]', this.menu).addClass('disabled');

			gMarkupBuilder.trigger('onRowAddColumns', {widget: this, type: this.prototype,
													   colNum: colNum});
		},

		onRemoveColumn: function(data) {

			if ($(data.column).siblings('.vd-column-widget').length <= 0)
				$('[vd-name="add-column"]', this.element)
					.removeClass('disabled');

			gMarkupBuilder.trigger('onRowRemoveColumns', {widget: this, type: this.prototype,
													   data: data});
		}
	});


})(jQuery);