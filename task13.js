function sumOfTwo(arr,num){
    let count =0
    for (let i=0;i<arr.length;i++){
        for (let j=i+ 1;j<arr.length;j++){
            if (arr[i] + arr[j] == num){
                console.log('true')
                return true
            }
        }
    }
    console.log('false')
    return false
}
sumOfTwo([1, 2, 3, 4, 5], 9)