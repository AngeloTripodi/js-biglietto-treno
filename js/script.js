const kilometers = parseFloat ( prompt ("Inserisci i Km che vuoi percorrere"));

let travelerAge = parseInt ( prompt ("Inserisci la tua età") );

if ((travelerAge <=0) || (travelerAge >=123)) {
    travelerAge = 50;
    console.log ("Non hai inserito un'età vera, quindi non hai alcun diritto ad uno sconto!")
}


const priceKm = kilometers * 0.21;
console.log(priceKm);

const discountUnder = priceKm * 20 / 100;
const totalPriceUnder = priceKm - discountUnder;
console.log (discountUnder , totalPriceUnder)

const discountOver = priceKm * 40 /100;
const totalPriceOver = priceKm - discountOver;
console.log (discountOver , totalPriceOver)


if ((travelerAge >= 1) && (travelerAge <=18)){
   document.getElementById ('totalPrice').innerHTML = ("Ottimo, hai ottenuto uno sconto del 20\%! Il prezzo è" + " " + totalPriceUnder.toFixed(2) + '\&euro;') 
}
else if ((travelerAge>18) && (travelerAge <65)){
    document.getElementById ('totalPrice').innerHTML = ("Ci dispiace, non hai diritto ad alcuno sconto :( Il prezzo è" + " " + priceKm.toFixed(2) + '\&euro;')
}
else {
    document.getElementById ('totalPrice').innerHTML = ("Ottimo! hai ottenuto uno sconto del 40\%! Il prezzo è" + " " + totalPriceOver.toFixed(2) + '\&euro;')    
} 