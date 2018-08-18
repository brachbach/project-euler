// I think this is fundamentally quite straightforward and just requires writing an approximator.
//  will start w/ root 2 for ease

// const nthConvergentOfRoot2 = (nRemaining, soFar) => {
//     if (nRemaining === 0) {
//         return 1 + soFar;
//     }
//     return nthConvergentOfRoot2(nRemaining - 1, (1 / (2 + soFar)));
// }

// nthConvergentOfRoot2(1, 0)

// nthConvergentOfRoot2(0, 1 / (2 + 0))

// 1 + 1/2

// nthConvergentOfRoot2(2, 0)

// nthConvergentOfRoot2(1, 1 / (2 + 0))

// nthConvergentOfRoot2(0, 1 / (2 + 1/2))

// 1 + 0.4

const nthConvergentOfRoot2 = n => {
    let soFar = 0
    for (let i = 1; i <= n; i++) {
        soFar = 1 / (2 + soFar);
    }
    return 1 + soFar;
}

// const nthConvergentOfE = (nRemaining, nCurrent, soFar) => {
//     if (nRemaining === 0) {
//         return 2 + soFar;
//     }
//     const 
//     return nthConvergentOfRoot2(nRemaining - 1, (1 / (2 + soFar)));
// }

const nthConvergentOfE = n => {
    let fractionSoFar = 0
    for (let i = 0; i < n; i++) {
        const currentN = n - i;
        const denomIsOne = (currentN + 1) % 3 != 0;
        if (denomIsOne) {
            fractionSoFar = 1 / (1 + fractionSoFar);
            continue;
        }
        const specialDenom = ((currentN + 1) / 3) * 2;
        fractionSoFar = 1 / (specialDenom + fractionSoFar);
    }
    return 2 + fractionSoFar;
}

// console.log(nthConvergentOfRoot2(0, 0));
// console.log(nthConvergentOfRoot2(1, 0));
// console.log(nthConvergentOfRoot2(1000, 0));

console.log(nthConvergentOfE(0));
console.log(nthConvergentOfE(1));
console.log(nthConvergentOfE(2));

// this gives the right answer but is non-trivial to convert into a fraction :(