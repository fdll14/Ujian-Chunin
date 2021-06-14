/* 

Contoh soal point pertama tentang variable dan tipe data

*/

//  Tipe data undefined

let x; //membuat variabel tetapi tidak memberikan nilai

console.log("contoh Undefined")
console.log("x's value is", x) // nilai yang akan dimunculkan adalah undefined atau tidak ditentukan
console.log(" ")
//  Tipe data null

let y = null;

console.log("contoh Null")
console.log("y's value is", y)
console.log(" ")

// Tipe data boolean

let a = 10;
let b = 10;

console.log("contoh Boolean")
console.log(a === b) // Akan menghasilkan nilai true karna nilai pada variabel a dan b adalah sama sama 10
console.log(" ")
// Tipe data number

let angka = 121 // number untuk integer 

let angkaPecahan = 7.5 // number juga bisa menjadi float 

console.log("contoh Number")
console.log(angka, " ", angkaPecahan)
console.log(" ")
// Tipe data string
let string = "hari ini adalah hari Jum'at";

console.log("contoh String")
console.log(string)
console.log(" ")
//  Tipe data Symbol

// Berikut adalah dua simbol dengan deskripsi yang sama:
let Sym1 = Symbol("Sym")
let Sym2 = Symbol("Sym")

console.log("contoh Symbol")
console.log(Sym1 === Sym2) // akan menghasilkan nilai boolean "false"
console.log(" ")
// Simbol dijamin unik.
// Meskipun kita membuat banyak simbol dengan deskripsi yang sama,
// mereka adalah nilai yang berbeda.


// Tipe data array

let mahasiswa = new Array();
mahasiswa = ['Rini', 'Aldi', 'Acep', 'Putra']

console.log("contoh Array")
console.log(mahasiswa)
console.log(" ")

// Tipe data object

var jadwal = {
    platform: 34,
    telah_berangkat: false,
    tujuan: "Medan",
    asal: "Jakarta"
};

console.log("contoh Object")
console.log(jadwal.asal)
console.log(" ")

/*

Contoh soal point kedua tentang if else dan switch case

*/

// if else

nilai = 10;
if (nilai > 5) {
    console.log("A");
} else {
    console.log("B");
}

// swith case

nilai = 10;
switch (nilai > 5) {
    case true:
        console.log("A");
        break;
    case false:
        console.log("B");
        break;
}

/* 

Contoh soal point ketiga tentang function dan method

*/

// function

function checkin(nilai){
    if(nilai >= 5){
        console.log("Nilai ", nilai ," lebih besar dari 5")
    }else{
        console.log("Nilai ", nilai, " lebih kecil dari 5")
    }
}

checkin(50);
checkin(3);

// method

var jadwal = {
    platform: 34,
    telah_berangkat: false,
    tujuan: "Medan",
    asal: "Jakarta"
};

console.log(jadwal.asal)
