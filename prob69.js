const createMultiplesMap = (max, factors) => {
    mutliplesMap = {};
    factors.forEach(factor => {
        let multiple = factor;
        while (multiple <= max) {
            mutliplesMap[multiple] = true;
            multiple += factor;
        }
    })
    return mutliplesMap;
};

// 

const primesToMax = (max) => {
    const primes = [];
    for (let i = 2; i <= max; i++) {
        let isPrime = true;
        for (let j = 0; j <= primes.length; j++) {
            if (i % primes[j] === 0) {
                isPrime = false;
                break;
            } 
        }
        if (isPrime) {
            primes.push(i);
        }
    }
    return primes;
}

// console.log(createMultiplesMap(20, [2,3,5,7,11,13]))
// console.log(primesToMax(1000));
console.log([2,
    3,
    5,
    7,
    11,
    13,
    17].reduce((productSoFar, current) => productSoFar * current))


// iterate through all the #s
// for each one, find the relative primes
// compute n/φ(n)
// find the max

// hmm this seems bad b/c it's O(n^2)

// it's v unlikely that it will be a multiple of 2, 3, 5, 7, 11, 13 -- maybe remove the numbers that have these as divisors?
// the naive version of that is also kinda bad...
// fairly easy to do a non-naive vesion but not sure it's a good idea...
// I guess I'll try it
