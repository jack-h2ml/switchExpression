export default switchExp = (expression) => new Proxy(expression, {
	get(target, name) {
		if(target.hasOwnProperty(name)) {
			return target[name];
		} else if(target.hasOwnProperty('default')) {
			return target.default;
		} 
	}
});