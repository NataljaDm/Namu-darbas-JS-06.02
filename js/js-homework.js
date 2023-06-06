/*Kintamųjų inicijavimas*/

const { Console } = require("console");

/*
1.Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/
const a = 1; 
const b = 3; 
const c = 6; 
console.log(a);
console.log(b);
console.log(c);
/*2.Sukurti 3 kintamuosius su teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/

const element1 = "kompiuteris"; 
const element2 = "stalas"; 
const element3 = "kede"; 
console.log(element1);
console.log(element2);
console.log(element3);

/*3.Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console*/
const number = [1,2,3,4,5]; 
const number2 = [3,21,32,65,54]; 
const number3 = [6,56,89,74,85,96];
console.log(number);
console.log(number2);
console.log(number3);

/*4.Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
Po kiekvieno jų inicijavimo, išvesti į console
*/
const element4 = [`kompiuteris`,`telefonas`,`televizorius`,`automobilis`,`autobusas`]; 
const element5 = [`kede, stalas, sofa, langas, durys`]; 
const element6 = [`sausis`,`vasaris`,`kovas`,`balandis`,`geguze`]; 
console.log(element4);
console.log(element5);
console.log(element6);

/*Veiksmai su kintamaisiais*/

/*1.Susumuoti visus skaičiaus tipo kintamuosius
Rezultatą išvesti į console*/
const sumax = a+b+c
console.log(sumax)

/*2.Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
Rezultatą išvesti į console*/
const tekstas = `${element1} ${element2} ${element3}`;
console.log(tekstas);

/*3.Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
1-2+3-4+5
Rezultatą išvesti į console*/

const pazimiai = [1, 2, 3, 4, 5 ];
const s1 = suma(pazimiai);
function suma(masyvas) {
    return masyvas[0] - masyvas[1] + masyvas[2] - masyvas[3] + masyvas[4]
    
}
console.log(s1);

/*4.Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas*/

const menesiai = [`sausis`,`vasaris`,`kovas`,`balandis`,`geguze`];
const s2 = menesiuSuma(menesiai);
function menesiuSuma(masyvas) {
    return `${menesiai[4]},${menesiai[3]},${menesiai[2]},${menesiai[1]},${menesiai[0]}`
}
console.log(s2);


/*Funkcijos*/

/*Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false*/
function empty() {
}
console.log(empty())
function empty2() {
    return false
}
console.log(empty2())

/*Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;*/

const skaicius1 = 5;
const skaicius2 = 9;
const skaicius3 = 7;

function daugyba(pirmasSkaicius, antrasSkaicius) {
    return pirmasSkaicius * antrasSkaicius
}

console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );

console.clear(

)


const day = 1
if (day == 1) {

    console.log(`Pirmadienis`);

}else {

    console.log(`Nezinau`);

}
const day1 = 6;

let weekday = 'Nezinau..';


if (day1 == 1) {

    weekday1 = 'Pirmadienis';

} else if (day1 == 2) {

    weekday1 = 'Antradienis'

} else if (day1 == 3) {

    weekday1 = 'Treciadienis';

} else if (day1 == 4) {

    weekday1 = 'Ketvirtadienis';

} else if (day1 == 5) {

    weekday1 = 'Penktadienis';

} else if (day1 == 6) {

    weekday1 = 'Sestadienis';

} else {

    weekday1 = 'Sekmadienis';

}
console.log(weekday1);

