/* 

Setiap kali naik ojek online setelah sampai di tujuan, pada aplikasi kamu akan diminta untuk memberikan feedback.
Salah satu feedback yang diberi adalah dalam bentuk memberikan bintang.

Tugas kamu adalah membuat function countStar yang akan menghitung jumlah setiap bintang yang diterima oleh si abang ojol.

[INPUT]
[
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]


[PROCESS]
bintang yang diterima
- bintang 5 ada 2
- bintang 4 ada 3
- bintang 3 ada 4
- bintang 2 ada 3
- bintang 1 tidak ada

[OUTPUT]
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}

*/


function countStar(stars) {
  //your code here
  var obj = {
    '*****' : 0,
    '****' : 0,
    '***' : 0,
    '**' : 0,
    '*' : 0
  }

  for(var j = 0 ; j < stars.length; j++){
    var temp = ''
    var count = 0
      for(var k = 0 ; k < stars[j].length; k++){
        if (stars[j][k] !== ' ') {
          temp+=stars[j][k]
        }
      }
      if (obj[temp] != undefined) {
      obj[temp] += 1
    }
  }

  return obj
}


console.log(countStar([
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', '*', '*', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', ' ', ' '],
  ['*', '*', ' ', ' ', ' '],
  ['*', '*', '*', '*', '*'],
  ['*', '*', '*', '*', ' '],
]));

/*
{
  '*****': 2,
  '****': 3,
  '***': 4,
  '**': 3,
  '*': 0,
}
 */