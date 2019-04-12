import React from 'react';
import PropTypes from 'prop-types';
import {SUITS, CARD_VALUES} from './../../../globals.js';

const Card = ({suit, type, faceUp=true, style={}, className=''})=>{
	if (!faceUp)
		return '[FaceDown]';

	return <div style={style} className={className}>
		{suit ? (type+' '+SUITS.get(suit).plural) : type}
	</div>;
};

Card.getAspectRatio = ()=>{
	return 0.75
};

Card.propTypes = {
	suit: PropTypes.oneOf([...SUITS.keys()]),
	type: PropTypes.oneOf([...CARD_VALUES.keys()]).isRequired,
	faceUp: PropTypes.bool,
	style: PropTypes.object,
	className: PropTypes.string
};

export default Card;

