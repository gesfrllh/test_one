// QUESTION 1
export function sortDescending(arr: number[]): number[]{
  for(let i = 0; i < arr.length - 1; i++){
    for (let j = i +1; j < arr.length; j++){
      if(arr[i] < arr[j]){
        const temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr;
}

const input: number[] = [1, 2, 4, 3, 5, 3, 2, 1]
const output: number[] = sortDescending(input)

console.log(output)


// QUESTION 2
export function maxSubarraySum(arr: number[], subLen: number): number {
  if (subLen > arr.length) return 0;

  let maxSum = 0;
  for (let i = 0; i < subLen; i++) {
    maxSum += arr[i];
  }

  let tempSum = maxSum;

  for (let i = subLen; i < arr.length; i++) {
    tempSum = tempSum - arr[i - subLen] + arr[i];
    if (tempSum > maxSum) maxSum = tempSum;
  }

  return maxSum;
}


console.log(maxSubarraySum([100, 200, 300, 400], 2));          
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); 
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));          



// QUESTION 3
export function sumEvenNumbers(obj: any): number {
  let sum = 0;

  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'number' && value % 2 === 0) {
      sum += value;
    } else if (typeof value === 'object' && value !== null) {
      sum += sumEvenNumbers(value); 
    }
  }

  return sum;
}


const input1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
};

const input2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 4}, ee: 'car'}
};

console.log(sumEvenNumbers(input1)); 
console.log(sumEvenNumbers(input2)); 
