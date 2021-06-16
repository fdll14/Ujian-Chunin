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

console.log(dataku)

let {id,name,username,email,address,phone,website} = data;
let {suite,zipcode,...streetcity} = address;
console.log(streetcity)
console.log('')

function segitiga(panjang) {
    let hasil = '';
    for (let i = panjang; i > 0; i--) {
        for (let j = panjang; j > 0; j--) {
            if (j > i) {
                hasil += ' ';
            } else {
                hasil += i+' ';
            }
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(5));