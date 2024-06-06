function findVowels(str){
    const vowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е']
    let count = 0;
    for (let letter of str.toLowerCase()){
        if (vowels.includes(letter)) {
           count+=1;
        }
    }
    console.log(`Гласных букв: ${count}`)
    return count
}
findVowels('привет как дела')