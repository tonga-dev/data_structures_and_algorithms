// Stacks

// First In Last Out

// functions: push, pop, peek and length


// this is our stack
var letter = [];

var word = ""

var rword = "";

// Put letters of word into stack
for (var i = 0; i < word.length; i++) {
    letter.push(word[i])
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
    rword += letter.pop();
}

// rword === word ? console.log(`${word} is a palindrome`) : console.log(`${word} is not a palindrome`)


// Creates a Stack
var Stack = function () {
    this.count = 0;
    this.storage = {};

    // Adds a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // Removes and returns the value at the end of the satck
    this.pop = function () {
        if (this.count === 0) {
            return undefined
        }

        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result
    }

    this.size = function () {
        return this.count;
    }

    // Return the value at the end of the stack and will no  remove it
    this.peek = function () {
        return this.storage[this.count - 1]
    }
}

var myStack = new Stack();

myStack.push(1)
myStack.push(2)
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("GEEK.ish")
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());


