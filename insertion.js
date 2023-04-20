
function insertionSort (arr) {

    for (let i = 1; i < arr.length; i++){
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j-1]){
                [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
            }else{
                break;
            }
            
        }
1       
    }
    return arr;


}

const arr = [2,3,4,4,3,6,678,79,54,34,123,6546,79,4534,678679,7989,654];

console.log(insertionSort(arr));