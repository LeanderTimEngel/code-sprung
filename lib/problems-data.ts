export interface Problem {
  id: number;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  description: string;
  examples: {
    input: string;
    output: string;
    explanation: string;
  }[];
  initialCode: string;
  solution: string;
  testCases: {
    test: string;
    description: string;
  }[];
  videoExplanation: string;
}

export const problems: Problem[] = [

  {
    id: 1,
    title: 'Sum of Two Numbers',
    difficulty: 'Easy',
    category: 'Functions',
    description: `Write a function called \`sum\` that takes two numbers as parameters and returns their sum.`,
    examples: [
      {
        input: 'sum(3, 4)',
        output: '7',
        explanation: '3 + 4 = 7'
      },
      {
        input: 'sum(-1, 5)',
        output: '4',
        explanation: '-1 + 5 = 4'
      }
    ],
    initialCode: `function sum(a, b) {
      // Your code here
    }`,
    solution: `function sum(a, b) {
      return a + b;
    }`,
    testCases: [
      {
        test: 'assert(sum(3, 4) === 7, "sum(3, 4) should return 7");',
        description: 'sum(3, 4) should return 7'
      },
      {
        test: 'assert(sum(-1, 5) === 4, "sum(-1, 5) should return 4");',
        description: 'sum(-1, 5) should return 4'
      },
      {
        test: 'assert(sum(0, 0) === 0, "sum(0, 0) should return 0");',
        description: 'sum(0, 0) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 2,
    title: 'Find the Largest Number',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findLargest\` that takes an array of numbers as a parameter and returns the largest number in the array.`,
    examples: [
      {
        input: 'findLargest([1, 4, 2, 7, 3])',
        output: '7',
        explanation: '7 is the largest number in the array'
      },
      {
        input: 'findLargest([-1, -5, -2])',
        output: '-1',
        explanation: '-1 is the largest number in the array of negative numbers'
      }
    ],
    initialCode: `function findLargest(numbers) {
      // Your code here
    }`,
    solution: `function findLargest(numbers) {
      return Math.max(...numbers);
    }`,
    testCases: [
      {
        test: 'assert(findLargest([1, 4, 2, 7, 3]) === 7, "findLargest([1, 4, 2, 7, 3]) should return 7");',
        description: 'findLargest([1, 4, 2, 7, 3]) should return 7'
      },
      {
        test: 'assert(findLargest([-1, -5, -2]) === -1, "findLargest([-1, -5, -2]) should return -1");',
        description: 'findLargest([-1, -5, -2]) should return -1'
      },
      {
        test: 'assert(findLargest([0]) === 0, "findLargest([0]) should return 0");',
        description: 'findLargest([0]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 3,
    title: 'Reverse a String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`reverseString\` that takes a string as a parameter and returns the string reversed.`,
    examples: [
      {
        input: 'reverseString("hello")',
        output: '"olleh"',
        explanation: 'The characters of "hello" in reverse order spell "olleh"'
      },
      {
        input: 'reverseString("JavaScript")',
        output: '"tpircSavaJ"',
        explanation: 'The characters of "JavaScript" in reverse order spell "tpircSavaJ"'
      }
    ],
    initialCode: `function reverseString(str) {
      // Your code here
    }`,
    solution: `function reverseString(str) {
      return str.split('').reverse().join('');
    }`,
    testCases: [
      {
        test: 'assert(reverseString("hello") === "olleh", "reverseString(\\"hello\\") should return \\"olleh\\"");',
        description: 'reverseString("hello") should return "olleh"'
      },
      {
        test: 'assert(reverseString("JavaScript") === "tpircSavaJ", "reverseString(\\"JavaScript\\") should return \\"tpircSavaJ\\"");',
        description: 'reverseString("JavaScript") should return "tpircSavaJ"'
      },
      {
        test: 'assert(reverseString("") === "", "reverseString(\\"\\") should return \\"\\"");',
        description: 'reverseString("") should return ""'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 4,
    title: 'Factorial',
    difficulty: 'Medium',
    category: 'Recursion',
    description: `Write a function called \`factorial\` that calculates the factorial of a non-negative integer. The factorial of a number is the product of all positive integers less than or equal to that number.
    
For example, the factorial of 5 (written as 5!) is 1 * 2 * 3 * 4 * 5 = 120.
    
Use recursion to solve this problem.`,
    examples: [
      {
        input: 'factorial(5)',
        output: '120',
        explanation: '5! = 1 * 2 * 3 * 4 * 5 = 120'
      },
      {
        input: 'factorial(0)',
        output: '1',
        explanation: 'The factorial of 0 is defined to be 1'
      }
    ],
    initialCode: `function factorial(n) {
      // Your code here
    }`,
    solution: `function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
      }
      return n * factorial(n - 1);
    }`,
    testCases: [
      {
        test: 'assert(factorial(5) === 120, "factorial(5) should return 120");',
        description: 'factorial(5) should return 120'
      },
      {
        test: 'assert(factorial(0) === 1, "factorial(0) should return 1");',
        description: 'factorial(0) should return 1'
      },
      {
        test: 'assert(factorial(10) === 3628800, "factorial(10) should return 3628800");',
        description: 'factorial(10) should return 3628800'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 5,
    title: 'FizzBuzz',
    difficulty: 'Easy',
    category: 'Control Flow',
    description: `Write a function called \`fizzBuzz\` that takes a number n as a parameter and returns an array of strings of length n where:
    
- For multiples of 3, the array contains "Fizz" instead of the number
- For multiples of 5, the array contains "Buzz" instead of the number
- For multiples of both 3 and 5, the array contains "FizzBuzz"
- For all other numbers, the array contains the number as a string`,
    examples: [
      {
        input: 'fizzBuzz(15)',
        output: '["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]',
        explanation: 'Numbers divisible by 3 are replaced with "Fizz", numbers divisible by 5 are replaced with "Buzz", and numbers divisible by both 3 and 5 are replaced with "FizzBuzz"'
      }
    ],
    initialCode: `function fizzBuzz(n) {
      // Your code here
    }`,
    solution: `function fizzBuzz(n) {
      const result = [];
      for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
          result.push("FizzBuzz");
        } else if (i % 3 === 0) {
          result.push("Fizz");
        } else if (i % 5 === 0) {
          result.push("Buzz");
        } else {
          result.push(i.toString());
        }
      }
      return result;
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(fizzBuzz(15)) === JSON.stringify(["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]), "fizzBuzz(15) should return the correct array");',
        description: 'fizzBuzz(15) should return the correct array'
      },
      {
        test: 'assert(fizzBuzz(5)[2] === "Fizz", "The third element should be \\"Fizz\\"");',
        description: 'The third element should be "Fizz"'
      },
      {
        test: 'assert(fizzBuzz(5)[4] === "Buzz", "The fifth element should be \\"Buzz\\"");',
        description: 'The fifth element should be "Buzz"'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 6,
    title: 'Palindrome Checker',
    difficulty: 'Medium',
    category: 'Strings',
    description: `Write a function called \`isPalindrome\` that takes a string as a parameter and returns true if the string is a palindrome, and false otherwise. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation, and capitalization.`,
    examples: [
      {
        input: 'isPalindrome("A man a plan a canal Panama")',
        output: 'true',
        explanation: 'The phrase reads the same forward and backward when ignoring spaces and capitalization'
      },
      {
        input: 'isPalindrome("race a car")',
        output: 'false',
        explanation: 'The phrase does not read the same forward and backward'
      }
    ],
    initialCode: `function isPalindrome(str) {
      // Your code here
    }`,
    solution: `function isPalindrome(str) {
      const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
      return cleanStr === cleanStr.split('').reverse().join('');
    }`,
    testCases: [
      {
        test: 'assert(isPalindrome("A man a plan a canal Panama") === true, "isPalindrome(\\"A man a plan a canal Panama\\") should return true");',
        description: 'isPalindrome("A man a plan a canal Panama") should return true'
      },
      {
        test: 'assert(isPalindrome("race a car") === false, "isPalindrome(\\"race a car\\") should return false");',
        description: 'isPalindrome("race a car") should return false'
      },
      {
        test: 'assert(isPalindrome("Was it a car or a cat I saw?") === true, "isPalindrome(\\"Was it a car or a cat I saw?\\") should return true");',
        description: 'isPalindrome("Was it a car or a cat I saw?") should return true'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 7,
    title: 'Multiply Two Numbers',
    difficulty: 'Easy',
    category: 'Functions',
    description: `Write a function called \`multiply\` that takes two numbers as parameters and returns their product.`,
    examples: [
      {
        input: 'multiply(3, 4)',
        output: '12',
        explanation: '3 * 4 = 12'
      },
      {
        input: 'multiply(-2, 5)',
        output: '-10',
        explanation: '-2 * 5 = -10'
      }
    ],
    initialCode: `function multiply(a, b) {
      // Your code here
    }`,
    solution: `function multiply(a, b) {
      return a * b;
    }`,
    testCases: [
      {
        test: 'assert(multiply(3, 4) === 12, "multiply(3, 4) should return 12");',
        description: 'multiply(3, 4) should return 12'
      },
      {
        test: 'assert(multiply(-2, 5) === -10, "multiply(-2, 5) should return -10");',
        description: 'multiply(-2, 5) should return -10'
      },
      {
        test: 'assert(multiply(0, 100) === 0, "multiply(0, 100) should return 0");',
        description: 'multiply(0, 100) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 8,
    title: 'Find the Minimum Number',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findMinimum\` that takes an array of numbers as a parameter and returns the smallest number in the array.`,
    examples: [
      {
        input: 'findMinimum([1, 4, 2, 7, 3])',
        output: '1',
        explanation: '1 is the smallest number in the array'
      },
      {
        input: 'findMinimum([-1, -5, -2])',
        output: '-5',
        explanation: '-5 is the smallest number in the array of negative numbers'
      }
    ],
    initialCode: `function findMinimum(numbers) {
      // Your code here
    }`,
    solution: `function findMinimum(numbers) {
      return Math.min(...numbers);
    }`,
    testCases: [
      {
        test: 'assert(findMinimum([1, 4, 2, 7, 3]) === 1, "findMinimum([1, 4, 2, 7, 3]) should return 1");',
        description: 'findMinimum([1, 4, 2, 7, 3]) should return 1'
      },
      {
        test: 'assert(findMinimum([-1, -5, -2]) === -5, "findMinimum([-1, -5, -2]) should return -5");',
        description: 'findMinimum([-1, -5, -2]) should return -5'
      },
      {
        test: 'assert(findMinimum([0, 0, 0]) === 0, "findMinimum([0, 0, 0]) should return 0");',
        description: 'findMinimum([0, 0, 0]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 9,
    title: 'Count Vowels in a String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`countVowels\` that takes a string as a parameter and returns the number of vowels (a, e, i, o, u) in the string. The function should be case-insensitive.`,
    examples: [
      {
        input: 'countVowels("Hello World")',
        output: '3',
        explanation: 'The vowels are e, o, o'
      },
      {
        input: 'countVowels("JavaScript")',
        output: '3',
        explanation: 'The vowels are a, a, i'
      }
    ],
    initialCode: `function countVowels(str) {
      // Your code here
    }`,
    solution: `function countVowels(str) {
      const vowels = 'aeiou';
      let count = 0;
      for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
          count++;
        }
      }
      return count;
    }`,
    testCases: [
      {
        test: 'assert(countVowels("Hello World") === 3, "countVowels(\\"Hello World\\") should return 3");',
        description: 'countVowels("Hello World") should return 3'
      },
      {
        test: 'assert(countVowels("JavaScript") === 3, "countVowels(\\"JavaScript\\") should return 3");',
        description: 'countVowels("JavaScript") should return 3'
      },
      {
        test: 'assert(countVowels("BCDFG") === 0, "countVowels(\\"BCDFG\\") should return 0");',
        description: 'countVowels("BCDFG") should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 10,
    title: 'Check Even or Odd',
    difficulty: 'Easy',
    category: 'Control Flow',
    description: `Write a function called \`isEven\` that takes a number as a parameter and returns \`true\` if the number is even, and \`false\` otherwise.`,
    examples: [
      {
        input: 'isEven(4)',
        output: 'true',
        explanation: '4 is divisible by 2'
      },
      {
        input: 'isEven(7)',
        output: 'false',
        explanation: '7 is not divisible by 2'
      }
    ],
    initialCode: `function isEven(num) {
      // Your code here
    }`,
    solution: `function isEven(num) {
      return num % 2 === 0;
    }`,
    testCases: [
      {
        test: 'assert(isEven(4) === true, "isEven(4) should return true");',
        description: 'isEven(4) should return true'
      },
      {
        test: 'assert(isEven(7) === false, "isEven(7) should return false");',
        description: 'isEven(7) should return false'
      },
      {
        test: 'assert(isEven(0) === true, "isEven(0) should return true");',
        description: 'isEven(0) should return true'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 11,
    title: 'Remove Duplicates from Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`removeDuplicates\` that takes an array as a parameter and returns a new array with all duplicate elements removed.`,
    examples: [
      {
        input: 'removeDuplicates([1, 2, 2, 3, 4, 4, 5])',
        output: '[1, 2, 3, 4, 5]',
        explanation: 'Duplicates of 2 and 4 are removed'
      },
      {
        input: 'removeDuplicates(["a", "b", "a", "c"])',
        output: '["a", "b", "c"]',
        explanation: 'Duplicate "a" is removed'
      }
    ],
    initialCode: `function removeDuplicates(arr) {
      // Your code here
    }`,
    solution: `function removeDuplicates(arr) {
      return [...new Set(arr)];
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(removeDuplicates([1, 2, 2, 3, 4, 4, 5])) === JSON.stringify([1, 2, 3, 4, 5]), "removeDuplicates should remove all duplicates");',
        description: 'removeDuplicates should remove all duplicates'
      },
      {
        test: 'assert(JSON.stringify(removeDuplicates(["a", "b", "a", "c"])) === JSON.stringify(["a", "b", "c"]), "removeDuplicates should remove duplicate strings");',
        description: 'removeDuplicates should remove duplicate strings'
      },
      {
        test: 'assert(JSON.stringify(removeDuplicates([])) === JSON.stringify([]), "removeDuplicates should return an empty array when input is empty");',
        description: 'removeDuplicates should return an empty array when input is empty'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 12,
    title: 'Merge Two Arrays',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`mergeArrays\` that takes two arrays as parameters and returns a new array that combines the elements of both arrays.`,
    examples: [
      {
        input: 'mergeArrays([1, 2, 3], [4, 5, 6])',
        output: '[1, 2, 3, 4, 5, 6]',
        explanation: 'Elements of both arrays are combined'
      },
      {
        input: 'mergeArrays(["a", "b"], ["c", "d"])',
        output: '["a", "b", "c", "d"]',
        explanation: 'Elements of both string arrays are combined'
      }
    ],
    initialCode: `function mergeArrays(arr1, arr2) {
      // Your code here
    }`,
    solution: `function mergeArrays(arr1, arr2) {
      return arr1.concat(arr2);
      // Alternatively: return [...arr1, ...arr2];
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(mergeArrays([1, 2, 3], [4, 5, 6])) === JSON.stringify([1, 2, 3, 4, 5, 6]), "mergeArrays should correctly merge two number arrays");',
        description: 'mergeArrays should correctly merge two number arrays'
      },
      {
        test: 'assert(JSON.stringify(mergeArrays(["a", "b"], ["c", "d"])) === JSON.stringify(["a", "b", "c", "d"]), "mergeArrays should correctly merge two string arrays");',
        description: 'mergeArrays should correctly merge two string arrays'
      },
      {
        test: 'assert(JSON.stringify(mergeArrays([], [1, 2])) === JSON.stringify([1, 2]), "mergeArrays should handle empty first array");',
        description: 'mergeArrays should handle empty first array'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 13,
    title: 'Find the Length of a String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`getStringLength\` that takes a string as a parameter and returns its length.`,
    examples: [
      {
        input: 'getStringLength("Hello")',
        output: '5',
        explanation: '"Hello" has 5 characters'
      },
      {
        input: 'getStringLength("")',
        output: '0',
        explanation: 'An empty string has length 0'
      }
    ],
    initialCode: `function getStringLength(str) {
      // Your code here
    }`,
    solution: `function getStringLength(str) {
      return str.length;
    }`,
    testCases: [
      {
        test: 'assert(getStringLength("Hello") === 5, "getStringLength(\\"Hello\\") should return 5");',
        description: 'getStringLength("Hello") should return 5'
      },
      {
        test: 'assert(getStringLength("") === 0, "getStringLength(\\"\\" ) should return 0");',
        description: 'getStringLength("") should return 0'
      },
      {
        test: 'assert(getStringLength("JavaScript") === 10, "getStringLength(\\"JavaScript\\") should return 10");',
        description: 'getStringLength("JavaScript") should return 10'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 14,
    title: 'Convert Celsius to Fahrenheit',
    difficulty: 'Easy',
    category: 'Functions',
    description: `Write a function called \`celsiusToFahrenheit\` that takes a temperature in Celsius as a parameter and returns the temperature converted to Fahrenheit. The formula to convert Celsius to Fahrenheit is: \`(Celsius * 9/5) + 32\`.`,
    examples: [
      {
        input: 'celsiusToFahrenheit(0)',
        output: '32',
        explanation: '0°C is 32°F'
      },
      {
        input: 'celsiusToFahrenheit(100)',
        output: '212',
        explanation: '100°C is 212°F'
      }
    ],
    initialCode: `function celsiusToFahrenheit(celsius) {
      // Your code here
    }`,
    solution: `function celsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }`,
    testCases: [
      {
        test: 'assert(celsiusToFahrenheit(0) === 32, "celsiusToFahrenheit(0) should return 32");',
        description: 'celsiusToFahrenheit(0) should return 32'
      },
      {
        test: 'assert(celsiusToFahrenheit(100) === 212, "celsiusToFahrenheit(100) should return 212");',
        description: 'celsiusToFahrenheit(100) should return 212'
      },
      {
        test: 'assert(celsiusToFahrenheit(-40) === -40, "celsiusToFahrenheit(-40) should return -40");',
        description: 'celsiusToFahrenheit(-40) should return -40'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 15,
    title: 'Find the Average of Numbers',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findAverage\` that takes an array of numbers as a parameter and returns the average of those numbers.`,
    examples: [
      {
        input: 'findAverage([1, 2, 3, 4, 5])',
        output: '3',
        explanation: '(1 + 2 + 3 + 4 + 5) / 5 = 3'
      },
      {
        input: 'findAverage([10, 20, 30])',
        output: '20',
        explanation: '(10 + 20 + 30) / 3 = 20'
      }
    ],
    initialCode: `function findAverage(numbers) {
      // Your code here
    }`,
    solution: `function findAverage(numbers) {
      if (numbers.length === 0) return 0;
      const sum = numbers.reduce((acc, num) => acc + num, 0);
      return sum / numbers.length;
    }`,
    testCases: [
      {
        test: 'assert(findAverage([1, 2, 3, 4, 5]) === 3, "findAverage([1, 2, 3, 4, 5]) should return 3");',
        description: 'findAverage([1, 2, 3, 4, 5]) should return 3'
      },
      {
        test: 'assert(findAverage([10, 20, 30]) === 20, "findAverage([10, 20, 30]) should return 20");',
        description: 'findAverage([10, 20, 30]) should return 20'
      },
      {
        test: 'assert(findAverage([]) === 0, "findAverage([]) should return 0");',
        description: 'findAverage([]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 16,
    title: 'Capitalize First Letter of a String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`capitalizeFirstLetter\` that takes a string as a parameter and returns the string with the first letter of each word capitalized.`,
    examples: [
      {
        input: 'capitalizeFirstLetter("hello world")',
        output: '"Hello World"',
        explanation: 'First letters of "hello" and "world" are capitalized'
      },
      {
        input: 'capitalizeFirstLetter("javaScript is fun")',
        output: '"JavaScript Is Fun"',
        explanation: 'First letters of each word are capitalized'
      }
    ],
    initialCode: `function capitalizeFirstLetter(str) {
      // Your code here
    }`,
    solution: `function capitalizeFirstLetter(str) {
      return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }`,
    testCases: [
      {
        test: 'assert(capitalizeFirstLetter("hello world") === "Hello World", "capitalizeFirstLetter(\\"hello world\\") should return \\"Hello World\\"");',
        description: 'capitalizeFirstLetter("hello world") should return "Hello World"'
      },
      {
        test: 'assert(capitalizeFirstLetter("javaScript is fun") === "JavaScript Is Fun", "capitalizeFirstLetter(\\"javaScript is fun\\") should return \\"JavaScript Is Fun\\"");',
        description: 'capitalizeFirstLetter("javaScript is fun") should return "JavaScript Is Fun"'
      },
      {
        test: 'assert(capitalizeFirstLetter("") === "", "capitalizeFirstLetter(\\"\\" ) should return \\"\\"");',
        description: 'capitalizeFirstLetter("") should return ""'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 17,
    title: 'Square a Number',
    difficulty: 'Easy',
    category: 'Functions',
    description: `Write a function called \`square\` that takes a number as a parameter and returns its square.`,
    examples: [
      {
        input: 'square(3)',
        output: '9',
        explanation: '3 squared is 9'
      },
      {
        input: 'square(-4)',
        output: '16',
        explanation: '-4 squared is 16'
      }
    ],
    initialCode: `function square(n) {
      // Your code here
    }`,
    solution: `function square(n) {
      return n * n;
    }`,
    testCases: [
      {
        test: 'assert(square(3) === 9, "square(3) should return 9");',
        description: 'square(3) should return 9'
      },
      {
        test: 'assert(square(-4) === 16, "square(-4) should return 16");',
        description: 'square(-4) should return 16'
      },
      {
        test: 'assert(square(0) === 0, "square(0) should return 0");',
        description: 'square(0) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 18,
    title: 'Double a Number',
    difficulty: 'Easy',
    category: 'Functions',
    description: `Write a function called \`double\` that takes a number as a parameter and returns twice its value.`,
    examples: [
      {
        input: 'double(5)',
        output: '10',
        explanation: 'Double of 5 is 10'
      },
      {
        input: 'double(-3)',
        output: '-6',
        explanation: 'Double of -3 is -6'
      }
    ],
    initialCode: `function double(n) {
      // Your code here
    }`,
    solution: `function double(n) {
      return n * 2;
    }`,
    testCases: [
      {
        test: 'assert(double(5) === 10, "double(5) should return 10");',
        description: 'double(5) should return 10'
      },
      {
        test: 'assert(double(-3) === -6, "double(-3) should return -6");',
        description: 'double(-3) should return -6'
      },
      {
        test: 'assert(double(0) === 0, "double(0) should return 0");',
        description: 'double(0) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 19,
    title: 'Get First Element of Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`getFirstElement\` that takes an array as a parameter and returns its first element.`,
    examples: [
      {
        input: 'getFirstElement([1, 2, 3])',
        output: '1',
        explanation: 'The first element is 1'
      },
      {
        input: 'getFirstElement(["a", "b", "c"])',
        output: '"a"',
        explanation: 'The first element is "a"'
      }
    ],
    initialCode: `function getFirstElement(arr) {
      // Your code here
    }`,
    solution: `function getFirstElement(arr) {
      return arr[0];
    }`,
    testCases: [
      {
        test: 'assert(getFirstElement([1, 2, 3]) === 1, "getFirstElement([1, 2, 3]) should return 1");',
        description: 'getFirstElement([1, 2, 3]) should return 1'
      },
      {
        test: 'assert(getFirstElement(["a", "b", "c"]) === "a", "getFirstElement([\\"a\\", \\"b\\", \\"c\\"]) should return \\"a\\"");',
        description: 'getFirstElement(["a", "b", "c"]) should return "a"'
      },
      {
        test: 'assert(getFirstElement([]) === undefined, "getFirstElement([]) should return undefined");',
        description: 'getFirstElement([]) should return undefined'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 20,
    title: 'Get Last Element of Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`getLastElement\` that takes an array as a parameter and returns its last element.`,
    examples: [
      {
        input: 'getLastElement([1, 2, 3])',
        output: '3',
        explanation: 'The last element is 3'
      },
      {
        input: 'getLastElement(["a", "b", "c"])',
        output: '"c"',
        explanation: 'The last element is "c"'
      }
    ],
    initialCode: `function getLastElement(arr) {
      // Your code here
    }`,
    solution: `function getLastElement(arr) {
      return arr[arr.length - 1];
    }`,
    testCases: [
      {
        test: 'assert(getLastElement([1, 2, 3]) === 3, "getLastElement([1, 2, 3]) should return 3");',
        description: 'getLastElement([1, 2, 3]) should return 3'
      },
      {
        test: 'assert(getLastElement(["a", "b", "c"]) === "c", "getLastElement([\\"a\\", \\"b\\", \\"c\\"]) should return \\"c\\"");',
        description: 'getLastElement(["a", "b", "c"]) should return "c"'
      },
      {
        test: 'assert(getLastElement([]) === undefined, "getLastElement([]) should return undefined");',
        description: 'getLastElement([]) should return undefined'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 21,
    title: 'Convert String to Lowercase',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`toLowerCaseString\` that takes a string as a parameter and returns the same string converted to lowercase.`,
    examples: [
      {
        input: 'toLowerCaseString("HELLO")',
        output: '"hello"',
        explanation: 'All characters are converted to lowercase'
      },
      {
        input: 'toLowerCaseString("JavaScript")',
        output: '"javascript"',
        explanation: 'All characters are converted to lowercase'
      }
    ],
    initialCode: `function toLowerCaseString(str) {
      // Your code here
    }`,
    solution: `function toLowerCaseString(str) {
      return str.toLowerCase();
    }`,
    testCases: [
      {
        test: 'assert(toLowerCaseString("HELLO") === "hello", "toLowerCaseString(\\"HELLO\\") should return \\"hello\\"");',
        description: 'toLowerCaseString("HELLO") should return "hello"'
      },
      {
        test: 'assert(toLowerCaseString("JavaScript") === "javascript", "toLowerCaseString(\\"JavaScript\\") should return \\"javascript\\"");',
        description: 'toLowerCaseString("JavaScript") should return "javascript"'
      },
      {
        test: 'assert(toLowerCaseString("") === "", "toLowerCaseString(\\"\\" ) should return \\"\\"");',
        description: 'toLowerCaseString("") should return ""'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 22,
    title: 'Convert String to Uppercase',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`toUpperCaseString\` that takes a string as a parameter and returns the same string converted to uppercase.`,
    examples: [
      {
        input: 'toUpperCaseString("hello")',
        output: '"HELLO"',
        explanation: 'All characters are converted to uppercase'
      },
      {
        input: 'toUpperCaseString("JavaScript")',
        output: '"JAVASCRIPT"',
        explanation: 'All characters are converted to uppercase'
      }
    ],
    initialCode: `function toUpperCaseString(str) {
      // Your code here
    }`,
    solution: `function toUpperCaseString(str) {
      return str.toUpperCase();
    }`,
    testCases: [
      {
        test: 'assert(toUpperCaseString("hello") === "HELLO", "toUpperCaseString(\\"hello\\") should return \\"HELLO\\"");',
        description: 'toUpperCaseString("hello") should return "HELLO"'
      },
      {
        test: 'assert(toUpperCaseString("JavaScript") === "JAVASCRIPT", "toUpperCaseString(\\"JavaScript\\") should return \\"JAVASCRIPT\\"");',
        description: 'toUpperCaseString("JavaScript") should return "JAVASCRIPT"'
      },
      {
        test: 'assert(toUpperCaseString("") === "", "toUpperCaseString(\\"\\" ) should return \\"\\"");',
        description: 'toUpperCaseString("") should return ""'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 23,
    title: 'Add Exclamation Mark',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`addExclamation\` that takes a string as a parameter and returns the same string with an exclamation mark added at the end.`,
    examples: [
      {
        input: 'addExclamation("Hello")',
        output: '"Hello!"',
        explanation: 'An exclamation mark is added at the end'
      },
      {
        input: 'addExclamation("Good morning")',
        output: '"Good morning!"',
        explanation: 'An exclamation mark is added at the end'
      }
    ],
    initialCode: `function addExclamation(str) {
      // Your code here
    }`,
    solution: `function addExclamation(str) {
      return str + '!';
    }`,
    testCases: [
      {
        test: 'assert(addExclamation("Hello") === "Hello!", "addExclamation(\\"Hello\\") should return \\"Hello!\\"");',
        description: 'addExclamation("Hello") should return "Hello!"'
      },
      {
        test: 'assert(addExclamation("Good morning") === "Good morning!", "addExclamation(\\"Good morning\\") should return \\"Good morning!\\"");',
        description: 'addExclamation("Good morning") should return "Good morning!"'
      },
      {
        test: 'assert(addExclamation("") === "!", "addExclamation(\\"\\" ) should return \\"!\\"");',
        description: 'addExclamation("") should return "!"'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 24,
    title: 'Repeat a String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`repeatString\` that takes a string and a number as parameters and returns the string repeated the specified number of times.`,
    examples: [
      {
        input: 'repeatString("ha", 3)',
        output: '"hahaha"',
        explanation: 'The string "ha" is repeated 3 times'
      },
      {
        input: 'repeatString("abc", 2)',
        output: '"abcabc"',
        explanation: 'The string "abc" is repeated 2 times'
      }
    ],
    initialCode: `function repeatString(str, num) {
      // Your code here
    }`,
    solution: `function repeatString(str, num) {
      return str.repeat(num);
    }`,
    testCases: [
      {
        test: 'assert(repeatString("ha", 3) === "hahaha", "repeatString(\\"ha\\", 3) should return \\"hahaha\\"");',
        description: 'repeatString("ha", 3) should return "hahaha"'
      },
      {
        test: 'assert(repeatString("abc", 2) === "abcabc", "repeatString(\\"abc\\", 2) should return \\"abcabc\\"");',
        description: 'repeatString("abc", 2) should return "abcabc"'
      },
      {
        test: 'assert(repeatString("test", 0) === "", "repeatString(\\"test\\", 0) should return \\"\\"");',
        description: 'repeatString("test", 0) should return ""'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 25,
    title: 'Check Positive Number',
    difficulty: 'Easy',
    category: 'Control Flow',
    description: `Write a function called \`isPositive\` that takes a number as a parameter and returns \`true\` if the number is positive, and \`false\` otherwise.`,
    examples: [
      {
        input: 'isPositive(5)',
        output: 'true',
        explanation: '5 is a positive number'
      },
      {
        input: 'isPositive(-3)',
        output: 'false',
        explanation: '-3 is not a positive number'
      }
    ],
    initialCode: `function isPositive(num) {
      // Your code here
    }`,
    solution: `function isPositive(num) {
      return num > 0;
    }`,
    testCases: [
      {
        test: 'assert(isPositive(5) === true, "isPositive(5) should return true");',
        description: 'isPositive(5) should return true'
      },
      {
        test: 'assert(isPositive(-3) === false, "isPositive(-3) should return false");',
        description: 'isPositive(-3) should return false'
      },
      {
        test: 'assert(isPositive(0) === false, "isPositive(0) should return false");',
        description: 'isPositive(0) should return false'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Neue Easy-Aufgaben
  {
    id: 26,
    title: 'Check Divisibility by 3',
    difficulty: 'Easy',
    category: 'Control Flow',
    description: `Write a function called \`isDivisibleBy3\` that takes a number as a parameter and returns \`true\` if the number is divisible by 3, and \`false\` otherwise.`,
    examples: [
      {
        input: 'isDivisibleBy3(9)',
        output: 'true',
        explanation: '9 is divisible by 3'
      },
      {
        input: 'isDivisibleBy3(10)',
        output: 'false',
        explanation: '10 is not divisible by 3'
      }
    ],
    initialCode: `function isDivisibleBy3(num) {
      // Your code here
    }`,
    solution: `function isDivisibleBy3(num) {
      return num % 3 === 0;
    }`,
    testCases: [
      {
        test: 'assert(isDivisibleBy3(9) === true, "isDivisibleBy3(9) should return true");',
        description: 'isDivisibleBy3(9) should return true'
      },
      {
        test: 'assert(isDivisibleBy3(10) === false, "isDivisibleBy3(10) should return false");',
        description: 'isDivisibleBy3(10) should return false'
      },
      {
        test: 'assert(isDivisibleBy3(0) === true, "isDivisibleBy3(0) should return true");',
        description: 'isDivisibleBy3(0) should return true'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 27,
    title: 'Find the Maximum in an Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findMaximum\` that takes an array of numbers as a parameter and returns the largest number in the array.`,
    examples: [
      {
        input: 'findMaximum([10, 20, 30, 40])',
        output: '40',
        explanation: '40 is the largest number in the array'
      },
      {
        input: 'findMaximum([-10, -20, -5, -15])',
        output: '-5',
        explanation: '-5 is the largest number in the array of negative numbers'
      }
    ],
    initialCode: `function findMaximum(numbers) {
      // Your code here
    }`,
    solution: `function findMaximum(numbers) {
      return Math.max(...numbers);
    }`,
    testCases: [
      {
        test: 'assert(findMaximum([10, 20, 30, 40]) === 40, "findMaximum([10, 20, 30, 40]) should return 40");',
        description: 'findMaximum([10, 20, 30, 40]) should return 40'
      },
      {
        test: 'assert(findMaximum([-10, -20, -5, -15]) === -5, "findMaximum([-10, -20, -5, -15]) should return -5");',
        description: 'findMaximum([-10, -20, -5, -15]) should return -5'
      },
      {
        test: 'assert(findMaximum([0, 0, 0]) === 0, "findMaximum([0, 0, 0]) should return 0");',
        description: 'findMaximum([0, 0, 0]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 28,
    title: 'Find the Minimum in an Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findMin\` that takes an array of numbers as a parameter and returns the smallest number in the array.`,
    examples: [
      {
        input: 'findMin([10, 20, 30, 40])',
        output: '10',
        explanation: '10 is the smallest number in the array'
      },
      {
        input: 'findMin([-10, -20, -5, -15])',
        output: '-20',
        explanation: '-20 is the smallest number in the array of negative numbers'
      }
    ],
    initialCode: `function findMin(numbers) {
      // Your code here
    }`,
    solution: `function findMin(numbers) {
      return Math.min(...numbers);
    }`,
    testCases: [
      {
        test: 'assert(findMin([10, 20, 30, 40]) === 10, "findMin([10, 20, 30, 40]) should return 10");',
        description: 'findMin([10, 20, 30, 40]) should return 10'
      },
      {
        test: 'assert(findMin([-10, -20, -5, -15]) === -20, "findMin([-10, -20, -5, -15]) should return -20");',
        description: 'findMin([-10, -20, -5, -15]) should return -20'
      },
      {
        test: 'assert(findMin([0, 0, 0]) === 0, "findMin([0, 0, 0]) should return 0");',
        description: 'findMin([0, 0, 0]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 29,
    title: 'Check if Array Contains Element',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`containsElement\` that takes an array and an element as parameters and returns \`true\` if the element is present in the array, and \`false\` otherwise.`,
    examples: [
      {
        input: 'containsElement([1, 2, 3], 2)',
        output: 'true',
        explanation: '2 is present in the array'
      },
      {
        input: 'containsElement(["a", "b", "c"], "d")',
        output: 'false',
        explanation: '"d" is not present in the array'
      }
    ],
    initialCode: `function containsElement(arr, element) {
      // Your code here
    }`,
    solution: `function containsElement(arr, element) {
      return arr.includes(element);
    }`,
    testCases: [
      {
        test: 'assert(containsElement([1, 2, 3], 2) === true, "containsElement([1, 2, 3], 2) should return true");',
        description: 'containsElement([1, 2, 3], 2) should return true'
      },
      {
        test: 'assert(containsElement(["a", "b", "c"], "d") === false, "containsElement([\\"a\\", \\"b\\", \\"c\\"], \\"d\\") should return false");',
        description: 'containsElement(["a", "b", "c"], "d") should return false'
      },
      {
        test: 'assert(containsElement([], 1) === false, "containsElement([], 1) should return false");',
        description: 'containsElement([], 1) should return false'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 30,
    title: 'Find Index of Element',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findIndexOfElement\` that takes an array and an element as parameters and returns the index of the element in the array. If the element is not found, return \`-1\`.`,
    examples: [
      {
        input: 'findIndexOfElement([10, 20, 30], 20)',
        output: '1',
        explanation: '20 is at index 1'
      },
      {
        input: 'findIndexOfElement(["a", "b", "c"], "d")',
        output: '-1',
        explanation: '"d" is not found in the array'
      }
    ],
    initialCode: `function findIndexOfElement(arr, element) {
      // Your code here
    }`,
    solution: `function findIndexOfElement(arr, element) {
      return arr.indexOf(element);
    }`,
    testCases: [
      {
        test: 'assert(findIndexOfElement([10, 20, 30], 20) === 1, "findIndexOfElement([10, 20, 30], 20) should return 1");',
        description: 'findIndexOfElement([10, 20, 30], 20) should return 1'
      },
      {
        test: 'assert(findIndexOfElement(["a", "b", "c"], "d") === -1, "findIndexOfElement([\\"a\\", \\"b\\", \\"c\\"], \\"d\\") should return -1");',
        description: 'findIndexOfElement(["a", "b", "c"], "d") should return -1'
      },
      {
        test: 'assert(findIndexOfElement([], 1) === -1, "findIndexOfElement([], 1) should return -1");',
        description: 'findIndexOfElement([], 1) should return -1'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  // Weitere Easy-Aufgaben
  {
    id: 31,
    title: 'Convert Number to String',
    difficulty: 'Easy',
    category: 'Data Types',
    description: `Write a function called \`numberToString\` that takes a number as a parameter and returns the number converted to a string.`,
    examples: [
      {
        input: 'numberToString(123)',
        output: '"123"',
        explanation: 'The number 123 is converted to the string "123"'
      },
      {
        input: 'numberToString(-45)',
        output: '"-45"',
        explanation: 'The number -45 is converted to the string "-45"'
      }
    ],
    initialCode: `function numberToString(num) {
      // Your code here
    }`,
    solution: `function numberToString(num) {
      return num.toString();
    }`,
    testCases: [
      {
        test: 'assert(numberToString(123) === "123", "numberToString(123) should return \\"123\\"");',
        description: 'numberToString(123) should return "123"'
      },
      {
        test: 'assert(numberToString(-45) === "-45", "numberToString(-45) should return \\"-45\\"");',
        description: 'numberToString(-45) should return "-45"'
      },
      {
        test: 'assert(numberToString(0) === "0", "numberToString(0) should return \\"0\\"");',
        description: 'numberToString(0) should return "0"'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 32,
    title: 'Convert String to Number',
    difficulty: 'Easy',
    category: 'Data Types',
    description: `Write a function called \`stringToNumber\` that takes a string as a parameter and returns the string converted to a number.`,
    examples: [
      {
        input: 'stringToNumber("123")',
        output: '123',
        explanation: 'The string "123" is converted to the number 123'
      },
      {
        input: 'stringToNumber("-45")',
        output: '-45',
        explanation: 'The string "-45" is converted to the number -45'
      }
    ],
    initialCode: `function stringToNumber(str) {
      // Your code here
    }`,
    solution: `function stringToNumber(str) {
      return Number(str);
    }`,
    testCases: [
      {
        test: 'assert(stringToNumber("123") === 123, "stringToNumber(\\"123\\") should return 123");',
        description: 'stringToNumber("123") should return 123'
      },
      {
        test: 'assert(stringToNumber("-45") === -45, "stringToNumber(\\"-45\\") should return -45");',
        description: 'stringToNumber("-45") should return -45'
      },
      {
        test: 'assert(stringToNumber("0") === 0, "stringToNumber(\\"0\\") should return 0");',
        description: 'stringToNumber("0") should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 33,
    title: 'Check Leap Year',
    difficulty: 'Easy',
    category: 'Control Flow',
    description: `Write a function called \`isLeapYear\` that takes a year as a parameter and returns \`true\` if it's a leap year, and \`false\` otherwise. A leap year is divisible by 4, but years divisible by 100 are not leap years unless they are also divisible by 400.`,
    examples: [
      {
        input: 'isLeapYear(2020)',
        output: 'true',
        explanation: '2020 is divisible by 4 and not by 100'
      },
      {
        input: 'isLeapYear(1900)',
        output: 'false',
        explanation: '1900 is divisible by 100 but not by 400'
      },
      {
        input: 'isLeapYear(2000)',
        output: 'true',
        explanation: '2000 is divisible by 400'
      }
    ],
    initialCode: `function isLeapYear(year) {
      // Your code here
    }`,
    solution: `function isLeapYear(year) {
      if (year % 400 === 0) return true;
      if (year % 100 === 0) return false;
      return year % 4 === 0;
    }`,
    testCases: [
      {
        test: 'assert(isLeapYear(2020) === true, "isLeapYear(2020) should return true");',
        description: 'isLeapYear(2020) should return true'
      },
      {
        test: 'assert(isLeapYear(1900) === false, "isLeapYear(1900) should return false");',
        description: 'isLeapYear(1900) should return false'
      },
      {
        test: 'assert(isLeapYear(2000) === true, "isLeapYear(2000) should return true");',
        description: 'isLeapYear(2000) should return true'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 34,
    title: 'Find the Second Largest Number',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findSecondLargest\` that takes an array of numbers as a parameter and returns the second largest number in the array.`,
    examples: [
      {
        input: 'findSecondLargest([10, 20, 30, 40])',
        output: '30',
        explanation: 'The largest number is 40 and the second largest is 30'
      },
      {
        input: 'findSecondLargest([-10, -20, -5, -15])',
        output: '-10',
        explanation: '-5 is the largest and -10 is the second largest number'
      }
    ],
    initialCode: `function findSecondLargest(numbers) {
      // Your code here
    }`,
    solution: `function findSecondLargest(numbers) {
      let first = -Infinity, second = -Infinity;
      for (let num of numbers) {
        if (num > first) {
          second = first;
          first = num;
        } else if (num > second && num < first) {
          second = num;
        }
      }
      return second;
    }`,
    testCases: [
      {
        test: 'assert(findSecondLargest([10, 20, 30, 40]) === 30, "findSecondLargest([10, 20, 30, 40]) should return 30");',
        description: 'findSecondLargest([10, 20, 30, 40]) should return 30'
      },
      {
        test: 'assert(findSecondLargest([-10, -20, -5, -15]) === -10, "findSecondLargest([-10, -20, -5, -15]) should return -10");',
        description: 'findSecondLargest([-10, -20, -5, -15]) should return -10'
      },
      {
        test: 'assert(findSecondLargest([1, 2]) === 1, "findSecondLargest([1, 2]) should return 1");',
        description: 'findSecondLargest([1, 2]) should return 1'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 35,
    title: 'Find Common Elements in Two Arrays',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findCommonElements\` that takes two arrays as parameters and returns a new array containing the common elements between them.`,
    examples: [
      {
        input: 'findCommonElements([1, 2, 3], [2, 3, 4])',
        output: '[2, 3]',
        explanation: '2 and 3 are common in both arrays'
      },
      {
        input: 'findCommonElements(["a", "b"], ["b", "c"])',
        output: '["b"]',
        explanation: '"b" is common in both arrays'
      }
    ],
    initialCode: `function findCommonElements(arr1, arr2) {
      // Your code here
    }`,
    solution: `function findCommonElements(arr1, arr2) {
      return arr1.filter(element => arr2.includes(element));
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(findCommonElements([1, 2, 3], [2, 3, 4])) === JSON.stringify([2, 3]), "findCommonElements([1, 2, 3], [2, 3, 4]) should return [2, 3]");',
        description: 'findCommonElements([1, 2, 3], [2, 3, 4]) should return [2, 3]'
      },
      {
        test: 'assert(JSON.stringify(findCommonElements(["a", "b"], ["b", "c"])) === JSON.stringify(["b"]), "findCommonElements([\\"a\\", \\"b\\"], [\\"b\\", \\"c\\"]) should return [\\"b\\"]");',
        description: 'findCommonElements(["a", "b"], ["b", "c"]) should return ["b"]'
      },
      {
        test: 'assert(JSON.stringify(findCommonElements([], [1, 2])) === JSON.stringify([]), "findCommonElements([], [1, 2]) should return []");',
        description: 'findCommonElements([], [1, 2]) should return []'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 36,
    title: 'Remove Whitespaces from String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`removeWhitespaces\` that takes a string as a parameter and returns the string with all whitespace characters removed.`,
    examples: [
      {
        input: 'removeWhitespaces("Hello World")',
        output: '"HelloWorld"',
        explanation: 'All whitespaces are removed'
      },
      {
        input: 'removeWhitespaces(" JavaScript ")',
        output: '"JavaScript"',
        explanation: 'Leading and trailing whitespaces are removed'
      }
    ],
    initialCode: `function removeWhitespaces(str) {
      // Your code here
    }`,
    solution: `function removeWhitespaces(str) {
      return str.replace(/\s+/g, '');
    }`,
    testCases: [
      {
        test: 'assert(removeWhitespaces("Hello World") === "HelloWorld", "removeWhitespaces(\\"Hello World\\") should return \\"HelloWorld\\"");',
        description: 'removeWhitespaces("Hello World") should return "HelloWorld"'
      },
      {
        test: 'assert(removeWhitespaces(" JavaScript ") === "JavaScript", "removeWhitespaces(\\" JavaScript \\") should return \\"JavaScript\\"");',
        description: 'removeWhitespaces(" JavaScript ") should return "JavaScript"'
      },
      {
        test: 'assert(removeWhitespaces("a b c") === "abc", "removeWhitespaces(\\"a b c\\") should return \\"abc\\"");',
        description: 'removeWhitespaces("a b c") should return "abc"'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 37,
    title: 'Find All Prime Numbers in an Array',
    difficulty: 'Medium',
    category: 'Arrays',
    description: `Write a function called \`findPrimes\` that takes an array of numbers as a parameter and returns a new array containing only the prime numbers from the original array.`,
    examples: [
      {
        input: 'findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])',
        output: '[2, 3, 5, 7]',
        explanation: 'Only 2, 3, 5, and 7 are prime numbers'
      },
      {
        input: 'findPrimes([11, 13, 17, 19, 23, 29])',
        output: '[11, 13, 17, 19, 23, 29]',
        explanation: 'All numbers are prime'
      }
    ],
    initialCode: `function findPrimes(numbers) {
      // Your code here
    }`,
    solution: `function findPrimes(numbers) {
      const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
        }
        return true;
      };
      return numbers.filter(isPrime);
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) === JSON.stringify([2, 3, 5, 7]), "findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [2, 3, 5, 7]");',
        description: 'findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) should return [2, 3, 5, 7]'
      },
      {
        test: 'assert(JSON.stringify(findPrimes([11, 13, 17, 19, 23, 29])) === JSON.stringify([11, 13, 17, 19, 23, 29]), "findPrimes([11, 13, 17, 19, 23, 29]) should return [11, 13, 17, 19, 23, 29]");',
        description: 'findPrimes([11, 13, 17, 19, 23, 29]) should return [11, 13, 17, 19, 23, 29]'
      },
      {
        test: 'assert(JSON.stringify(findPrimes([0, 1, 4, 6, 8, 9, 10])) === JSON.stringify([]), "findPrimes([0, 1, 4, 6, 8, 9, 10]) should return []");',
        description: 'findPrimes([0, 1, 4, 6, 8, 9, 10]) should return []'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 38,
    title: 'Find the Median of an Array',
    difficulty: 'Medium',
    category: 'Arrays',
    description: `Write a function called \`findMedian\` that takes an array of numbers as a parameter and returns the median value. The median is the middle number in a sorted, ascending or descending, list of numbers and can be more descriptive of that data set than the average.`,
    examples: [
      {
        input: 'findMedian([1, 3, 3, 6, 7, 8, 9])',
        output: '6',
        explanation: 'The median is 6'
      },
      {
        input: 'findMedian([1, 2, 3, 4, 5, 6, 8, 9])',
        output: '4.5',
        explanation: 'The median is the average of 4 and 5, which is 4.5'
      }
    ],
    initialCode: `function findMedian(numbers) {
      // Your code here
    }`,
    solution: `function findMedian(numbers) {
      const sorted = [...numbers].sort((a, b) => a - b);
      const len = sorted.length;
      if (len === 0) return null;
      const mid = Math.floor(len / 2);
      if (len % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
      }
      return sorted[mid];
    }`,
    testCases: [
      {
        test: 'assert(findMedian([1, 3, 3, 6, 7, 8, 9]) === 6, "findMedian([1, 3, 3, 6, 7, 8, 9]) should return 6");',
        description: 'findMedian([1, 3, 3, 6, 7, 8, 9]) should return 6'
      },
      {
        test: 'assert(findMedian([1, 2, 3, 4, 5, 6, 8, 9]) === 4.5, "findMedian([1, 2, 3, 4, 5, 6, 8, 9]) should return 4.5");',
        description: 'findMedian([1, 2, 3, 4, 5, 6, 8, 9]) should return 4.5'
      },
      {
        test: 'assert(findMedian([]) === null, "findMedian([]) should return null");',
        description: 'findMedian([]) should return null'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 39,
    title: 'Find Unique Elements in Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findUniqueElements\` that takes an array as a parameter and returns a new array containing only the unique elements from the original array.`,
    examples: [
      {
        input: 'findUniqueElements([1, 2, 2, 3, 4, 4, 5])',
        output: '[1, 3, 5]',
        explanation: 'Only 1, 3, and 5 are unique'
      },
      {
        input: 'findUniqueElements(["a", "b", "a", "c", "d", "d"])',
        output: '["b", "c"]',
        explanation: '"b" and "c" are unique'
      }
    ],
    initialCode: `function findUniqueElements(arr) {
      // Your code here
    }`,
    solution: `function findUniqueElements(arr) {
      return arr.filter(item => arr.indexOf(item) === arr.lastIndexOf(item));
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(findUniqueElements([1, 2, 2, 3, 4, 4, 5])) === JSON.stringify([1, 3, 5]), "findUniqueElements([1, 2, 2, 3, 4, 4, 5]) should return [1, 3, 5]");',
        description: 'findUniqueElements([1, 2, 2, 3, 4, 4, 5]) should return [1, 3, 5]'
      },
      {
        test: 'assert(JSON.stringify(findUniqueElements(["a", "b", "a", "c", "d", "d"])) === JSON.stringify(["b", "c"]), "findUniqueElements([\\"a\\", \\"b\\", \\"a\\", \\"c\\", \\"d\\", \\"d\\"]) should return [\\"b\\", \\"c\\"]");',
        description: 'findUniqueElements(["a", "b", "a", "c", "d", "d"]) should return ["b", "c"]'
      },
      {
        test: 'assert(JSON.stringify(findUniqueElements([])) === JSON.stringify([]), "findUniqueElements([]) should return []");',
        description: 'findUniqueElements([]) should return []'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 40,
    title: 'Convert Array to Object',
    difficulty: 'Easy',
    category: 'Objects',
    description: `Write a function called \`arrayToObject\` that takes an array of key-value pairs and returns an object constructed from those pairs.`,
    examples: [
      {
        input: 'arrayToObject([["a", 1], ["b", 2], ["c", 3]])',
        output: '{ a: 1, b: 2, c: 3 }',
        explanation: 'The array of pairs is converted to an object with corresponding key-value pairs'
      },
      {
        input: 'arrayToObject([["name", "John"], ["age", 30]])',
        output: '{ name: "John", age: 30 }',
        explanation: 'The array of pairs is converted to an object with name and age properties'
      }
    ],
    initialCode: `function arrayToObject(pairs) {
      // Your code here
    }`,
    solution: `function arrayToObject(pairs) {
      return Object.fromEntries(pairs);
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(arrayToObject([["a", 1], ["b", 2], ["c", 3]])) === JSON.stringify({ a: 1, b: 2, c: 3 }), "arrayToObject([["a", 1], ["b", 2], ["c", 3]]) should return { a: 1, b: 2, c: 3 }");',
        description: 'arrayToObject([["a", 1], ["b", 2], ["c", 3]]) should return { a: 1, b: 2, c: 3 }'
      },
      {
        test: 'assert(JSON.stringify(arrayToObject([["name", "John"], ["age", 30]])) === JSON.stringify({ name: "John", age: 30 }), "arrayToObject([["name", "John"], ["age", 30]]) should return { name: \\"John\\", age: 30 }");',
        description: 'arrayToObject([["name", "John"], ["age", 30]]) should return { name: "John", age: 30 }'
      },
      {
        test: 'assert(JSON.stringify(arrayToObject([])) === JSON.stringify({}), "arrayToObject([]) should return {}");',
        description: 'arrayToObject([]) should return {}'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 41,
    title: 'Remove Specific Element from Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`removeElement\` that takes an array and an element as parameters and returns a new array with all instances of that element removed.`,
    examples: [
      {
        input: 'removeElement([1, 2, 3, 2, 4], 2)',
        output: '[1, 3, 4]',
        explanation: 'All instances of 2 are removed'
      },
      {
        input: 'removeElement(["a", "b", "a", "c"], "a")',
        output: '["b", "c"]',
        explanation: 'All instances of "a" are removed'
      }
    ],
    initialCode: `function removeElement(arr, element) {
      // Your code here
    }`,
    solution: `function removeElement(arr, element) {
      return arr.filter(item => item !== element);
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(removeElement([1, 2, 3, 2, 4], 2)) === JSON.stringify([1, 3, 4]), "removeElement([1, 2, 3, 2, 4], 2) should return [1, 3, 4]");',
        description: 'removeElement([1, 2, 3, 2, 4], 2) should return [1, 3, 4]'
      },
      {
        test: 'assert(JSON.stringify(removeElement(["a", "b", "a", "c"], "a")) === JSON.stringify(["b", "c"]), "removeElement([\\"a\\", \\"b\\", \\"a\\", \\"c\\"], \\"a\\") should return [\\"b\\", \\"c\\"]");',
        description: 'removeElement(["a", "b", "a", "c"], "a") should return ["b", "c"]'
      },
      {
        test: 'assert(JSON.stringify(removeElement([], 1)) === JSON.stringify([]), "removeElement([], 1) should return []");',
        description: 'removeElement([], 1) should return []'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 42,
    title: 'Check if String Contains Substring',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`containsSubstring\` that takes two strings as parameters and returns \`true\` if the second string is a substring of the first, and \`false\` otherwise.`,
    examples: [
      {
        input: 'containsSubstring("Hello World", "World")',
        output: 'true',
        explanation: '"World" is a substring of "Hello World"'
      },
      {
        input: 'containsSubstring("JavaScript", "script")',
        output: 'false',
        explanation: 'Case-sensitive check; "script" is not a substring of "JavaScript"'
      }
    ],
    initialCode: `function containsSubstring(str, substr) {
      // Your code here
    }`,
    solution: `function containsSubstring(str, substr) {
      return str.includes(substr);
    }`,
    testCases: [
      {
        test: 'assert(containsSubstring("Hello World", "World") === true, "containsSubstring(\\"Hello World\\", \\"World\\") should return true");',
        description: 'containsSubstring("Hello World", "World") should return true'
      },
      {
        test: 'assert(containsSubstring("JavaScript", "script") === false, "containsSubstring(\\"JavaScript\\", \\"script\\") should return false");',
        description: 'containsSubstring("JavaScript", "script") should return false'
      },
      {
        test: 'assert(containsSubstring("OpenAI ChatGPT", "AI") === true, "containsSubstring(\\"OpenAI ChatGPT\\", \\"AI\\") should return true");',
        description: 'containsSubstring("OpenAI ChatGPT", "AI") should return true'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 43,
    title: 'Sum of Array Elements',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`sumArray\` that takes an array of numbers as a parameter and returns the sum of all elements in the array.`,
    examples: [
      {
        input: 'sumArray([1, 2, 3, 4, 5])',
        output: '15',
        explanation: '1 + 2 + 3 + 4 + 5 = 15'
      },
      {
        input: 'sumArray([-1, -2, -3, -4])',
        output: '-10',
        explanation: '-1 + (-2) + (-3) + (-4) = -10'
      }
    ],
    initialCode: `function sumArray(numbers) {
      // Your code here
    }`,
    solution: `function sumArray(numbers) {
      return numbers.reduce((acc, num) => acc + num, 0);
    }`,
    testCases: [
      {
        test: 'assert(sumArray([1, 2, 3, 4, 5]) === 15, "sumArray([1, 2, 3, 4, 5]) should return 15");',
        description: 'sumArray([1, 2, 3, 4, 5]) should return 15'
      },
      {
        test: 'assert(sumArray([-1, -2, -3, -4]) === -10, "sumArray([-1, -2, -3, -4]) should return -10");',
        description: 'sumArray([-1, -2, -3, -4]) should return -10'
      },
      {
        test: 'assert(sumArray([]) === 0, "sumArray([]) should return 0");',
        description: 'sumArray([]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 44,
    title: 'Find the Maximum in a 2D Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findMaxIn2DArray\` that takes a 2D array of numbers as a parameter and returns the largest number found in the entire array.`,
    examples: [
      {
        input: 'findMaxIn2DArray([[1, 2], [3, 4]])',
        output: '4',
        explanation: '4 is the largest number in the 2D array'
      },
      {
        input: 'findMaxIn2DArray([[10, 20], [30, 40], [50, 60]])',
        output: '60',
        explanation: '60 is the largest number in the 2D array'
      }
    ],
    initialCode: `function findMaxIn2DArray(arr) {
      // Your code here
    }`,
    solution: `function findMaxIn2DArray(arr) {
      let max = -Infinity;
      for (let subArr of arr) {
        for (let num of subArr) {
          if (num > max) max = num;
        }
      }
      return max;
    }`,
    testCases: [
      {
        test: 'assert(findMaxIn2DArray([[1, 2], [3, 4]]) === 4, "findMaxIn2DArray([[1, 2], [3, 4]]) should return 4");',
        description: 'findMaxIn2DArray([[1, 2], [3, 4]]) should return 4'
      },
      {
        test: 'assert(findMaxIn2DArray([[10, 20], [30, 40], [50, 60]]) === 60, "findMaxIn2DArray([[10, 20], [30, 40], [50, 60]]) should return 60");',
        description: 'findMaxIn2DArray([[10, 20], [30, 40], [50, 60]]) should return 60'
      },
      {
        test: 'assert(findMaxIn2DArray([[]]) === -Infinity, "findMaxIn2DArray([[]]) should return -Infinity");',
        description: 'findMaxIn2DArray([[]]) should return -Infinity'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 45,
    title: 'Flatten a 2D Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`flattenArray\` that takes a 2D array as a parameter and returns a flattened 1D array containing all the elements.`,
    examples: [
      {
        input: 'flattenArray([[1, 2], [3, 4], [5]])',
        output: '[1, 2, 3, 4, 5]',
        explanation: 'All elements are combined into a single array'
      },
      {
        input: 'flattenArray([["a", "b"], ["c"], ["d", "e"]])',
        output: '["a", "b", "c", "d", "e"]',
        explanation: 'All string elements are combined into a single array'
      }
    ],
    initialCode: `function flattenArray(arr) {
      // Your code here
    }`,
    solution: `function flattenArray(arr) {
      return arr.flat();
      // Alternatively: return arr.reduce((acc, subArr) => acc.concat(subArr), []);
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(flattenArray([[1, 2], [3, 4], [5]])) === JSON.stringify([1, 2, 3, 4, 5]), "flattenArray([[1, 2], [3, 4], [5]]) should return [1, 2, 3, 4, 5]");',
        description: 'flattenArray([[1, 2], [3, 4], [5]]) should return [1, 2, 3, 4, 5]'
      },
      {
        test: 'assert(JSON.stringify(flattenArray([["a", "b"], ["c"], ["d", "e"]])) === JSON.stringify(["a", "b", "c", "d", "e"]), "flattenArray([[\\"a\\", \\"b\\"], [\\"c\\"], [\\"d\\", \\"e\\"]]) should return [\\"a\\", \\"b\\", \\"c\\", \\"d\\", \\"e\\"]");',
        description: 'flattenArray([["a", "b"], ["c"], ["d", "e"]]) should return ["a", "b", "c", "d", "e"]'
      },
      {
        test: 'assert(JSON.stringify(flattenArray([[]])) === JSON.stringify([]), "flattenArray([[]]) should return []");',
        description: 'flattenArray([[]]) should return []'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 46,
    title: 'Find Unique Characters in String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`findUniqueCharacters\` that takes a string as a parameter and returns an array of unique characters from that string.`,
    examples: [
      {
        input: 'findUniqueCharacters("hello")',
        output: '["h", "e", "l", "o"]',
        explanation: '"l" appears twice but is included once in the result'
      },
      {
        input: 'findUniqueCharacters("JavaScript")',
        output: '["J", "a", "v", "S", "c", "r", "i", "p", "t"]',
        explanation: 'All characters are unique'
      }
    ],
    initialCode: `function findUniqueCharacters(str) {
      // Your code here
    }`,
    solution: `function findUniqueCharacters(str) {
      return [...new Set(str)];
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(findUniqueCharacters("hello")) === JSON.stringify(["h", "e", "l", "o"]), "findUniqueCharacters(\\"hello\\") should return [\\"h\\", \\"e\\", \\"l\\", \\"o\\"]");',
        description: 'findUniqueCharacters("hello") should return ["h", "e", "l", "o"]'
      },
      {
        test: 'assert(JSON.stringify(findUniqueCharacters("JavaScript")) === JSON.stringify(["J", "a", "v", "S", "c", "r", "i", "p", "t"]), "findUniqueCharacters(\\"JavaScript\\") should return [\\"J\\", \\"a\\", \\"v\\", \\"S\\", \\"c\\", \\"r\\", \\"i\\", \\"p\\", \\"t\\"]");',
        description: 'findUniqueCharacters("JavaScript") should return ["J", "a", "v", "S", "c", "r", "i", "p", "t"]'
      },
      {
        test: 'assert(JSON.stringify(findUniqueCharacters("")) === JSON.stringify([]), "findUniqueCharacters(\\"\\" ) should return []");',
        description: 'findUniqueCharacters("") should return []'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 47,
    title: 'Sum of Even Numbers in Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`sumEvenNumbers\` that takes an array of numbers as a parameter and returns the sum of all even numbers in the array.`,
    examples: [
      {
        input: 'sumEvenNumbers([1, 2, 3, 4, 5, 6])',
        output: '12',
        explanation: '2 + 4 + 6 = 12'
      },
      {
        input: 'sumEvenNumbers([10, 15, 20, 25])',
        output: '30',
        explanation: '10 + 20 = 30'
      }
    ],
    initialCode: `function sumEvenNumbers(numbers) {
      // Your code here
    }`,
    solution: `function sumEvenNumbers(numbers) {
      return numbers.filter(num => num % 2 === 0).reduce((acc, num) => acc + num, 0);
    }`,
    testCases: [
      {
        test: 'assert(sumEvenNumbers([1, 2, 3, 4, 5, 6]) === 12, "sumEvenNumbers([1, 2, 3, 4, 5, 6]) should return 12");',
        description: 'sumEvenNumbers([1, 2, 3, 4, 5, 6]) should return 12'
      },
      {
        test: 'assert(sumEvenNumbers([10, 15, 20, 25]) === 30, "sumEvenNumbers([10, 15, 20, 25]) should return 30");',
        description: 'sumEvenNumbers([10, 15, 20, 25]) should return 30'
      },
      {
        test: 'assert(sumEvenNumbers([1, 3, 5]) === 0, "sumEvenNumbers([1, 3, 5]) should return 0");',
        description: 'sumEvenNumbers([1, 3, 5]) should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 48,
    title: 'Count Words in String',
    difficulty: 'Easy',
    category: 'Strings',
    description: `Write a function called \`countWords\` that takes a string as a parameter and returns the number of words in the string.`,
    examples: [
      {
        input: 'countWords("Hello World")',
        output: '2',
        explanation: 'There are two words: "Hello" and "World"'
      },
      {
        input: 'countWords("JavaScript is awesome")',
        output: '3',
        explanation: 'There are three words: "JavaScript", "is", "awesome"'
      }
    ],
    initialCode: `function countWords(str) {
      // Your code here
    }`,
    solution: `function countWords(str) {
      if (str.trim() === "") return 0;
      return str.trim().split(/\s+/).length;
    }`,
    testCases: [
      {
        test: 'assert(countWords("Hello World") === 2, "countWords(\\"Hello World\\") should return 2");',
        description: 'countWords("Hello World") should return 2'
      },
      {
        test: 'assert(countWords("JavaScript is awesome") === 3, "countWords(\\"JavaScript is awesome\\") should return 3");',
        description: 'countWords("JavaScript is awesome") should return 3'
      },
      {
        test: 'assert(countWords("   ") === 0, "countWords(\\"   \\") should return 0");',
        description: 'countWords("   ") should return 0'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 49,
    title: 'Find the Range of Numbers in Array',
    difficulty: 'Easy',
    category: 'Arrays',
    description: `Write a function called \`findRange\` that takes an array of numbers as a parameter and returns the range (difference between the largest and smallest number).`,
    examples: [
      {
        input: 'findRange([1, 2, 3, 4, 5])',
        output: '4',
        explanation: '5 - 1 = 4'
      },
      {
        input: 'findRange([-10, 0, 10, 20])',
        output: '30',
        explanation: '20 - (-10) = 30'
      }
    ],
    initialCode: `function findRange(numbers) {
      // Your code here
    }`,
    solution: `function findRange(numbers) {
      if (numbers.length === 0) return null;
      const max = Math.max(...numbers);
      const min = Math.min(...numbers);
      return max - min;
    }`,
    testCases: [
      {
        test: 'assert(findRange([1, 2, 3, 4, 5]) === 4, "findRange([1, 2, 3, 4, 5]) should return 4");',
        description: 'findRange([1, 2, 3, 4, 5]) should return 4'
      },
      {
        test: 'assert(findRange([-10, 0, 10, 20]) === 30, "findRange([-10, 0, 10, 20]) should return 30");',
        description: 'findRange([-10, 0, 10, 20]) should return 30'
      },
      {
        test: 'assert(findRange([]) === null, "findRange([]) should return null");',
        description: 'findRange([]) should return null'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 50,
    title: 'Find the Frequency of Elements in Array',
    difficulty: 'Medium',
    category: 'Arrays',
    description: `Write a function called \`frequencyCounter\` that takes an array as a parameter and returns an object where the keys are the elements and the values are the number of times each element appears in the array.`,
    examples: [
      {
        input: 'frequencyCounter([1, 2, 2, 3, 3, 3])',
        output: '{ 1: 1, 2: 2, 3: 3 }',
        explanation: '1 appears once, 2 appears twice, and 3 appears three times'
      },
      {
        input: 'frequencyCounter(["a", "b", "a", "c", "b", "a"])',
        output: '{ a: 3, b: 2, c: 1 }',
        explanation: '"a" appears three times, "b" twice, and "c" once'
      }
    ],
    initialCode: `function frequencyCounter(arr) {
      // Your code here
    }`,
    solution: `function frequencyCounter(arr) {
      return arr.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {});
    }`,
    testCases: [
      {
        test: 'assert(JSON.stringify(frequencyCounter([1, 2, 2, 3, 3, 3])) === JSON.stringify({ 1: 1, 2: 2, 3: 3 }), "frequencyCounter([1, 2, 2, 3, 3, 3]) should return { 1: 1, 2: 2, 3: 3 }");',
        description: 'frequencyCounter([1, 2, 2, 3, 3, 3]) should return { 1: 1, 2: 2, 3: 3 }'
      },
      {
        test: 'assert(JSON.stringify(frequencyCounter(["a", "b", "a", "c", "b", "a"])) === JSON.stringify({ a: 3, b: 2, c: 1 }), "frequencyCounter([\\"a\\", \\"b\\", \\"a\\", \\"c\\", \\"b\\", \\"a\\"]) should return { a: 3, b: 2, c: 1 }");',
        description: 'frequencyCounter(["a", "b", "a", "c", "b", "a"]) should return { a: 3, b: 2, c: 1 }'
      },
      {
        test: 'assert(JSON.stringify(frequencyCounter([])) === JSON.stringify({}), "frequencyCounter([]) should return {}");',
        description: 'frequencyCounter([]) should return {}'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 51,
    title: 'Implement Deep Clone',
    difficulty: 'Medium',
    category: 'Objects',
    description: `Schreiben Sie eine Funktion namens \`deepClone\`, die ein beliebiges JavaScript-Objekt tief klont. Die Funktion sollte sicherstellen, dass alle verschachtelten Objekte und Arrays ebenfalls geklont werden, sodass Änderungen am geklonten Objekt das Original nicht beeinflussen.`,
    examples: [
      {
        input: `const original = { a: 1, b: { c: 2 } };
  deepClone(original);`,
        output: `{ a: 1, b: { c: 2 } }`,
        explanation: 'Das geklonte Objekt ist eine tiefe Kopie des Originals.'
      }
    ],
    initialCode: `function deepClone(obj) {
      // Your code here
    }`,
    solution: `function deepClone(obj) {
      if (obj === null || typeof obj !== 'object') {
        return obj;
      }
  
      if (Array.isArray(obj)) {
        return obj.map(item => deepClone(item));
      }
  
      const clonedObj = {};
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          clonedObj[key] = deepClone(obj[key]);
        }
      }
      return clonedObj;
    }`,
    testCases: [
      {
        test: `
          const original = { a: 1, b: { c: 2 } };
          const clone = deepClone(original);
          clone.b.c = 3;
          assert(original.b.c === 2, "deepClone sollte eine tiefe Kopie erstellen, sodass das Original unverändert bleibt");
        `,
        description: 'Änderungen am geklonten Objekt sollten das Original nicht beeinflussen'
      },
      {
        test: `
          const original = [1, [2, 3], { a: 4 }];
          const clone = deepClone(original);
          clone[1][0] = 5;
          clone[2].a = 6;
          assert(original[1][0] === 2 && original[2].a === 4, "deepClone sollte eine tiefe Kopie von Arrays und Objekten erstellen");
        `,
        description: 'Tiefes Klonen von Arrays und Objekten'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 52,
    title: 'Implement Debounce Function',
    difficulty: 'Medium',
    category: 'Functions',
    description: `Implementieren Sie eine Funktion namens \`debounce\`, die eine andere Funktion und eine Verzögerungszeit in Millisekunden als Argumente nimmt. Die \`debounce\`-Funktion sollte eine neue Funktion zurückgeben, die die ursprüngliche Funktion erst nach Ablauf der Verzögerungszeit ausführt. Wenn die debouncte Funktion innerhalb der Verzögerungszeit erneut aufgerufen wird, sollte der Timer zurückgesetzt werden.`,
    examples: [
      {
        input: `const debouncedFn = debounce(() => console.log('Hello'), 1000);
  debouncedFn();
  debouncedFn();`,
        output: `'Hello' wird einmal nach 1000ms ausgegeben`,
        explanation: 'Die Funktion wird nur einmal ausgeführt, 1000ms nach dem letzten Aufruf'
      }
    ],
    initialCode: `function debounce(func, delay) {
      // Your code here
    }`,
    solution: `function debounce(func, delay) {
      let timeoutId;
      return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          func.apply(this, args);
        }, delay);
      };
    }`,
    testCases: [
      {
        test: `
          let counter = 0;
          const incrementCounter = () => { counter++; };
          const debouncedIncrement = debounce(incrementCounter, 50);
          debouncedIncrement();
          debouncedIncrement();
          debouncedIncrement();
          setTimeout(() => {
            assert(counter === 1, "Debounce sollte die Funktion nur einmal nach der Verzögerung ausführen");
          }, 100);
        `,
        description: 'Debounce sollte die Funktion nur einmal nach der Verzögerung ausführen'
      },
      {
        test: `
          let lastCallTime = 0;
          const setLastCallTime = () => { lastCallTime = Date.now(); };
          const debouncedSetTime = debounce(setLastCallTime, 50);
          debouncedSetTime();
          const firstCallTime = Date.now();
          setTimeout(() => {
            debouncedSetTime();
            setTimeout(() => {
              assert(lastCallTime - firstCallTime >= 100, "Debounce sollte die Funktion nach der angegebenen Verzögerung ausführen");
            }, 100);
          }, 30);
        `,
        description: 'Debounce sollte die Funktion nach der angegebenen Verzögerung ausführen'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 53,
    title: 'Implement Promise.all',
    difficulty: 'Medium',
    category: 'Asynchronous Programming',
    description: `Implementieren Sie eine Funktion namens \`promiseAll\`, die die Funktionalität von \`Promise.all\` nachahmt. Ihre Funktion sollte ein Array von Promises als Eingabe nehmen und ein neues Promise zurückgeben, das aufgelöst wird, wenn alle Eingabe-Promises aufgelöst sind, oder abgelehnt wird mit dem Grund des ersten abgelehnten Promises. Wenn das Eingabearray leer ist, sollte das zurückgegebene Promise sofort mit einem leeren Array aufgelöst werden.`,
    examples: [
      {
        input: `const promise1 = Promise.resolve(3);
  const promise2 = 42;
  const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
  
  promiseAll([promise1, promise2, promise3]).then((values) => {
    console.log(values);
  });`,
        output: '[3, 42, "foo"]',
        explanation: 'Die Funktion löst mit einem Array der aufgelösten Werte aller Eingabe-Promises auf'
      }
    ],
    initialCode: `function promiseAll(promises) {
      // Your code here
    }`,
    solution: `function promiseAll(promises) {
      return new Promise((resolve, reject) => {
        if (promises.length === 0) {
          resolve([]);
          return;
        }
  
        const results = new Array(promises.length);
        let resolvedCount = 0;
  
        promises.forEach((promise, index) => {
          Promise.resolve(promise).then(
            (value) => {
              results[index] = value;
              resolvedCount++;
  
              if (resolvedCount === promises.length) {
                resolve(results);
              }
            },
            (reason) => {
              reject(reason);
            }
          );
        });
      });
    }`,
    testCases: [
      {
        test: `
          const promise1 = Promise.resolve(3);
          const promise2 = 42;
          const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));
  
          promiseAll([promise1, promise2, promise3]).then((values) => {
            assert(JSON.stringify(values) === JSON.stringify([3, 42, 'foo']), "promiseAll sollte mit den korrekten Werten aufgelöst werden");
          });
        `,
        description: 'promiseAll sollte mit den korrekten Werten aufgelöst werden'
      },
      {
        test: `
          const promise1 = Promise.resolve(1);
          const promise2 = Promise.reject('Error');
          const promise3 = Promise.resolve(3);
  
          promiseAll([promise1, promise2, promise3]).then(
            () => {
              assert(false, "promiseAll sollte abgelehnt werden, wenn ein Promise abgelehnt wird");
            },
            (reason) => {
              assert(reason === 'Error', "promiseAll sollte mit dem Grund des ersten abgelehnten Promises abgelehnt werden");
            }
          );
        `,
        description: 'promiseAll sollte mit dem Grund des ersten abgelehnten Promises abgelehnt werden'
      },
      {
        test: `
          promiseAll([]).then((values) => {
            assert(Array.isArray(values) && values.length === 0, "promiseAll sollte sofort mit einem leeren Array aufgelöst werden, wenn das Eingabearray leer ist");
          });
        `,
        description: 'promiseAll sollte sofort mit einem leeren Array aufgelöst werden, wenn das Eingabearray leer ist'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 54,
    title: 'Implement a Basic Redux Store',
    difficulty: 'Hard',
    category: 'State Management',
    description: `Implementieren Sie einen einfachen Redux-ähnlichen Store mit den Funktionen \`createStore\`, \`getState\`, \`dispatch\` und \`subscribe\`. Ihre Implementierung sollte:
    
  1. Einen Store mit einem Anfangszustand und einer Reducer-Funktion erstellen.
  2. Das aktuelle State abrufen lassen.
  3. Aktionen zum Aktualisieren des State dispatchen lassen.
  4. Das Abonnieren von State-Änderungen ermöglichen.
    
  Der Store sollte mit einer Reducer-Funktion erstellt werden, die den aktuellen State und eine Aktion entgegennimmt und den neuen State zurückgibt.`,
    examples: [
      {
        input: `const initialState = { count: 0 };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  };
  
  const store = createStore(reducer, initialState);
  console.log(store.getState()); // { count: 0 }
  store.dispatch({ type: 'INCREMENT' });
  console.log(store.getState()); // { count: 1 }`,
        output: `{ count: 0 }
  { count: 1 }`,
        explanation: 'Der Store wird erstellt, der State abgerufen, eine Aktion dispatcht und der aktualisierte State abgerufen'
      }
    ],
    initialCode: `function createStore(reducer, initialState) {
      // Your code here
    }`,
    solution: `function createStore(reducer, initialState) {
      let state = initialState;
      let listeners = [];
  
      function getState() {
        return state;
      }
  
      function dispatch(action) {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
      }
  
      function subscribe(listener) {
        listeners.push(listener);
        return function unsubscribe() {
          listeners = listeners.filter(l => l !== listener);
        };
      }
  
      dispatch({ type: '@@INIT' });
  
      return { getState, dispatch, subscribe };
    }`,
    testCases: [
      {
        test: `
          const initialState = { count: 0 };
          const reducer = (state, action) => {
            switch (action.type) {
              case 'INCREMENT':
                return { count: state.count + 1 };
              case 'DECREMENT':
                return { count: state.count - 1 };
              default:
                return state;
            }
          };
  
          const store = createStore(reducer, initialState);
          assert(store.getState().count === 0, "Anfänglicher State sollte korrekt sein");
          
          store.dispatch({ type: 'INCREMENT' });
          assert(store.getState().count === 1, "State sollte nach Dispatch einer Aktion aktualisiert werden");
          
          store.dispatch({ type: 'DECREMENT' });
          assert(store.getState().count === 0, "State sollte nach Dispatch einer weiteren Aktion aktualisiert werden");
        `,
        description: 'Store sollte State-Updates korrekt handhaben'
      },
      {
        test: `
          const initialState = { value: 0 };
          const reducer = (state, action) => {
            switch (action.type) {
              case 'SET_VALUE':
                return { value: action.payload };
              default:
                return state;
            }
          };
  
          const store = createStore(reducer, initialState);
          let callCount = 0;
          const unsubscribe = store.subscribe(() => {
            callCount++;
          });
  
          store.dispatch({ type: 'SET_VALUE', payload: 5 });
          store.dispatch({ type: 'SET_VALUE', payload: 10 });
          unsubscribe();
          store.dispatch({ type: 'SET_VALUE', payload: 15 });
  
          assert(callCount === 2, "Subscribe sollte für jeden Dispatch vor dem Unsubscribe aufgerufen werden");
        `,
        description: 'Subscribe und Unsubscribe sollten korrekt funktionieren'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 55,
    title: 'Implement QuickSort Algorithm',
    difficulty: 'Hard',
    category: 'Algorithms',
    description: `Implementieren Sie den QuickSort-Algorithmus in einer Funktion namens \`quickSort\`. Die Funktion sollte ein unsortiertes Array von Zahlen als Parameter nehmen und ein sortiertes Array zurückgeben. Nutzen Sie Rekursion und wählen Sie ein Pivot-Element, um das Array in kleinere und größere Elemente zu teilen.`,
    examples: [
      {
        input: 'quickSort([3, 6, 8, 10, 1, 2, 1])',
        output: '[1, 1, 2, 3, 6, 8, 10]',
        explanation: 'Das Array wird korrekt sortiert'
      },
      {
        input: 'quickSort([5, -1, 4, 2, 8])',
        output: '[-1, 2, 4, 5, 8]',
        explanation: 'Das Array mit negativen Zahlen wird korrekt sortiert'
      }
    ],
    initialCode: `function quickSort(arr) {
      // Your code here
    }`,
    solution: `function quickSort(arr) {
      if (arr.length <= 1) return arr;
  
      const pivot = arr[Math.floor(arr.length / 2)];
      const left = [];
      const right = [];
      const equal = [];
  
      for (let num of arr) {
        if (num < pivot) {
          left.push(num);
        } else if (num > pivot) {
          right.push(num);
        } else {
          equal.push(num);
        }
      }
  
      return [...quickSort(left), ...equal, ...quickSort(right)];
    }`,
    testCases: [
      {
        test: `
          assert(JSON.stringify(quickSort([3, 6, 8, 10, 1, 2, 1])) === JSON.stringify([1, 1, 2, 3, 6, 8, 10]), "quickSort([3, 6, 8, 10, 1, 2, 1]) sollte [1, 1, 2, 3, 6, 8, 10] zurückgeben");
        `,
        description: 'quickSort sollte ein korrekt sortiertes Array zurückgeben'
      },
      {
        test: `
          assert(JSON.stringify(quickSort([5, -1, 4, 2, 8])) === JSON.stringify([-1, 2, 4, 5, 8]), "quickSort([5, -1, 4, 2, 8]) sollte [-1, 2, 4, 5, 8] zurückgeben");
        `,
        description: 'quickSort sollte Arrays mit negativen Zahlen korrekt sortieren'
      },
      {
        test: `
          assert(JSON.stringify(quickSort([])) === JSON.stringify([]), "quickSort([]) sollte [] zurückgeben");
        `,
        description: 'quickSort sollte ein leeres Array korrekt behandeln'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 56,
    title: 'Implement Memoization',
    difficulty: 'Hard',
    category: 'Functions',
    description: `Implementieren Sie eine Funktion namens \`memoize\`, die eine andere Funktion als Parameter nimmt und eine memoizierte Version dieser Funktion zurückgibt. Memoization ist eine Optimierungstechnik, die die Ergebnisse von Funktionsaufrufen speichert, um die Leistung bei wiederholten Aufrufen mit denselben Argumenten zu verbessern.`,
    examples: [
      {
        input: `
          const slowFunction = (num) => {
            for (let i = 0; i < 1e6; i++) {}
            return num;
          };
          const memoizedFunction = memoize(slowFunction);
          memoizedFunction(5);
          memoizedFunction(5);
        `,
        output: 'Die zweite Ausführung von memoizedFunction(5) sollte schneller sein, da das Ergebnis zwischengespeichert wurde.',
        explanation: 'Die Funktion wird nur einmal mit dem Argument 5 ausgeführt, die zweite Ausführung nutzt den zwischengespeicherten Wert.'
      }
    ],
    initialCode: `function memoize(fn) {
      // Your code here
    }`,
    solution: `function memoize(fn) {
      const cache = {};
      return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
          return cache[key];
        }
        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
      };
    }`,
    testCases: [
      {
        test: `
          let callCount = 0;
          const add = (a, b) => { callCount++; return a + b; };
          const memoizedAdd = memoize(add);
          memoizedAdd(1, 2);
          memoizedAdd(1, 2);
          assert(callCount === 1, "memoize sollte die Funktion nur einmal für dieselben Argumente aufrufen");
        `,
        description: 'Memoize sollte die Funktion nur einmal für dieselbe Argumentkombination aufrufen'
      },
      {
        test: `
          let callCount = 0;
          const multiply = (a, b) => { callCount++; return a * b; };
          const memoizedMultiply = memoize(multiply);
          memoizedMultiply(2, 3);
          memoizedMultiply(3, 2);
          assert(callCount === 2, "memoize sollte unterschiedliche Argumentkombinationen separat behandeln");
        `,
        description: 'Memoize sollte unterschiedliche Argumentkombinationen separat behandeln'
      },
      {
        test: `
          let callCount = 0;
          const square = (n) => { callCount++; return n * n; };
          const memoizedSquare = memoize(square);
          memoizedSquare(4);
          memoizedSquare(4);
          memoizedSquare(4);
          assert(callCount === 1, "memoize sollte die Funktion mehrfach mit denselben Argumenten nur einmal aufrufen");
        `,
        description: 'Memoize sollte die Funktion mehrfach mit denselben Argumenten nur einmal aufrufen'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 57,
    title: 'Implement Binary Search',
    difficulty: 'Hard',
    category: 'Algorithms',
    description: `Implementieren Sie eine Funktion namens \`binarySearch\`, die ein sortiertes Array von Zahlen und eine Zielzahl als Parameter nimmt und den Index der Zielzahl im Array zurückgibt. Wenn die Zielzahl nicht gefunden wird, sollte die Funktion \`-1\` zurückgeben. Nutzen Sie den Binary Search-Algorithmus für eine effiziente Suche.`,
    examples: [
      {
        input: 'binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)',
        output: '4',
        explanation: '5 ist an Index 4 im Array'
      },
      {
        input: 'binarySearch([10, 20, 30, 40, 50], 25)',
        output: '-1',
        explanation: '25 ist nicht im Array enthalten'
      }
    ],
    initialCode: `function binarySearch(arr, target) {
      // Your code here
    }`,
    solution: `function binarySearch(arr, target) {
      let left = 0;
      let right = arr.length - 1;
  
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) {
          return mid;
        } else if (arr[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return -1;
    }`,
    testCases: [
      {
        test: `
          assert(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5) === 4, "binarySearch([1,2,3,4,5,6,7,8,9], 5) sollte 4 zurückgeben");
        `,
        description: 'binarySearch sollte den korrekten Index für vorhandene Elemente zurückgeben'
      },
      {
        test: `
          assert(binarySearch([10, 20, 30, 40, 50], 25) === -1, "binarySearch([10, 20, 30, 40, 50], 25) sollte -1 zurückgeben");
        `,
        description: 'binarySearch sollte -1 für nicht vorhandene Elemente zurückgeben'
      },
      {
        test: `
          assert(binarySearch([], 1) === -1, "binarySearch([], 1) sollte -1 zurückgeben");
        `,
        description: 'binarySearch sollte -1 für leere Arrays zurückgeben'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 58,
    title: 'Implement Throttle Function',
    difficulty: 'Hard',
    category: 'Functions',
    description: `Implementieren Sie eine Funktion namens \`throttle\`, die eine andere Funktion und eine Verzögerungszeit in Millisekunden als Argumente nimmt. Die \`throttle\`-Funktion sollte eine neue Funktion zurückgeben, die die ursprüngliche Funktion maximal einmal pro angegebene Verzögerungszeit ausführt, unabhängig davon, wie oft sie aufgerufen wird. Dies ist nützlich für die Optimierung von Funktionen, die häufig aufgerufen werden, wie z.B. bei Scroll- oder Resize-Events.`,
    examples: [
      {
        input: `const throttledFn = throttle(() => console.log('Hello'), 1000);
  throttledFn();
  throttledFn();
  throttledFn();`,
        output: `'Hello' wird einmal pro 1000ms ausgegeben`,
        explanation: 'Die Funktion wird maximal einmal pro Verzögerungszeit ausgeführt'
      }
    ],
    initialCode: `function throttle(func, delay) {
      // Your code here
    }`,
    solution: `function throttle(func, delay) {
      let lastCall = 0;
      return function(...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
          lastCall = now;
          func.apply(this, args);
        }
      };
    }`,
    testCases: [
      {
        test: `
          let counter = 0;
          const incrementCounter = () => { counter++; };
          const throttledIncrement = throttle(incrementCounter, 50);
          throttledIncrement();
          throttledIncrement();
          throttledIncrement();
          setTimeout(() => {
            assert(counter === 1, "Throttle sollte die Funktion nur einmal innerhalb der Verzögerungszeit aufrufen");
          }, 60);
        `,
        description: 'Throttle sollte die Funktion nur einmal innerhalb der Verzögerungszeit aufrufen'
      },
      {
        test: `
          let callCount = 0;
          const fn = () => { callCount++; };
          const throttledFn = throttle(fn, 100);
          throttledFn();
          setTimeout(throttledFn, 50);
          setTimeout(throttledFn, 150);
          setTimeout(() => {
            assert(callCount === 2, "Throttle sollte die Funktion zweimal aufrufen, einmal sofort und einmal nach der Verzögerung");
          }, 200);
        `,
        description: 'Throttle sollte die Funktion zweimal aufrufen, einmal sofort und einmal nach der Verzögerung'
      },
      {
        test: `
          let callCount = 0;
          const fn = () => { callCount++; };
          const throttledFn = throttle(fn, 100);
          for (let i = 0; i < 10; i++) {
            throttledFn();
          }
          setTimeout(() => {
            assert(callCount === 1, "Throttle sollte die Funktion nur einmal aufrufen, wenn alle Aufrufe innerhalb der Verzögerungszeit erfolgen");
          }, 50);
        `,
        description: 'Throttle sollte die Funktion nur einmal aufrufen, wenn alle Aufrufe innerhalb der Verzögerungszeit erfolgen'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 59,
    title: 'Implement Event Emitter',
    difficulty: 'Hard',
    category: 'Events',
    description: `Implementieren Sie eine Klasse namens \`EventEmitter\`, die die folgenden Methoden unterstützt:
    
  1. \`on(event, listener)\`: Fügt einen Listener für ein bestimmtes Ereignis hinzu.
  2. \`emit(event, ...args)\`: Löst ein bestimmtes Ereignis aus und ruft alle zugehörigen Listener mit den bereitgestellten Argumenten auf.
  3. \`off(event, listener)\`: Entfernt einen bestimmten Listener von einem Ereignis.
    
  Diese Klasse sollte die grundlegende Funktionalität eines Event-Emitters nachahmen, wie sie in vielen JavaScript-Frameworks verwendet wird.`,
    examples: [
      {
        input: `
          const emitter = new EventEmitter();
          const greet = (name) => console.log(\`Hello, \${name}!\`);
          emitter.on('greet', greet);
          emitter.emit('greet', 'Alice');
          emitter.off('greet', greet);
          emitter.emit('greet', 'Bob');
        `,
        output: `'Hello, Alice!'`,
        explanation: 'Der Listener wird für "greet" ausgelöst, aber nach dem Entfernen nicht mehr für "Bob"'
      }
    ],
    initialCode: `class EventEmitter {
      constructor() {
        // Your code here
      }
  
      on(event, listener) {
        // Your code here
      }
  
      emit(event, ...args) {
        // Your code here
      }
  
      off(event, listener) {
        // Your code here
      }
    }`,
    solution: `class EventEmitter {
      constructor() {
        this.events = {};
      }
  
      on(event, listener) {
        if (!this.events[event]) {
          this.events[event] = [];
        }
        this.events[event].push(listener);
      }
  
      emit(event, ...args) {
        if (this.events[event]) {
          this.events[event].forEach(listener => listener(...args));
        }
      }
  
      off(event, listener) {
        if (!this.events[event]) return;
        this.events[event] = this.events[event].filter(l => l !== listener);
      }
    }`,
    testCases: [
      {
        test: `
          const emitter = new EventEmitter();
          let count = 0;
          const increment = () => { count++; };
          emitter.on('increment', increment);
          emitter.emit('increment');
          emitter.emit('increment');
          assert(count === 2, "Listener sollte zweimal aufgerufen werden");
        `,
        description: 'Listener sollte bei jedem Emit-Aufruf ausgeführt werden'
      },
      {
        test: `
          const emitter = new EventEmitter();
          let message = '';
          const setMessage = (msg) => { message = msg; };
          emitter.on('message', setMessage);
          emitter.emit('message', 'Hello');
          assert(message === 'Hello', "Listener sollte das übergebene Argument korrekt verarbeiten");
        `,
        description: 'Listener sollte das übergebene Argument korrekt verarbeiten'
      },
      {
        test: `
          const emitter = new EventEmitter();
          let called = false;
          const listener = () => { called = true; };
          emitter.on('test', listener);
          emitter.off('test', listener);
          emitter.emit('test');
          assert(!called, "Listener sollte nach dem Entfernen nicht mehr aufgerufen werden");
        `,
        description: 'Listener sollte nach dem Entfernen nicht mehr aufgerufen werden'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 60,
    title: 'Implement Async/Await with Promises',
    difficulty: 'Hard',
    category: 'Asynchronous Programming',
    description: `Schreiben Sie eine Funktion namens \`fetchData\`, die asynchron Daten von einer gegebenen URL abruft. Nutzen Sie Promises und die \`async/await\`-Syntax, um die asynchrone Logik zu handhaben. Die Funktion sollte den abgerufenen JSON-Inhalt zurückgeben oder einen Fehler werfen, wenn der Abruf fehlschlägt.`,
    examples: [
      {
        input: `
          fetchData('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data));
        `,
        output: `{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }`,
        explanation: 'Die Funktion gibt die JSON-Daten der angegebenen URL zurück'
      }
    ],
    initialCode: `async function fetchData(url) {
      // Your code here
    }`,
    solution: `async function fetchData(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(\`HTTP error! Status: \${response.status}\`);
        }
        const data = await response.json();
        return data;
      } catch (error) {
        throw error;
      }
    }`,
    testCases: [
      {
        test: `
          fetchData('https://jsonplaceholder.typicode.com/todos/1').then(data => {
            assert(data.id === 1, "fetchData sollte die korrekten Daten zurückgeben");
          });
        `,
        description: 'fetchData sollte die korrekten Daten zurückgeben'
      },
      {
        test: `
          fetchData('https://jsonplaceholder.typicode.com/invalid-url').then(
            () => {
              assert(false, "fetchData sollte einen Fehler werfen, wenn die URL ungültig ist");
            },
            (error) => {
              assert(error instanceof Error, "fetchData sollte einen Error werfen");
            }
          );
        `,
        description: 'fetchData sollte einen Fehler werfen, wenn die URL ungültig ist'
      },
      {
        test: `
          fetchData('').then(
            () => {
              assert(false, "fetchData sollte einen Fehler werfen, wenn die URL leer ist");
            },
            (error) => {
              assert(error instanceof Error, "fetchData sollte einen Error werfen");
            }
          );
        `,
        description: 'fetchData sollte einen Fehler werfen, wenn die URL leer ist'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }  

];
