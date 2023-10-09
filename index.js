
const animals = ["Hippopotamus", "King Cobra", "Giant Panda", "Crocodile"];
/*****
 *  First-class Function
 */
// Assign a function to a variable and use it to convert a string to uppercase.
const convertToString = (input) => {
    return input.toUpperCase()
}
const convertStrings = convertToString;

// Create a function that takes a number as input and
// returns another function that multiplies its input with the original number.
const multiplyChildren = (num1, num2) => {
    return num1 * num2;
}

const multiplyParent = (num, input) => {
    return multiplyChildren(num, input)
}

// Create a function that takes two numbers as input and returns an object.
const toObject = (num1, num2) => {
    let output = {};
    output["1"] = num1 + 2;
    output["2"] = num2 + 4;
    return output;
}

/*****
 *  Higher order Function
*/

// Converts all string elements to lowercase.	
const toLower = (array) => {
    return array.map((ele) => {
        return ele.toLowerCase();
    })
}
const convertToLower = (array, toLower) => {
    return toLower(array);
}

// Print a string that has a length of more than 11 characters.

const longerThanEleven = (array) => {
    return array.filter(animal => animal.length > 11);
}

const longerThanElevenParent = (array, longerThanEleven) => {
    return longerThanEleven(array)
}

// Create a function using a callback that takes a 
// string as input and returns the string in reverse order.

// Pesudo Code
// 1. function to reverse the string, take a string as a parameter
// 2. function to loop through the array of string, for every string
// we use callback function(1st) to reverse every single string

const reverseString = (str) => {
    const reversedStr = str.split('').reverse().join('');
    return reversedStr;
}

const getReversedStrings = (array, reverseString) => {
    return array.map(animal => {
        return reverseString(animal);
    })
}

/* console.log(getReversedStrings(animals, reverseString)); */

// Create two functions. One function generates runners 
//with specific speeds, and the other simulates a race between two runners 
// over a specified distance. Return the winner's name or 'It's a tie!'
// if both runners finish simultaneously.

const getRunners = (name) => {
    let runner = {
        participant: name,
        speed: 0
    }
    const genSpeed = (Math.random() * 20).toFixed(2);
    runner.speed = genSpeed;
    return runner;
};

const tournament = (runner1, runner2, distance) => {
    let winner = "";
    if (distance / runner1.speed > distance / runner2.speed) {
        winner = runner1.participant; 
    } else if (distance / runner1.speed < distance / runner2.speed) {
        winner = runner2.participant; 
    } else {
        winner = "It's a tie!";
    }
    return winner;
}

/* console.log(tournament(getRunners("Vincy"), getRunners("Nancy"), 30));
 */
// Currying function
const buildUrl = (protocol) => {
    return (subdomain) => {
        return (domain) => {
            return (tld) => {
                return (endpoint) => {
                    return protocol + subdomain + "." + domain + "." + tld + "/" + endpoint;
                }
            }
        }
    }
}
console.log(buildUrl("https://")("www")("fullstackacademy")("com")("weather"));

