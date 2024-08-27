
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


 What is the difference between a while and do-while loop?
    - while loop: checks the condition before executing the block
        of code.
        Example: let i = 0; while (i < 5) {console.log(i); i++;}
    
    - do-while loop: executes the block of code once before checking
        the condition.
        Example: let i = 0; do {console.log(i); i++;} while (i < 5);

    
 How does the for-in loop work?
    - The for-in loop iterates over the properties of an object 
        (including inherited properties).
        Example: const obj = {a: 1, b: 2, c: 3}; for (let key in obj) {
        console.log(value);}


 How does the for-of loop work?
    - The for-of loop iterates over the values of an iterable object
        (like an array).
        Example: const arr = [1,2,3]; for (let value of arr) {
        console.log(value);}


 What is an infinite loop, and how can it be avoided?
    - An infinite loop occurs when the loop's terminating condition is
        never met, causing the loop to run indefinitely. It can be avoided
        by ensuring that the loop has a condition that will eventually
        become false. 


End JS Loops.






JavaScript Functions

 A function in JavaScript is a reusable block of code that performs a
    specific task. You define it once, and then you can run (or "call")
    it whenever you need that task done in your program. 

    A JavaScript function runs when it is "called" by some part of your
        code.


        Syntax for functions: 
            function functionName(Parameter1, Parameter2,...)
            {
                Function body...
            }

    To create a function in JavaScript, we have to first use the keyword
        "function", seperated by the name of the function (i.e. function name)
        and parameters within parenthesis. The part of the function inside the
        curly braces {} is the body of the function.

        In JavaScript, functions can be used in the same way as variables for
        assignments, or calculations. 


 Why Functions?
    - Functions can be used multiple times, reducing redundancy.

    - Break down complex problems into manageable pieces.

    - Manage complexity by hiding implementation details.

    - Can call themselves to solve problems recursively.


 Function Invocation
    The function code you have written will be executed whenever it is called.

    - Triggered by an event (e.g., a button clicked by a user).

    - When explicitly called from JavaScript code.

    - Automatically executed, such as in self-invoking functions.


 Function Defintion
    Before, using a user-defined functions in JavaScript we had to create one.
        We can use the above syntax to create a function in JavaScript.

        A function definition is sometimes also termed a function declaration
            or a function statement. Below are the rules for creating a function
            in JavaScript.

    - Every function should begin with the keyword "function" followed by,

    - A user-defined function name that should be unique,

    - A list of parameters enclosed within parentheses and seperated by
        commas,

    - A list of statements composing the body of the function enclosed 
        within curly braces {}.


        Example of Basic Declaration of A Function:

        function calcAddition(number1, number2) {
            return number1 + number2;
        }
        console.log(calcAddition(6,9));

            Output: 15


    In the above example, we have created a function named calcAddition.
        - This function accepts two numbers as parameters and returns the
            addition of these two numbers.

        - Accessing the function with just the function name without () will
            return the function object instead of the function result.


    There are three (3) ways of writing a function in JavaScript:
        
        1. Function Declaration: 
            - It declares a function with a function keyword.
                The function declaration must have a function name.

            Syntax: 

                function winterNiqhts(paramA, paramB) {
                    set of statements...
                }



        2. Function Expression:
            - It is similar to a function declaration without the function
                name. Functioon expressions can be stored in a variable assignment.

            Syntax:

                let winterNiqhts = function(paramA, paramB) {
                    set of statements...
                }


            Example of function expression:

                const square = function (number) {
                    return number * number;
                };

                const x = square(4); // x gets the value of 16
                console.log(x);

                    Output: 16



        3. Functions as Variable Values
            - Functions can be used the same way as you use variables.

            Example:

                    // Function to convert Fahrenheit to Celsius

                function toCelsius(fahrenheit) {
                    return (fahrenheit - 32) * 5/9;
                }

                    // Using the function to convert temmperature

                let temperatureInFahrenheit = 77;
                let temperatureInCelsius = toCelsius(temperatureInFahrenheit);
                let text = "The temperature is " + temperatureInCelsius + "Celsius";




    Arrow Function:
        Arrow Function is one of the most used and efficient methods to create
            a function in JavaScript because of its comparatively easy 
            implementation. It is a simplified as well as a more compact version
            of a regular or normal function expression or syntax.


            Syntax of Arrow Function:

                let function_name = (argument1, argument2,...) => expression


            Example of Arrow Function:

                const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

                const a2 = a.map(function (s) {
                });

                console.log("Normal way ", a2); // [8, 6, 7, 9]

                const a3 = a.map((s) => s.length);

                console.log("Using Arrow Function ", a3); // [8, 6, 7, 9]

                    Output:
                        Normal way [8, 6, 7, 9]
                        Using Arrow Function [8, 6, 7, 9]




    Function Parameters
        Parameters are additional information passed to a function.
            For example, in the above example (line 492), the task of the
            function calcAddition is to calculate the addition of two numbers.
            These two numbers on which we want to perform the addition operation
            are passed to this function as parameters. The parameters are passed
            to the function within parenthesis after the function name and seperated
            by commas. A function in JavaScript can have any number of parameters
            and also at the same time, a function in JavaScript can not have 
            a single parameter. 


            Example of Passing The Arugument To A Function:

                function multiply(a, b) {
                    b = typeof b !== "undefined" ? b : 1;
                    return a * b;
                }
                
                console.log(multiply(69));

                    Output: 
                        69



    Calling Functions
        After defining a function, the next step is to call them to make use
            of the function. We can call a function by using the function name
            seperated by the value of parameters enclosed between parenthesis
            and a semicolon at the end. The below syntax shows how to call
            functions in JavaScript.


            Syntax for Calling a Function:

                functionName(Value1, Value2, ...);


            Example of a sample program that illustrates the working of
            functions in JavaScript:

                function welcomeMsg(name) {
                    return ("Hello " + name + " welcome to my code notes.");
                }

                let nameVal = "xx121"; // creating a variable to store the name

                console.log(welcomeMsg(nameVal)); // calling the function


                    Output:
                        Hello xx121 welcome to my code notes.



    Return Statement(s)
        There are some situations when we want to return some values from a
            function after performing some operations. In such cases, we can make
            use of the return statement in JavaScript. This is an optional statement
            and most of the time the last statement in a JavaScript function.
            Look at our first example with the function named as calcAddition (line 492).
            This function is calculating two numbers and then returns the result.


            Syntax for Return Statement:

                return value;

            
            This return statement begins with the keyword "return" seperated by the 
                value which we want to return from it. We can use an expression also 
                instead of directly returning the value. 



    OVERVIEW ON JAVASCRIPT FUNCTIONS!

        So, what is a function in JS?

            A function is a reusable block of code designed to perform a particular
                task. Functions can take inputs, process them, and return a result.


        How do you define a function?

            Functions can be defined using function declarations or function
                expressions.


        What is a function declaration?

            A function declaration defines a function with the specified
                parameters and code block. The function can be called before
                it is defined due to hoisting.


        What is a function expression?
            
            A function expression defines a function inside an expression.
                The function can be anonymous and is not hoisted, so it cannot
                be called before it is defined.


        What are arrow functions?

            Arrow functions provide a shorter syntax for writing functions.
                They do not have their own this context and are not hoisted.

            Example:

                const name = (parameters) => {// code to be executed};


        How do you call a function?

            You call a function by using its name followed by parentheses,
                which may include arguments. 


 End JS Functions






 
                
*/