1.The bug was caused by the concatenation of two strings, rather than the sum of two numbers when using the `+` operator. For lines "document.getElementById("num1").value" and "document.getElementById("num1").value", it would read the values from the textboxes as data type of strings, specifically. They would return a string value representing the current value of the HTML input element with the id attributes of `num1` and `num2`. And when using watch expressions, the data type of `result` (sums of two numbers) is also indeed defined as string. The `num1 + num2` (two strings summations) would lead to a concatenation of two strings, such that "3"+"6"="36" rather than return as a correct numeric sum of number 9.

2.The way I fix the bug is to change the data type of the `num1` and `num2` from strings to integers by adding two lines `let intNum1 = parseInt(num1);` and `let intNum2 = parseInt(num2);` to change the data type of `num1` and `num2` from strings to integers. And then alter the result line to `let result = intNum1 + intNum2;` to allow the data type of `result` to be integers as well as a numeric output of the sum of two integers. So now if I input 3 (First number) and 2 (Second number)in the textboxes, it would successfully return the sum as 5.