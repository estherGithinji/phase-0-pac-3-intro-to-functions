// Follow along with the examples here
function sayHelloToIsabel() {
    console.log("Hello, Isabel!");
  }
  sayHelloToIsabel();
function sayHelloToSofia() {
    console.log("Hello, Sofia!");
  }
  sayHelloToSofia();
function sayHelloToBrendan() {
    console.log("Hello, Brendan!");
  }
  sayHelloToBrendan();

  function doSomething(thing) {
    console.log(thing);
  }
  
  doSomething("anything"); 


function sayHelloTo(firstName) {
    console. log('Hello, ${firstname}!');
}
sayHelloToIsabel('Isabel');
sayHelloToSofia('Jane');
sayHelloToBrendan('R2-D2');
sayHelloTo(1);

function say(greeting, firstName) {
    console.log("firstName: ", firstName);
    console.log("greeting: ", greeting);
    console.log(`${greeting}, ${firstName}!`);
  }
  say("Julio", "hello")

function add(x, y) {
    return x + y;
  }
console.log(add(1,2));
 
function say(greeting, firstName) {
    return `${greeting}, ${firstName}!`;
  }
console. log(say("Hello", "Sofia"))

const sum = add(num1, num2);
const message = `The sum of your numbers is: ${add(num1, num2)}.`;
