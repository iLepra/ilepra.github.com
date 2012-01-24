// $ID: i-metrika.js, Tue Oct 18 2011 20:14:41 GMT+0400 (MSD), Leonid 'n3o' Knyazev $
(function () {
/**
 * Блок инициализации счётчиков Я.Метрики
 * @name i-metrika
 * @description
 * 
 * @requires BEM, jQuery
 */
BEM.DOM.decl('i-metrika', {
	/**
	 * onInitBlock
	 * @name onSetMod
	 * @type {Object}
	 */
	onSetMod : {
		'js' : function (mode, value) {
			var _this     = this,
				_counter  = _this.params.counter;

				// изначально, новые счётчики запоминаются для отложенного создания (когда будет Ya.Metrika)
				_counter && this.newCounter(_counter);

				!(window.Ya && Ya.Metrika) && $(function() {
					var d = document,
						s = d.createElement('script');
						
						s.type = 'text/javascript';
						s.src = '//mc.yandex.ru/metrika/watch.js';
						s.setAttribute('async', 'true');
						
					window.yandex_metrika_callback = _this.callback(window.yandex_metrika_callback);
					
					d.documentElement.firstChild.appendChild(s);
				});
		}
	},
	
	
	/**
	 * Счетчики для отложенной загрузки.
	 * @name _counters
	 * @type {Array}
	 */
	_counters : [],
	
	
	/**
	 * Функция создания и инициализации счётчика.
	 * @name newCounter
	 * @function
	 */
	newCounter : function (counter) {
		this._counters.push(counter);
	},
	
	
	/**
	 * callback
	 * @name callback
	 * @function
	 */
	callback : function (old) {
		var _this = this;
		
		return function () {
			// как только случился callback (т.е. есть Ya.Metrika), новые счётчики делаются сразу
			_this.newCounter = function (c) {
				var counter = window['yaCounter' + c] = new Ya.Metrika({ id : c, enableAll: true });
			};
			
			// делаем все отложенные счётчики
			var c; while(c = _this._counters.shift()) _this.newCounter(c);
			
			// запускаем старый callback, если он был
			old && old();
		}
	}
});
})();