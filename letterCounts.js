s1 = ['', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine',
    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
s2 = ['', '', 'twenty', 'thirty', 'forty', 'fifty',
    'sixty', 'seventy', 'eighty', 'ninety'];

ans = 0;

for (i = 1; i <= 1000; i++) {
    if (i >= 1000) {
        ans += s1[Math.floor(i % 10000 / 1000)].length;
        ans += 'thousand'.length;
    }
    if (i % 1000 >= 100) {
        ans += s1[Math.floor(i % 1000 / 100)].length;
        ans += 'hundred'.length;
    }
    if (i >= 100 && i % 100 != 0) {
        ans += 'and'.length;
    }
    if (i % 100 > 0 && i % 100 < 20) {
        ans += s1[i % 100].length;
    }
    if (i % 100 >= 20) {
        ans += s2[Math.floor(i % 100 / 10)].length;
        ans += s1[i % 10].length;
    }
}

console.log(ans);
