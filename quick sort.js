

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

const arr = [1,3,5,7,9,78,56,457,9,0,4,5,3213,23,453,23231,658];
console.log(quickSort(arr));
