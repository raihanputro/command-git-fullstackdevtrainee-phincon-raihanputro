// Challenge 1

function bandingkanAngka(angka1, angka2) {
    if(angka2 > angka1){
        return true;
    }else if(angka1 == angka2){
        return -1;
    }else{
        return false;
    }
  };
  
  // TEST CASES
  console.log(bandingkanAngka(5, 8)); // true
  console.log(bandingkanAngka(5, 3)); // false
  console.log(bandingkanAngka(4, 4)); // -1
  console.log(bandingkanAngka(3, 3)); // -1
  console.log(bandingkanAngka(17, 2)); // false

  // Challenge 2

  function balikKata(kata) {
    // you can only write your code here!
    for(let i = kata.length -1; i >= 0; i--){
        console.log(kata[i])
    }
  }
  
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS

  // Challenge 3

  function konversiMenit(menit) {
    // you can only write your code here!
    let jam = Math.floor(menit / 60);
    let sisaMenit = menit % 60;
    
    if (sisaMenit < 10) {
      sisaMenit = "0" + sisaMenit;
    }
    
    return jam + ":" + sisaMenit;
  }
  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00

  // Challenge 4
  function xo(str) {
  let x = 0;
  let o = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      x++;
    }
    else if (str[i] === 'o') {
      o++;
    }
  }

  return x === o;
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true

  // Challenge 5
  var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
  ]
  

const dataHandling = (params) => {
  for (let i = 0; i < params.length; i++) {
    const [id, nama, kota, tanggal, hobi] = params[i];
    

    console.log(`
    Nomor ID:  ${id}
    Nama Lengkap:  ${nama}
    TTL:  ${kota} ${tanggal}
    Hobi:  ${hobi}
    `);
  }
}
  
dataHandling(input);