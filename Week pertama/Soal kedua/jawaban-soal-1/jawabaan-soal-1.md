### Penjelasan

```js
function grade(mtk,bi,bing,ipa){
    if(arguments.length === 4){
        total = mtk+bi+bing+ipa;
        nilai = total/4;
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
        console.log("Semua nilai harus diisi");
    }
}

grade(90,90,90,90)
```

ket :

membuat function dengan nama grade yang menerima 4 paramater yaitu untuk nilai mtk, bi, bing, ipa. 

Setelah menerima paramater akan dilakukan pengecekan apakah panjang arguments sama dengan 4 jika iya nilai dari paramater akan dijumlah kan di variabel total dan nantinya kan dibagi 4 untuk mencari nilai akhirnya.

Setelah mendapatkan nilai akhir yang dimasukan ke dalam variabel nilai akan dilakukan pengkodisian.

Link untuk menjalankan blok kode diatas [klik disini](https://playcode.io/736674/)