console.log(`[1. Melakukan Looping Menggunakan While]`);
    console.log('LOOPING PERTAMA');
    var pertamaCount = 2;
    while(pertamaCount <= 20){
        console.log(pertamaCount + ' - I love coding' );
        pertamaCount = pertamaCount + 2;
    }

    console.log('LOOPING KEDUA');
    var pertamaCount = 20;
    while(pertamaCount >= 2){
        console.log(pertamaCount + ' - I will become fullstack developer' );
        pertamaCount = pertamaCount - 2;
    }

// -----------------------------------------------
console.log('-------------------------------------');
// -----------------------------------------------

console.log(`\n[2. Melakukan Looping Menggunakan For]`);
    console.log('LOOPING PERTAMA');
    for(var pertamaFor = 1; pertamaFor <= 20; pertamaFor++){
        console.log(pertamaFor + ' - I love coding');
    }

    console.log('LOOPING KEDUA');
    for(var keduaFor = 20; keduaFor >= 1; keduaFor--){
        console.log(keduaFor + ' - I will become fullstack developer');
    }

// -----------------------------------------------
console.log('-------------------------------------');
// -----------------------------------------------

console.log(`\n[3. Angka Ganjil dan Genap]`);
    console.log('COUNTER = 1');
    for(var i = 1; i <= 100; i = i + 1){
        if (i % 2 === 0) {
            console.log('Genap');
        } else {
            console.log('Ganjil');
        }
    }

    console.log('\nCOUNTER = 2');
    var a = 1;
    while(a <= 100){
        if (a % 3 === 0) {
            console.log(a + ' Kelipatan 3');
        }
        a = a + 2;
    }

    console.log('\nCOUNTER = 5');
    var a = 1;
    while(a <= 100){
        if (a % 6 === 0) {
            console.log(a + ' Kelipatan 6');
        }
        a = a + 5;
    }

    console.log('\nCOUNTER = 9');
    for(var j = 1; j <= 100; j = j + 9){
        if (j % 10 === 0) {
            console.log(j + ' Kelipatan 10');
        }
    }