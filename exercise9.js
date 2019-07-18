function checkAB(num) {
    var posisiA = [];
    var posisiB = [];
    for(var i = 0; i < num.length;i++){
        if(num[i] == 'a'){
            posisiA.push([i])
        }else if(num[i] == 'b'){
            posisiB.push([i])
        }
    }
    var nilaiTrue = 0;
    for(var j = 0;j < posisiA.length;j++){
        for(var k = 0;k < posisiB.length;k++){
            if(posisiA[j] - posisiB[k] == 4 || posisiB[j] - posisiA[k] == 4){
                nilaiTrue++
            }
        }
    }
    if(nilaiTrue != 0){
        return true
    }else{
        return false
    }
}  
// TEST CASES
console.log(checkAB('lane borrowed')); // true
 console.log(checkAB('i am sick')); // false
 console.log(checkAB('you are boring')); // true
// console.log(checkAB('barbarian')); // true
// console.log(checkAB('bacon and meat')); // false