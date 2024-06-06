function uniq(arr){
    const newArr = []
    for (const value of arr) {
        if (!newArr.includes(value)) {
           newArr.push(value);
        }
    }
    console.log(newArr)
}

uniq([1,2,3,3,1])