

const array = [0,1,3,7,4,5,9,0];

const insertionSort = (array, index = 2) => {

    let current = array[index];
    let i = index - 1; 
    while(i > 0 && array[i] > current) {
        array[i + 1] = array[i];
        i--;
    }
    array[i + 1] = current;

    if (index + 1 !== array.length)
        insertionSort(array, index + 1)
    
    return array;
}


const newAr = insertionSort(array)

console.log(newAr);