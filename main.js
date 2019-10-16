let numberArr = [];


//settings rundom numbers in arrays
let setRandomNumbers = (numbersCount) => {
    numberArr = [];
    while (numbersCount) {
        numbersCount--;
        numberArr.push(Math.round((Math.random() * 100)))
    }
}

// swapping values function
let swap = (arr, x, y) => {
    [arr[x], arr[y]] = [arr[y], arr[x]];
}

let bubbleSort = (numberArr) => {
    let arrLength = numberArr.length;
    let swapped = false;

    do {
        swapped = false;
        for (let i = 1; i < arrLength; i++) {
            bubbleSortOperationsCount++;
            // compare two pair of values
            if (numberArr[i - 1] > numberArr[i]) {
                //swap them
                swap(numberArr, i - 1, i);
                // set swapped flag to true
                swapped = true;
            }
        }

        arrLength -= 1;
        //make looping until no changes in array;
    } while (swapped);
}

let partition = (arr, low, high) => {

    let pivot = arr[high];

    let i = low - 1; // Index of smaller element

    for (let j = low; j <= high; j++) {
        // If current element is smaller than the pivot

        if (arr[j] < pivot) {
            // increment index of smaller element
            i++;
            swap(arr, i, j)
        }

    }
    swap(arr, i + 1, high)
    return i + 1;
}

let quickSort = (arr, low = 0, high = arr.length - 1) => {

    if (low < high) {
        /* pi is partitioning index, arr[pi] is now
           at right place */
        let pi = partition(arr, low, high);

        quickSort(arr, low, pi - 1); // Before pi
        quickSort(arr, pi + 1, high); // After pi
    }
}


setRandomNumbers(5);
console.log(`Before bubble sort ${numberArr}`);

bubbleSort(numberArr);
console.log(`After bubble sort ${numberArr}`);


console.log('///////////////////////');

setRandomNumbers(5);
console.log(`Before quick sort ${numberArr}`);
quickSort(numberArr);
console.log(`After quick sort ${numberArr}`);