function fpb(angka1, angka2) {
    var fpb1 = [];
    var fpb2 = [];
    var hasil = [];
    for (var i = angka1 - 1; i > 0; i--) {
        if (angka1 % i === 0) {
            fpb1.push(i);
        }
    }
    for (var j = angka2 - 1; j > 0; j--) {
        if (angka2 % j === 0) {
            fpb2.push(j);
        }
    }
    for (var k = 0; k < fpb1.length; k++) {
        for (var l = 0; l < fpb2.length; l++) {
            if (fpb1[k] === fpb2[l]) {
                hasil.push(fpb1[k]);
            }
        }
    }
    return hasil[0]
}

console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
 console.log(fpb(22, 99)); // 11
 console.log(fpb(24, 36)); // 12
 console.log(fpb(17, 23)); // 1