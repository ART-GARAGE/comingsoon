
// Clock Plugin
(function($){
	var Clock = function(element){
		this.element = element;
		this.interval = null;
		this.hour = $("<div></div>", {
			'class': 'hour',
		});
		this.minute = $("<div></div>", {
			'class': 'minute',
		});
		this.second = $("<div></div>", {
			'class': 'second',
		});
		$(this.element).append([this.hour, this.minute, this.second]);
		this.init();
	};
	Clock.prototype.init = function(){
		var self = this;
		self.interval = setInterval(self.ticktack.bind(self), 50);
	};
	Clock.prototype.ticktack = function(){
		var self = this,
			date = new Date(),
			hour = date.getHours() % 12,
			minute = date.getMinutes(),
			second = date.getSeconds(),
			milisecond = date.getMilliseconds(),
			rotateHour = ((hour * 360) / 12) + ((minute * 30) / 60),
			rotateMinute = ((minute * 360) / 60) + ((second * 6) / 60),
			roteteSecond = ((second * 360) / 60) + ((milisecond * 6) / 1000);
			self.hour.css({
				'transform': 'rotate('+rotateHour+'deg)'
			});
			self.minute.css({
				'transform': 'rotate('+rotateMinute+'deg)'
			});
			self.second.css({
				'transform': 'rotate('+roteteSecond+'deg)'
			});
		
	};
	
	function Plugin(){
		return this.each(function(){
			var $this = $(this),
			data = $this.data('plugin.clock');
			if(!data){
				$this.data('plugin.clock', (data = new Clock(this)));
			}
		});
	}
	
	var old = $.fn.clock;
	
	$.fn.clock = Plugin;
	$.fn.clock.Constructor = Clock;
	
	$.fn.clock.noConflict = function(){
		$.fn.clock = old;
		return this;
	};
	
	$(window).on('load', function () {
		$('[data-plugin="clock"]').each(function(){
			var $clock = $(this);
			Plugin.call($clock);
		});
	});
	
}(jQuery));