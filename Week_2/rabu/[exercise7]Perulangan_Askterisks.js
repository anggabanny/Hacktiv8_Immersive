console.log('1. Menyusun Barisan Bintang');
    var rows1 = 1;
    while (rows1 <=5) {
        console.log('*');
        rows1+=1
    }

// --------------------------------
console.log('-----------------------------');
// --------------------------------

console.log('\n2. Menyusun Barisan Bintang Dengan Nested Looping');
    var rows2 = 5;
    for(var i = 1; i <= rows2; i++){
        var temp='';
        for(var j = 1; j <= rows2; j++){
            temp+='*'
        }
    console.log(temp);
    }

// --------------------------------
console.log('-----------------------------');
// --------------------------------

console.log('\n3. Menyusun Barisan Tangga Bintang Dengan Nested Looping');
    var rows3 = 5;
    for(var k = 1; k <= rows3; k++){
        var temp1 = '';
        for(var l = 1; l <= k; l++){
            temp1+='*'
        }
        console.log(temp1);
    }


    // console.log('Segitiga Kebalik');
    // var rows4 = 5;
    // for(var k = 1; k <= rows4; k++){
    //     var temp1 = '';
    //     for(var l = rows4; l >= k; l--){
    //         temp1+='*'
    //     }
    //     console.log(temp1);
    // }