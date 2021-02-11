/**
 * 
 * @param {number} maxNumber
 * @return {number[]}
 */

function sieveOfErastosthenes(maxNumber) {
    const isPrime = new Array(maxNumber + 1).fill(true);
    isPrime[0] = false;
    isPrime[1] = false;

    const primes = [];

    for (let number = 2; number <= maxNumber; number += 1) {
        if (isPrime[number] === true) {
            primes.push(number)

            let nextNumber = number * number;

            while (nextNumber <= maxNumber) {
                isPrime[nextNumber] = false;
                nextNumber += number;
            }
        }
    }
    return primes
}

console.log(sieveOfErastosthenes(50))