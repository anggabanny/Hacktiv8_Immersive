/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/

function studentFinder(students) {
  // your code here
  var temp = []
  var string = ''
  for(var i = 0 ; i < students.length; i++){
    if (students[i] == ' ' || students[i] == ',') {
      temp.push(string)
      string = ''
    } else {
      string+=students[i]
    }
  }
  temp.push(string)
  
  var count = 9999
  var kata = ''
  for(var i = 0 ; i < temp.length; i++){
    if (temp[i].length < count) {
      count = temp[i].length
      kata = temp[i]
    }
  }
  
  return kata
}



console.log(studentFinder('Hanif Ranev Tio Tirta Igor Yusril Tia Titania')); // Tio
console.log(studentFinder('Yogi Hengky Trina An Hamzah')); // An
console.log(studentFinder('Huday,Kay,Trisna,Kinan,Hazman')); // Kay
