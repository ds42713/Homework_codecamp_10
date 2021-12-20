function getMaxSubSum(arr) {
    let n = arr.length;
    let maxArray = 0;
    for (let x = 0; x < n; x++ ){
        for (let y = 0; y <= n; y++ ){
            let sumArray = arr.slice(x, y).reduce(((sum,j) => sum+j),0);
            if (sumArray > maxArray){
                maxArray = sumArray;
            }
        }   
    }
    return maxArray;
}
console.log(getMaxSubSum([-1, 2, 3]));