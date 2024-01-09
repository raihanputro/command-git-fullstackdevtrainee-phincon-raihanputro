console.log("Challenge 1");
console.log("----------------")
function palindrome(kata) {
    let kataTerbalik = "";
    for(let i = kata.length -1; i >= 0; i--){
        kataTerbalik += kata[i];
    }

    if (kata == kataTerbalik){
        return true
    } else {
        return false
    }
  }
  
  // TEST CASES
  console.log(palindrome('katak')); // true
  console.log(palindrome('blanket')); // false
  console.log(palindrome('civic')); // true
  console.log(palindrome('kasur rusak')); // true
  console.log(palindrome('mister')); // false

console.log("Challenge 2");
console.log("----------------")


  function hitungJumlahKata(kalimat) {
    // you can only write your code here!
    let jumlahKata = 0;
    let cekKata = false;

    for(let i = 0; i < kalimat.length; i++){
        if(kalimat[i] === ' ') {
            cekKata = false;
        } else if (!cekKata) {
            jumlahKata++;
            cekKata = true
        }
    }

    return jumlahKata;
  }
  
  // TEST CASES
  console.log(hitungJumlahKata('I have a dream')); // 4
  console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
  console.log(hitungJumlahKata('A song to sing')); // 4
  console.log(hitungJumlahKata('I')); // 1
  console.log(hitungJumlahKata('I believe I can code')); // 5

  console.log("Challenge 3");
  console.log("----------------")


  function changeVocals (str) {
    //code di sini
    const huruf = "aiueoAIUEO";
    const hurufPengganti = "bjvfpBJVFP";

    let hasil = "";
    let temp = [];

    for(let i = 0; i < str.length; i++){
        temp.push(str[i]);
    }

    for(let i = 0; i < temp.length; i++){
        for(let k = 0; k < huruf.length; k++){
            if(temp[i] === huruf[k]){
                hasil += hurufPengganti[k]
            }
        }

        if(hasil.length < i + 1){
            hasil += temp[i]
        }
    }

    return hasil;
  }
  
  function reverseWord (str) {
    //code di sini
    let balikKata = "";

    for(let i = str.length - 1; i >= 0; i--){
        balikKata += str[i];
    }

    return balikKata;
  }
  
  function setLowerUpperCase (str) {
    //code di sini
    let hasil = "";

    for(let i = 0; i < str.length; i++){
        let karakter = str[i];

        if(karakter == karakter.toLowerCase()){
            hasil += karakter.toUpperCase();
        } else {
            hasil += karakter.toLowerCase();
        }
    };

    return hasil;
  }
  
  function removeSpaces (str) {
    //code di sini
    let hasil = "";

    for(let i = 0; i < str.length; i++){
        let karakter = str[i];

        if(karakter !== ' '){
            hasil += karakter;
        }
    }

    return hasil;
  }
  
  function passwordGenerator (name) {
    //code di sini
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter";
    }

    const langkah1 = changeVocals(name);
    const langkah2 = reverseWord(langkah1);
    const langkah3 = setLowerUpperCase(langkah2);
    const langkah4 = removeSpaces(langkah3);

    return langkah4;
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'

  console.log("Challenge 4");
  console.log("----------------")
  function meleeRangedGrouping (str) {
    //your code here

    let tipeRanged = [];
    let tipeMelee = [];

    let daftarHero = '';
    let tempHero = '';

    for(let i = 0; i < str.length; i++){ 

        if(str[i] === '-') {
            daftarHero += tempHero;
            tempHero = '';
            continue;
        } else if(str[i] === ',') {
            if(tempHero === 'Ranged'){
                tipeRanged.push(daftarHero);
                daftarHero = '';
                tempHero = '';
            } else if (tempHero === 'Melee'){
                tipeMelee.push(daftarHero);
                daftarHero = '';
                tempHero = '';
            }
            continue;
        } else if(str[i] !== ',') {
            tempHero += str[i];
        }
        
    }

    if (daftarHero != "" && tempHero != "") {
        if (tempHero === "Ranged") {
            tipeRanged.push(daftarHero);
            daftarHero = "";
            tempHero = "";
        } else if (tempHero === "Melee") {
            tipeMelee.push(daftarHero);
            hero = "";
            tempHero = "";
        }
    }

  
    if(str === ''){
        return [];
    } else {
        return [tipeRanged, tipeMelee];
    }
  }


  
  // TEST CASE
  
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
  // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  
  console.log(meleeRangedGrouping('')); // 


  console.log("Challenge 5");
  console.log("----------------")


  function stringToArray(string) {
    // write your code here
    let kata = [];
    let tempString = [];

    for(let i = 0; i < string.length; i++){
        if(string[i] !== ','){
            tempString.push(string[i]);
        } else {
            kata.push(tempString);
            tempString = [];
        }
    }

    if(tempString.length > 0){
        kata.push(tempString);
        tempString = [];
    }

    return kata;
  }
  
  console.log(stringToArray('aqrst,ukaei,ffooo'))
  
  // result
  // [
  //   [ 'a', 'q', 'r', 's', 't' ],
  //   [ 'u', 'k', 'a', 'e', 'i' ],
  //   [ 'f', 'f', 'o', 'o', 'o' ]
  // ]
  
  console.log(stringToArray('qwer,tyui,asdf,ghjk'))
  
  // result
  // [
  //   [ 'q', 'w', 'e', 'r' ],
  //   [ 't', 'y', 'u', 'i' ],
  //   [ 'a', 's', 'd', 'f' ],
  //   [ 'g', 'h', 'j', 'k' ]
  // ]