/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.baseWidget", {

		options: {
			width: "10%",
			height: "10%",
			classes: "vd-widget",
			menuBtns: [
				{
					name: 'trash',
					icon: "glyphicon-trash",
					callback: function() {
						this.destroy();
					}
				}
			]
		},

		_create: function () {

			this.element.addClass(this.options.classes);

			this.menu = this._setMenu(this.options.menuBtns);

			this._update();

			gMarkupBuilder.trigger('onCreateWidget', {widget: this, type: this.prototype});
		},

		destroy: function () {

			gMarkupBuilder.trigger('onDestroyWidget', {widget: this, type: this.prototype});

			this.element.remove();
		},
		
		_update: function() {
			
		},

		_setOption: function ( key, value ) {
			switch (key) {
			case "someValue":
					//this.options.someValue = doSomethingWith( value );
					break;
			default:
					//this.options[ key ] = value;
					break;
			}

			// For UI 1.8, _setOption must be manually invoked
			// from the base widget
			//$.Widget.prototype._setOption.apply( this, arguments );
			// For UI 1.9 the _super method can be used instead
			this._super( "_setOption", key, value );

			gMarkupBuilder.trigger('onSetWidgetOption', {widget: this, type: this.prototype, key: key, value: value});
		},

		_setMenu: function(menuBtns) {

			var _this = this;
			var widget = this.element;
			var columns = (menuBtns.buttonColumns !== undefined) ? menuBtns.buttonColumns : 1;
			var btnGrp;

			$('.btn-group:first', this.element)
				.remove();
			var menu = $('<div></div>')
				.attr('role', 'group')
				.attr('aria-label', 'abc')
				.addClass('vd-widget-menu btn-group btn-group-lg btn-group-horizontal')
				.appendTo(this.element);

			var populateMenu = function(index, value) {

				// create list item and button group
				if (columns !== 1 && index > 0 && index % columns === 0) {
				
					var li = $('<li></li>')
					 	.appendTo(menu.parent().parent());

					btnGrp = $('<div></div>')
						.attr('role', 'group')
						.attr('aria-label', 'abc')
						.addClass('btn-group btn-group-lg btn-group-horizontal')
						.appendTo(li);

					menu = btnGrp;
				}

				var btn = $('<button></button>')
	  				.attr('type', 'button')
	  				.attr('vd-name', value.name)
	  				.addClass('btn btn-default')
	  				.appendTo(menu);

	  			if (value.callback !== undefined)
	  				btn.click(value.callback.bind(_this));
	  				
	  			var icon = $('<span></span>')
	  				.addClass('glyphicon')
	  				.addClass(value.icon)
	  				.attr('aria-hidden', 'true')
	  				.appendTo(btn);

	  			var isFlyoutMenu = value.buttons !== undefined;
				if (isFlyoutMenu) {

					var mainMenu = menu;
					columns = (value.buttonColumns !== undefined) ? value.buttonColumns : 1;
			
					var container = $('<div></div>')
						.attr('role', 'group')
						.addClass('btn-group btn-group-lg')
						.appendTo(menu);

					btn.dropdown()
						.attr('data-toggle', 'dropdown')
					 	.attr('aria-haspopup', 'true')
					 	.attr('aria-expanded', 'false')
					 	.appendTo(container);

					 var ul = $('<ul><li></li></ul>')
					 	.addClass('dropdown-menu vd-menu-dropdown')
					 	.addClass('vd-menu-col-' + columns)
					 	.appendTo(container);

					 btnGrp = $('<div></div>')
						.attr('role', 'group')
						.attr('aria-label', 'abc')
						.addClass('btn-group btn-group-lg')
						.appendTo( $("li:first", ul) );

					menu = btnGrp;

	  				$.each(value.buttons, populateMenu);

	  				menu = mainMenu;
				}
	  		};
 
			$.each(menuBtns, populateMenu);

			return menu;
		},

		addRow: function(evt) {

			var row = $('<div></div>')
				.appendTo(this.element)
				.rowWidget(gMarkupBuilder.markupBuilderWidget('option', 'rowOptions'));

			gMarkupBuilder.trigger('onAddRow', {widget: this, type: this.prototype,
												rowWIdget: row});

			return row;
		}
	});


})(jQuery);