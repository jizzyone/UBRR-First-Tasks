function countZeros(n){
    let count = 0
    for (let i=1;i<=n;i++){
        if (i % 1000 == 0){
            console.log(i)
            count+=3
        }else if (i % 100 == 0){
            count+=2
        }else if (i % 10 == 0){
            count+=1
        }
    }
    console.log(`Количество нулей: ${count}`) // Тоже не универсальное решение, но в данном кейсе подойдет
}
countZeros(200)