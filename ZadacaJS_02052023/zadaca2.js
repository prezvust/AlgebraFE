/*  

Zadatak 1.
Real i Barca su odigrali 6 tekmi međusobno ove sezone. Pobjednik je onaj koji ima veći
prosjek golova u tim utakmicama. Izračunaj prosječni rezultat svake ekipe i 
onda međusobno usporedi.
Uzmi u obzir da je moguć jednak rezultat, usporedi rezultate i na tu mogućnost.

Bonus opcija : uključi dodatni uvjet, da je minimalan rezultat 3. Sa tom opcijom tim
pobjeđuje samo ako ima više golova od protivnika i ako je postigao više od 3 golova.

Bonus opcija 2 : Minimalan rezultat se također primjenjuje za izjednačeni rezultat i da
obje ekipe imaju preko 5 golova. Inače nitko ne pobjeđuje.
*/

/* Testni podaci 1: 
Barca : 2, 3, 1, 3, 4, 0
Real : 1, 4, 1, 5, 0, 0 */
const barcaGolovi = 2+3+1+3+4+0;
const barcaProsjek = barcaGolovi/6;
const realGolovi = 1+4+1+5+0+0;
const realProsjek = realGolovi/6;

if (barcaProsjek > realProsjek) {
    console.log("Barca ima veći prosjek golova od Reala");
} else if (realProsjek > barcaProsjek) {
    console.log("Real ima veći prosjek golova od Barce");
} else {
    console.log("Barca i Real postigli su isti broj golova");
};

// BONUS 1
if (barcaProsjek > realProsjek && barcaProsjek >= 3) {
    console.log("Barca pobjeđuje");
} else if (realProsjek > barcaProsjek && realProsjek >= 3) {
    console.log("Real pobjeđuje");
} else {
    console.log("Niti Barca niti Real nisu zadovoljili uvjete za pobjedu");
};

// BONUS 2 - ne razumijem zadatak


/* Testni podaci 2 : 
Barca : 1, 2, 1, 1, 3, 0
Real : 1, 1, 3, 0, 2, 0 */

const barcaGolovi2 = 1+2+1+1+3+0;
const barcaProsjek2 = barcaGolovi2/6;
const realGolovi2 = 1+1+3+0+2+0;
const realProsjek2 = realGolovi2/6;

if (barcaProsjek2 > realProsjek2) {
    console.log("Barca ima veći prosjek golova od Reala");
} else if (realProsjek2 > barcaProsjek2) {
    console.log("Real ima veći prosjek golova od Barce");
} else {
    console.log("Barca i Real postigli su isti broj golova");
};

// BONUS 1
if (barcaProsjek2 > realProsjek2 && barcaProsjek2 >= 3) {
    console.log("Barca pobjeđuje");
} else if (realProsjek2 > barcaProsjek2 && realProsjek2 >= 3) {
    console.log("Real pobjeđuje");
} else {
    console.log("Niti Barca niti Real nisu zadovoljili uvjete za pobjedu");
};

/* 

Zadatak 2.
Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi varijablu racun za
tu potrebu. Nije dozvoljeno koristiti if else, nego ternary operator.

ispiši string u konzolu sa iznosom računa, i finalnim izračunom (račun + napojnica)

test data:

račun 275
račun 40
račun 430
*/

const racun1 = 275;
const racun2 = 40;
const racun3 = 430;

const trosak1 = racun1 > 50 && racun1 < 300 ? console.log(`Iznos računa je ${racun1} a ukupni trošak ${racun1 * 1.15}`) : console.log(`Iznos računa je ${racun1} a ukupni trošak ${racun1 * 1.2}`);
const trosak2 = racun2 > 50 && racun2 < 300 ? console.log(`Iznos računa je ${racun2} a ukupni trošak ${racun2 * 1.15}`) : console.log(`Iznos računa je ${racun2} a ukupni trošak ${racun2 * 1.2}`);
const trosak3 = racun3 > 50 && racun3 < 300 ? console.log(`Iznos računa je ${racun3} a ukupni trošak ${racun3 * 1.15}`) : console.log(`Iznos računa je ${racun3} a ukupni trošak ${racun3 * 1.2}`);