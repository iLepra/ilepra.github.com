// $ID: i-common__ua.js, Mon Oct 24 2011 22:03:37 GMT+0400 (MSD), Leonid 'n3o' Knyazev $
(function (d, n) {
	var _ua = n.userAgent.toLowerCase(),
		_browser = {
			firefox : /firefox/i.test(_ua),
			chrome : /chrome/i.test(_ua),
			safari : (!(/chrome/i.test(_ua)) && /webkit|safari|khtml/i.test(_ua)),
			ipad : /ipad/i.test(_ua),
			iphone : /iphone/i.test(_ua),
			opera : /opera/i.test(_ua),
			msie : (!this.opera && /msie/i.test(_ua))
		};

	if (_browser.firefox) d.documentElement.className += " m-firefox"
	if (_browser.chrome)  d.documentElement.className += " m-chrome"
	if (_browser.safari)  d.documentElement.className += " m-safari"
	if (_browser.ipad)    d.documentElement.className += " m-ipad"
	if (_browser.iphone)  d.documentElement.className += " m-iphone"
	if (_browser.opera)   d.documentElement.className += " m-opera"
	if (_browser.msie)    d.documentElement.className += " m-msie"
})(document, navigator);