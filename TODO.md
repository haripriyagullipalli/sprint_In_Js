### Sprint Function Implementation

## codes
- 3 => move
- 7 => copy
- 9 => halt
- 1 => add
- 2 => sub
- 4 => areEqual
- 5 => greaterThan
- 99 => functionStart
- 100 => functionEnd
- argumentsStart => 101
- argumentsEnd => 102
- returnValue => 150
- functionCall => 105

99 1098 3 101 

## program


-  Input: 99 1098 1 2 3 100 105 1098
-  definition array: 99 1098 1 2 3 100
-  references = {1098:definition array[0]};
-  while executing whenever I see function call I will go definition array and I will execute I will store return value

-while compiling I will check for parse error, I will store function in another table.
-I create array to execute code , in that I will store function name and next location of the of the function,
-while executing  


## Execution Steps

1. **Compilation**: First, I will compile the code. If there are any parse errors, I will return an error.

2. **Function Definition Table**: I will store function definitions in a separate table, maintaining references to each function.

3. **Execution Array**: During compilation, I will create an array called `execution_array`. When I encounter a function call, I will refer to the corresponding function in the function definition table. I will take inputs dynamically, pass them to the function, and store the return value in a designated position. Finally, I will provide the return value of the function at the end.
