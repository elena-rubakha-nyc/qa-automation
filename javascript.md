# JavaScript Operators

# Addition Assignment Operator (=)

assigns a value to a variable:

- let x = 5;
- let y = 2;

Types:

- =
- +=
- -=
- \*=
- /=
- %=
- \*\*=

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

increments numbers:

- llet x = 5;
- x++;
- let z = x;

## Decrement Operator (--)

decrements numbers:

- let x = 5;
- x--;
- let z = x;

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