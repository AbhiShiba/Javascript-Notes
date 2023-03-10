// Example 1

const name = {
    fname : "first name",
    displayName () {
        console.log(this);
    }
}

name.displayName();


// Example 2

function displayMyName () {
    console.log(this);
}

displayMyName()


function Play(title) {
    this.title =  title;
    console.log(this);
}

const start = new Play("Game");// here new creates empty object {}

// const games = {
//     start : "Start Playing",
//     title : ["game1","game2","game3"],
//     playGame () {
//         this.title.forEach(function (i) {
//             console.log(this,i);
//         },this)
//     } 
// }

// games.playGame();

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