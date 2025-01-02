//Q-1. Given an array of integer ‘nums’ and an integer ‘target’, return indices of the two numbers
//such that they add up to the ‘target’. Leetcode 1 (10 marks)
// Question was- https://leetcode.com/problems/two-sum/description/
// Solution Link- https://leetcode.com/problems/two-sum/submissions/1490013007/
// Description -
// Time Complexity- O(n)
// Space Complexity- O(n)

// ~~~~~~~~~~~~~~Solution ~~~~~~~~~~~~ 
// var twoSum = function (nums, target) {
//     const len = nums.length;
//     const map = new Map(); // To store the number and its index
    
//     for (let i = 0; i < len; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }

//         map.set(nums[i], i);
//     }

    //const len = nums.length;
    // for(let i=0; i<len; i++){
    //     nums[i] = [nums[i], i]// store in key value pairs (value:index)
    // }
    // nums.sort((a,b) => a[0] - b[0]);

    // let left = 0, right = len-1;
    // while(left < right){
    //     const sum = nums[left][0] + nums[right][0];
    //     if(sum === target){
    //         return [nums[left][1], nums[right][1]]
    //     } else if(sum < target){
    //         left++;
    //     } else{
    //         right--;
    //     }
    // }

//     return [];
// };

// const nums = [2,7,11,15], target = 9

// console.log(twoSum(nums, target))

// ---------#------------#----------#-----------#----------#---------
// Q-2. Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i!=j, i!=k, and j!=k, and nums[i] + nums[j] + nums[k] == 0. Leetcode 15 (15 marks)
// Question was- https://leetcode.com/problems/3sum/description/
// Solution Link- https://leetcode.com/problems/3sum/submissions/1490339063/
// Description -
// Time Complexity- O(n2)
// Space Complexity- O(n)

// Optimized Solution Code TC= O(n2) & SC = O(n)

// function threeSum(nums) { // O(n2)
//   // O(n3) Not Preffered
//   const len = nums.length;
//   const result = [];
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < len - 2; i++) {
//     // Skip duplicate elements for the first number
//     if (i > 0 && nums[i] === nums[i - 1]) continue;
//     let left = i + 1,
//       right = len - 1;

//     while (left < right) {
//       const sum = nums[i] + nums[left] + nums[right];

//       if (sum === 0) {
//         result.push([nums[i], nums[left], nums[right]]);
//         left++;
//         right--;
//         while (left < right && nums[left] === nums[left - 1]) left++;
//         while (left < right && nums[right] === nums[right + 1]) right--;
//       } else if (sum < 0) {
//         left++;
//       } else {
//         right--;
//       }
//     }
//   }
//   return result;
//}
//console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// function threeSumBruteForce(nums) { // O(n3) solution here
//   //   // O(n3) Not Preffered
//   const len = nums.length;
//   const result = [];
//   for (let i = 0; i < len - 2; i++) {
//     for (let j = i + 1; j < len - 1; j++) {
//       for (let k = j + 1; k < len; k++) {
//         const sum = nums[i] + nums[j] + nums[k];
//         if (sum === 0) {
//           const triplet = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);

//           if (
//             !result.some((r) => JSON.stringify(r) === JSON.stringify(triplet))
//           ) {
//             result.push(triplet);
//           }
//         }
//       }
//     }
//   }
//   return result;
// }

// console.log(threeSumBruteForce([-1, 0, 1, 2, -1, -4]));

// ---------#------------#----------#-----------#----------#---------
// Q-3. Your friend is typing his ‘name’ into a keyboard. Sometimes, when typing a character ‘c’, the
// key might get long pressed, and the character will be ‘typed’ 1 or more times.
// You examine the typed characters of the keyboard. Return ‘True’ if it is possible that it was
// your friend's name, with some characters (possibly none) being long pressed.
// Leetcode 925 (10 marks)
// Question was- https://leetcode.com/problems/long-pressed-name/description/
// Solution Link- https://leetcode.com/problems/long-pressed-name/submissions/1490602477/
// Description - We use two pointers, i for name and j for typed. // We loop through typed and compare it with the current character in name. // If the characters match, we increment i to check the next character in name. // If typed[j] does not match name[i], we check if it's the same as typed[j-1] (i.e., if the character is being repeated, which is allowed for long presses). // If we reach the end of typed and have processed all of name, the answer is true; otherwise, false.
// Time Complexity- O(n + m) // n is length of name & m is length of typed
// Space Complexity- O(1)

//  # Solution

// function isLongPressedName(name, typed) {
//     let i = 0;
//     for (let j = 0; j < typed.length; j++) {
//         if (i < name.length && name[i] === typed[j]) {
//             i++;
//         } else if (typed[j] !== typed[j - 1]) {
//             return false;
//         }
//     }
//     return i === name.length;

// # brute force (Long code) solution #
// let i = 0; // Pointer for 'name'
// let j = 0; // Pointer for 'typed'

// while (j < typed.length) {
//     if (i < name.length && name[i] === typed[j]) {
//         // Characters match, move both pointers
//         i++;
//         j++;
//     } else if (j > 0 && typed[j] === typed[j - 1]) {
//         // Handle long press: typed[j] matches the previous character in typed
//         j++;
//     } else {
//         // Characters don't match and it's not a long press
//         return false;
//     }
// }
// // Ensure all characters in 'name' were matched
// return i === name.length;
// }

// const named = "alex";
// const typed = "aaleex"
// console.log(isLongPressedName(named, typed));

// ---------#------------#----------#-----------#----------#---------
// Q-4. You are given an integer array arr of length n that represents a permutation of the integers in
// the range [0, n - 1].
// We split arr into some number of chunks (i.e., partitions), and individually sort each chunk.
// After concatenating them, the result should equal the sorted array.
// Return the largest number of chunks we can make to sort the array
// Leetcode 769 (15 marks)
// Question was- https://leetcode.com/problems/max-chunks-to-make-sorted/description/
// Solution Link- https://leetcode.com/problems/max-chunks-to-make-sorted/submissions/1490962508/
// Time Complexity- O(n)
// Space Complexity- O(1)

// Solutions
// ## ~~~~~~~~~~~ Optimized Approach ~~~~~~~~
// var maxChunksToSorted = function(arr) {
//     const len = arr.length;
//     let max = -1;
//     let chunks = 0;
//     for(let i=0; i<len; i++){
//         max = Math.max(max, arr[i]);
//         if(max === i){
//             chunks++;
//         }
//     }
//     return chunks;
// };
// const arr = [4,3,2,1,0];
// console.log(maxChunksToSorted(arr))

// ## ~~~~~~~~~~~ brute force Approach ~~~~~~~~
// var maxChunksToSortedBruteForce = function(arr) {
//     let n = arr.length;
//     let chunks = 0;

//     for (let i = 0; i < n; i++) {
//         // Check if the array is sorted up to this point
//         let left = arr.slice(0, i + 1).sort((a, b) => a - b);
//         let right = arr.slice(i + 1).sort((a, b) => a - b);

//         let merged = left.concat(right);
//         let sorted = [...arr].sort((a, b) => a - b);

//         if (JSON.stringify(merged) === JSON.stringify(sorted)) {
//             chunks++;
//         }
//     }

//     return chunks;
// };

// const arr = [1,0,2,3,4]
// console.log(maxChunksToSortedBruteForce(arr))

// ---------#------------#----------#-----------#----------#---------
// Q-5. Given an array nums with n objects colored red, white, or blue, sort them in place so that
// objects of the same color are adjacent, with the colors in the order red, white, and blue.
// We will use the integers 0, 1, and 2 to represent the colors red, white, and blue, respectively.
// You must solve this problem without using the library's sort function.
// Leetcode 75 (20 marks)
// Question was- https://leetcode.com/problems/sort-colors/description/
// Solution Link- https://leetcode.com/problems/sort-colors/submissions/1491584308/
// Description -
// Time Complexity- O(n)
// Space Complexity- O(1)// because not use any space

// ~~~~~~~~~~~~~~Optimized Solution ~~~~~~~~~~~~~~~~~
// var sortColors = function(nums) {
//     let len = nums.length;
//     let i=0, start=0, end = len-1;
//     while(i <= end){
//         if(nums[i] === 0){
//             [nums[start], nums[i]] = [nums[i], nums[start]]
//             start++;
//             i++;
//         }
//         else if(nums[i] === 2){
//             [nums[end], nums[i]] = [nums[i], nums[end]]
//             end--;
//         }
//         else{
//             i++;
//         }
//     }
//     return nums
// };

// const arr = [2,0,2,1,1,0]
// console.log(sortColors(arr))

// ~~~~~~~~~~~~~~~~~~~~~~Brute Force Approach~~~~~~~~~~~~~~~~~~~~~~~~~
// function sortColors(nums) { // O(n) & O(1)
//     let count0 = 0, count1 = 0, count2 = 0;

//     // Count occurrences of 0, 1, and 2
//     for (let num of nums) {
//         if (num === 0) count0++;
//         else if (num === 1) count1++;
//         else count2++;
//     }

//     // Overwrite nums with sorted values
//     let i = 0;
//     while (count0-- > 0) nums[i++] = 0;
//     while (count1-- > 0) nums[i++] = 1;
//     while (count2-- > 0) nums[i++] = 2;

//     return nums
// }

//  const arr = [2,0,2,1,1,0]
//  console.log(sortColors(arr))

// ---------#------------#----------#-----------#----------#---------
//Q-6.Given an integer array nums, find the subarray with the largest sum, and return its sum.
// Leetcode 53 (15 marks)
// Question was- https://leetcode.com/problems/maximum-subarray/description
// Solution Link- https://leetcode.com/problems/maximum-subarray/submissions/1491609978/
// Description -
// Time Complexity- O(n) // linear time taking
// Space Complexity- O(1) // not use any extra space
// ~~~~~~~~~~~~~~~~~~ Optimized Solution ~~~~~~~~~~~~~~~~~~~~~~~
// function maxSubArraySum(nums) {
//   let currentSum = nums[0]; // Initialize to the first element
//   let maxSum = nums[0]; // Initialize to the first element

//   for (let i = 1; i < nums.length; i++) {
//     currentSum = Math.max(nums[i], currentSum + nums[i]); // Extend or reset subarray
//     maxSum = Math.max(maxSum, currentSum); // Update maxSum if currentSum is larger
//   }

//   return maxSum;
// }

// const nums = [-2,1,-3,4,-1,2,1,-5,4];
// console.log(maxSubArraySum(nums));



// ---------#------------#----------#-----------#----------#---------
//Q-7. Given an integer array nums, return an array answer such that answer[i] is equal to the
// product of all the elements of nums except nums[i].
// Leetcode 238 (15 marks)
// Question was- https://leetcode.com/problems/product-of-array-except-self/description/
// Solution Link- https://leetcode.com/problems/product-of-array-except-self/submissions/1491636094/
// Description -
// Time Complexity- O(n)
// Space Complexity- O(1) // additional space, as the result is built in-place in answer

// ~~~~~~~~~~Optimized Solution O(n) & O(n)

// var productExceptSelf = function(nums) {
//     const n = nums.length;
//     const result = new Array(n).fill(1); 

//     // Calculate prefix products
//     let prefix = 1;
//     for (let i = 0; i < n; i++) {
//         result[i] *= prefix;
//         prefix *= nums[i];
//     }

//     // Calculate suffix products
//     let suffix = 1;
//     for (let i = n - 1; i >= 0; i--) {
//         result[i] *= suffix;
//         suffix *= nums[i];
//     }

//     return result;
// };

// const nums = [1,2,3,4]
// console.log(productExceptSelf(nums))

