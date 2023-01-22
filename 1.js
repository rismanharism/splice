// Splice

// RESTRICTION
// Dilarang menggunakan built-in function .splice()!
// HINTS
// Gunakan built-in function .push()! Nama function haruslah splice dan tidak boleh diganti dengan nama function lainnya. Untuk detail fungsi akan mengacu kepada Directions yang disebutkan di bawah Kamu boleh menggunakan built-in function Array.isArray()
// Objectives
// Mampu melakukan manipulasi pada sebuah Array dengan built-in function Mampu membuat function dan mengerti penggunaan parameter dari sebuah function Mampu memahami pengecekkan sebuah data yang bertipe data Array Mampu menggunakan WHILE loop
// Directions
// Di dalam javascript splice berfungsi untuk menghapus element/memotong array, menambahkan element array, dan bahkan bisa keduanya sekaligus. disini kalian di minta membuat fungsi splice manual dengan 4 buah parameter:

// Parameter pertama yaitu data adalah data utama yg bertipe Array. Parameter kedua yaitu add adalah data baru yang akan di tambahkan ke dalam data utama yang bertipe String. Parameter ketiga yaitu start berfungsi untuk menentukan posisi pada index ke berapa element akan di tambahkan ke dalam data utama yang bertipe Array. dan parameter ini bertipe Number. Parameter ke empat yaitu del untuk menentukan beberapa banyak element yang ingin kita hapus, jika tidak ingin menghapus elementnya bisa kita berikan nilai 0. dan parameter ini bertipe Number Wajib menggunakan WHILE Loop.
// Contoh :

// console.log(splice(['idaz', 'adi', 'dear'], 'anggara', 1, 2))
// Penjelasan:

// Parameter pertama yaitu data disini data di wakilkan dengan ['idaz', 'adi', 'dear'] yang bertipe Array. Parameter kedua yaitu add disini add di wakilkan dengan 'anggara' bertipe String, yang akan di tambahkan ke dalam data utama. Parameter ketiga yaitu start disini di wakilkan dengan angka 1 bertipe Number. angka 1 ini berfungsi sebagai posisi/index dimana parameter add di tambahkan ke data utama. Parameter ke empat yaitu del disini di wakilkan dengan angka 2 bertipe Number. angka 2 ini berfungsi sebagai jumlah data yang ingin di hapus setelah posisi parameter start.
// Maka ouput yang dihasilkan adalah [ 'idaz', 'anggara' ]

// Buatlah program / code di dalam function splice sehingga bisa menghasilkan output seperti contoh berikut:

// function splice(data, add ,start, del) {
//     // Insert your code here
// }

// // Test case: hasil function splice()
// console.log(splice(['idaz', 'fajrin', 'samir'], 'anggara', 1, 2))
// // [ 'idaz', 'anggara' ]
// console.log(splice(['eko', 'basil', 'abdullah', 'dear'], 'idaz', 3, 0))
// // [ 'eko', 'basil', 'abdullah', 'idaz', 'dear' ]
// console.log(splice([100, 200, 300], '150', 1, 0))
// // [ 100, '150', 200, 300 ]


// // Test case: function menerima parameter start dan del kosong!
// console.log(splice(['anggara'],'idaz'))
// // [ 'idaz', 'anggara' ]


// // Test case: function menerima parameter del kosong!
// console.log(splice(['aku', 'kamu'], 'dia', 1))
// // [ 'aku', 'dia', 'kamu' ]


// // Test case: catch error!
// console.log(splice('aku','dia'))
// // []
// console.log(splice())
// // []
// Pastikan kode kamu bisa menjalankan semua test case yang diberikan!

// output
// [ 'idaz', 'anggara' ]



let data = ["aku", "kamu"]
let add = "dia"
let start = 1;
let del;
let i = 0
let j = 0
let data2 = []
if (Array.isArray(data)) {
    if (start === undefined && del === undefined) {
        data2.push(add)
        data2.push(data[i])
    }
    else if (del === undefined) {
        while (j < data.length) {
            data2.push(data[j])
            if (j === start - 1) {
                data2.push(add)
            }
            j++
        }
    }
    else {
        while (i < data.length - del) {
            data2.push(data[i])
            if (i === start - 1) {
                data2.push(add)
            }
            i++
        }
    }
}


console.log(data2)

// ============================================================================================

function splice(data,add,start,del){
    if (!start) {
        start = 0;
    }
    if (!del) {
        del = 0;
    }

    if (Array.isArray(data)){
        let result =[] // array kosongan
        let count = 0; // incremen data

        //count = 3, start=3 , data.length = 4
        while(true){ // true loop terus
            if(count === start){ //program untuk memasukkan add
                result.push(add)
                count += del
            }
            if(data[count]===undefined){
                break;
            }
            if(count===data.length){
                break;
            }
            result.push(data[count])
            count++
        }

        return result
    }

    if(!Array.isArray(data)){
        return []
    }

}