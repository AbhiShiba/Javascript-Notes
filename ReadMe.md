-> In general, if function is part of method this reference to that method object.

    const name = {
        fname : "first name",
        displayName () {
            console.log(this);
        }
    }

    name.displayName();

In the above example this refers to the object.

-> If this is part of normal function it reference to the global object.
(i.e if its browser global is window object. In node it is node global)

function displayMyName () {
console.log(this);
}

displayMyName()

-> If its a constructor function (using new keyword), it refers to new empty object

    function Play(title) {
        this.title =  title;
        console.log(this);
    }

    const start = new Play("Game"); // here new creates empty object {}

-> In next Example lets create an array in side object and try to iterate.

    const games = {
    start : "Start Playing",
    title : ["game1","game2","game3"],
    playGame () {
            this.title.forEach(function (i) {
                console.log(this,i);
            })
        } 
    }

    games.playGame();

    Here this inside forEach refers to windows object, because as we know already
    normal function this reference is to global.

    so the output will be like.
        Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'game1'
        Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'game2'
        Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'game3'

    So, how can we correct this?

        There are several ways, as we know forEach is higher order function, which takes callback function
        as argument. It also takes this as argument.

        const games = {
            start : "Start Playing",
            title : ["game1","game2","game3"],
            playGame () {
                this.title.forEach(function (i) {
                    console.log(this,i);
                },this)
            } 
        }

        games.playGame();

        now this inside callback function is referring to games object.

        but in javascript all method do'nt take this as argument.
        so what can we do?

        const games = {
            start : "Start Playing",
            title : ["game1","game2","game3"],
            playGame () {
                this.title.forEach((i) => {
                    console.log(this,i);
                })
            } 
        }   

        games.playGame();

        it can be solved using arrow function, in which arrow function this refers to the function
        where its been called.

        for example, if arrow function is called in global then this refers to windows object and if
        it called inside an method then it refers to that method object.

-> Lets check out how arrow function this always refers to where the function been defined.
    in the 1st example normal function is there inside an object and it calls and another normal
    function.

    const show = {
        title : "first",
        screen () {
            function play() {
                console.log(this);
            }
            play();
        }
    }

    show.screen()

    In here this is pointing to global object, if we want this should point to show object then 
    we can use arrow function.

    const show = {
        title : "first",
        screen () {
            const play = () => {
                console.log(this);
            }
            play();
        }
    }

    show.screen()


