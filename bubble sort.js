
function bubbleSort (arr) {

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 -i; j++) {
            if (arr[j] > arr[j+1]) {
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }    
        }
    }
    return arr;


}

const arr = [2,3,4,4,3,6,678,79,54,34,123,6546,79,4534,678679,7989,654];

console.log(bubbleSort(arr));