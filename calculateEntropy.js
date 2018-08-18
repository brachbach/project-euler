const entropyFromOneEvent = pOfEvent => pOfEvent * Math.log2(1/pOfEvent);
const entropyOfDistribution = psOfEvents => psOfEvents.reduce((entropySoFar, pOfEvent) => entropySoFar + entropyFromOneEvent(pOfEvent), 0)

// test that we get the right answer for simple exapmles
console.assert(entropyOfDistribution([1/2, 1/2]) === 1, "average message length given two equally likely messages is 1")
console.assert(entropyOfDistribution([1 / 2, 1 / 4, 1 / 4]) === 1.5, "average message length for [1/2, 1/4, 1/4] is (1/2 * 1 + 1/4 * 2 + 1/4 * 2), which is 1.5")

console.log(entropyOfDistribution([1/2, 1/4, 1/8, 1/16, 1/16]))