
/* Thses are notes strictly for Javascript

Javascript Loops 

Types of Loops:
 for
 while
 do-while
 for-in
 for-of
 Labeled Statement
 Break Statement
 Continue Statement
 Infinite Loop (Loop Error)


 1. for Loop
    this loop contains - initialization, condition, and increment/decrement 
    in one line thereby providing a shorter, easy-to-debug structure of looping. 

    Syntax for: for Loop
        for (initialization; testing condition; increment/decrement){
        statement(s)
        }

 - Initialization condition: marks the start of a for loop. 
    an already declared variable can be used or a variable can be declared,
    local to loop only.

 - Test Condition: Used for testing the exit condition of a for loop. 
    It must return a boolean value.  It is also an Entry Control Loop as the 
    condition is checked prior to the execution of the loop statements.

 - Statement Execution: Once the condition is evaluated to be true, the statements
    in the loop body are executed.

 - Increment/Decrement: It is used for updating the variable for the next
    iteration. 

 - Loop Termination: When the condition becomes false, the loop terminates
    marking the end of its life cycle. 


    Example of for Loop:

    let x;

    Note: for Loop begins when x = 2 and will run until x is <= (less than or equal to) 4
        You may also use [i] and .length if you are using an array.

    for (x = 2; x,= 4; x++){
        console.log("Value of x: " + x);
    }

    Output: Value of x: 2
            Value of x: 3
            Value of x: 4




 2. while Loop
    this loop is a control flow statement that allows code to be executed 
    repeatedly based on a given Boolean condition. The while loop can be 
    thought of as a REPEATING IF STATEMENT.

    Syntax for: while Loop
        while (boolean condition){
        loop statements...
        }

 - While loop starts with checking the condition. If it is evaluated to be true,
    then the loop body statements are executed otherwise first following the loop
    is executed. For this reason, it is also called the Entry Control Loop. 

 - Once the condition is evaluated to be true, the statements in the loop body are
    executed. Normally the statements contain an updated value for the variable being
    processed for the next iteration. 

 - When the condition becomes false, the loop terminates which marks the end of its
    life cycle. 


    Example of: while Loop

    let val = 1;

    while (val < 6){
        console.log(val);
        val += 1;
    }

    Output: 1
            2
            3
            4
            5
            Note: This code will run 5 times because it is set to "Less than 6" not
            "Less than or EQUAL to 6".




 3. do-while Loop
    This loop is similar to the "while Loop" with only difference being that 
    it checks for the condition after executing the statements, and therefore
    is an example of an Exit Control Loop. It executes loop content at least
    once event the condition is false. 


    Syntax for: do-while Loop

    do {
        statements...
    }
    while (condition);


 - The do-while loop starts with the execution of the statement(s).
    There is no checking of any condition for the first time.

 - After the execution of the statements and update of the variable 
    value, the condition is checked for a true or false value. If it is
    evaluated to be true, the next iteration of the loop starts.

 - When the condition becomes false, the loop will terminate, marking
    the end of its life cycle.

 - It is important to note that the do-while loop will execute its 
    statements at least once before any condition is checked and therefore
    is an example of the exit control loop.


    Example of: do-while Loop

    let test = 1;

    do {
        console.log(test);
        test++
    } while(test <= 5)


    Output: 1
            2
            3
            4
            5




 4. for-in Loop

    for-in loop is used to iterate over the properties of an object. The for-in
    loop iterates only over those keys of an object which have their enumerable
    property set to "true".


    Syntax for: for-in Loop

    for(let variable_name in object_name) {
        statement...
    }


    Example of: for-in Loop

        let myObject = {x: 1, y: 2, z: 3};

        for(let key in myObject) {
            console.log(key, myObject[key]):
        }


        Output: x 1
                y 2
                z 3




 5. for-of Loop
    for-of loop is used to iterate the iterable objects for example:
    array, object, set and map. It directly iterates the value of the given iterable
    object and has more concise syntax than for loop. 


    Syntax for: for-of Loop

    for(let variable_name of object_name) {
        statement...
    }


    Example of: for-of Loop

    let array = [1, 2, 3, 4, 5];

    for (let value of array) {
        console.log(value);
    }


    Output: 1
            2
            3
            4
            5




 6. Labeled Statement
    - Label keyword does not include goto keyword.
    - Users can use the continue keyword with the label statement.
    
    Furthermore, users can use the break keyword to terminate the loop/block.
    You can also use the break keyword without defining the label but it terminates
    only the parent loop/block. To terminate the outer loop from the inner loop 
    using the break keyword, users need to define the label.


    Syntax for: Labeled Statement(s):

    Label:
        statement (loop or block of code)



    Example of: Labeled Statement(s)

    let sum = 0, a = 1;

    outerloop: while (true) {
        a = 1;

        innerloop: while (a < 3) {
            sum += a;
            if (sum > 12){
            
                break outerloop;
            }
            console.log("Sum = " + sum);
            a++;
        }
    }


    Output: Sum = 1
            Sum = 3
            Sum = 4
            Sum = 6
            Sum = 7
            Sum = 9
            Sum = 10
            Sum = 12
                Note: That you are breaking the outerloop
                from the inner loop.




 7. Break Statement(s)
    Break statement(s) are used to terminate the execution of the loop
    or switch statement when the condition is true.


    Syntax for: Break Statement(s)

    break;


    Example of: Break Statement(s)

    for (let i = 1; i < 6; i++) {
        if (i == 4)
            break;

        console.log(i);
    }


    Output: 1
            2
            3




 8. Continue Statement(s)
    The continue statement is used to break the iteration of the loop and 
    follow with the next iteration. The break in iteration is possible only
    when the specified condition is going to occur.
    The major difference between the continue statement and the break statement
    is that the break statement breaks out of the loop completely while the
    continue statement is used to break one statement and iterate to the next 
    statement and so on. 


    Syntax for: Continue Statement(s)

    continue;


    Example of: Continue Statement(s)

    for (let i = 0; i < 11; i++) {
        if (i % 2 == 0)
            continue;

        console.log(i);
    }


    Output: 1
            3
            5
            7
            9

    
            
 9. Infinite Loop (Loop Error)
    One of the most common mistakes while implementing any sort of loop
    is that it may not ever exit, i.e. the loop runs for infinte times.
    This happens when the condition fails for some reason.

    There is no defined syntax for an infinte loop.

    Example of: Infinite Loop (Loop Error is a mistake.)

    for (let i = 5; i != 0; i -= 2) {
        console.log(i);
    }

    let x = 5;

    while (x == 5) {
        console.log("You cannot escape yourself.")
    }

    
    Output: There is no output for infinite loop only that it fucks up
    your computer screen and console until you fix it...






    OVERVIEW OF LOOPS DOWN BELOW!

 So, what are loops in JavaScript?
    
    "Loops are a fundamental concept in programming used to repeat a block 
    of code multiple times. In JavaScript, loops allow you to execute a piece
    of code repeatedly until a specified condition is met."


 What are the different types of loops in JavaScript?
    
    JavaScript provides several types of loops:

    - for loop: Used when the number of iterations is known.
    - while loop: Repeats as long as a specified condition is true.
    - do-while loop: Similar to the while loop, but it executes the 
        block of code once before checking the condition.
    - for-in loop: Used to iterate over the properties of an object.
    - for-of loop: Used to iterate over iterable objects like arrays,
        strings, maps, etc.


 How does a for loop work?
    A for loop repeats a block of code a certain number of times. 
    It consists of three parts.

    - Initialization: Initialize the loop counter variable.
    - Condition: The loop runs as long as this condition is true.
    - Increment/Decrement: Modify the loop counter variable.
    - Example: for(let i = 0; i < 5; i++){console.log(i);}


 
*/