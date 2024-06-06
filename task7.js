function anagram(str,str2){
    let strSplit = str.split('').sort()
    let str2Split = str2.split('').sort()
    let count = 0
    for (let i=0;i<strSplit.length;i++){
        if (strSplit[i] == str2Split[i]){
            count+=1;
        }
    }
    if (count == strSplit.length){
        console.log('true')
    }else{
        console.log('false')
    }
}
anagram('hello','ellho')