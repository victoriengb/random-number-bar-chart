export function countNumberOfOccurences(numberArray:number[]):number[]{

    // console.log('numberArray', numberArray)
    //Tableau contient le nombre d'occurences de chaque chiffre
    let numberOfOccurences:number[] = []
  
    //Initialisation du tableau : On démarre avec chaque chiffre ayant un nombre d'occurences valant 0
    for(let i=0 ; i < 10 ; i++){
      numberOfOccurences[i] = 0
    }
  
    console.log('numberArray.length', numberArray.length)
    //On parcourt le tableau contenant les chiffres et on calcule l'occurence de chaque chiffre
    for(let i=0 ; i < numberArray.length ; i++){
        if(numberArray[i] >= 0 && numberArray[i] < 10){
            numberOfOccurences[numberArray[i]] += 1
        }
    }
  
    // console.log('numberOfOccurences', numberOfOccurences)
    return numberOfOccurences
  }