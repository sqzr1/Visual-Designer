/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.columnWidget", $.vd.baseWidget, {

		options: {
			colNum: 1,
			maxcolNum: 12,	// BS dependency
			colWidth: 12,	// BS dependency
			classes: "",  	// BS dependency
			menuBtns: [
				{
					name: "add-text-widget",
					icon: "glyphicon-font",
					callback: function() {

						var textWidget = $('<p></p>')
							.text('abc')
							.appendTo(this.element)
							.textWidget();

						gMarkupBuilder.trigger('onColumnAddTextWidget', {column: this, type: this.prototype,
																		widget: textWidget});
					}
				},
				{
					name: "add-image-widget",
					icon: "glyphicon-picture",
					callback: function() {

						var imgWidget = $('<img></img>')
							.appendTo(this.element)
							.imgWidget();

						gMarkupBuilder.trigger('onColumnAddImgWidget', {column: this, type: this.prototype,
																		widget: imgWidget});
					}
				},
				{
					name: "add-button-widget",
					icon: "glyphicon-collapse-down",
					callback: function() {

						var btnWidget = $('<button></button>')
							.text("Press Me")
							.appendTo(this.element)
							.btnWidget();

						gMarkupBuilder.trigger('onColumnAddBtnWidget', {column: this, type: this.prototype,
																		widget: btnWidget});
					}
				},
				{
					name: "add-video-widget",
					icon: "glyphicon-film",
					callback: function() {

						var videoWidget = $('<video></video>')
							.appendTo(this.element)
							.videoWidget();

						gMarkupBuilder.trigger('onColumnAddVideoWidget', {column: this, type: this.prototype,
																		widget: videoWidget});
					}
				},
				{
					name: "resize-column",
					icon: "glyphicon-resize-horizontal",
					buttonColumns: 3, 
					buttons: [
						{
							name: "resize-1-column",
							icon: "glyphicon-minus",	
							callback: function() {
								this._setWidth(1);
							}
						},
						{
							name: "resize-2-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(2);
							}
						},
						{
							name: "resize-3-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(3);
							}
						},
						{
							name: "resize-4-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(4);
							}
						},
						{
							name: "resize-5-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(5);
							}
						},
						{
							name: "resize-6-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(6);
							}
						},
						{
							name: "resize-7-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(7);
							}
						},
						{
							name: "resize-8-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(8);
							}
						},
						{
							name: "resize-9-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(9);
							}
						},
						{
							name: "resize-10-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(10);
							}
						},
						{
							name: "resize-11-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(11);
							}
						},
						{
							name: "resize-12-column",
							icon: "glyphicon-minus",
							callback: function() {
								this._setWidth(12);
							}
						}
					]
				},
				{
					name: "trash",
					icon: "glyphicon-trash",
					callback: function() {
						
						console.log("TODO: use columnWidget::width property and handle changes there");

						var column = this.element;
						this.element.parent().trigger( "removeColumn", { column:  column } );

						//JUST DO
						//this.element.parent().rowWidget('removeColumn', { column:  column } );

						// if ($(this.element).siblings('.vd-column-widget').length <= 0) {
						// 	$('[vd-name="add-column"]', $(this.element).parent())
						// 		.removeClass('disabled');
							
						// 	this.destroy();

						// 	return;
						// }
						
						var prevSibling = $(this.element).prev('.vd-column-widget');
						var nextSibling = $(this.element).next('.vd-column-widget');
						var sibling = (prevSibling.length === 0) ? nextSibling : prevSibling;

						var siblingWidth = sibling.columnWidget('option', 'colWidth') + this.options.colWidth;
						var colClass = 'col-lg-' + siblingWidth + ' col-xs-' + siblingWidth;

						sibling.removeClass(function (index, css) {
						    return (css.match (/(col-.*?(1|2|3|4|5|6|7|8|9)+)/gi) || []).join(' ');
						});

						sibling.addClass(colClass);

						this.destroy();
					}

				}
			]
		},

		_create: function () {

			this._super( "_create" );

			this.element.addClass("vd-column-widget");
			this.element.addClass(this.options.classes);

			this._setWidth(this.options.colWidth);

			gMarkupBuilder.trigger('onCreateColumnWidget', {widget: this, type: this.prototype});
		},

		_setOption: function ( key, value ) {
			
			switch (key) {
			case "width":
				this.options.width = this._setWidth( value );
				break;
			default:
				//this.options[ key ] = value;
				break;
			}

			this._super( "_setOption", key, value );
		},

		_setWidth: function(newColWidth) {

			this.element.removeClass(function (index, css) {
				return (css.match (/(col-.*?(1|2|3|4|5|6|7|8|9)+)/gi) || []).join(' ');
			});

			// TODO: remove existing classes
			this.options.colWidth = newColWidth;
			this.element.addClass(gMarkupBuilder
					.markupBuilderWidget('option', 'columnClassMap')[newColWidth]);

			var maxColumns = gMarkupBuilder
				.markupBuilderWidget('option', 'columnOptions')
				.maxColumns;

			$('[vd-name="resize-*-column"]', this.menu)
				.removeClass('disabled');

			for (var i=maxColumns - this.options.colNum + 2; i<=maxColumns; i++)
			 	$('[vd-name="resize-'+i+'-column"]', this.menu).addClass('disabled');
		
			gMarkupBuilder.trigger('onResizeColumnWidget', {widget: this, type: this.prototype,
															newSize: newColWidth});

			return this.options.colWidth;
		}
	});

})(jQuery);