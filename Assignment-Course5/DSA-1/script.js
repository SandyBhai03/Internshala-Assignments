// Q-1.There are n kids with candies. You are given an integer array candies, where each candies[i]
// represents the number of candies the ith kid has, and an integer extraCandies, denoting the
// number of extra candies that you have.
// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the
// extraCandies, they will have the greatest number of candies among all the kids, or false
// otherwise.
// Leetcode 1431 (20 marks)

//Question was- https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/
// Solution Link- https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/submissions/1483558617/
// Time Complexity: O(n)
// Space Complexity: O(1)

// var kidsWithCandies = function(candies, extraCandies) {
//     const max = candies.reduce((a,b) => Math.max(a,b), -Infinity); // find Max value

//     // This Solution👇 time and Space = O(n) & O(1)
//     for (let i = 0; i < candies.length; i++) {
//         // Modify the candies array in place to store boolean values
//         candies[i] = candies[i] + extraCandies >= max;
//     }
//     return candies; // The original array now holds the boolean results

//     // This Solution👇 time and Space = O(n) & O(n)
//     // const output = []; //Initialize an empty array for results
//     // for (const candy of candies){
//     //     if( candy + extraCandies >= max ){
//     //         output.push(true) // add true if condition is true
//     //     }
//     //     else{
//     //         output.push(false) // add false if condition is false
//     //     }
//     // }
//     // return output;
// };

// const candies = [2,3,5,1,3]
// const extraCandies = 3;
// const ans = kidsWithCandies(candies, extraCandies)
// console.log(ans)


// --#------$------#------$------#------$------#------$-------#-------$-------#--
// Q-2. Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such
// that |nums[i] - nums[j]| == k Leetcode 2006 (20 marks)
// Question was - https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/description/
// Solution Link - https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/submissions/1487226106/
//Time Complexity - O(n)
//Space Complexity - O(n)

// var countKDifference = function (nums, k) {
//   // optimized code
//   let count = 0;
//   let freq = {};

//   for (let num of nums) {
//     // Check if (num - k) exists in the hashmap
//     if (freq[num - k] !== undefined) {
//       count += freq[num - k];
//     }
//     // Check if (num + k) exists in the hashmap
//     if (freq[num + k] !== undefined) {
//       count += freq[num + k];
//     }
//     // Update the frequency of the current number
//     freq[num] = (freq[num] || 0) + 1;
//   }

//   return count;

//   // O(n2)
//   // const n = nums.length;
//   // // const map = new Map();
//   // let count = 0 ;
//   // for(let i=0; i<n; i++){
//   //     for(let j=i+1; j<n; j++){
//   //         if(nums[i] - nums[j] == k || nums[j] - nums[i] == k){
//   //             count++;
//   //         }
//   //     }
//   // }
//   // return count;
// };

// const nums = [1, 2, 2, 1],
//   k = 1;

// const res = countKDifference(nums, k);
// console.log(res);


// --#------$------#------$------#------$------#------$-------#-------$-------#--
//Q-3. You are given two 0-indexed integer arrays nums1 and nums2 of sizes n and m, respectively.
// Consider calculating the following values:
// The number of indices i such that 0 <= i < n and nums1[i] occurs at least once in nums2.
// The number of indices i such that 0 <= i < m and nums2[i] occurs at least once in nums1.
// Return an integer array answer of size 2 containing the two values in the above order.
// Leetcode 2956 (20 marks)
// Solution

// Question was - https://leetcode.com/problems/find-common-elements-between-two-arrays/description/
// Solution Link - https://leetcode.com/problems/find-common-elements-between-two-arrays/submissions/1487417275/
// Time Complexity - O(n+m)
// Space Complexity - O(n+m)

// var findIntersectionValues = function (nums1, nums2) {
//   const set1 = new Set(nums1);
//   const set2 = new Set(nums2);
//   let count1 = 0,
//     count2 = 0;

//     for(let num of nums1){
//         if(set2.has(num)){
//             count1++;
//         }
//     }

//     for(let num of nums2){
//         if(set1.has(num)){
//             count2++;
//         }
//     }
//     return [count1, count2];
// };

// const nums1 = [4, 3, 2, 3, 1];
// const nums2 = [2, 2, 5, 2, 3, 6];
// const ans = findIntersectionValues(nums1, nums2);
// console.log(ans);


// --#------$------#------$------#------$------#------$-------#-------$-------#--
// Q-4. Given an array of integers nums, return the number of good pairs.
//A pair (i, j) is called good if nums[i] == nums[j] and i < j. Leetcode 1512 (20 marks)

// Question was - https://leetcode.com/problems/number-of-good-pairs/description/
// Solution Link - https://leetcode.com/problems/number-of-good-pairs/submissions/1487459465/
// Time Complexity - O(n)
// Space Complexity - O(u) // u is number of unique elements

// # Solution #
// var numIdenticalPairs = function(nums) {
//     let count = 0;
//     let freqMap = new Map();

//     for(let num of nums){
//         if(freqMap.has(num)){
//             count += freqMap.get(num);
//             freqMap.set(num, freqMap.get(num)+1)
//         } else{
//             freqMap.set(num, 1)
//         }
//     }
//     return count;
// }

// const arr = [1,2,3,1,1,3];

// const res = numIdenticalPairs(arr)
// console.log(res)


// --#------$------#------$------#------$------#------$-------#-------$-------#--
// Q.5- Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn]. Leetcode 1470 (20 marks)
// Question was - https://leetcode.com/problems/shuffle-the-array/
// Solution Link- https://leetcode.com/problems/shuffle-the-array/submissions/1487493168/
// Time complexity- O(n)
// Space Complexity- O(n)

var shuffle = function(nums, n) {
    const newArr = [];
    for(let i=0; i<n; i++){
        newArr.push(nums[i], nums[i+n])
    }
    return newArr;
};

const arr = [2,5,1,3,4,7], n = 3;

const ans = shuffle(arr, n);
console.log(ans);



