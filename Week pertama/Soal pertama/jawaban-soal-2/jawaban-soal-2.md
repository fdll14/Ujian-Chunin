### Jawaban soal no 2
<br>

IF ELSE

Percabangan if..else digunakan untuk pengujian sebuah kondisi. ... Jika kondisi yang diuji tersebut terpenuhi, maka program akan menjalankan pernyataan-pernyataan tertentu. Jika kondisi yang diuji salah, program akan menjalankan pernyataan yang lain

<br>
Penulisan kode


```js
if (kondisi) {
   //kode program jika kondisi true
}
else {
   //kode program jika kondisi false
}
```

SWITCH CASE

Kondisi `SWITCH CASE` adalah percabangan kode program dimana kita membandingkan isi sebuah variabel dengan beberapa nilai. Jika proses perbandingan tersebut menghasilkan nilai true, maka block kode program akan dijalankan.

```js
switch(kondisi) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
} 
```
<br>

#### Contoh :

penggunaan if else

```js
nilai = 6 > 5;
if (nilai) {
    console.log("benar");
  }else{
    console.log("salah");
  }
```

ket :

variabel nilai dibuat untuk menjadi kondisi untuk percabangan if else dimana jika nilai 6 lebih besar dari 5 akan masuk ke kondisi pertama yaitu if jika bernilai true akan memunculkan output `benar` sedangkan jika tidak akan masuk ke kondisi else dan memunculkan output `salah`.

penggunaan switch case

```js
nilai = 1 > 5;
switch(nilai){
case true:
 console.log("benar");
 break;
case false:
 console.log("salah");
 break;
}
```

ket :

variabel nilai dibuat untuk menjadi kondisi untuk switch case pertama dimana jika nilainya bernilai sama dengan true akan muncul output `benar` kalo false akan muncul output `salah`

<br>
Link untuk menjalankan blok kode diatas [klik disini](http://playcode.io/736627/)
