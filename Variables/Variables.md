Variables...............

-> var: Variables, declared with var keyword are either of function scope or global scope
    they are visible through blocks.

    eg. 

        if(true) {
            var testing = "say hello!!!!";
        }

        console.log(testing);

    Same goes for loops.

    If we use inside a function, var will only be accessed inside that function.

    eg.
        function world() {
            if(true) {
                var text = "hello!! world";
            }

            console.log(text); // output:- hello!! world
        }

        world() 

        function world() {
            if(true) {
                var text = "hello!! world"; 
                }

        }

        console.log(text); // ReferenceError

        world()

In var declaring the same variable twice won't give error.

    var a = "hello";
    var a = "world";

    console.log(a);// output:- world


-> let: It is a variable, can be declared, assigned or reassigned.

    //Declared

    let amount;
    console.log(amount); // output:- undefined

    // assigned
    amount = 200;
    console.log(amount); // output:- 200

    // reassigned
    amount = 300;
    console.log(amount); // output:- 300

    -> let variable cannot be used or assigned before declaring

        amount = "$200";
        let amount; // ReferenceError

        console.log(amount);
        let amount = "$200"; // ReferenceError

    -> Declaring same variable twice gives error.

        let amount = 0;
        let amount = 1; // SyntaxError

-> const: Is a variable, which holds the constant data.

            const name = "FullName";
            console.log(name);

        -> const cannot be declared and later assigned.

                const name;
                name = "FullName"; // SyntaxError
        
        -> const cannot be reassigned

            const name = "FullName";

            name = "firstName";

            console.log(name);




