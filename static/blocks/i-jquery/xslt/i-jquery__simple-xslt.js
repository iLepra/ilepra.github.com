/*
 * Usage:
 * - $(selector).xslt(xml, xsl);
 * - $.xslt(xml, xsl, callback);
 */
(function($) {
	var AlsXSLTTransform = function() {
		function _loadXMLDoc(dname) {
			if (window.XMLHttpRequest) {
				xhttp=new XMLHttpRequest();
			} else {
				xhttp=new ActiveXObject("Microsoft.XMLHTTP");
			}
	
			xhttp.open("GET", dname, false);
			xhttp.send("");
	
			return xhttp.responseXML;
		}
	
		function _transform(xml,xsl) {
			xml = _loadXMLDoc(xml);
			xsl = _loadXMLDoc(xsl);
	
			if (window.ActiveXObject) {
				ex = xml.transformNode(xsl);
	
				return ex;
			} else if (document.implementation && document.implementation.createDocument) {
				xsltProcessor = new XSLTProcessor();
	
				xsltProcessor.importStylesheet(xsl);
				resultDocument = xsltProcessor.transformToFragment(xml,document);
	
				return resultDocument;
			}
		}
	
		return{
			transform:_transform
		}
	}();

    $.fn.xslt = function(xml, xslt) {
		return this.html(AlsXSLTTransform.transform(xml, xslt));
    };
    
    $.xslt = function(xml, xslt, callback) {
    	callback(AlsXSLTTransform.transform(xml, xslt));
    };
})(jQuery);
