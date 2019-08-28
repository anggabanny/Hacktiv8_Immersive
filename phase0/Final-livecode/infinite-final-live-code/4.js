/**
 * =================
 * Steam Summer Sale
 * =================
 * 
 * [Description]
 * Steam sedang diskon besar-besaran untuk beberapa nama game besar, berikut datanya:
 * | No  | Title                            | Short Key | Price  | Genre                |
 * | --- | -------------------------------- | --------- | ------ | -------------------- |
 * | 1   | Grand Theft Auto V               | gta5      | 290000 | action               |
 * | 2   | Assassin's Creed Odyssey         | aco       | 500000 | rpg                  |
 * | 3   | Counter Strike: Global Offensive | csgo      | 120000 | first-person shooter |
 * | 4   | Playerunknown's Battlegrounds    | pubg      | 210000 | first-person shooter |
 * | 5   | Monster Hunter: World            | mhw       | 250000 | action               |
 * 
 * [Instruction]
 * 1. buat sebuah function yang menerima array of strings yang valuenya berupa short-key dari game yang dibeli
 * 2. function terssebut akan mereturn sebuah object yang berisikan data yang dikelompokkan berdasarkan genre-nya
 *    dan total harga yang harus dibayar user.
 * 
 * [Example]
 * @input = ['gta5']
 * @output = {
 *   games: [
 *     {
 *       title: 'Grand Theft Auto V',
 *       genre: 'action'
 *     }
 *   ],
 *   subTotal: 290000
 * }
 * 
 * [Rules]
 * 1. Hanya boleh menggunakan built-in function: .push
 * 2. Dilarang menggunakan regex dan built-in function lain.
 */


function steam(arr) {
  // your code here
  var obj = {
    Skey : ['gta5','aco','csgo','pubg','mhw'],
    title : ['Grand Theft Auto V ', `Assassin's Creed Odyssey`, 'Counter Strike: Global Offensive', `Playerunknown's Battlegrounds`, 'Monster Hunter: World '],
    Price : [290000,500000,120000,210000,250000],
    Genre : ['action','rpg','first-person shooter','first-person shooter','action']
  }

  var output = {
    games:[],
    subTotal:0
  } 
  var bayardund = 0
  for(var i in obj){
    if (i == 'Skey') {
      for(var k = 0 ; k< arr.length; k++){
        var dapat = {}
        for(var j = 0 ; j < obj[i].length; j++){
          if (arr[k] == obj[i][j]) {
            dapat.title = obj['title'][j]
            dapat.genre = obj['Genre'][j]
            output.subTotal += obj['Price'][j]
          }
        }
        output.games.push(dapat)
      }
    }
  }
  
  return output
}

console.log(steam([]))
// {
//   games: [],
//   subTotal: 0
// }

console.log(steam(['gta5','aco']))
// {
//   games: [
//     {
//       title: 'Grand Theft Auto',
//       genre: 'action'
//     },
//     {
//       title: 'Assassins Creed Odyssey',
//       genre: 'rpg'
//     },
//   ],
//   subTotal: 790000
// }

console.log(steam(['aco', 'pubg', 'mhw']))
// {
//   games:
//     [
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 960000
// }

console.log(steam(['gta5', 'aco', 'pubg', 'csgo', 'mhw']))

// {
//   games:
//     [
//       {
//         title: 'Grand Theft Auto V',
//         genre: 'action'
//       },
//       {
//         title: 'Assassins Creed Odyssey',
//         genre: 'rpg'
//       },
//       {
//         title: 'Playerunknowns Battlegrounds',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Counter Strike: Global Offensive',
//         genre: 'first-person shooter'
//       },
//       {
//         title: 'Monster Hunter: World',
//         genre: 'action'
//       }
//     ],
//   subTotal: 1370000
// }