### Jawaban soal no 3
<br>

`Function` adalah sebuah blok kode yang digunakan untuk membungkus suatu proses dengan tujuan agar penulisan kode atau proses yang sama tidak ditulis secara berulang kali. 

`Method` adalah fungsi yang merupakan properti dari suatu object.

#### Contoh :
<br>

penggunaan function

```js
function checkin(nilai){
    if(nilai >= 5){
        console.log("Nilai ", nilai ," lebih besar dari 5")
    }else{
        console.log("Nilai ", nilai, " lebih kecil dari 5")
    }
}

checkin(50);
checkin(3);
```

ket :

Contoh dalam blok coding diatas adalah sebuah function yang digunakan untuk mengecek suatu value atau nilai apakah lebih besar dari 5 atau lebih kecil dari 5

<br>

```js
var jadwal = {
    platform: 34,
    telah_berangkat: false,
    tujuan: "Medan",
    asal: "Jakarta"
};

console.log(jadwal.asal)
```
ket :

Contoh dalam blok coding diatas adalah sebuah object yang isinya adalah properti platform,telah_berangkat,tujuan dan asal. dimana pemanggilan method bisa dengan cara `jadwal.asal`.

<br>

Link untuk menjalankan blok kode diatas [klik disini](http://playcode.io/736621/)