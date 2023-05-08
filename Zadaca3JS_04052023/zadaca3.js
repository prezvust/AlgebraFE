"use strict";

/* Zadatak 1 :

Recimo da imamo 1000 lovaca u Hrvatskoj. Izračunaj koji postotak tih lovaca
dolazi iz Središnje hrvatske - nazovimo const brojLovaca1 (340 lovaca), 
iz Istre brojLovaca2 (50 lovaca) i Dalmacije brojLovaca3 (140 lovaca).

Upotrijebite običnu ili arrow funkciju za ovaj zadatak.
*/

function izracunPostotka (lovci) {
    const postotakIzracun = (lovci / 1000) * 100;
    return postotakIzracun;
};

const brojLovaca1 = `Iz Središnje hrvatske dolazi ${izracunPostotka(340)}% lovaca.`;
const brojLovaca2 = `Iz Istre dolazi ${izracunPostotka(50)}% lovaca.`;
const brojLovaca3 = `Iz Dalmacije dolazi ${izracunPostotka(140)}% lovaca.`;
console.log(brojLovaca1);
console.log(brojLovaca2);
console.log(brojLovaca3);



/* Zadatak 2 : 

Na svijetu ima 10000 profesionalnih igrača stolnog tenisa. Hrvatska ima 10,
Kina 3441 i USA 332. Izračunajte postotak tih igrača u odnosu na sve profesionalne igrače
i onda ih i ispišite, na način da definirate dvije funkcije, prvu koja će računati postotak
i drugu u koju ćemo ubaciti taj postotak i koja će imati 2 parametra - zemlja i populacija.
Nakon toga ispišite sve 3 vrijednosti koristeći rečenicu tipa:
`${zemlja} ima ${populacija} igrača što je oko ${postotak}% svijeta`
*/

function tenisaci(x,y) {
    const populacija = y;
    const zemlja = x;

    function izracun() {
        let postotak = (populacija / 10000) * 100;
        return postotak;
    };
    function zemlje() {
        const postotak = izracun();
        console.log(`${zemlja} ima ${populacija} igrača što je oko ${postotak}% svijeta`);
        };  
        zemlje();
}
const zemlja1 = tenisaci("Hrvatska", 10);
const zemlja2 = tenisaci("Kina", 3441);
const zemlja3 = tenisaci("USA", 332);




/* Zadatak 3 :

Ovo smo već radili ali sad idemo to riješiti funkcijskim pristupom...
Imamo 2 tima, koji su se natjecali 5 puta. prosjek 5 utakmice treba izračunati. 
Tim pobjeđuje jedino ako ima duplo više golova od drugog tima.
Napravite arrow funkciju kako bi napravili kalkulaciju prosjeka. 
Uz pomoć te arrow funkcije onda izračunajte prosjek za svaku ekipu.
Napravite funkciju koja uzima prosjek ekipa i ispisuje pobjednika u konzoli skupa 
sa brojem bodova npr. Real pobjeđuje 4 naprema 1.

hint 1: za prosjek zbrojite ih pa podijelite sa 3
hint 2: kako bi provjerili da li je jedan tim pobijedio drugi sa barem duplo bodova, 
možete napraviti provjeru koristeći formulu A >= B * 2. Primjenite to na prosječne rezultate.

primjer: 
Barca : 2, 3, 1, 3, 4
Real : 1, 4, 1, 5, 0

*/

const prosjek = () => {
  
    const Barca = (10+13+1+3+4) / 5; // dodao sam 10 i 13 umjeso 1 i 3 zbog testiranja a rade drugi ishodi
    const Real = (1+4+1+5+0) / 5;
    
    const pobjednik = () => {
      if (Barca >= Real * 2) {
        console.log(`Barcelona Pobjeđuje ${Barca} naprema ${Real}.`);
      } else if (Real >= Barca * 2) {
        console.log(`Barcelona Pobjeđuje ${Real} naprema ${Barca}.`);
      } else {
        console.log("Nemamo pobjednika");
      }
    };
    
    return Barca,Real,pobjednik()
  };

  prosjek();




/* Zadatak 4:

I ovo smo već radili :D

Joža želi izraditi jednostavan kalkulator za napojnice. U njegovoj zemlji uobičajeno je
dati 15% za napojnicu ako je račun između 50 i 300. Ako je vrijednost drugačija onda je
napojnica 20%..

Vaš zadatak je izračunati napojnicu ovisno o veličini računa. Napravi funkciju koja će računati napojnicu.

Napravite Listu koja će koristiti testne podatke dolje.

Napravite listu napojnice koja će sadržavati vrijednosti napojnice za svaki račun, vrijednosti koje ste
dobili koristeći funkciju za izračun napojnica (ona prva gore).

Napravi listu sa ukupnim iznosima, znači račun + napojnica (total).

Tip : svaka lista treba vrijednosti na svakom polju i svaka vrijednost može biti return vrijednost funkcije.
Ne možete samo nazvati funkciju sa vrijednostima liste. Stoga ne spremajte vrijednosti napojnice u posebne
varijable prvo nego direktno u novu listu.

testni podaci:

račun 125
račun 555
račun 44
*/

function izracunajTotal(iznos) {
        const total1 = iznos[0] * 1.15;
        iznos[0] = total1;
        const total2 = iznos[1] * 1.15;
        iznos[1] = total2;
        const total3 = iznos[2] * 1.15;
        iznos[2] = total3;
    return iznos;
}
const racuni = [125, 555, 44];
const ukupno = izracunajTotal(racuni);
console.log(ukupno);
