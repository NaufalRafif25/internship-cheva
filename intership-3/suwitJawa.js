var tanya = true;
while(tanya) {
    // Menangakap pilihan player
    var p = prompt('Pilih : gajah, semut, orang');

    // Menangkap pilihan komputer
    // Membangkitkan bilangan random
    var comp = Math.random();

    if(comp < 0.34) {
        comp = 'gajah';
    } else if(comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    // Menentukan Rules
    var hasil = '';
    if(p == comp) {
        hasil = 'SERI';
    } else if(p == 'gajah') {
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if(p == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if(p == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Memasukkan pilihan yang salah !';
    }

    // Tampilkan hasilnya
    alert('Kamu memilih :'+ p +' dan komputer memilih : '+ comp +'\nMaka hasilnya : kamu ' + hasil);

    tanya = confirm('lagi?');
}
alert('TerimaKasih sudah bermain!');