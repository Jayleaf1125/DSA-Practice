/* Given a sorted array of n integers and a target value, determine if the target exists in the array in logarithmic time using the binary search algorithm. If target exists in the array, print the index of it. */

// Linear Search

function BinarySearchLinear(n, target) {
    for (let i = 0; i < n.length; i++) {
        const number = n[i]; 
        if (number === target) {
            return `Element found at index ${i}`;
        }
    }

    return `Element not found`
}

// console.log(BinarySearchLinear([2, 3, 5, 7, 9], 7));
// console.log(BinarySearchLinear([1, 4, 5, 8, 9], 2))

/* BinarySearchLinear's Solution: Time Complexity: O(n) => Checks each array element for the target value until a match is found or all the elements have been searched. Space Complexity: O(n) => Iterates based on the length of the input 'n'. This approach does not take advatnage of the fact that the input is sorted */