function reverseWords(str){
    str1 = str.replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
    str2 = str1.split(' ');
    console.log(str2)
    let secondStr = str2.reverse();
    console.log(secondStr.join(' '))
}
reverseWords('привет, мой милый друг')