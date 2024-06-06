function palindrome(str){
    str1 = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
    str2 = str1.split('');
    let count = 0;
    let secondStr = str2.reverse();
    for (let i=0; i<str1.length;i++){
        str1[i] == secondStr[i] ? count+=1 : count+=0;
    }
    count == str1.length ? console.log('true') : console.log('false');
}
palindrome('то/пот')
