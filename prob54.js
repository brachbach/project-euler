// I think you pretty much have to ~brute force this:
// for each hand, go through the different possible hands, from best to worst, until you find a match
// (note that royal flush is the same as straight flush; note also that "highest card" is just the abscence of anything else)
// then compare hands btwn the two
// if the same, compare highest card, then next highest card, etc.

// one thing I'm not sure of is what happens if you have no winner after comparing all cards

const _ = require("lodash");

const findHighestCombo = hand => {
    const combos = [straightFlush, fourOfKind, fullHouse, flush, straight, threeOfKind, twoPair, onePair];
    for (let i = 0; i < combos.length; i++) {
        if (combos[i](hand)) {
            return i;
        }
    }
    return 8;
}

const straightFlush = hand => {
    const suit = hand[0].suit;
    if (! _.every(hand, card => card.suit === suit)) {
        return false;
    }
    const startingNumber = hand[0].number;
    for (let i = 0; i < hand.length; i++) {
        if (!hand[i].number === startingNumber + i) {
            return false;
        }
    }
    return true;
}

// alright this is boring now