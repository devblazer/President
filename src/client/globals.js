const SUITS = new Map();
SUITS.set('S', {plural: 'Spades', singular: 'Spade'});
SUITS.set('C', {plural: 'Clubs', singular: 'Club'});
SUITS.set('D', {plural: 'Diamonds', singular: 'Diamond'});
SUITS.set('H', {plural: 'Hearts', singular: 'Heart'});

const CARD_VALUES = new Map();
CARD_VALUES.set(3, {trueValue: 1, singular: 'Three'});
CARD_VALUES.set(4, {trueValue: 2, singular: 'Four'});
CARD_VALUES.set(5, {trueValue: 3, singular: 'Five'});
CARD_VALUES.set(6, {trueValue: 4, singular: 'Six'});
CARD_VALUES.set(7, {trueValue: 5, singular: 'Seven'});
CARD_VALUES.set(8, {trueValue: 6, singular: 'Eight'});
CARD_VALUES.set(9, {trueValue: 7, singular: 'Nine'});
CARD_VALUES.set('J', {trueValue: 8, singular: 'Jack'});
CARD_VALUES.set('Q', {trueValue: 9, singular: 'Queen'});
CARD_VALUES.set('K', {trueValue: 10, singular: 'King'});
CARD_VALUES.set('A', {trueValue: 11, singular: 'Ace'});
CARD_VALUES.set(2, {trueValue: 12, singular: 'Two'});
CARD_VALUES.set('JOKER', {trueValue: 13, singular: 'Joker'});

export {
	SUITS,
	CARD_VALUES
}