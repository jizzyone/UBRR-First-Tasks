function factorial(n){
    let count = 1
    for (let i=1;i<=n;i++){
        count *= i
    }
    console.log(count)
}
factorial(8)