

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];

    for (const el of arr.slice(0, arr.length -1)){
        el < pivot ? left.push(el) : right.push(el);
    }
    return [... quickSort(left), pivot, ...quickSort(right)];
}

const arr = [2,3,4,4,3,6,678,79,54,34,123,6546,79,4534,678679,7989,654];
console.log(quickSort(arr));
