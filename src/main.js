const SwitchExp = class {
	//
	// Static
	//
	static #Exit = class {
	 	constructor(value) {
			this.value = value;
			return this;
		}
	}
	static exitCallback = (val) => {
		return new SwitchExp.#Exit(val);
	}
	//
	// Instance
	//
	#exitReturn;
	//
	#break = (arr) => {
		arr.splice(1);
		return this.#exitReturn.value;
	}
	//
	eval = (expression) => {
		return [...this.#conditions].reduce((res, [condition, value], i, arr) => [
			...res, 
			(
				(condition instanceof Function && condition(expression) === true) || 
				(expression === condition) || 
				((condition && (value === undefined)) && (value = undefined))
			) && (
				value instanceof Function
					? ((this.#exitReturn = value(SwitchExp.exitCallback)) instanceof SwitchExp.#Exit)
						? this.#break(arr)
						: this.#exitReturn
					: value
			)
		], []);
	}
	//
	#conditions;
	constructor(conditions) {
		this.#conditions = conditions;
	}
}

const switchExp = (conditions) => new SwitchExp(conditions);
