function aclean(arr) {
    let sortedArr = arr.map(item => item.toLowerCase().split('').sort().join(''));
    let setArr = new Set(sortedArr);
    let reducedObj = {};
    for (let setItem of setArr) {
        let indexArr = sortedArr.reduce((acc, cur, index) => {
        if (setItem === cur) {
            acc.push(index);
        }
        return acc;
        }, []);
        reducedObj[setItem] = indexArr;
    }
    let finalArr = [];
    for (let reduceItem in reducedObj) {
        finalArr.push(reducedObj[reduceItem].map(item => arr[item]));
    }
    let strFirstAnagram = '';
    for (let v of finalArr){
        strFirstAnagram += v[0] + '  ';
    }
    return strFirstAnagram;
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); 