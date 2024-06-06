function fibonachi(n){
    let myArray = new Array(n)
    myArray[0] = 0
    myArray[1] = 1
    for (let i=2;i<n;i++){
        myArray[i] = myArray[i-1] + myArray[i-2]
    }
    console.log(myArray[n-1])
}
fibonachi(10)