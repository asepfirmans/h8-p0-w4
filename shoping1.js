function shoppingTime(memberId, money) {
    var items = [
        {
            name:'Sepatu Stacattu',
            price:1500000
        },
        {
            name:'Baju brand Zoro',
            price:500000
        },
        {
            name:'Baju brand H&N ',
            price:250000
        },
        {
            name:'Sweater brand Uniklooh ',
            price:175000
        },
        {
            name:'Casing Handphone ',
            price:50000
        },
    ]
    var sisaUang = 0
    var jawab = ''
    var obj = {}
    var list = []
    obj.memberId = memberId
    obj.money = money
    obj.listPurchased = list
    obj.chageMoney = 0
    if (memberId == '' || memberId == undefined) {
        return jawab = 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }
    else if (money < 50000) {
        return jawab = "Mohon maaf, uang tidak cukup"
    }
    else {
        for (var i = 0; i < items.length; i++) {
            if (sisaUang >= items[i].price) {
                sisaUang = sisaUang - items[i].price
                list.push(items[i].name)
            }
            obj.chageMoney = sisaUang
        }



    }
return obj

}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
