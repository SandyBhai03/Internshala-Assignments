// DSA-2 (Assignment-4)
// Q-1. Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input
// string is valid. (Leetcode no 20) Valid Parantheses (20 marks)

//Question was - https://leetcode.com/problems/valid-parentheses/description/
 //Solution Link- https://leetcode.com/problems/valid-parentheses/submissions/1530860443/
// Description- 
// Time Complexity- O(n)
// Space Complexity- O(n)

function isValid(s) {
    const stack = [];
    const matchingBrackets = { ')': '(', '}': '{', ']': '[' };

    for (let char of s) {
        if (char in matchingBrackets) { // If it's a closing bracket
            if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
                return false;
            }
        } else { // If it's an opening bracket
            stack.push(char);
        }
    }
    
    return stack.length === 0;
}

// Example usage:
console.log(isValid("(){}[]")); // true
console.log(isValid("([)]"));   // false
console.log(isValid("{[]}"));   // true

// -----------------------------------------------------------
//Q-2. The next greater element of some element x in an array is the first greater element that
// is to the right of x in the same array.
// (Leetcode Problem no - 496). Next Greater Element I (20 marks)

// Question was - https://leetcode.com/problems/next-greater-element-i/description/ 
// Solution Link- https://leetcode.com/problems/next-greater-element-i/submissions/1530866980/
// Description- 
// Time Complexity-  O(n+m) // (for sorting array)
// Space Complexity-  O(n) (Use extra space for HashMap and Stack)

function nextGreaterElement(nums1, nums2) {
    let stack = [];
    let map = new Map();

    // Process nums2 using a monotonic decreasing stack
    for (let num of nums2) {
        while (stack.length > 0 && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }

    // Populate result array using the map
    return nums1.map(num => map.get(num) || -1);
}

// Example usage:
console.log(nextGreaterElement([4,1,2], [1,3,4,2])); // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4]));   // [3,-1]


// -----------------------------------------------------------
// Q-3. You are given a string s consisting of lowercase English letters. A duplicate removal
// consists of choosing two adjacent and equal letters and removing them.
// We repeatedly make duplicate removals on s until we no longer can. Return the final
// string after all such duplicate removals have been made. It can be proven that the
// answer is unique.
// (Leetcode problem no - 1047). Remove All Adjacent Duplicates In String (20 marks)
// Question was - https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/
// Solution Link- https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/submissions/1558739045/
// Description- 
// Time Complexity- O(n)
// Space Complexity- O(n) Uses a stack for efficient duplicate removal.

function removeDuplicates(s) {
    let stack = [];

    for (let char of s) {
        if (stack.length > 0 && stack[stack.length - 1] === char) {
            stack.pop();  // Remove adjacent duplicate
        } else {
            stack.push(char);
        }
    }

    return stack.join("");  // Convert stack to string
}

// Example Usage:
console.log(removeDuplicates("abbaca")); // "ca"
console.log(removeDuplicates("azxxzy")); // "ay"


// ----------------------------------------------------------------
// Q-4 . Given n non-negative integers representing an elevation map where the width of each
// bar is 1, compute how much water it can trap after raining.Leetcode problem no 42. Trapping Rain Water (20 marks)
// Question was - https://leetcode.com/problems/trapping-rain-water/description/
// Solution Link- https://leetcode.com/problems/trapping-rain-water/submissions/1558734466/
// Description- 
//Time Complexity- O(n) Traverse height once
// Space Complexity- O(1)// Not use any extra spaces

// Optimal Approach TC- O(n), SC- O(1)
function trapTwoPointers(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let totalWater = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left]; // Update leftMax
            } else {
                totalWater += leftMax - height[left]; // Water trapped
            }
            left++; // Move left pointer
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right]; // Update rightMax
            } else {
                totalWater += rightMax - height[right]; // Water trapped
            }
            right--; // Move right pointer
        }
    }

    return totalWater;
}

// Example usage:
console.log(trapTwoPointers([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trapTwoPointers([4,2,0,3,2,5])); // 9

 // Brute Force Approach TC- O(n2) & SC- O(1)
// function trapBruteForce(height) {
//     let n = height.length;
//     let totalWater = 0;

//     for (let i = 0; i < n; i++) {
//         let leftMax = 0, rightMax = 0;

//         // Find max height to the left
//         for (let j = 0; j <= i; j++) {
//             leftMax = Math.max(leftMax, height[j]);
//         }

//         // Find max height to the right
//         for (let j = i; j < n; j++) {
//             rightMax = Math.max(rightMax, height[j]);
//         }

//         // Water trapped at index i
//         totalWater += Math.min(leftMax, rightMax) - height[i];
//     }

//     return totalWater;
// }

// // Example usage:
// console.log(trapBruteForce([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
// console.log(trapBruteForce([4,2,0,3,2,5])); // Output: 9

// -----------------------------------------------------------
// Q-5 . Given an array of integers heights representing the histogram's bar height where the
//width of each bar is 1, return the area of the largest rectangle in the histogram.Leetcode Problem no 84. Largest Rectangle in Histogram (20 marks)
// Question was - https://leetcode.com/problems/largest-rectangle-in-histogram/description/
// Solution Link- https://leetcode.com/problems/largest-rectangle-in-histogram/submissions/1558735654/
// Description- 
// Time Complexity- O(n) Each bar is pushed and popped at most once.
// Space Complexity- O(n)

// Optimal Solution TC- O(n), SC- O(n)
function largestRectangleStack(heights) {
    let stack = [];
    let maxArea = 0;
    let n = heights.length;

    for (let i = 0; i <= n; i++) {
        let currentHeight = (i === n) ? 0 : heights[i];

        while (stack.length > 0 && currentHeight < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }

        stack.push(i);
    }

    return maxArea;
}

// Example Usage:
console.log(largestRectangleStack([2,1,5,6,2,3])); // Output: 10
console.log(largestRectangleStack([2,4])); // Output: 4

// Brute Force Approach TC- O(n2), SC- O(1)
// function largestRectangleBruteForce(heights) {
//     let maxArea = 0;
//     let n = heights.length;

//     for (let i = 0; i < n; i++) {
//         let minHeight = heights[i];

//         for (let j = i; j < n; j++) {
//             minHeight = Math.min(minHeight, heights[j]); // Find minimum height in range
//             let width = j - i + 1;
//             maxArea = Math.max(maxArea, minHeight * width);
//         }
//     }

//     return maxArea;
// }

// // Example Usage:
// console.log(largestRectangleBruteForce([2,1,5,6,2,3])); // Output: 10
// console.log(largestRectangleBruteForce([2,4])); // Output: 4









