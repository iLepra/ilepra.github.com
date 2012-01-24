// $ID: i-common__border-radius.js, Mon Oct 24 2011 22:06:35 GMT+0400 (MSD), Leonid 'n3o' Knyazev $
(function (d) {
	var _isBorderRadiusSupported = function() {
		var s = d.documentElement.style;

		return typeof s.borderRadius === "string"
			|| typeof s.WebkitBorderRadius === "string"
			|| typeof s.KhtmlBorderRadius === "string"
			|| typeof s.MozBorderRadius === "string";
	};

	d.documentElement.className += _isBorderRadiusSupported() ? " m-border-radius" : " m-no-border-radius";
})(document);