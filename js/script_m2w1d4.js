/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* i principali datatype usati in JavaScript sono:
1. String è un contenitore che può immagazinare lettere e numeri, ovvero qualsiasi valore alfanumerico.
   Può essere valorizzato in 3 modi diversi ovvero tra doppi apici (") tra singoli apici (') o tra back-tick (`) 
    es: sContenitoreStringa = "Alfa 33" 
        sContenitoreStringa ='Alfa 33'
        sContenitoreStringa = `Alfa 33`


2.  Number è un contenitore che può immagazinare solo dati di tipo numerico.
    Può essere valorizzato assegnandogli qualsiasi numero di tipo intero (senza virgola) o con la virgola
    es: iContenitoreNumero = 55
        fContenitoreNumero = 55.3
        
3. Boolean è un contenitore che può avere solo il valore True (vero) o False (falso)
    es: isMarioFelice = true   (si, Mario è felice)
        isMarioRicco = false   (no, Mario non è ricco)
        
4. List o Array, le liste o arraty sono contenitori particolari ossia non contengono un singolo valore (stringa, numero, ..) ma contengono appunto
    una lista/elenco di valori non ordinati (un elenco di numeri o nomi ad esempio, vengono dichiarati racchiudendo i valori tra le parentesi quadre
    ([]) ed i valori sono separati da una virgola. Ogni valore della lista ha un indice, l'indice parte da 0 e viene assegnato al primo valore della lista
    e via via 1 al secondo valore, 3 al terzo valore....
    es: aArrayNomiStudenti = ['Gianni','Andrea','Mirco];  --- Gianni ha indice 0, Andrea ha indice 1...
        aArrayEtaStudenti = [16, 15, 17]
     L'indice viene usato per recuperare un valore da una lista, ad esempio se volessimo visualizzare il nome del primo valore della lista dei nomi
     dovremmo scrivere questo aArrayNomiStudenti[0]
     
5.  Object, è un contenitore strutturato che può contenere stringhe, numeri, valori Booleani, array e altri contenitori di tipo Object
    i dati vengono immagazinati usando una struttura del tipo chiave/valore ossia ad ogni chiave corrisponde un valore, ogni corrispondenza chiave/valore è 
    separata da una virgola. Un dato di tipo Object oltre alle proprietà può anche avere dei metodi che ad esempio
    possono restituire dei valori composti, questi metodi vengono richiamati mediante la notazione 
    nomeOggetto.nomeMetodo().
    Per definirlo vengono usate le parentesi graffe ({})
        es: oObjectStudente = {nome:"Mario", cognome:"Rossi", eta:21, altezza:1.84,... }
    Per recuperare un dato dalla struttura di tipo Object viene usata la cosiddetta dot notation ossia nomeOggetto.chiave
        es: oObjectStudente.nome ci restituirà Mario.


*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
 */

 /* VEDI SOPRA */


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
const NUM1 = 12;
const NUM2 = 20;
const SUM = NUM1+NUM2;
console.log(`Esercizio 3: La somma dei numeri ${NUM1} e ${NUM2} è ${SUM} `);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;
console.log(`Esercizio 4: il valore della variabile 'x' è ${x}`);

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const NAME = "NICODEMO";
console.log(`Esercizio 5: il valore della variabile 'NAME' è ${NAME}`);

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
let diff = 4 - x;
console.log(`Esercizio 6: la differenza tra 4 e la variabile 'x' di valore ${x} è ${diff}`);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
let name1 = "john";
let name2 ="John";
console.log(`Esercizio 7A: verifico che 'name1' di valore <<${name1}>> è diversa da 'name2' di valore <<${name2}>>:`, name1 !== name2);

console.log(`Esercizio 7B: verifico che 'name1' di valore <<${name1}>> e 'name2' trasformato con lowercase in <<${name2.toLowerCase()}>> siano uguali:`, name1 === name2.toLowerCase());




