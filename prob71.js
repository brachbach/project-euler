// initial thought: brute force the listing, then sort, then done
// problem is that I think that while the sort would be fine, the listing would take too long

// by brute force the listing, I have in mind that I won't have to list all of them,
// that I'll have a process to only list the ones that are reduced

// maybe thinking of such a process would be a good next step?

// another thought is to somehow look "near" 3/7

// for each denominator, there's at least the 1/dem fraction
// (though we know that's not the right answer to this question)

// hmm now thinking maybe I know that the answer is w/in certain bounds (3/7 on the right, 2/5 on the left)


// so maybe I can "expand out" from those bounds

// I think (though not certain) that the next # should have a 3 in the numerator -- seems hard to fit it in otherwise

// one option is to brute force for small n and then notice the pattern --actually yeah, that seems good

// having thought about this whil riding my bike,realized that the only way to get closer to 3/7 is
// to increase the numerator, and then of course to increase the denominator

// seems like you can increase the numerator by 1, then increase the denominator until you find the next best fraction
// or until you get to a # smaller than the current one
// if the latter, increment numerator and start at current denominator, say

const findClosestFraction = (currentNumerator, currentDenominator, target, maxDenominator) => {
    for (let candidateNumerator = currentNumerator; candidateNumerator++;) {
        const currentValue = currentNumerator / currentDenominator;
        for (let candidateDenominator = currentDenominator; candidateDenominator++;) {
            const candidateValue = candidateNumerator / candidateDenominator;
            // console.log(candidateValue, currentValue)
            if (candidateValue <= currentValue) {
                // no closer fraction w/ this numerator, check next numerator
                // I think w/ <= here you don't even have to check whether it's properly reduced?
                // console.log([candidateNumerator, candidateDenominator], 'less than current')
                break;
            }
            if (candidateValue < target) {
                if (candidateDenominator < maxDenominator) {
                    currentNumerator = candidateNumerator;
                    currentDenominator = candidateDenominator;
                    // console.log([currentNumerator, currentDenominator])
                } else {
                    return [currentNumerator, currentDenominator];
                }
            }
        }
    }
}

console.log(findClosestFraction(1, 3, 3/7, 1000000));

