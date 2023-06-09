
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

    const ats = a * b;
    return ats;
}

console.log(daugyba(5, 9));
console.log(daugyba(`skaicius3`, 9));
console.log(daugyba(5, `skaicius3`));
console.log(daugyba(45, 7));
console.log(daugyba('labas', 2));
console.log(daugyba('5', 2));
console.log(daugyba([], 2));
console.log(daugyba(true, 2));
console.log(daugyba(false, 2));
console.log(daugyba(daugyba, 2));
console.log(daugyba(undefined, 2));
console.log(daugyba(7, 'labas'));
console.log(daugyba(7, '5'));
console.log(daugyba(7, []));
console.log(daugyba(7, true));
console.log(daugyba(7, false));
console.log(daugyba(7, daugyba));
console.log(daugyba(7, undefined));
console.log(daugyba(NaN, 2));
console.log(daugyba(Infinity, 2));
console.log(daugyba(-Infinity, 2));
console.log(daugyba(7, NaN));
console.log(daugyba(7, Infinity));
console.log(daugyba(7, -Infinity));


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
function biggestNumber(list) {
    // VALIDACIJOS
    if (!Array.isArray(list)) {
        return 'ERROR: duok array tipo reiksme.';
    }

    if (list.length === 0) {
        return 'ERROR: Pateiktas sąrašas negali būti tuščias.';
    }

    // LOGIKA
    let max = -Infinity;

    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (typeof item !== 'number' || !isFinite(item)) {
            continue;
        }

        if (item > max) {
            max = item;
        }
    }

    // LOGIKOS REZULTATO VALIDACIJA
    if (max === -Infinity) {
        return 'ERROR: array neturi nei vieno normalaus skaiciaus';
    }

    // REZULTATO GRAZINIMAS
    return max;
}

console.log(biggestNumber(248562));
console.log(biggestNumber('labas'));
console.log(biggestNumber(true));
console.log(biggestNumber(false));
console.log(biggestNumber(biggestNumber));
console.log(biggestNumber());
console.log(biggestNumber(undefined));
console.log(biggestNumber(null));
console.log(biggestNumber({}));
console.log('-------------------------');
console.log(biggestNumber([]));
console.log('-------------------------');
console.log(biggestNumber([1]), '->', 1);
console.log(biggestNumber([2]), '->', 2);
console.log(biggestNumber([777]), '->', 777);
console.log(biggestNumber([1, 2, 3]), '->', 3);
console.log(biggestNumber([11, 22, 33]), '->', 33);
console.log(biggestNumber([11, 22, 33, 44]), '->', 44);
console.log(biggestNumber([-5, 78, 14, 0, 18]), '->', 78);
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), '->', -1);
console.log(biggestNumber([-333, -44, -5, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-5, -333, -44, -66, -777, -8]), '->', -5);
console.log(biggestNumber([-333, -44, -66, -777, -8, -5]), '->', -5);
console.log('-------------------------');
console.log(biggestNumber(['labas']));
console.log(biggestNumber([true, false]));
console.log(biggestNumber([true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));
console.log(biggestNumber([5, true, false, undefined, null, biggestNumber, [], {}, 'asd', '', NaN, Infinity, -Infinity]));

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

console.log(`-------------5------------`);
function isrinktiRaides(s, d) {
    if (typeof s !== 'string') {
        return `Pirmasis kintamasis yra netinkamo tipo.`
    } 
    if (s.length === 0 || s.length >= 100) {
        return `Pirmojo kintamojo reikšmė yra netinkamo dydžio.`
    }
    if (typeof d !== 'number' || !isFinite(d)) {
        return `Antrasis kintomasis yra netinkamo tipo.`
    }
    if (d <= 0) {
        return `Antrasis kintamasis turi būti didesnis už nulį.`
    }
    if (d > s.length) {
        return `Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.`
    }
    const dAsString = '' + d;
    if (d.toFixed(0) !== dAsString) {
        return `Antrasis kintamasis turi būti sveikas skaicius.`
    }
    let naujasString = '';
    for (let i = 0; i < s.length; i += d) {
        naujasString += s[i];
        }
        return naujasString;

}

console.log(isrinktiRaides('zodis',2));
console.log(isrinktiRaides('zodis',9));
console.log(isrinktiRaides('zodissssss',3));
console.log(isrinktiRaides(`zodissbifhvbkdfb`, 5));
console.log(isrinktiRaides(`zodissbifhvbkdfbnynn`, 9));
console.log(isrinktiRaides(`zodissbifhvbkdfbnynn`, -9));
console.log(isrinktiRaides(`zodissbifhvbkdfbnynn`, 0));
console.log(isrinktiRaides(`zodissbifhvbkdfbnynn`, null));
console.log(isrinktiRaides(21315,2));
console.log(isrinktiRaides(21315,'zodis'));
console.log(isrinktiRaides(true, 'zodis'));
console.log(isrinktiRaides(true, 2));
console.log(isrinktiRaides({}, false));
console.log(isrinktiRaides([], false))
console.log(isrinktiRaides(true, []));
console.log(isrinktiRaides([], `zodis`));
console.log(isrinktiRaides(564, false));
console.log(isrinktiRaides());
console.log(isrinktiRaides(undefined, null));
console.log(isrinktiRaides('zodis', 0.5));
console.log(isrinktiRaides([20, 12365, 98, 987, 6547], 258796));
console.log(isrinktiRaides('kebas', [-20, -12365, -98, 987, 654, -258796]));
console.log(isrinktiRaides(['rytas', 'diena', `vakaras`], Infinity));
console.log(isrinktiRaides({}));
console.log(isrinktiRaides(Infinity, 5));
console.log(isrinktiRaides(-Infinity, 1));
console.log(isrinktiRaides('zodis', NaN));
console.log(isrinktiRaides(null, 5));
console.log(isrinktiRaides(0, 'zodis'));
console.log(isrinktiRaides(15354, null ));




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
        return 'pirmas parametras privalo buti normalus skaicius.';
    }

    if (typeof w !== 'number' || !isFinite(w)) {
        return 'antras parametras privalo buti normalus skaicius.';
    }

    const rez1 = q / w;
    return rez1;
}


console.log(`------6--------`)
console.log(dalyba(45, 5));
console.log(dalyba(-45, 5));
console.log(dalyba(`tekstas`, 5));
console.log(dalyba(false, 9));
console.log(dalyba(100, 10));
console.log(dalyba(40, NaN));
console.log(dalyba(-63, true));
console.log(dalyba(72, -9));
console.log(dalyba(5, 9));
console.log(dalyba(`skaicius3`, -9));
console.log(dalyba(5, `skaicius3`));
console.log(dalyba(45, 7));
console.log(dalyba('labas', 2));
console.log(dalyba('5', 2));
console.log(dalyba([], 2));
console.log(dalyba(true, 2));
console.log(dalyba(false, 2));
console.log(dalyba(dalyba, 2));
console.log(dalyba(undefined, 2));
console.log(dalyba(7, 'labas'));
console.log(dalyba(7, '5'));
console.log(dalyba(7, []));
console.log(dalyba(7, true));
console.log(dalyba(7, false));
console.log(dalyba(7, dalyba));
console.log(dalyba(7, undefined));
console.log(dalyba(NaN, 2));
console.log(dalyba(Infinity, 2));
console.log(dalyba(-Infinity, 2));
console.log(dalyba(7, NaN));
console.log(dalyba(7, Infinity));
console.log(dalyba(7, -Infinity));

