/*
 * Usage:
 * - $(selector).xslt(xml, xsl);
 * - $.xslt(xml, xsl, callback);
 */
(function($) {
    $.fn.xslt = function() {
        return this;
    };
    
    $.xslt = function() {
    	
    };

    var str = /^\s*</;
    if (document.recalc) { // IE 5+
    	/*
    	 * jquery global function version
    	 * -- dwr
    	 */
    	$.xslt = function(xml, xslt, callback) {
    		var xm;
    		var xs;
    	
    		var change = function() {
                var c = 'complete';
                if (xm.readyState == c && xs.readyState == c) {
                        window.setTimeout(function() {
                            callback(xm.transformNode(xs.XMLDocument));
                        }, 50);
                }
            };

            xm = document.createElement('xml');
            xm.onreadystatechange = change;
            xm[str.test(xml) ? "innerHTML" : "src"] = xml;

            xs = document.createElement('xml');
            xs.onreadystatechange = change;
            xs[str.test(xslt) ? "innerHTML" : "src"] = xslt;

            $('body').append(xm).append(xs);
    	};
    
        $.fn.xslt = function(xml, xslt) {
            var target = $(this);
            
            $.xslt(xml, xslt, function(data){
            	target.html(data);
            });
            
            return this;
       };
    }
    else if (window.DOMParser != undefined && window.XMLHttpRequest != undefined && window.XSLTProcessor != undefined) { // Mozilla 0.9.4+, Opera 9+
       var processor = new XSLTProcessor();
       var support = false;
       if ($.isFunction(processor.transformDocument)) {
           support = window.XMLSerializer != undefined;
       }
       else {
           support = true;
       }
       if (support) {
	    	/*
	    	 * jquery global function version
	    	 * -- dwr
	    	 */
            $.xslt = function(xml, xslt, callback) {
            	var transformed = false;

                var xm = {
                    readyState: 4
                };
                var xs = {
                    readyState: 4
                };

                var change = function() {
                    if (xm.readyState == 4 && xs.readyState == 4  && !transformed) {
                        var processor = new XSLTProcessor();
                        if ($.isFunction(processor.transformDocument)) {
                            // obsolete Mozilla interface
                            resultDoc = document.implementation.createDocument("", "", null);
                            processor.transformDocument(xm.responseXML, xs.responseXML, resultDoc, null);
                            callback(new XMLSerializer().serializeToString(resultDoc));
                        }
                        else {
                            processor.importStylesheet(xs.responseXML);
                            resultDoc = processor.transformToFragment(xm.responseXML, document);
                            
	                        callback(resultDoc);
                        }
                        transformed = true;
                    }
                };

                if (str.test(xml)) {
                    xm.responseXML = new DOMParser().parseFromString(xml, "text/xml");
                }
                else {
                    xm = $.ajax({ dataType: "xml", url: xml});
                    xm.onreadystatechange = change;
                }

                if (str.test(xslt)) {
                    xs.responseXML = new DOMParser().parseFromString(xslt, "text/xml");
                    change();
                }
                else {
                    xs = $.ajax({ dataType: "xml", url: xslt});
                    xs.onreadystatechange = change;
                }
            };
       
            $.fn.xslt = function(xml, xslt) {
                var target = $(this);
                
                $.xslt(xml, xslt, function(data){
                	target.html(data);
                });
                
                return this;
            };
       }
    }
})(jQuery);
