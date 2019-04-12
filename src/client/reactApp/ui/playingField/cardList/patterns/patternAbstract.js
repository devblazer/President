import {Rect} from './../../../../../../lib/spatial.js';

const throwNotExtendedException = ()=>{
	throw new Error('Abstract class PatternAbstract must be extended');
};

export default class PatternAbstract {
	constructor(left, top, width, height) {
		this.rect = new Rect(left, top, width, height);
	}

	list() {
		throwNotExtendedException();
	}

	card() {
		throwNotExtendedException();
	}
}