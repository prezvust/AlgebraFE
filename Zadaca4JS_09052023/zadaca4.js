/* Zadatak 1

Idemo opet do Marka i Josipa i njihovog ITM-a.
Ovaj put idemo koristiti objekte kako bi implementirali kalkulacije.
Zapamtite ITM = masa/visina ** 2

Za svakog od njih, kreiraj objekt sa vrijednostima : ime, težina, visina do
Kreiraj calcITM metodu na svakom objektu koja će izračunati ITM (ista metoda na oba).

Spremi ITM izračun u vrijednost objekta i vrati ga iz metode (return) ime

logiraj u konzolu tko ima viši ITM, skupa sa imenom i ITM vrijednosti

NPR: Josipov ITM (28.3) je veći od Markovog (23.9)!

Test data: 
Marko : 78 kg i 1.69 cm
Josip : 92 kg i 1.95 cm
*/

/* Izazov 2: Imamo objekt myMusic. Napravi novi objekt i dodaj ga na u prvi objekt kao drugog
člana liste (ali isto kao objekt) */

const album = [
  {
    umjetnik: "Metallica",
    naslov: "Master of Puppets",
    godina: 1986,
    format: ["CD", "8T", "LP"],
  },
];

const noviAlbum = {
  umjetnik: "Bob Marley",
  naslov: "Live!",
  godina: 1975,
  format: ["8T", "LP"],
};
