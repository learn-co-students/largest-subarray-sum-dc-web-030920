function largestSubarraySum(array){
    // code to write here
    // we want to interate through the array, adding elements together to create a sum... if the number drops below 0.. start with the next integer. 
     let highestSum = 0 
     for (let i = 0; i < array.length; i ++){
       let sum = array[i] 
       for (let x = i+1; x < array.length && sum > 0; x++){
         sum += array[x]
         if (sum > highestSum){
           highestSum = sum
         }
       }
     }
     return highestSum
   }