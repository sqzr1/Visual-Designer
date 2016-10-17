/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */

;(function ( $, window, document, undefined ) {

	$.widget( "vd.markupBuilderWidget", {

		options: {
			maxColumns: 12,
			columnClassMap: {
				1: 'col-lg-1 col-xs-1',
				2: 'col-lg-2 col-xs-2',
				3: 'col-lg-3 col-xs-3',
				4: 'col-lg-4 col-xs-4',
				5: 'col-lg-5 col-xs-5',
				6: 'col-lg-6 col-xs-6',
				7: 'col-lg-7 col-xs-7',
				8: 'col-lg-8 col-xs-8',
				9: 'col-lg-9 col-xs-9',
				10: 'col-lg-10 col-xs-10',
				11: 'col-lg-11 col-xs-11',
				12: 'col-lg-12 col-xs-12',
			},

			rowColumnMap: {
				1: [{classes: 'col-lg-12 col-xs-12', colWidth: 12, colNum: 1}],
				2: [{classes: 'col-lg-6 col-xs-6', colWidth: 6, colNum: 2}, 
					{classes: 'col-lg-6 col-xs-6', colWidth: 6, colNum: 2}],
				3: [{classes: 'col-lg-4 col-xs-4', colWidth: 4, colNum: 3},
					{classes: 'col-lg-4 col-xs-4', colWidth: 4, colNum: 3}, 
					{classes: 'col-lg-4 col-xs-4', colWidth: 4, colNum: 3}],
				4: [{classes: 'col-lg-3 col-xs-3', colWidth: 3, colNum: 4},
					{classes: 'col-lg-3 col-xs-3', colWidth: 3, colNum: 4}, 
					{classes: 'col-lg-3 col-xs-3', colWidth: 3, colNum: 4},
					{classes: 'col-lg-3 col-xs-3', colWidth: 3, colNum: 4}],
				5: [{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 5},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 5}, 
					{classes: 'col-lg-4 col-xs-4', colWidth: 4, colNum: 5},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 5}, 
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 5}],
				6: [{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 6},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 6}, 
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 6},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 6}, 
					{classes: 'col-lg-2 col-xs-2', colWidth:2 , colNum: 6},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 6}],
				7: [{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 7},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 7}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 7},
					{classes: 'col-lg-6 col-xs-6', colWidth: 6, colNum: 7}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 7},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 7},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 7}],
				8: [{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 8},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 8}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 8},
					{classes: 'col-lg-3 col-xs-3', colWidth: 3, colNum: 8}, 
					{classes: 'col-lg-3 col-xs-3', colWidth: 3, colNum: 8},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 8},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 8},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 8}],
				9: [{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9}, 
					{classes: 'col-lg-4 col-xs-4', colWidth: 4, colNum: 9},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 9}],
				10: [{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10}, 
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 10},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 10},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 10}],
				11: [{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11},
					{classes: 'col-lg-2 col-xs-2', colWidth: 2, colNum: 11},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 11}],
				12: [{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12}, 
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12},
					{classes: 'col-lg-1 col-xs-1', colWidth: 1, colNum: 12}]
			},
			rowOptions: {
				classes: 'row'
			}, 
			columnOptions: {
				classes: 'col-lg-12 col-xs-12',

				
			},
			textOptions: {

			},
			imgOptions: {

			},
			btnOptions: {

			},
			videoOptions: {

			},

			customVDCreate: function() {
				
			},

			addTriggers: function() {
				this.element.on('onCreateVD', this.options.customVDCreate.bind(this)); 

			}
		},

		_create: function () {

			this._super( "_create" );

			this.options.addTriggers.call(this);
		},

		generateMarkup: function() {
			return 'Derived to implement.';
		},

		getColumnOptions: function(colNum) {

			var _this = this;
			var rowColumnOptions = this.options.rowColumnMap[colNum];

			$.each(rowColumnOptions, function(index, value) {
				rowColumnOptions[index] = $.extend(_this.options.columnOptions, value);
			});

			return rowColumnOptions;
		}
	});

})( jQuery, window, document );