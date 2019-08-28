/*

  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan sebuah array satu dimensi berisi data lagu. Output dari function tersebut adalah array 2 dimensi yang menampilkan judul lagu dan jumlah pemutaran terurut dari jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/

function sortPlaylist(playlist) {
  // your code here
  var obj = {}
  for(var i = 0 ; i < playlist.length; i++){
    if (!obj[playlist[i]]) {
      obj[playlist[i]] = ''
    }
  }
  for(var j in obj){
    var count = 0
    for(var i = 0 ; i < playlist.length; i++){
      if (playlist[i] == j) {
        count++
      }
    }
    obj[j] = count
  }

  var output = []
  var masuk = []
  for(var i in obj){
    masuk.push(i)
    masuk.push(obj[i])
    output.push(masuk)
    masuk = []
  }
  for(var i = 0 ; i < output.length; i++){
    for(var j= 0 ; j < output.length-1; j++){
      if (output[j][1] > output[j+1][1]) {
        var test = output[j]
        output[j] = output[j+1]
        output[j+1] = test
      }
    }
  }
  return output
}

console.log(sortPlaylist(['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']));

//[ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

console.log(sortPlaylist(['Donna Donna', 'Top of The World', 'Donna Donna', 'Top of The World', 'Top of The World', 'Location Unknown', 'Location Unknown']));

//[ [ 'Donna Donna', 2 ], [ 'Location Unknown', 2 ], [ 'Top of The World', 3 ] ]

console.log(sortPlaylist([])); // []
