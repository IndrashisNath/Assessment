/**
 * Task 1: Calculates the area of a rectangle.
 *
 * @param {number} width - The width of the rectangle.
 * @param {number} height - The height of the rectangle.
 * @return {number} The computed area of the rectangle.
 */

function calculateArea(width: number, height: number): number {
  const area = width * height;
  return area;
}

console.log(calculateArea(5, 6));

/**
 * Task 2: Defines a user interface with a name, age, and optional email.
 * Creates an array of 3 users using this interface.
 */

interface User {
  name: string;
  age: number;
  email?: string;
}

const arrayUsers: User[] = [
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

function reverseArray<T>(array: T[]): T[] {
  const arrayReversed = [...array].reverse();
  return arrayReversed;
}

console.log(reverseArray(arrayUsers));
