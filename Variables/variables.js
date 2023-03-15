// -------------- var
if(true) {
    var testing = "say hello!!!!";
}

// console.log(testing);


function world() {
    if(true) {
        var text = "hello!! world";
    }
    
// console.log(text);
}


world()

var a = "hello";
var a = "world";

// console.log(a);


//------------- let

// let amount;
// console.log(amount);
// amount = 200;
// console.log(amount);
// amount = 300;
// console.log(amount);



let arr = [1,2,3,4,5];

function findTheSmallestMissingNumber(array) {
    const filteredArray = array.filter((item)=> {
        return item > -1;
    })

    const sortArray = filteredArray.sort((a,b) => {
        return a - b;
    })

    let missingNumber = sortArray.length;

    for(let i=1;i< sortArray.length;i++){
        if(i !== sortArray[i]){
            missingNumber = i;
            break;
        }
    }

    console.log(missingNumber);
}

// findTheSmallestMissingNumber([0,-10,1,3,-20])
// findTheSmallestMissingNumber(arr)


// console.log("start");
// setTimeout(()=> console.log("timeout"), 0);
// Promise.resolve().then(()=> console.log("promise"));
// console.log("end");

function findMissing(arr) {
    arr = [...new Set(arr)]; // Remove duplicates
    arr = arr.filter(x => x > 0); // Remove non-positive numbers
    arr.sort((a, b) => a - b);
    let missing = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === missing) {
        missing++;
      } else if (arr[i] > missing) {
        return missing;
      }
    }
    return missing;
  }
console.log(findMissing([0,-10,1,3,-20]));
console.log(findMissing(arr));

