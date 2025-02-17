/**
 * Task 1: Calculates the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @return {number} The computed area of the rectangle.
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function calculateArea(width, height) {
    var area = width * height;
    return area;
}
console.log(calculateArea(5, 6));
var arrayUsers = [
    {
        name: "User1",
        age: 20,
        email: "user1@example.com",
    },
    {
        name: "User2",
        age: 30,
        email: "user2@example.com",
    },
    {
        name: "User3",
        age: 40,
        email: "user3@example.com",
    },
];
console.log(arrayUsers);
/**
 * Task 3: Reverses the order of elements in an array. The order of the original array is not changed.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be reversed.
 * @return {T[]} A new array with elements revered.
 */
function reverseArray(array) {
    var arrayReversed = __spreadArray([], array, true).reverse();
    return arrayReversed;
}
console.log(reverseArray(arrayUsers));
