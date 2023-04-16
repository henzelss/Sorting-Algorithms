/*
    ASC BUBBLE SORT BY HENZEL
 */

//sample array that was declared
var sampleArray = [2, 4, 232, 43, 5, 7, 34, 43, 23245, 7, 8];

//whole array iteration
for (let i = 0; i < sampleArray.length - 1; i++) {
    //iteration for comparing each element in the array
    for (let j = 0; j < sampleArray.length - 1 - i; j++) {
        let placeholder;
        //actual logic for swapping each element in an array
        if (sampleArray[j] > sampleArray[j+1]) {
            placeholder = sampleArray [j];
            sampleArray[j] = sampleArray [j+1];
            sampleArray[j+1] = placeholder;
        }
    }
    console.log('The arrays are ' +sampleArray);
}