Array used to store ordered collection.
    syntax:
        let arr = new Array(1,2,3,4);
        let arr = [];

        arr.at(i); // to get ith element of array

push: appends an element to end of an array.
    eg: 
        before - [1,2,3,4];
        arr.push("end")
        after - [1,2,3,4,"end"];

unshift: appends an element to start of the array.
    eg:
        before - [1,2,3,4,"end"];
        arr.unshift("start")
        after - ["start",1,2,3,4,"end"]

pop: removes an element from end of array.
    eg: 
        before - ["start",1,2,3,4,"end"]
        arr.pop()
        after - ["start",1,2,3,4]

shift: removes an element from start of array
    eg: 
        before - ["start",1,2,3,4]
        arr.shift()
        after - [1,2,3,4]

push/pop is fast and shift/unshift is slow

