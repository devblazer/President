import React from 'react';
import PropTypes from 'prop-types';

import Card from './../../card/card.jsx';
import {CARD_VALUES, SUITS} from './../../../../globals.js';
import PatternAbstract from './patterns/patternAbstract.js';

const CardList = (cards, defaultFaceUp=true, pattern)=>{
	let {listStyle, listClass} = pattern.list();

	return (
		<div style={listStyle} className={listClass}>
			{cards.forEach((card, ind)=>{
				let {cardStyle, cardClass} = pattern.card(card, ind);

				return <Card suit={card.suit} type={card.type} style={cardStyle} className={cardClass} key={ind}
							 faceUp={typeof card.faceUp==undefined ? defaultFaceUp : card.faceUp}
				/>
			})}
		</div>
	)
};

CardList.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.shape({
		suit: PropTypes.oneOf([...SUITS.keys()]),
		type: PropTypes.oneOf([...CARD_VALUES.keys()]).isRequired,
		faceUp: PropTypes.bool,
	})),
	defaultFaceUp: PropTypes.bool,
	pattern: PropTypes.instanceOf(PatternAbstract).isRequired
};

export default CardList;