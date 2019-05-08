/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.  Window binding, "this" would return the window the javascript is being ran in
* 2.  Implicit binding, the oject before a dot when a function is called
* 3.  New binding creates a new object based on the constructor 
* 4.  overide what the this keyword points to with a new object
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name){
    console.log(this);
    return name
}
sayName("Greg")

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'hello',
    sayHello: function(name){
        console.log(`${this.greeting} my name is ${name}`)
        console.log(this)
    }
}
myObj.sayHello("Greg")

// Principle 3

// code example for New Binding

function Person(something){
    this.something = something
    this.speak = () => {
    console.log(`Hello, i like ${this.something}`)
}
}


const james = new Person('Turkey')
const jerry = new Person('Pies')
james.speak()

// Principle 4

// code example for Explicit Binding
console.log("-------------")
jerry.speak.call(james)
james.speak.apply(jerry)