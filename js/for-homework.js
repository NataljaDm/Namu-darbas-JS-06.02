/*Ciklo for panaudojimas*/

/*1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30*/

/*let sum =0
for (let i = 0; i < 0; i++) {
    sum += i
    console.log(sum);
}
console.log(sum);

let sum2 =0
for (let i = 0; i <= 4; i++) {
    sum2 += i
    console.log(sum2);
}
console.log(sum2);

let sum3 =0
for (let i = 0; i <= 100; i++) {
    sum3 += i
    console.log(sum3);
}
console.log(sum3);
let sum4 =0
for (let i = 574; i <= 815; i++) {
    sum4 += i
    console.log(sum4);
}
console.log(sum4);

for (let i = -50; i <= 50; i++) {
    sum += i
    console.log(sum);
}
console.log(sum);

for (let i = -70; i <= 30; i++) {
    sum += i
    console.log(sum);
}
console.log(sum);*/


/*2.panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”*/

const tekstas = [`a`,`b`,`c`,`d`,`e`,`f`];

for (let i = tekstas.length-1; i >=0; i--) {
    console.log(tekstas[i])
}

/*3.Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.*/

/*
4. // Kiek duotas masyvas turi ieskomo skaiciaus atveju (kiekio)?
// m1:1 -> 3
// m1:2 -> 0
// m1:3 -> 0
// m2:1 -> 1
// m2:2 -> 2
// m2:3 -> 1
// m4:1 -> 5
// m4:2 -> 3
// m4:3 -> 2

const masyvas1 = [1, 1, 1];
const masyvas2 = [1, 2, 2, 3];
const masyvas3 = [5, 4, 3, 2, 1];
const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];*/
