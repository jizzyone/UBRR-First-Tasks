function capitalize(str){
    let str1 = str.split('')
    str1[0] = str1[0].toUpperCase()
    console.log(str1)
    for (let i=0;i<str1.length;i++){
        if (str1[i] == ' '){
            str1[i+1] = str1[i+1].toUpperCase()
        }
    }
    console.log(str1.join(''))
}
capitalize('привет как дела твои')