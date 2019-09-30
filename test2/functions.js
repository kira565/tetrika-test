function sortAlphaSum() {
    let result = document.getElementById('log-area').innerHTML;
    let resultArr = result.split(',').sort();
    document.getElementById('log-area').innerHTML = resultArr.join(', ');
    let alphabetSumArr = [];
    let alphabetTotalSum = 0;

    for (let i = 0; i < resultArr.length; i++) { // Алфавитная сумма
        let name = resultArr[i].replace(/"/g, '');
        let alphabetSum = 0;
        for (let j = 0; j < name.length; j++) {
            alphabetSum = alphabetSum + name.charCodeAt(j) - 64
        }
        alphabetSumArr.push(alphabetSum * (i + 1)) // Алфавитная сумма * позицию
    }

    for (let i = 0; i < alphabetSumArr.length; i++) { // Сумма всех алфавитных сумм * позицию
        alphabetTotalSum += alphabetSumArr[i]
    }
    document.getElementById('result-console').innerHTML = '' + alphabetTotalSum;
    console.log(alphabetSumArr);
    console.log(alphabetTotalSum);
}
