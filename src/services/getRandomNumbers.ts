export async function collectRandomNumbersCallAPI():Promise<number[]> {

     const responseRandomNumbers = await fetch('https://www.random.org/integers/?num=200&min=0&max=9&col=1&base=10&format=plain&rnd=new')
    
    
    const randomNumbers = await responseRandomNumbers.text()
    
    const stringArray = randomNumbers.split('\n')
  
    return stringArray.map((number: string) => parseInt(number))

    // return ["9", "1", "9", "9", "2", "3", "2",
    //     "2", "9", "6", "6", "1", "7", "1", "7", "5", "4", "4", "3",
    //     "6", "9", "7", "3", "1", "1", "5", "4", "1", "9", "3", "7",
    //     "1", "7", "3", "1", "7", "6", "1", "9", "2", "2", "7", "2",
    //     "8", "5", "2", "3", "4", "4", "7", "4", "8", "3", "3",
    //     "8", "2", "4", "1", "1", "8", "7", "1", "2", "3", "1",
    //     "3", "7", "6", "1", "5", "8", "9", "3", "6", "2", "9",
    //     "7", "5", "3", "9", "3", "9", "3", "7", "6", "2", "5",
    //     "7", "7", "7", "8", "4", "9", "2", "8", "6", "1", "2",
    //     "4", "8", "5", "9", "3", "8", "6", "6", "9", "7", "6",
    //     "2", "8", "1", "9", "6", "1", "9", "6", "2", "3", "2",
    //     "4", "8", "9", "4", "9", "8", "6", "2", "4", "8", "7",
    //     "4", "1", "7", "4", "3", "3", "1", "6", "4", "2", "4",
    //     "9", "8", "7", "4", "7", "6", "4", "1", "9", "4", "9",
    //     "7", "4", "4", "9", "8", "1", "8", "6", "5", "7", "7",
    //     "3", "1", "1", "8", "7", "2", "4", "2", "2", "5", "9",
    //     "5", "4", "1", "9", "1", "4", "5", "4", "7", "4", "5",
    //     "8", "6", "6", "5", "4", "6", "9", "4", "2", "8", "2", "3", "4", "4"].map((element) => {
    //         return parseInt(element)
    //     })
}