# JavaScript Operators

# Addition Assignment Operator (=)

assigns a value to a variable:

- let x = 5;
- let y = 2;

Types:

| Operator | Example   | Same As      |
| -------- | --------- | ------------ |
| =        | x = y     | x = y        |
| +=       | x += y    | x = x + y    |
| -=       | x -= y    | x = x - y    |
| \*=      | x \*= y   | x = x \* y   |
| /=       | x /= y    | x = x / y    |
| %=       | x %= y    | x = x % y    |
| \*\*=    | x \*\*= y | x = x \*\* y |

# JavaScript Arithmetic Operators

## Addition Operator (+)

adds numbers:

- let z = x + y;

## Subtraction Operator (-)

subtracts numbers

- let z = x - y;

## Multiplication Operator (\*)

multiplies numbers:

- let z = x \* y;

## Division Operator (/)

- let z = x / y;

## Modulus (Division Remainder) Operator (%)

returns the division remainder:

- let z = x % y;

## Increment Operator (++)

increments numbers by 1:

```JavaScript
let x = 5;
x++;
console.log(x);
// Output: 6
```

Difference between x++ and ++x:

```JavaScript
let x = 0;
result = ++x;
// x = x + 1;
// result = x;
console.log(`result = ${result} x = ${x}`);
// Output: result = 1   x = 1

let x = 0;
result = x++;
// result = x;
// x = x + 1;
console.log(`result = ${result}   x = ${x}`);
// Output: result = 0   x = 1
```

## Decrement Operator (--)

decrements numbers by 1:

```Javascript
let x = 5;
x--;
console.log(x);
// Output: 4
```

## Exponentiation Operator (\*\*)

raises the first operand to the power of the second operand:

- let x = 5;
- let z = x \*\* 2;

## Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression:

- let x = 100 + 50 \* 3;
  - Multiplication (\*) and division (/) have higher precedence than addition (+) and subtraction (-).

# Comparison Operators

| Operator | Description                       |
| -------- | --------------------------------- |
| ==       | equal to                          |
| ===      | equal value and equal type        |
| !=       | not equal                         |
| !==      | not equal value or not equal type |
| (>)      | greater than                      |
| <        | less than                         |
| (>=)     | greater than or equal to          |
| (<=)     | less than or equal to             |
| ?        | ternary operator                  |

# JavaScript String Comparison

All the comparison operators above can also be used on strings. Note that strings are compared alphabetically.

- The + can also be used to add (concatenate) strings:
  - let text1 = "John";
  - let text2 = "Doe";
  - let text3 = text1 + " " + text2;
- The += assignment operator can also be used to add (concatenate) strings:
  - let text1 = "What a very ";
  - text1 += "nice day";
  - The result of text1 will be: What a very nice day

# Dynamic Typing

Javascript is a dynamic typing language. When you declare a variable, you do not need to specify what type this variable is. Javascript engine infers what type this variable is based on the value assigned to at run time. Variable type can be changed at any time

```
let country = "USA"
console.log(typeof country)
//output: string
country = 7
console.log(typeof country)
//output: number
```
