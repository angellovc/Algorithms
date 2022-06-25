const linearSearch = (array, number, index = 0)=> {
    if (array == undefined || index < 0 || array.length <= index)
        return null;

    if (array[index] === number)
        return index;

    return linearSearch(array, number, ++index);
}
