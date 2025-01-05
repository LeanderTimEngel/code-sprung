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
  // ... (existing problems)

  {
    id: 2,
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
    id: 3,
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 8,
    title: 'Deep Object Clone',
    difficulty: 'Hard',
    category: 'Objects',
    description: `Write a function called \`deepClone\` that takes an object as a parameter and returns a deep clone of that object. A deep clone should create a completely independent copy of the original object, including nested objects and arrays.`,
    examples: [
      {
        input: `const original = { a: 1, b: { c: 2 }, d: [3, 4] };
const clone = deepClone(original);
original.b.c = 5;
console.log(clone.b.c);`,
        output: '2',
        explanation: 'Modifying the original object does not affect the cloned object'
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
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  
  return clonedObj;
}`,
    testCases: [
      {
        test: `
          const original = { a: 1, b: { c: 2 }, d: [3, 4] };
          const clone = deepClone(original);
          original.b.c = 5;
          assert(clone.b.c === 2, "Modifying the original should not affect the clone");
        `,
        description: 'Modifying the original should not affect the clone'
      },
      {
        test: `
          const original = [1, [2, 3], { a: 4 }];
          const clone = deepClone(original);
          original[1][0] = 5;
          assert(clone[1][0original[1][0] = 5;
          assert(clone[1][0] === 2, "Modifying the original nested array should not affect the clone");
        `,
        description: 'Modifying the original nested array should not affect the clone'
      },
      {
        test: `
          const original = { a: 1, b: { c: { d: 2 } } };
          const clone = deepClone(original);
          original.b.c.d = 3;
          assert(clone.b.c.d === 2, "Modifying a deeply nested property should not affect the clone");
        `,
        description: 'Modifying a deeply nested property should not affect the clone'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 9,
    title: 'Debounce Function',
    difficulty: 'Hard',
    category: 'Functions',
    description: `Implement a \`debounce\` function that takes a function and a delay time as arguments. The debounce function should return a new function that, when called, delays the execution of the original function until the specified delay time has passed since the last call. If the debounced function is called again within the delay period, the timer should reset.

This is useful for optimizing performance on events that might fire rapidly, such as resizing a window or typing in a search box.`,
    examples: [
      {
        input: `const debouncedFn = debounce(() => console.log('Hello'), 1000);
debouncedFn(); // Called immediately
debouncedFn(); // Called after 100ms
// 'Hello' is logged once after 1000ms`,
        output: 'Hello (logged once after 1000ms)',
        explanation: 'The function is only executed once, 1000ms after the last call'
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
            assert(counter === 1, "Counter should be incremented only once after the delay");
          }, 100);
        `,
        description: 'Counter should be incremented only once after the delay'
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
              assert(lastCallTime - firstCallTime >= 100, "The debounced function should be called after the specified delay");
            }, 100);
          }, 30);
        `,
        description: 'The debounced function should be called after the specified delay'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 10,
    title: 'Implement Promise.all',
    difficulty: 'Hard',
    category: 'Asynchronous Programming',
    description: `Implement a function called \`promiseAll\` that mimics the functionality of \`Promise.all\`. Your function should take an array of promises as an input and return a new promise that resolves to an array of the results when all of the input promises have resolved, or rejects with the reason of the first promise that rejects.

If the input array is empty, the promise returned by your function should resolve immediately with an empty array.`,
    examples: [
      {
        input: `const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'));

promiseAll([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});`,
        output: '[3, 42, "foo"]',
        explanation: 'The function resolves with an array containing the resolved values of all input promises'
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
            assert(JSON.stringify(values) === JSON.stringify([3, 42, 'foo']), "promiseAll should resolve with the correct array of values");
          });
        `,
        description: 'promiseAll should resolve with the correct array of values'
      },
      {
        test: `
          const promise1 = Promise.resolve(1);
          const promise2 = Promise.reject('Error');
          const promise3 = Promise.resolve(3);

          promiseAll([promise1, promise2, promise3]).then(
            () => {
              assert(false, "promiseAll should reject when one promise rejects");
            },
            (reason) => {
              assert(reason === 'Error', "promiseAll should reject with the reason of the first rejected promise");
            }
          );
        `,
        description: 'promiseAll should reject with the reason of the first rejected promise'
      },
      {
        test: `
          promiseAll([]).then((values) => {
            assert(Array.isArray(values) && values.length === 0, "promiseAll should resolve immediately with an empty array for an empty input");
          });
        `,
        description: 'promiseAll should resolve immediately with an empty array for an empty input'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    id: 11,
    title: 'Implement a Basic Redux Store',
    difficulty: 'Hard',
    category: 'State Management',
    description: `Implement a basic Redux-like store with \`createStore\`, \`getState\`, \`dispatch\`, and \`subscribe\` functions. Your implementation should:

1. Create a store with an initial state and a reducer function.
2. Allow getting the current state.
3. Allow dispatching actions to update the state.
4. Allow subscribing to state changes.

The store should be created with a reducer function that takes the current state and an action, and returns the new state.`,
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
        explanation: 'The store is created, the state is retrieved, an action is dispatched, and the updated state is retrieved'
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
          assert(store.getState().count === 0, "Initial state should be correct");
          
          store.dispatch({ type: 'INCREMENT' });
          assert(store.getState().count === 1, "State should update after dispatching an action");
          
          store.dispatch({ type: 'DECREMENT' });
          assert(store.getState().count === 0, "State should update after dispatching another action");
        `,
        description: 'Store should handle state updates correctly'
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

          assert(callCount === 2, "Subscribe should be called for each dispatch before unsubscribing");
        `,
        description: 'Subscribe and unsubscribe should work correctly'
      }
    ],
    videoExplanation: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  }
];

