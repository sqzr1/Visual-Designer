/*!
 * Visual Designer JQuery Plugin
 * Author: Sam Zielke-Ryner
 * Licensed under ...
 */
 
 (function ($) {

  $.widget( "vd.videoWidget", $.vd.baseWidget, {

		options: {
			classes: "",
			source: "https://redirector.googlevideo.com/videoplayback?ratebypass=yes&signature=7D1F69A6A7359FBC0331024CE7B5B78A0FB85342.BBA97D0FF58469B2FF904676BC9010C4A1AB509F&dur=480.931&sver=3&initcwndbps=20291250&expire=1472259225&key=yt6&lmt=1446716076045966&id=o-ANMuVBDFqfgkT-BesG_JBzrTd5Q_buzJHepLdNIlo_CJ&mime=video/mp4&pl=28&mm=31&mn=sn-vgqsenlz&ipbits=0&mt=1472237130&upn=zSJOQxZYjCk&itag=18&sparams=dur,id,initcwndbps,ip,ipbits,itag,lmt,mime,mm,mn,ms,mv,pl,ratebypass,source,upn,expire&ip=107.178.194.12&ms=au&source=youtube&mv=m&title=jQuery+Tutorial+%231+-+jQuery+Tutorial+for+Beginners%20-%20Downloaded%20from%20youpak.com&extension=mp4",
			//sourceType: "video/youtube",
			menuBtns: [
				{
					name: "src",
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

			this.element.addClass("vd-video-widget");
			this.element.text('My website has V.D.....and I LOVE it!');

			this._super( "_create" );

			this.element.attr('src', this.options.source);

			$('<source></source>')
				.attr('src', this.options.source)
				//.attr('type', this.options.sourceType)
				.appendTo(this.element);

			gMarkupBuilder.trigger('onCreateVideoWidget', {widget: this, type: this.prototype});
		}
	});


})(jQuery);