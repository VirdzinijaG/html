let sk = 20485;

let str = "" + sk; // pridejus tuscia string'a skaicius paverciamas i string'a

console.log(sk); // atspausdinamas skaicius
console.log(str); // atspausdinamas string'as

/*
"0" - 48
"1" - 49
"2" - 50
"3" - 51
"4" - 52
"5" - 53
"6" - 54
"7" - 55
"8" - 56
"9" - 57
 */


// skaiciaus pavertimas simboliais spausdinama is desines i kaire

let sk1 = 20485;

while (sk1 > 0) {
    let skaitmuo = sk1 % 10 + 48; //  48 yra simbolio 0 kodas
    console.log(skaitmuo); // skaiciaus 115 suskaldintais skaitmenimis, kurie atspausdinti simboliu kodais
    sk1 = (sk1 - sk1 % 10) / 10;
}

// pavertimas i skaiciu
let tekstas = "20485";

let rez = 0;
for (let i = 0; i < tekstas.length; i++) {
    // console.log(tekstas[i]); // atspausdinti skaiciai atskirai (kaip tekstas)
    // console.log(tekstas.charCodeAt(i)); // atspausdina baitus(simbolio kodus)
    rez *= 10;
    let skaitmuo = tekstas.charCodeAt(i) - 48;
    rez += skaitmuo;
}
console.log(rez); // spausdina 20485 kaip skaiciu
let sk2 = rez + 1; // 20485 pavertus i skaiciu prie jo galima prideti kita skaiciu
console.log(sk2); // spausdinama 20486

// toks pats rezultatas, kaip pries tai buvusiame aprasyme
let rez1 = parseInt(tekstas); // pavercia i skaiciu
console.log(rez1);
