// $ID: main.m.js, Thu Feb 16 2012 20:07:57 GMT+0300 (MSK), Leonid 'n3o' Knyazev $
// check frame
;try { if ((self.parent && !(self.parent === self)) && (self.parent.frames.length != 0)) self.parent.location = document.location; } catch(e) {};


// sharp
;document.documentElement.id = "js";


// quircks
;if (document.compatMode != "CSS1Compat") document.documentElement.className += " quirks";


// user-agent
;(function (d, n) {
	var a = n.userAgent.toLowerCase(),
		v = /(?:(?:Version\/|Chrome\/|Firefox\/|MSIE )([0-9.]+)(?:$|[^0-9.]))/i.exec(a)[1].split('.'),
		c = [(/iphone/i.test(a)  ? ' m-iphone' : '') || (/ipad/i.test(a)  ? ' m-ipad' : '')],
		b = 'm-'+ (((!this.opera && /msie/i.test(a)) ? 'msie' : '') || (/firefox/i.test(a) ? 'firefox' : '') || (/opera/i.test(a) ? 'opera' : '') || (/chrome/i.test(a) ? 'chrome' : '') || (/webkit|safari/i.test(a) ? 'safari' : ''));
	
	c.push(b);
	
	for (var i = 0; i < v.length; i++) {
		b += '-' +v[i];
		c.push(b);
	}
	
	d.documentElement.className += c.join(' ');
})(document, navigator);


// application
$(function () {
	var $context = $('.b-page'),
		$platforms = $('.b-platforms-list', $context),
		$platforms_links = $('.b-platforms-list__item', $platforms),
		$applications = $('.b-application', $context);
		
	$platforms_links.bind('click', function () {
		var $this = $(this);
		
		if ( !$this.hasClass('selected') ) {
			var oSelectedApplication = $applications.filter('.b-application_' + $this.data('target'));
			
			$platforms_links.removeClass('selected');
			$applications.addClass('b-application_hidden');
			
			$this.addClass('selected');
			oSelectedApplication.removeClass('b-application_hidden');
		}
	});
	
	$('a[rel=ilepra_android], a[rel=lepradroid_android], a[rel=ilepra_bpb], a[rel=leprowatch_ios]', $applications).fancybox({
		'transitionIn'		: 'none',
		'transitionOut'		: 'none',
		'titlePosition' 	: 'over',
		'titleFormat'		: function(title, currentArray, currentIndex, currentOpts) {
			return '<span id="fancybox-title-over">Image ' + (currentIndex + 1) + ' / ' + currentArray.length + (title.length ? ' &nbsp; ' + title : '') + '</span>';
		}
	});
	
	$('a.qr-code').fancybox();
	
	var $history_links   = $('.app-history', $applications),
		oAppHistory      = {};
	
	$history_links.bind('click', function () {
		var $this           = $(this),
			$app            = $this.parents('.b-application'),
			sData           = '',
			bInited         = $this.attr('data-inited') || false,
			sPlatform       = $app.attr('data-platform'),
			sName           = $app.attr('data-name');
		
		if ( !bInited ) {
			$this.attr('data-inited', true);
			
			oAppHistory[sPlatform] = oAppHistory[sPlatform] || {};
			oAppHistory[sPlatform][sName] = '';
			
			
			sData += '<div class="b-app-hostory">';
			
			$.getJSON('/assets/history/' + sPlatform + '/' + sName + '.js', function (data) {
				oAppHistory[sPlatform][sName] += '<div class="b-app-hostory">';
				
				if (data && data.history) {
					$.each(data.history, function (i, item) {
						console.log(item.date);
						console.log(item.changes);
						
						oAppHistory[sPlatform][sName] += '<div class="item">';
						
						oAppHistory[sPlatform][sName] += '<p class="date">' + item.date + '</p>';
						oAppHistory[sPlatform][sName] += item.changes;
						
						oAppHistory[sPlatform][sName] += '</div>';
					});
					
					oAppHistory[sPlatform][sName] += '<p>Скоро будет.</p>'
				} else {
					oAppHistory[sPlatform][sName] += '<p>История изменений для этого приложения пока не доступна.</p>';
				}
				
				oAppHistory[sPlatform][sName] += '</div>';
			});
		};
		
		console.log(oAppHistory);

		$.fancybox(oAppHistory[sPlatform][sName], {
			'autoScale' : false,
			'autoDimensions': false,
			'transitionIn' : 'none',
			'transitionOut': 'none',
			'scrolling' : 'no',
			'titleShow' : false,
			'width'     : 350,
			'height'    : 'auto'
		});

		return false;
	});
});