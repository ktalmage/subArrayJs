function maxSubarraySum(arr, num){
  let minSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    minSum += arr[i];
  }
  tempSum = minSum;
  for (let i = num; i < arr.length; i++) {
    
    tempSum = tempSum - arr[i - num] + arr[i];
    
    minSum = Math.min(minSum,tempSum);
    
  }
  return minSum;
}

maxSubarraySum([3,4,-5,1,0,2,5,-4,1],4)