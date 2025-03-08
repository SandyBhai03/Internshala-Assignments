// Q.1 - The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and
// 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.
// Implement Using Queue
// 1700. Number of Students Unable to Eat Lunch (15 marks)
// Note=> Create A Custom class for implementing Queues on Leetcode Solution (5 marks) Total - 20 marks

// Question was - https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/description/
// Solution Link- https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/submissions/1565933870/
// Description- 
// * Function to count the number of students unable to eat lunch.
// * Each student prefers either circular (0) or square (1) sandwiches.
// * Students take sandwiches in the order they appear if their preference matches.
// * If a student at the front doesn't take a sandwich, they go to the end of the queue.
// * If all remaining students can't take any sandwiches, the loop stops.
// Time Complexity: O(n) - Each student is processed at most twice.
// Space Complexity: O(n) - use a queue to store students. 

// ~~~~~~~~~~~ Code with Create Custum Queue ~~~~~~~~~~~
class CustomQueue {
    constructor() {
        this.queue = [];
    }
    
    enqueue(value) {
        this.queue.push(value);
    }
    
    dequeue() {
        return this.queue.shift();
    }
    
    front() {
        return this.queue.length > 0 ? this.queue[0] : null;
    }
    
    isEmpty() {
        return this.queue.length === 0;
    }
    
    size() {
        return this.queue.length;
    }
}

var countStudents = function(students, sandwiches) {
    let studentQueue = new CustomQueue();
    for (let student of students) {
        studentQueue.enqueue(student);
    }
    
    let sandwichIndex = 0;
    let attempts = 0;
    
    while (!studentQueue.isEmpty() && attempts < studentQueue.size()) {
        if (studentQueue.front() === sandwiches[sandwichIndex]) {
            studentQueue.dequeue();
            sandwichIndex++;
            attempts = 0; // Reset attempts since a student ate
        } else {
            studentQueue.enqueue(studentQueue.dequeue()); // Rotate student
            attempts++;
        }
    }
    
    return studentQueue.size();
};

// Example usage:
let students = [1,1,0,0];
let sandwiches = [0,1,0,1];
console.log(countStudents(students, sandwiches)); // Output: 0
// ---------------------------------------------------------------
//Q-2. Given a binary tree, find its minimum depth. The minimum depth is the number of nodes along the
// shortest path from the root node down to the nearest leaf node.
// 111. Minimum Depth of Binary Tree (20 marks)

// Question was - https://leetcode.com/problems/minimum-depth-of-binary-tree/description/
// Solution Link- https://leetcode.com/problems/minimum-depth-of-binary-tree/submissions/1566978304/
// Description- 
// i) If the root is null, return 0.
// ii) Use a queue to perform level-order traversal (BFS).
// iii) Start with the root node at depth 1 and add it to the queue.
// iv) While the queue is not empty:
//    a) Remove a node and check if it's a leaf node (no left and right children). If it is, return the current depth.
//    b) Otherwise, add its children to the queue with depth + 1.
// v) The first leaf encountered gives the minimum depth.
// Time Complexity-  O(n) 
// Space Complexity-  O(n) 

// ~~~~~~~~~~~~~ Optimal Solution O(n) and o(n) ~~~~~~~~~~~~~~~~~
var minDepth = function(root) {
    if (!root) return 0;
    
    let queue = [[root, 1]]; // Store node and depth
    
    while (queue.length > 0) {
        let [node, depth] = queue.shift();
        
        // If it's a leaf node, return depth
        if (!node.left && !node.right) return depth;
        
        if (node.left) queue.push([node.left, depth + 1]);
        if (node.right) queue.push([node.right, depth + 1]);
    }
    
    return 0; // Should never reach here
};

// ~~~~~~~~~~~~~ Brute Force Solution O(n) and o(n)~~~~~~~~~~~~~~~~~
var minDepth = function(root) {
    if (!root) return 0;
    if (!root.left) return 1 + minDepth(root.right);
    if (!root.right) return 1 + minDepth(root.left);
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};


// -----------------------------------------------------------
// Q-3. Given the root of a binary tree, return the postorder traversal of its nodes' values. 145. Binary Tree Postorder Traversal (20 marks)
// Question was -https://leetcode.com/problems/binary-tree-postorder-traversal/description/ 
// Solution Link- https://leetcode.com/problems/binary-tree-postorder-traversal/submissions/1566982587/
// Description- 
// i)Initialize an empty stack and an output array.
// ii)Push the root onto the stack.
// iii)While the stack is not empty:
//      a)Pop a node, insert it at the beginning of the output array.
//      b)Push its left child to the stack if it exists.
//      c)Push its right child to the stack if it exists.
// iv)Return the output array.

// Time Complexity- O(n) // as each node is processed once.
// Space Complexity- O(n) // for storing nodes in the stack in the worst case.

// ~~~~~~~~~~~~~ Optimal Solution O(n) and o(n) ~~~~~~~~~~~~~~~~~

var postorderTraversal = function(root) {
    if (!root) return [];
    
    let stack = [root], output = [];
    
    while (stack.length > 0) {
        let node = stack.pop();
        output.unshift(node.val); // Insert at the beginning
        
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
    }
    
    return output;
};

// ~~~~~~~~~~~~~ Brute Force Solution O(n) and o(n) ~~~~~~~~~~~~~~~~~

var postorderTraversal = function(root) {
    if (!root) return [];
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};

// -----------------------------------------------------------
// Q-4 Given the root of a binary tree, return the preorder traversal of its nodes' values. Leetcode Problem no-144. Binary Tree Preorder Traversal (20 marks)
// Question was - https://leetcode.com/problems/binary-tree-preorder-traversal/description/
// Solution Link- https://leetcode.com/problems/binary-tree-preorder-traversal/submissions/1567069512/
// Description- 
// i) Initialize an empty stack and an output array.
// ii) Push the root onto the stack.
// iii) While the stack is not empty:
//         a) Pop a node, add its value to the output.
//         b) Push its right child to the stack if it exists.
//         c) Push its left child to the stack if it exists.
// iV) Return the output array.
//Time Complexity- O(N) as each node is processed once.
// Space Complexity- O(N) for storing nodes in the stack in the worst case.

// ~~~~~~~~~~~~~ Optimal Solution O(n) and o(n) ~~~~~~~~~~~~~~~~~
var preorderTraversal = function(root) {
    if (!root) return [];
    
    let stack = [root], output = [];
    
    while (stack.length > 0) {
        let node = stack.pop();
        output.push(node.val); // Process the node
        
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
    }
    
    return output;
};

// ~~~~~~~~~~~~~ Brute Force Solution O(n) and o(n) ~~~~~~~~~~~~~~~~~
var preorderTraversal = function(root) {
    if (!root) return [];
    return [root.val, ...preorderTraversal(root.left), ...preorderTraversal(root.right)];
};

// -----------------------------------------------------------
// Q-5. Given the root of a binary tree, return the Inorder traversal of its nodes' values. Leetcode problem no-94. Binary Tree Inorder Traversal (20 marks)
// Question was - https://leetcode.com/problems/binary-tree-inorder-traversal/description/
// Solution Link- https://leetcode.com/problems/binary-tree-inorder-traversal/submissions/1567092195/
// Description- 
// Initialize an empty stack and an empty output array.
// Start from the root and push all left nodes onto the stack.
// While the stack is not empty:
//    a) Pop a node from the stack and add its value to the output.
//    b) Move to the right subtree and push all left nodes onto the stack.
// Return the output array.
// Time Complexity- O(N) as each node is processed once.
// Space Complexity- O(N) for storing nodes in the stack in the worst case.

// ~~~~~~~~~~~~~ Optimal Solution O(n) and O(n) ~~~~~~~~~~~~~~~
var inorderTraversal = function(root) {
    let stack = [], output = [];
    let current = root;

    while (current || stack.length > 0) {
        while (current) {
            stack.push(current);
            current = current.left;
        }
        
        current = stack.pop();
        output.push(current.val);
        current = current.right;
    }
    
    return output;
};


// ~~~~~~~~~~~ Brute Force Solution O(n) and o(n) ~~~~~~~~~~~~~
var inorderTraversal = function(root) {
    if (!root) return [];
    return [...inorderTraversal(root.left), root.val, ...inorderTraversal(root.right)];
};
