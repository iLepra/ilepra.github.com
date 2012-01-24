/*
 * Usage:
 * - $(selector).ifxslt(xml, selector, callback);
 * - $.ifxslt(xml, callback);
 */
(function($) {
    /*
     * function for creating dynamic iframes
     * -- dwr
     */
    function callIframe(el, url, callback) {    	
		$(document.body).append(el);
		
		el.attr('src', url);

		el.load(function() {
    		callback(el);
		});
	};
	
	/*
	 * iframe xslt transformation
	 * -- dwr
	 */
	$.ifxslt = function(xml, callback) {
    	var el = $('<iframe style="display:none" />');
		
		callIframe(el, xml, function(data) {
			callback(data);
		});
	};
	
	$.fn.ifxslt = function(xml, selector, callback) {
		var target = $(this);
		
    	var el = $('<iframe style="display:none" />');
		
		callIframe(el, xml, function(data) {
			target.html($(selector, data.contents()).html());
			
			if(typeof(callback) !== 'undefined') {
				callback(data);
			}
		});
		
		return this;
	}
})(jQuery);
