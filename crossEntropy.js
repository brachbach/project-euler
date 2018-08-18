// calculates the cross entropy of q with respect to p,
// i.e. "reprsenting q using the code words from p"
// i.e. Hsubp(q)


const crossEntropyFromEvent = (qOfEvent, pOfEvent) => qOfEvent * Math.log2(1/pOfEvent);
const crossEntropy = (qsOfEvents, psOfEvents) => qsOfEvents.reduce((crossEntropySoFar, qOfEvent, idx) => crossEntropySoFar + crossEntropyFromEvent(qOfEvent, psOfEvents[idx]), 0)

// test that we get the right answer for the examples in the article
console.assert(crossEntropy([1 / 8, 1 / 2, 1 / 4, 1 / 8], [1 / 2, 1 / 4, 1 / 8, 1 / 8]) === 2.25, "Hsubp(q) from the article = 2.25");
console.assert(crossEntropy([1 / 2, 1 / 4, 1 / 8, 1 / 8], [1 / 8, 1 / 2, 1 / 4, 1 / 8]) === 2.375, "Hsubq(p) from the article = 2.375");

console.log(crossEntropy([1/4,1/2, 1/16,1/16,1/8], [1/2,1/4, 1/8, 1/16, 1/16]))