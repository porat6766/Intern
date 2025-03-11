
function calculateProductSum(arrayA, arrayB) {
    let sum = 0;
    for (let i = 0; i < arrayA.length; i++) {
        for (let j = 0; j < arrayB.length; j++) {
            sum += arrayA[i] * arrayB[j];
        }
    }
    return sum;
}

function calculateAdjustedSum(arrayC, arrayD) {
    let sum = 0;
    for (let i = 0; i < arrayC.length; i++) {
        for (let j = 0; j < arrayD.length; j++) {
            sum += arrayD[j] * 2;
        }
    }
    return sum;
}

function calculateTotalSum(arrayA, arrayB, arrayC, arrayD) {
    const productSum = calculateProductSum(arrayA, arrayB);
    const adjustedSum = calculateAdjustedSum(arrayC, arrayD);

    return productSum + adjustedSum;
}



