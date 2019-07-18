function digitPerkalianMinimum(angka) {
  var pembagi = [];
    var angka2 = [];
    var temp = '';
    var temp2 = '';
    for (var i = 1; i <= angka; i++) {

        if (angka % i === 0) {
            pembagi.push(i)
        }
    }
 // console.log(pembagi);
    for (var j = 0; j <= pembagi.length; j++) {
        for (var k = j; k <= pembagi.length; k++) {
            if (pembagi[j] * pembagi[k] === angka) {
                temp += pembagi[j];
                temp += pembagi[k];
                //console.log(temp);
                if (temp.length > temp2.length) {
                    temp2 = temp;
                    temp = '';
                }
                else if (temp.length < temp2.length) {
                    temp2 = temp;
                    temp = '';
                }
                else if (temp.length === temp2.length) {
                    temp2 = temp;
                    temp = '';
                }
                temp = '';
            }
        }
    }
return temp2.length;
}
  


// TEST CASES
 console.log(digitPerkalianMinimum(24)); // 2
 console.log(digitPerkalianMinimum(90)); // 3
 console.log(digitPerkalianMinimum(20)); // 2
 console.log(digitPerkalianMinimum(179)); // 4
 console.log(digitPerkalianMinimum(1)); // 2