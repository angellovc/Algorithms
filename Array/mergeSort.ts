
const merge = (array, start, half, end) => {
    const left = [], right = [];
    for (let l = start; l <= half; l++) {
        left.push(array[l]);
    }
    left.push(Infinity)
    for (let r = half + 1; r <= end; r++){
        right.push(array[r]);
    }
    right.push(Infinity)
    
    let l = 0, r = 0;
    for (let main = start; main <= end; main++) {
        
        if (right[r] < left[l]) {
            array[main] = right[r];
            r++;
        }
        else {
            array[main] = left[l];
            l++;
        }
    }

}

const mergeSort = (array, start = 0 , end = array.length - 1 ) => {
    if (start < end) {
        const half = Math.floor((end+start) / 2);
        console.log(half)
        mergeSort(array, start, half);
        mergeSort(array, half + 1, end);
        merge(array, start, half, end);
    }
}



const ar = [2]
// const ar = [0, 1,2,3,4 ]
console.log(ar)
mergeSort(ar);
console.log(ar)
