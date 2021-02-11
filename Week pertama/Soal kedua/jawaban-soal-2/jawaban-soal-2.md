### Penjelasan

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

let dataku = {...data}
dataku.name = 'Muhamad Shuro Fadhillah'
dataku.email = 'shuro.fadhillah@gmail.com'
dataku.hobi = 'renang'

console.log(dataku.name)
console.log(dataku.email)
console.log(dataku.hobi)
console.log("")
let {id,name,username,email,address,phone,website} = data;
let {suite,zipcode,...streetcity} = address;
console.log(streetcity)
```

ket tugas pertama :

Pertama kita clone dulu object data menjadi dataku lalu baru ubah isinya menggunakan `method`.

ket tugas kedua :

Pertama pecah dulu isi object dari mulai id,name,username,email,address,phone,website dari object data.

Setelah itu pecah lagi isi dari array address yaitu suite dan zipcode untuk sisanya tampung di variabel `streetcity`.

Link untuk menjalankan blok kode diatas [klik disini](https://playcode.io/736689/)