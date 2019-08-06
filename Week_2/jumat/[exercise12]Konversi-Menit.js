function konversiMenit(menit) {
    var ambilDepan = Math.floor(menit/60);
    var ambilDetik = menit % 60;
        if (ambilDetik < 10) {
            ambilDetik = '0' + ambilDetik;
        }

    return ambilDepan + ':' + ambilDetik;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00