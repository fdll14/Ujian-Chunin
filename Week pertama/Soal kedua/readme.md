### Jawaban soal no 2

#### Point pertama

program yang menghitung rata-rata UN beserta gradenya, dengan mengisi 4 nilai yakni Bahasa indonesia,Bahasa Inggris Matematika dan IPA, yang di dalam program tersebut memiliki validasi yaitu semua nilai tersebut harus diisi.

kondisi tiap nilainya sebagai berikut : <br>
A = 90 - 100 <br>
B = 80 - 89 <br>
C = 70 - 79 <br>
D = 60 - 69 <br>
E =  0 - 59 <br>

```js
function grade(mtk,bi,bing,ipa){
    if(arguments.length === grade.length){
        total = mtk+bi+bing+ipa;
        nilai = total / arguments.length;
        if(nilai >= 90 && nilai <= 100){
            console.log("Grade anda A dengan nilai akhir ", nilai);
        }else if(nilai >= 80 && nilai <= 89){
            console.log("Grade anda B dengan nilai akhir ", nilai);
        }else if(nilai >= 70 &&  nilai <= 79){
            console.log("Grade anda C dengan nilai akhir ", nilai);
        }else if(nilai >= 60 && nilai <= 69){
            console.log("Grade anda D dengan nilai akhir ", nilai);
        }else if(nilai >= 0 && nilai <= 59){
            console.log("Grade anda E dengan nilai akhir ", nilai);
        }else{
            console.log("Masukkan nilai yang tepat");
        }       
    }else{
        console.log("Anda salah menginputkan nilai");
    }
}

grade(90,90,90,90)
grade(90,70,10,90)
```

Link playcode [here](https://playcode.io/736689/)
<br>

#### Point kedua
<br>

![image](https://res.cloudinary.com/devloops7/image/upload/v1612761431/chunin/screenshot-docs.google.com-2021.02.08-12_14_19_byiobb.png)
<br>

1. Ubahlah data object dari gambar diatas tersebut menggunakan spread operator menjadi: name: nama anda email: email anda hobby: hobi anda. 

```js
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

dataku.name = 'Muhamad Shuro Fadhillah'
dataku.email = 'shuro.fadhillah@gmail.com'
dataku.hobi = 'renang'

console.log(dataku)
```

keterangan
```
Disini saya membuat variable object dengan nama dataku yang didalamnya berisi value dari variable data.

lalu saya melakukan pemanggilan properti name, email, hobi lalu merubah valuenya menjadi data diri saya sendiri.
```

2. Ambilah data “street dan city” tersebut menggunakan destructuring

```js
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
}

let {id,name,username,email,address,phone,website} = data;
let {suite,zipcode,...streetcity} = address;
console.log(streetcity)
```
<br>

keterangan
```
Disini saya memisahkan tiap tiap properti dari object data menjadi variable terpisah.

lalu melakukan penggabungan 2 properti pada object adrress.
```