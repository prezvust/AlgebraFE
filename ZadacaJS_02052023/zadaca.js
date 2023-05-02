/* Zadatak 1

 Izračunaj ITM (Indeks tjelesne mase) Marka i Josipa, ispiši ih,
  i provjeri boolean vrijednost true/false jel Markov ItM veći od Josipovog

  računa se tako da se masa dijeli sa visinom na kvadrat (formula je itm = masa/visina ** 2)
  test podaci 1 Marko je težak 78 kg i visok 1.69, Josip 92 kg i 1.95
  test podaci 2 Marko je težak 95 kg i visok 1.88,  Josip 85 kg i 1.76
*/

// Rješenje

const markoTezina1 = 78;
const markoVisina1 = 1.69;
const markoTezina2 = 92;
const markoVisina2 = 1.95;

const josipTezina1 = 95;
const josipVisina1 = 1.88;
const josipTezina2 = 85;
const josipVisina2 = 1.76;

const markoITM1 = markoTezina1 / markoVisina1 ** 2;
console.log(`Markov ITM za Test 1 je ${markoITM1}.`);

const josipITM1 = josipTezina1 / josipVisina1 ** 2;
console.log(`Josipov ITM za Test 1 je ${josipITM1}.`);

const markoITM2 = markoTezina2 / markoVisina2 ** 2;
console.log(`Markov ITM za Test 2 je ${markoITM2}.`);

const josipITM2 = josipTezina2 / josipVisina2 ** 2;
console.log(`Josipov ITM za Test 2 je ${josipITM2}.`);

const provjera1 = Boolean(markoITM1 > josipITM1);

if (provjera1) {
  console.log("Markov ITM u testu1 je veći od Josipovog.");
} else {
  console.log("Markov ITM u testu1 nije veći od Josipovog.");
};

const provjera2 = Boolean(markoITM2 > josipITM2);

if (provjera2) {
  console.log("Markov ITM u testu2 je veći od Josipovog.");
} else {
  console.log("Markov ITM u testu2 nije veći od Josipovog.");
};


/*Zadatak 2

Napraviti 2 varijable (1 sa random brojem 1-100, druga 1-50).
 Napravi varijable koje će sadržavati sumu i razliku ta 2 broja i to zapiši 
 putem template literala u varijable suma i razlika.
*/

// Rješenje

const randomBroj1 = Math.floor(Math.random() * 100) + 1;
const randomBroj2 = Math.floor(Math.random() * 50) + 1;


suma = `Suma brojeva ${randomBroj1} i ${randomBroj2} je ${(randomBroj1+randomBroj2)}`;
console.log(suma);
razlika = `Razlika brojeva ${randomBroj1} i ${randomBroj2} je ${(randomBroj1-randomBroj2)}`;
console.log(razlika);



/* Zadatak 3

provjeri ITM (Indeks tjelesne mase) Marka i Josipa i utvrdi čiji je veći
Neka piše Markov koeficijent mase je veći od Josipovog koeficijenta mase ili
Josipov koeficijent mase je veći od Markovog koeficijenta mase.
UVJET : koristite if else i koristite template string.
*/

// Rješenje


console.log(`Odnos ITMa Marka i Josipa u testu1 - ${markoITM1 > josipITM1 ? " Markov koeficijent mase je veći od Josipovog koeficijenta mase" : " Josipov koeficijent mase je veći od Markovog koeficijenta mase"}`);
console.log(`Odnos ITMa Marka i Josipa u testu2 - ${markoITM2 > josipITM2 ? " Markov koeficijent mase je veći od Josipovog koeficijenta mase" : " Josipov koeficijent mase je veći od Markovog koeficijenta mase"}`);
