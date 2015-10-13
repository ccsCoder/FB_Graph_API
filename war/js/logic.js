var DOMElem= {
	_refElem : undefined,
	byId:  function(arg) {
		this._refElem = document.getElementById(arg);
		return DOMElem; 
	},
	on: function(eventName,handler,context) {
		if(!this._refElem) {
			throw "Cannot attach event to DOM";
		} 
		this._refElem.addEventListener(eventName,handler.bind(context));
	},
	val: function() {
		return this._refElem.value.trim()||"";
	},
	sanitize: function(arg) {
		return encodeURIComponent(arg);
	}
	
};
