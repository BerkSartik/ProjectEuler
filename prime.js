let primeCount = 1;
let number = 3;
let prime;

// Sırasıyla asal sayacı, sayı, asal şeklinde değişkenlerimizi tanımlıyoruz. 
// En küçük asal sayı olan 2yi direk asal sayacına ekliyoruz ve sayıyı 3 olarak başlatıyoruz. 
// Bunun sebebi ise mod alma işlemi yaparken 1 sayısını kullanamayacak olmamız.

while (primeCount < 10001) {
    if (isPrime(number)) {
        primeCount++;
        prime = number;
    }
    number += 1;
}

// Burada while döngüsü kullanıyoruz çünkü elimizde belirli bir sayı yok. 
// Yani 10001 sayısına ulaşana kadar döngünün kaç kere döneceğini bilmiyoruz.
console.log(prime);

function isPrime(a) {
    for (let i = 2; i <= a; i++) {
        if (a % i == 0 && a != i) {
            return false;
        }
    }
    return true;
}

// Buradaki fonksiyon ise sayının asal olup olmadığını kontrol etmemizi sağlıyor.
