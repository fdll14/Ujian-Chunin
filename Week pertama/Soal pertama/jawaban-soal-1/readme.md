### Jawaban soal no 1

#### Point pertama

`Variabel` adalah sebuah nama yang mewakili sebuah nilai. Variabel bisa diisi dengan berbagai macam nilai seperti string (teks), number (angka), objek, array, dan sebagainya.

```
Jadi variabel bisa diibaratkan sebagai tempat yang gunannya untuk menyimpan suatu nilai atau value.
```

`Tipe data` adalah jenis-jenis data yang bisa kita simpan di dalam variabel.

Jenis tipe data yang ada pada `javascript`.

1. Undefined

    Variabel yang nilainya tidak ditetapkan (tidak diisi) memiliki nilai `undefined`.

2. Null

    Null hanya memiliki sebuah nilai dan terdiri nilai itu sendiri: `null`

3. Boolean

    Merepresentasikan entitas logika dan hanya memiliki dua nilai atau kemungkinan, yaitu: `true` dan `false`.

4. Number
    
    Tipe data `number` pada JavaScript   Tidak ada integer, float, short, long seperti pada bahasa pemrograman lain. Hanya ada number.

5. String
    Tipe `String` digunakan untuk menampilkan data tulisan (teks).

6. Symbol

    `Symbol` bersifat unik dan nilai primitif immutable juga memungkinkan digunakan untuk properti Objek 

7. Array

    `Array` merupakan struktur data yang digunakan untuk menyimpan sekumpulan data dalam satu tempat. Setiap data dalam Array memiliki indeks, sehingga kita akan mudah memprosesnya.
    
8. Object

    `Object` adalah suatu tipe data yang memiliki “key” sebagai nama dan juga memiliki atribut.

</br>

#### Point kedua

##### if else

Percabangan `if else` digunakan untuk pengujian sebuah kondisi dimana jika kondisi yang diuji tersebut terpenuhi, maka program akan menjalankan pernyataan-pernyataan tertentu. 

Jika kondisi yang diuji salah, program akan menjalankan pernyataan yang lain.
</br>

penulisan percabangan if else :

```js
if (kondisi) {
   //kode program jika kondisi true
}
else {
   //kode program jika kondisi false
}
```
</br>
contoh :

```js
let nilai = 10;
if (nilai > 5) {
    console.log("A");
  }else{
    console.log("B");
  }
```
Link playcode [here](https://playcode.io/748704/)
</br>

##### Switch case

Percabangan `switch case` adalah percabangan dengan kode program yang dimana kita membandingkan isi sebuah variabel dengan beberapa nilai. 

Jika proses perbandingan tersebut menghasilkan nilai true, maka kode program pada case tersebut akan dijalankan.


```js
switch(kondisi) {
  case pertama:
    //kode program jika case pertama menghasilkan nilai true
    break;
  case kedua:
    //kode program jika case kedua menghasilkan nilai true
    break;
  default:
    // code block
}
```
</br>

contoh :

```js
let nilai = 10;
switch(nilai > 5){
case true:
 console.log("A");
 break;
case false:
 console.log("B");
 break;
}
```
Link playcode [here](https://playcode.io/748703/)
</br>

#### Point ketiga

`Function` adalah sebuah blok kode yang digunakan untuk membungkus suatu proses dengan tujuan agar penulisan kode atau proses yang sama tidak ditulis secara berulang kali. 

contoh :

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

Link playcode [here](https://playcode.io/748014/)

`Method` adalah fungsi yang merupakan properti dari suatu object.

contoh :

```js
var jadwal = {
    platform: 34,
    telah_berangkat: false,
    tujuan: "Medan",
    asal: "Jakarta"
};

console.log(jadwal.asal)
```
Link playcode [here](https://playcode.io/742832/)
</br>

#### Point keempat

`Synchronous` sebuah perintah yang dijalankan secara berurutan, dengan menunggu perintah sebelumya selesai di jalankan. Seperti halnya mode default dalam proses eksekusi perintah kode. 
</br>

`Asynchronous` tidak seperti synchronous yang mesti dijalankan secara berurutan. Sebaliknya Asynchronous dia bisa jalan tanpa menunggu perintah sebelumnya selesai dijalankan.