function urutkanAbjad(str) {
    var hasil = '';
    var abc = 'abcdefghijklmnopqrstuvwxyz';
    for(var i= 0;i < abc.length ; i++){
        for(var j = 0;j < str.length;j++){
            if(abc[i] === str[j]){
                hasil+=str[j]
            }
        }
    }
    return hasil
  }

// TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis'