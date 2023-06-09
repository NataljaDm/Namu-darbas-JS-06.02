
/*Funkcijos*/

/*1. Funkcija pavadinimu “tusciaFunkcija”:
nepriima jokių kintamųjų
neatlieka jokios vidinės logikos
gražina boolean tipo reikšmę “false”
TESTAS:
console.log( tusciaFunkcija() );
rezultatas: false*/
console.log(`------1-------`);
function tusciaFunkcija() {
    return false
}
console.log(tusciaFunkcija())

/*2. Funkcija pavadinimu “daugyba”:
priima du skaičiaus tipo kintamuosius
atskirame kintamajame įsimena sandaugos reikšmę
gražina saudaugos rezultatą
TESTAI:
console.log( daugyba( skaicius1, skaicius2 ) );
console.log( daugyba( skaicius3, skaicius2 ) );
console.log( daugyba( skaicius1, skaicius3 ) );
rezultatas: teisingos reikšmės;*/


console.log(`---------2--------`);

function daugyba(a, b) {
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'neteisingos reikšmės';
    }

    if (typeof b !== 'number' || !isFinite(b)) {
        return 'neteisingos reikšmės.';
    }

    const c = a * b;
    return c;
}

console.log(daugyba(5, 9));
console.log(daugyba(`skaicius3`, 9));
console.log(daugyba(5, `skaicius3`));
console.log(daugyba(45, 7));


/* 3. Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”*/

console.log(`-----------3----------`);

function skaitmenuKiekisSkaiciuje(a) {
   
    if (typeof a !== 'number' || !isFinite(a)) {
        return 'Pateikta netinkamo tipo reikšmė';
    }
    let rez = (`` + a);
    return rez.length;
}
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
console.log('--------------------------------');
console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( `asd` ));
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje(true));
console.log( skaitmenuKiekisSkaiciuje(false));
console.log( skaitmenuKiekisSkaiciuje('asd'));
console.log( skaitmenuKiekisSkaiciuje(NaN));
console.log( skaitmenuKiekisSkaiciuje(Infinity));
console.log( skaitmenuKiekisSkaiciuje(-Infinity));
console.log( skaitmenuKiekisSkaiciuje(undefined));
console.log( skaitmenuKiekisSkaiciuje());
console.log( skaitmenuKiekisSkaiciuje([]));
console.log( skaitmenuKiekisSkaiciuje(skaitmenuKiekisSkaiciuje));
console.log('--------------------------------');
console.log( skaitmenuKiekisSkaiciuje(5), '->', 1);
console.log( skaitmenuKiekisSkaiciuje(781), '->', 3);
console.log( skaitmenuKiekisSkaiciuje(37060123456), '->', 11);
console.log( skaitmenuKiekisSkaiciuje(-5), '->', 1);
console.log( skaitmenuKiekisSkaiciuje(-781), '->', 3);
console.log( skaitmenuKiekisSkaiciuje(-37060123456), '->', 11);
console.log( skaitmenuKiekisSkaiciuje(3.14), '->', 3);
console.log( skaitmenuKiekisSkaiciuje(2.727), '->', 4);
console.log( skaitmenuKiekisSkaiciuje(-3.14), '->', 3);
console.log( skaitmenuKiekisSkaiciuje(-2.727), '->', 4);


/* 4.Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
TESTAI:
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
rezultatas: 1
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
rezultatas: 3
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
rezultatas: 78
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ] ) );
rezultatas: 69
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
rezultatas: -1
console.log( didziausiasSkaiciusSarase( “pomidoras” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( didziausiasSkaiciusSarase( [] ) );
rezultatas: “Pateiktas sąrašas negali būti tuščias.”*/
console.log(`---------4---------`);
function didziausiasSkaiciusSarase(b) {
   
    if (typeof b !== 'number' || !isFinite(b)) {
        return 'Pateikta netinkamo tipo reikšmė';
    }
    let rez = b;
    return rez;
}
console.log( didziausiasSkaiciusSarase( [ 1 ] ) );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ) );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ) );
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ] ) );
console.log( didziausiasSkaiciusSarase( `pomidoras` ) );
console.log( didziausiasSkaiciusSarase( [] ) );

/* 5. Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
patikrinti, ar pirmasis kintamasis yra teksto tipo:
jei ne, išvedame pranešimą “Pirmasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikrinti, ar pirmasis kintamasis yra ne tuščias tekstas ir ne didesnis nei 100 simbolių:
jei ne, išvedame pranešimą “Pirmojo kintamojo reikšmė yra netinkamo dydžio.”
priešingu atveju tęsiame darbą
patikrinti, ar antrasis kintamasis yra skaičiaus tipo:
jei ne, išvedame pranešimą “Antrasis kintamasis yra netinkamo tipo.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra didesnė už nulį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti didesnis už nulį.”
priešingu atveju tęsiame darbą
patikriname, ar antrojo kintamojo vertė yra ne didesnė už pirmojo kintamojo ilgį:
jei ne, išvedame pranešimą “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą
TESTAI:
console.log( isrinktiRaides( “abcdefg”, 2 ) );
rezultatas: “bdf”
console.log( isrinktiRaides( “abcdefghijkl”, 3 ) );
rezultatas: “cfil”
console.log( isrinktiRaides( “abc”, 0 ) );
rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides( “abc”, 4 ) );
rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides( 1561, 2 ) );
rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”*/



/* 6. Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą*/

function dalyba(q, w) {
    if (typeof q !== 'number' || !isFinite(q)) {
        return 'ERROR: pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof w !== 'number' || !isFinite(w)) {
        return 'ERROR: antras parametras privalo buti normalus skaicius.';
    }

    const rez = q / w;
    return rez;
}


console.log(`------6--------`)
console.log(dalyba(45, 5));
console.log(dalyba(`tekstas`, 5));
console.log(dalyba(false, 9));
console.log(dalyba(100, 10));
console.log(dalyba(40, NaN));
console.log(dalyba(-63, true));
console.log(dalyba(72, 9));


