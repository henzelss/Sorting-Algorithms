/*
    ASC BUBBLE SORT BY HENZEL
 */

function bubbleSort (array) {

    for (let i = 0; i < array.length; i++) {
        
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j+1]){
                [array[j], array[j+1]] = [array[j+1], array[j]];
                
            }
            
        }
        
    }
    return array;
}
const arr = [3,4,342,2,3,2,5,6,7,8,8,9,234];
console.log(bubbleSort(arr));