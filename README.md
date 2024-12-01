# Grade Generator

This is a simple JavaScript function that generates grades based on numerical input. The `gradeGenerator` function takes a numerical score between 0 and 100 and returns the corresponding grade (A, B, C, D, or E) based on predefined thresholds.

## Function Overview

The function `gradeGenerator(grade)` accepts a number `grade` as input. It checks if the grade is a valid number within the range of 0 to 100. If the input is invalid, an error message is returned. If the input is valid, the function returns the corresponding grade based on the following scale:

## Usage

You can use the `gradeGenerator` function by calling it with a number between 0 and 100:

```javascript
console.log(gradeGenerator(90)); // Output: A
console.log(gradeGenerator(69)); // Output: B
console.log(gradeGenerator(55)); // Output: C
console.log(gradeGenerator(40)); // Output: D
console.log(gradeGenerator(15)); // Output: E
console.log(gradeGenerator(300)); // Output: "Invalid score. Please enter a number between 0 and 100"
```


# Speed Detection Function

This is a JavaScript function, `detectSpeed`, that evaluates a driver's speed and returns a result based on a set of rules:

- If the speed is less than or equal to 70, the driver is fine ("OK").
- If the speed exceeds 130, the driver's license is suspended ("License suspended")
- If the speed is between 70 and 130, the function calculates how many "points" are issued for speeding, based on every 5 km/h over the limit.

## Function Overview

The `detectSpeed(speed)` function takes a numeric speed value and applies the following logic:

1. If the speed is less than or equal to 70, it returns `"OK"`.
2. If the speed is greater than 130, it returns `"License suspended"`.
3. If the speed is between 71 and 130, the function calculates the number of points by determining how many multiples of 5 the excess speed is (i.e., every 5 km/h over the speed limit).





# Net Salary Calculation Function

This is a simple JavaScript function, `calculateNetSalary`, that calculates the net salary of an employee based on their basic salary and benefits. The function takes into account deductions such as PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund).

## Function Overview

The `calculateNetSalary(basicSalary, benefits)` function computes the **net salary** by first calculating the **gross salary** (basic salary + benefits), then subtracting the following deductions:

- PAYE: A tax based on the employee’s income.
- NHIF: A contribution towards the National Hospital Insurance Fund.
- NSSF: A contribution towards the National Social Security Fund.

### Steps Performed by the Function:

1. Gross Salary: The sum of basic salary and benefits.
2. PAYE: Calculated based on the gross salary using the `calculatePAYE` function.
3. NHIF: Deduction based on the gross salary using the `calculateNhif` function.
4. NSSF: Deduction based on the gross salary using the `calculateNssf` function.
5. Net Salary: The final salary after subtracting PAYE, NHIF, and NSSF from the gross salary.

## Features

- Calculates net salary after applying tax and other mandatory deductions.
- Logs the individual deductions (PAYE, NHIF, NSSF) for transparency.
- Easily adjustable to accommodate changes in tax rates or deduction formulas.


## Usage

You can use the `calculateNetSalary` function by calling it with the employee's basic salary and benefits:

```javascript
console.log(calculateNetSalary(50000, 20000));  // Output: Net salary after deductions
