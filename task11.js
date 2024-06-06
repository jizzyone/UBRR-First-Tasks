function intersection(arr1,arr2){
    const compareSort = (a,b) => a - b
    let newArr1 = []
    for (const value of arr1) {
        if (!newArr1.includes(value)) {
           newArr1.push(value);
        }
    }
    let newArr2 = []
    for (const value of arr2) {
        if (!newArr2.includes(value)) {
           newArr2.push(value);
        }
    }
    let twoArrays = newArr1.concat(newArr2)
    twoArrays = twoArrays.sort(compareSort)
    let newArr = []
    for (let i=0;i<twoArrays.length;i++){
        if (twoArrays[i] == twoArrays[i+1]){
            newArr.push(twoArrays[i])
        }
    }
    console.log(newArr)
}
intersection([1, 5, 5, 4, 2], [8, 8 ,8, 91, 4, 1, 3, 2]) // понимаю, что решение какое-то костыльное и некрасивое
// но что-то умнее не смог чет придумать, а этот вроде работает xD