// 1)

const evenOrOddNum = (num) => {
    if (num%2 !== 0){
        console.log("this number is odd")
    }
    else {
        console.log("this number is even")
    }
}

// 2)

const greaterNum = (a,b,c) => {
    console.log(`thr greater number of ${a},${b},${c} is ${Math.max(a,b,c)}'.`)
}

// 3)

const helloWorld = (lang_code) => {
if (lang_code === "he"){
    console.log("Shalom aleichem!")
}
else if (lang_code === "hi") {
    console.log("namaste duniya!")
}
else if (lang_code === "ja") {
    console.log("Kon'nichiwa sekai!")
}
else {
    console.log("Hello world!")
}
}

// 4)

const assignGrade = (num) => {
    if (num >= 90 && num <= 100){
        console.log("A")
    }
    else if (num > 80) {
        console.log("B")
    }
    else if (num > 70) {
        console.log("C")
    }
    else if (num > 60) {
        console.log("D")
    }
    else {
        console.log("F")
    }
}

// 5)

const pluralize = (noun, num) => {
    console.log(`${num} ${noun}`)
}

// 6) ("ice cream" && "choclate" && "strawberry") || ("ice cream" && "stracciatella") || ("ice cream" != "caramel")

// 7)

function greet () {
    let name = prompt("Please enter your name: ");

    if (name) {
        document.write("Hello, " + name + ", Welcome!");
    }
    else {
        document.write("Hello friend, Welcome!")
    }
}

const greet_2 = () => {
    const name = prompt("Please enter your name: ");
    document.write(name ? `Hello, ${name}, Welcome!` : "Hello friend, Welcome!");
  };
  

// 8)

function evenOddZeroMsg(num) {
    if (num > 0) {
      if (num % 2 === 0) {
        console.log("Positive and even");
      } else {
        console.log("Positive and odd");
      }
    } else if (num < 0) {
      if (num % 2 === 0) {
        console.log("Negative and even");
      } else {
        console.log("Negative and odd");
      }
    } else {
      console.log("Zero");
    }
  }
  
// 9)
const isPrime = (num) => {
    if (num < 2){
        return console.log("False")
    }
    for (let i = 2; i < num; i++){
        if (num % i === 0){
        return console.log("False")
    }
    }
    return console.log("True")
}

// 10)
function calculator(num1, num2, operand) {
    if (operand === "+") {
      return num1 + num2;
    } 
    else if (operand === "-") {
      return num1 - num2;
    } 
    else if (operand === "*") {
      return num1 * num2;
    } 
    else if (operand === "/") {
      return num1 / num2;
    } 
    else if (operand === "%") {
      return num1 % num2;
    } 
    else {
      return "Invalid operand";
    }
  }

// 11)
function isLeapYear(year) {
    if (year % 400 === 0) {
      return true;
    } 
    else if (year % 100 === 0) {
      return false;
    } 
    else if (year % 4 === 0) {
      return true;
    } 
    else {
      return false;
    }
  }

// 12) 
function getMax (a,b,c){
    return console.log(Math.max(a,b,c))
}
  
// 13)
function sortTheNums (a,b,c){
    if (a > b && a > c){
        if (b>c) {
            console.log(a + ", " + b + ", " + c);
        }
        else {
            console.log(a + ", " + c + ", " + b);
        }
    }
    else if (b > c){
        if (a>c) {
            console.log(b + ", " + a + ", " + c);
        }
        else {
            console.log(b + ", " + c + ", " + a);
        }
    }
    else{
        if (b>a) {
            console.log(c + ", " + b + ", " + a);
        }
        else {
            console.log(c + ", " + a + ", " + b);
        }
    }
}

// 14)

const crewStatus = (spaceSuitsOn, shuttleCabinReady) => {
if (spaceSuitsOn && shuttleCabinReady){
    console.log("Crew Ready")
}
else{
    console.log("Crew Not Ready")
}
}

const computerStatusCode = (computer_status_code) => {
if (computer_status_code === 200){
    console.log("Please stand by. Computer is rebooting.")
}
else if (computer_status_code === 400){
    console.log("Success! Computer online.")
}
else{
    console.log("ALERT: Computer offline!")
}
} 

const shuttleSpeed = (shuttle_speed) => {
if (shuttle_speed > 17500){
    console.log("ALERT: Escape velocity reached!")
}
else if (shuttle_speed < 8000){
    console.log("ALERT: Cannot maintain orbit!")
}
else {
    console.log("Stable speed")
}
}

// 15)

function printColorMsg(color) {
    switch(color){
        case "red":
            console.log("Red is the color of danger");
        break;
        case "orange":
            console.log("Orange is the color of caution");
        break;
        case "yellow":
            console.log("Yellow is the color of sunshine");
        break;
        case "green":
            console.log("Green is the color of nature");
        break;
        case "blue":
            console.log("Blue is the color of the sky");
        break;
        case "purple":
            console.log("Purple is the color of royalty");
        break;
        default:
            console.log("invalid color!");
        break;
    }
}
