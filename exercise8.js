function tukarBesarKecil(kalimat) {
    var result = '';
    var karakterLain = '1234567890+-)(*&^%$#@!~`] [;\'":/.,?><';
    var ABJAD = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    for(var i = 0;i < kalimat.length;i++){
        for(var j = 0;j < ABJAD.length; j++){
            if(kalimat[i] === ABJAD[j]){
                result+= abjad[j];
            }else if(kalimat[i] === abjad[j]){
                result+= ABJAD[j];
            }
        }
        for(var k = 0;k < karakterLain.length; k++){
            if(kalimat[i] === karakterLain[k]){
                result+= karakterLain[k];
            }
        }

    }
    return result
  }

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"