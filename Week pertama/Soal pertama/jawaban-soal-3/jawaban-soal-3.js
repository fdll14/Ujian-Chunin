// Contoh function sederhana

function checkin(nilai){
    if(nilai >= 5){
        console.log("Nilai ", nilai ," lebih besar dari 5")
    }else{
        console.log("Nilai ", nilai, " lebih kecil dari 5")
    }
}

checkin(50);

// Contoh method sederhana

var jadwal = {
    platform: 34,
    telah_berangkat: false,
    tujuan: "Medan",
    asal: "Jakarta"
};

console.log(jadwal.asal) //jadwal.asal adalah sebuah method