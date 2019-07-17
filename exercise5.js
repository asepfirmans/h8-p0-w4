function ubahHuruf(kata) {
    var kamus = 'abcdefghijklmnoprstuvwxyz';
    var hasil = '';
    for (var i = 0; i < kata.length; i++) {
        for (var j = 0; j < kamus.length; j++) {
            if (kata[i] === kamus[j] && kamus[j] === kamus[kamus.length - 1]) {
                hasil += kamus[0];
            } else if (kata[i] === kamus[j]) {
                hasil += kamus[j + 1]
            }
        }
    }
    return hasil
}
// TEST CASES
console.log(ubahHuruf('woz')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu