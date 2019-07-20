function changeMe(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log((i + 1) + '. ' + arr[i][0] + ' ' + arr[i][1]);
        var namaObj = {};
        namaObj.firstName = arr[i][0];
        namaObj.lastName = arr[i][1];
        namaObj.gender = arr[i][2];
        var year = 2018 - arr[i][3];
        if (isNaN(year) || year < 0) {
            namaObj.age = 'Invalid Birth Year';
        } else {
            namaObj.age = year;
        }
        console.log(namaObj);
    }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""