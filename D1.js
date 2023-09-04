/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1");
console.log(
  "Questi sono i principati datatype in JavaScript, visti nella lezione di oggi:"
);
console.log(
  "1) Number (Numero): Questo è come i numeri che usi a scuola. Puoi avere numeri interi (come 5 o -10) o numeri decimali (come 3.14). JavaScript può farci fare matematica con loro, come sommare o sottrarre."
);
console.log(
  " 2) String (Stringa): Questi sono come le parole o le frasi che scrivi in ​​un libro. Le stringhe vengono scritte tra virgolette (come 'Ciao, mondo!''). Puoi unirle insieme come se stessi facendo una catena di perline."
);
console.log(
  "3) Boolean (Booleano): Questo è come un interruttore che può essere acceso (vero) o spento (falso). Ad esempio, puoi chiedere a JavaScript se è giorno (vero) o notte (falso)."
);
console.log(
  " 4) Undefined (Non definito): Questo è come se stessi cercando qualcosa che non esiste. Ad esempio, se chiedi a JavaScript di cercare un oggetto che non hai mai creato, otterrai 'non definito'."
);
console.log(
  " 5) Null (Nullo): Questo è come se dicessi a JavaScript che non c'è niente. È diverso da 'non definito'. È come dire: 'So che esiste, ma non c'è niente dentro'."
);
console.log(
  "Altri datatype in JavaSscript: Array, Object, Symbol, Function, Date."
);
/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const name = "Giovanni";
console.log("2) Valore della varibile 'name':", name);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const number1 = 12;
const number2 = 20;
const number3 = number1 + number2;
console.log("3) Somma dentro la console", number1 + number2);
console.log("3) Somma assegnata ad una nuova variabile number3", number3);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
const x = 12;
console.log("4) Valore di x", x);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
  "5) name=longo --> name deprecato --> Errore in console:'Uncaught TypeError: Assignment to constant variable.'"
);
console.log("5) Il valore della string 'name' rimane :", name); //

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let number4 = 4;
let subtraction = number4 - x;
console.log(
  "6) Sottrazione tra una nuova variabile 'number4' e 'x' assegnata ad una variabile 'subtraction':",
  subtraction
);
console.log(
  "6) Sottrazione diretta in console tra la variabile 'number4' e 'x'",
  number4 - x
);
console.log(
  "6) Sottrazione tra il numero 4 e x direttamente in console",
  4 - x
);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "Jhon";
console.log(
  "7) Verifica che i valori di 'name1' e 'name2' non sono uguali:",
  name1 === name2
);
let areBothInLowerCase = name1.toLowerCase === name2.toLowerCase;
console.log(
  "7) Verifica che l'uguaglianza è true dopo aver utilizzato la funzione 'toLowerCase':",
  areBothInLowerCase
);
