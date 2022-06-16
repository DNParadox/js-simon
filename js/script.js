// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.Descrizion


const randomNumbersToRemember = generateBombs(100,1,5)
alert (randomNumbersToRemember)
console.log(randomNumbersToRemember)

setTimeout(PromptToShow, 30000);

function PromptToShow() {

    //1 stmapare i 5 prompt
    //2 salvare risultato prompt in array
    // const numberInsert = []
    const numberWrong = []

    const numeriIndovinati = [];
    
    for (let i = 0; i < randomNumbersToRemember.length; i++) {
        let userInput = parseInt(prompt('Indovina il numero'));
        if (randomNumbersToRemember.includes(userInput)) {
            numeriIndovinati.push(userInput);
        } else if ((randomNumbersToRemember.includes(userInput))) {
            numberWrong.push(userInput)
        }
    }
    alert('Numeri Individuati: ' + numeriIndovinati + ' Numeri Indovinati: ' + numeriIndovinati.length + ' Numeri Errati: ' + numberWrong);
    console.log('Numeri Individuati: ', numeriIndovinati,'Numeri Indovinati: ', numeriIndovinati.length, 'Numeri Errati: ', numberWrong);

    // if(!numberInsert.includes(randomNumbersToRemember)) {
    //     userNumber.push(numberInsert)
    //     console.log('numeri inseriti',numberInsert)
    // }

    // console.log('numeri inseriti',numberInsert)
    // console.log(numberWrong)
}





//  --------
//  Function che genera numeri casuali unici
//  --------
// Generiamo un Array con X numero di bombe
// numberOfElements -> numero di elementi dell'array
// rangeMin -> Range minimo dei numeri generati (1)
// rangemax -> Range massimo dei numeri generati (16)
function generateBombs(numberOfElements,rangeMin, rangeMax) {
    const randomNumbersArray = []
        while (randomNumbersArray.length < rangeMax) {
            const randomNumbers = getRndInteger(rangeMin, numberOfElements);
            // Push solo se non è presente nell'array. Tutti numeri unici
            if (!randomNumbersArray.includes(randomNumbers)) {
                randomNumbersArray.push(randomNumbers)
            }
        }
      
    return randomNumbersArray
}


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }