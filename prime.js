let primeCount = 1;
let number = 3;
let prime;

while (primeCount < 10001) {
    if (isPrime(number)) {
        primeCount++;
        prime = number;
    }
    number += 1;
}

console.log(prime);

function isPrime(a) {
    for (let i = 2; i <= a; i++) {
        if (a % i == 0 && a != i) {
            return false;
        }
    }
    return true;
}
