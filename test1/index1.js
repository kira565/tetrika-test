
function searchPairs(array, N) {
    let resArr = [];
    let unique = Array.from(new Set(array)); // Если вдруг на вход может прийти массив с дублирующимися значениями
    for (let i = 0; i < unique.length; i++){
        for (let j = 1; j < unique.length; j++){
            if (unique[i] + unique[j] === N){
                if (i < j) {
                    let pair = [];
                    pair.push(unique[i]);
                    pair.push(unique[j]);
                    resArr.push(pair)
                }
            }
        }
    }
    return resArr
}

const arr = [1, 2, 6, 5, 3, 4, 7, 8];
const k = 5;

console.log(searchPairs(arr, k));
//OUT: >> [[1, 4], [2, 3]]
