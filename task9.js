function isPrime(n){
    if (n <= 1 || n % 3 == 0 || n % 2 == 0) {
        console.log('false')
        return false
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            console.log('false')
            return false
        }else{
            console.log('true')
            return true
        }
    }
}
isPrime(15)