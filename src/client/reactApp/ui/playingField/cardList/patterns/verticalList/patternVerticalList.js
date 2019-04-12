import PatternAbstract from './../patternAbstract.js';

export default class PatternVerticalList extends PatternAbstract {
	list() {
		return {
			listStyle: {
				display: 'block',
				overflow: 'auto',
				width: this.rect.width
			}
		};
	}

	card(card, index) {
		return {
			cardStyle: {
				display: 'block'
			}
		};
	}
}