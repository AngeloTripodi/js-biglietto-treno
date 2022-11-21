const kilometers = prompt ("Inserisci i Km che vuoi percorrere");

const travelerAge = prompt ("Inserisci la tua età");

const priceKm = kilometers * 0.21;
console.log(priceKm);

const discountUnder = priceKm * 20 / 100;
const totalPriceUnder = priceKm - discountUnder;
console.log (discountUnder , totalPriceUnder)

const discountOver = priceKm * 40 /100;
const totalPriceOver = priceKm - discountOver;
console.log (discountOver , totalPriceOver)


if ((travelerAge >= 1) &&(travelerAge <=18)){
   document.getElementById ('totalPrice').innerHTML = ("Ottimo, hai ottenuto uno sconto del 20\%! Il prezzo è" + totalPriceUnder) 
}
else if ((travelerAge>18) && (travelerAge <65)){
    document.getElementById ('totalPrice').innerHTML = ("Ci dispiace, non hai diritto ad alcuno sconto :( Il prezzo è" + " " + priceKm)
}
else {
    document.getElementById ('totalPrice').innerHTML = ("Ottimo! hai ottenuto uno sconto del 40\%! Il prezzo è" + totalPriceOver)    
} 