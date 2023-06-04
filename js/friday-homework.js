
/*
1. Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). 
Atspausdinti trumpesnį stringą.*/

const { Console } = require("console");

	function initialai(vardas, pavarde) {
        return vardas + "." + pavarde
    }
	
	const init = initialai("Bruce", "Willis");

    console.log(init);
/*
2.Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). 
Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".*/
	function metai (vardas,pavarde, a, b) {
        return `Aš esu ${vardas}  ${pavarde} . Man yra ${a-b} metai(ų).`
    }
	const sakinis = metai (`Natalja`, `Dmitrijeva`, `2023`, `1888`);
    console.log(sakinis)
	
/*
3.Sukurti du kintamuosius. 
Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus. 
Sukurti trečią kintamąjį ir jam priskirti stringą, sudarytą iš trijų paskutinių vardo ir pavardės kintamųjų raidžių. 
Jį atspausdinti.*/
	
      
	const aktorvardas = "Bruce";
    const aktorpavarde = "Willis";
    console.log(aktorvardas[aktorvardas.length - 3] + aktorvardas[aktorvardas.length - 2] + aktorvardas[aktorvardas.length - 1] + " " + aktorpavarde[aktorpavarde.length - 3] + aktorpavarde[aktorpavarde.length - 2] + aktorpavarde[aktorpavarde.length - 1]);
	
/*
4.Sukurti kintamąjį su stringu: “Once upon a time in hollywood”. 
Jame visas “o” (didžiąsias ir mažąsias) pakeisti žvaigždutėm “*”.  
Rezultatą atspausdinti.*/
	
	const section = `Once upon a time in hollywood`;
    const sectionNew = section.replace ("O","*");
    console.log(sectionNew);

	
/*
5.Sukurkite keturis kintamuosius kuriems sugeneruokite atsitiktines reikšmes nuo 0 iki 2. 
Suskaičiuokite kiek yra nulių, vienetų ir dvejetų. 
*/