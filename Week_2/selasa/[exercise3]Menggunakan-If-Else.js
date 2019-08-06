var nama = '';
// PILIH PERAN MU WAJIB! AWALI DENGAN HURUF BESAR
// Ksatria atau Tabib atau Penyihir
var peran = '';

if (nama !== '') {
    if (peran === '') {
        console.log("Halo " + nama + ", Pilih peranmu untuk memulai game!");
    } else if(peran === 'Ksatria') {
        console.log('Selamat datang di Dunia, ' + nama);
        console.log('Halo ' + peran + ' ' + nama + ", kamu dapat menyerang dengan senjatamu!");
    } else if(peran === 'Tabib') {
        console.log('Selamat datang di Dunia, ' + nama);
        console.log('Halo ' + peran + ' ' + nama + ", kamu akan membantu temanmu yang terluka.");
    } else if(peran === 'Penyihir') {
        console.log('Selamat datang di Dunia, ' + nama);
        console.log('Halo ' + peran + ' ' + nama + ", ciptakan keajaiban yang membantu kemenanganmu!");
    } else {
        console.log("Hai "+ nama +" pilih perammu dengan benar [Ksatria] atau [Tabib] atau [Penyihir]");
    }
} else {
    console.log('Nama Harus diisi!');
}