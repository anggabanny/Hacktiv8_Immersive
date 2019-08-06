var tanggal = 21;
var bulan = 1;
var tahun = 1945;

if((tanggal >= 1)&&(tanggal <= 31)){
    if ((tahun >= 1900)&&(tahun <= 2200)) {
        switch (bulan) {
            case 1: {
                bulan = 'Januari'; break;}
            case 2: {
                if (tanggal <= 29){
                    bulan = 'Februari'; break;
                } else {
                    tanggal = '';
                    bulan = 'dibulan 2, silahkan anda input tanggal 1 s/d 29';
                    tahun = '';
                    break;
                }}
            case 3: {
                bulan = 'Maret'; break;}
            case 4: {
                bulan = 'April'; break;}
            case 5: {
                bulan = 'Mei'; break;}
            case 6: {
                bulan = 'Juni'; break;}
            case 7: {
                bulan = 'Juli'; break;}
            case 8: {
                bulan = 'Agustus'; break;}
            case 9: {
                bulan = 'September'; break;}
            case 10: {
                bulan = 'Oktober'; break;}
            case 11: {
                bulan = 'November'; break;}
            case 12: {
                bulan = 'Desember'; break;}
            default: {
                console.log('Mohon input bulan 1 s/d 12');}
            }
            console.log(tanggal + ' ' + bulan + ' ' + tahun);
    } else {
        console.log('Mohon input tahun 1900 s/d 2020');
    }
} else {
    console.log('Mohon input tanggal 1 s/d 31');
}