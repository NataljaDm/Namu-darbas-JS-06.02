/*Ciklo for panaudojimas*/

/*-1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30*/

let sum =0
for (let i = 0; i < 0; i++) {
    sum += i
    /*console.log(sum)*/;
}
console.log(sum);

let sum2 =0
for (let i = 0; i <= 4; i++) {
    sum2 += i
   /* console.log(sum2)*/;
}
console.log(sum2);

let sum3 =0
for (let i = 0; i <= 100; i++) {
    sum3 += i
    /*console.log(sum3)*/;
}
console.log(sum3);
let sum4 =0
for (let i = 574; i <= 815; i++) {
    sum4 += i
    /*console.log(sum4)*/;
}
console.log(sum4);

for (let i = -50; i <= 50; i++) {
    sum += i
    /*console.log(sum)*/;
}
console.log(sum);

for (let i = -70; i <= 30; i++) {
    sum += i
    /*console.log(sum);*/}

console.log(sum);




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

let pirmasSkaicius = 0;
 let paskutinisSkaicius = 11;

 let skaicius1 = 3;
 let skaicius2 = 5;
 let skaicius3 = 7;
 ;

 let rezultatas1 = (pirmasSkaicius, paskutinisSkaicius, skaicius1) => {
    let beLiekanos = 0
     for(let i = pirmasSkaicius; i <= paskutinisSkaicius; i++){
         if(i % skaicius1 === 0){
             beLiekanos++;
        }
     }
     return `Skaičių intervale tarp ${pirmasSkaicius} ir ${paskutinisSkaicius}, besidalijančių be liekanos iš ${skaicius1} yra ${beLiekanos} vienetai.`;
 }

 console.log(rezultatas1(pirmasSkaicius, paskutinisSkaicius, skaicius1));

 let rezultatas2 = (pirmasSkaicius, paskutinisSkaicius, skaicius2) => {
    let beLiekanos = 0
    for(let i = pirmasSkaicius; i <= paskutinisSkaicius; i++){
        if(i % skaicius2 === 0){
            beLiekanos++;
       }
    }
    return `Skaičių intervale tarp ${pirmasSkaicius} ir ${paskutinisSkaicius}, besidalijančių be liekanos iš ${skaicius2} yra ${beLiekanos} vienetai.`;
}

console.log(rezultatas2(pirmasSkaicius, paskutinisSkaicius, skaicius2));

let rezultatas3 = (pirmasSkaicius, paskutinisSkaicius, skaicius3) => {
    let beLiekanos = 0
    for(let i = pirmasSkaicius; i <= paskutinisSkaicius; i++){
        if(i % skaicius3 === 0){
            beLiekanos++;
       }
    }
    return `Skaičių intervale tarp ${pirmasSkaicius} ir ${paskutinisSkaicius}, besidalijančių be liekanos iš ${skaicius3} yra ${beLiekanos} vienetai.`;
}

console.log(rezultatas3(pirmasSkaicius, paskutinisSkaicius, skaicius3));


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
// m4:3 -> 2*/

const masyvas1 = [1, 1, 1];
let vienas = 0;
for (let i = 0; i < masyvas1.length; i++){
     if(masyvas1[i] === 1 ){
      vienas++;} }
    
console.log(`m1:1=`, vienas)

const masyvas2 = [1, 2, 2, 3];
let x = 0;
let du = 0;
let tris = 0;
for (let i = 0; i < masyvas2.length; i++) {
   if(masyvas2[i] === 1){
    x++; } 
else if (masyvas2[i] === 2) {
    du++;  } 
else if (masyvas2[i] === 3) {
    tris++;  } }
 console.log(`m2:1=`, x);
 console.log(`m2:2=`, du);
 console.log(`m2:3=`, tris);

const masyvas3 = [5, 4, 3, 2, 1];
let a = 0;
let b = 0;
let c = 0;
let d = 0;
let e = 0;
for (let i = 0; i < masyvas3.length; i++) {
    if(masyvas3[i] === 1){
     a++; } 
else if (masyvas3[i] === 2) {
 b++; } 
else if (masyvas3[i] === 3) {
     c++; } 
else if (masyvas3[i] === 4) {
     d++; } 
else if (masyvas3[i] === 5) {
    e++;  } }
 console.log(`m3:1=`, a);
 console.log(`m3:2=`, b);
 console.log(`m3:3=`, c);
 console.log(`m3:4=`, d);
 console.log(`m3:5=`, e);

const masyvas4 = [5, 4, 3, 2, 1, 1, 1, 1, 1, 2, 2, 3];
let q = 0;
let w = 0;
let r = 0;
let t = 0;
let y = 0;
for (let i = 0; i < masyvas4.length; i++) {
    if(masyvas4[i] === 1){
     q++; } 
else if (masyvas4[i] === 2){
      w++; } 
else if (masyvas4[i] === 3){
      r++; } 
else if (masyvas4[i] === 4){
     t++; } 
else if (masyvas4[i] === 5){
            y++; } }
 console.log(`m3:1=`, q);
 console.log(`m3:2=`, w);
 console.log(`m3:3=`, r);
 console.log(`m3:4=`, t);
 console.log(`m3:5=`, y);

 
  