/* Uppgift 2 reflektion

let och const är blockscope, vilket betyder att de bara finns inom blocket
där de deklareras. 

var är inte blockscope det betyder att den kan fortfarande användas även utanför blocket.
*/

{ 
    // Variabler deklarerade inuti blocket
    let namn = "Walid";
    const alder = 23;
    var stad = "Sandviken";

    // Här inuti blocket fungerar alla
    console.log(namn);
    console.log(alder);
    console.log(stad);
}

console.log(stad); // fungerar pga var är inte blockscope och kan användas utanför blocket     

/* Uppgift 3 */

// 1. 
console.log("'3' == 3:", '3' == 3);   // true, jämför bara värde
console.log("'3' === 3:", '3' === 3); // false, jämför värde + typ

console.log("NaN === NaN:", NaN === NaN);             // false
console.log("null == undefined:", null == undefined); // true
console.log("null === undefined:", null === undefined); // false

// 2. Ternary test
let result = undefined ? "truthy" : "falsy";
console.log("undefined är:", result);

/* Uppgift 3 reflektion
Jag såg att == bara kollar värdet, så '3' == 3 blir true. === kollar både värde och typ och därför blir '3' === 3 false.
NaN === NaN är false eftersom NaN aldrig är lika med nåt, null == undefined är true eftersom båda betyder att värde saknas. Null === undefined blir false eftersom dom har olika typer.
Undefined gav resultat falsy i ternary testet det betyder att js bestämmer om ett värde är truthy eler falsy i t ex if-satser eller ternary. 
NaN = felaktigt tal  undefined = en variabel som inte fått något värde än // null = man säger själv att här ska inget värde finnas. */


/* Uppgift 4 */

// variabel i global scope
let namn = "Walid";
console.log("Global namn före funktion:", namn);

//Funktionen greet (jag använder en vanlig funktionsdeklaration)
function greet(namn) {
    return "Hej " + namn;
}

// Ropar på funktionen
console.log(greet("Mikaela")); // direkt i console.log

//Sparar returvärde först
let resultat = greet("Ali");
console.log(resultat);

//global namn är oförändrad
console.log("Global namn efter funktionsrop:", namn);

/* Uppgift 4 reflektion

Det finns olika sätt att skapa funktioner som tex funktionsdeklaration, funktionsuttryck och arrowfunktion. Jag valde en vanlig funktionsdeklaration eftersom jag tycker att den är tydlig och lättast att förstå just nu.
Jag märkte också att funktionsdeklarationer går att ropa innan själva funktionen står i koden eftersom javascript gör hoisting. Det behöver man tänka på om man använder andra varianter, för då måste funktionen vara skapad innan man använder den.

Jag testade att ha en global variabel som heter namn och även en parameter som heter namn i funktionen. Parametern påverkar inte den globala variabeln, eftersom funktionen använder sin egna version av namn.

Paramter är det som står inne i paranteserna i funktionen t ex namn, Argument är deet värde jag skickar in när jag anropar funktionen t ex "Mikaela", Variabeln är något jag själv skapar för att spara värden i min kod
*/