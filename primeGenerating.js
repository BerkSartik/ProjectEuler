
let count = 0, sum = 0, n = 1;
let divisors = [1];
let res = 0;
while (n <= 100000000) {
    if (isPrime(n / 2 + 2) && isPrime(n + 1)) {
        if (findDivisor(n)) {
            sum += n;
        }
    }
    n += 1;
}
console.log(sum);

function findDivisor(b) {
    divisors = [];
    count = 0;
    res = 0;
    for (let i = 1; i <= b; i++) {
        if (b % i == 0) {
            divisors.push(i);
        }
    }
    for (let j = 0; j < divisors.length; j++) {
        res = (b / divisors[j]) + divisors[j];
        if (isPrime(res))
            count += 1;
        else
            return false;
    }
    if (count == divisors.length) {
        return true;
    }
    return false;
}

function isPrime(a) {
    for (let i = 2; i <= a; i++) {
        if (a % i == 0 && a != i) {
            return false;
        }
    }
    return true;
}
