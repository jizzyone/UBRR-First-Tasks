function isPrime(n){ 
    if (n <= 1) { 
        return false
    } else if (n <= 3) { 
        return true
    } else if (n % 2 === 0 || n % 3 === 0) { 
        return false
    } 
    for (let i = 2; i <= Math.sqrt(n); i++) { 
        if (n % i === 0) { 
            return false
        } 
    }
    return true
} 

function primes(n){ 
    let newArr = []; 
    for (let i = 2; i <= n; i++) { 
        if (isPrime(i)) {
            newArr.push(i)
        }
    } 
    console.log(newArr)
} 

primes(121);