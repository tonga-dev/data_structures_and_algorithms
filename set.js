// Sets

// Kind of like an array with no duplicate items and no order of the values

function mySet() {

    // The var collection will hold the set
    var collection = [];

    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };

    // this method will return all the values in the set
    this.values = function(){
        return collection;
    }
    
    // this method will add an element to the set
    this.add = function (element) {
        // Checks if the element is already in the collection
        if (!this.has(element)) {
            // If not, it add to the collection
            collection.push(element);
            return true;
        }
        // else return false
        return false;
    };

    // this method will remove an element from a set
    this.remove = function (element) {
        // checks if the element is in the collection
        if (this.has(element)) {
            // Find the index of the element
            index = collection.indexOf(element);
            // Removing the element starting at the index and going upto one element
            collection.splice(index, 1)
            return true;
        }
        // Else return False
        return false
    };

    // this method will return the size of the collection
    this.size = function () {
        return collection.length;
    };

    // this method will return the union of two sets
    this.union = function (otherSet) {
        // Creates a new Set 
        var unionSet = new mySet();
        // Calls the `this.values()`;
        var firstSet = this.values();
        var secondSet = otherSet.values()
        firstSet.forEach(function (e) {
            unionSet.add(e)
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };

    // inetrsection of set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            // Checks if otherSet has the elements
            if(otherSet.has(e)){
                // If not, then the element is added to the set
                intersectionSet.add(e)
            }
        });
        return intersectionSet;
    };

    // Difference of set
    this.difference = function(otherSet){
        var differenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };

    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value){
            return otherSet.has(value);
        });
    };
}


var setA = new mySet();
var setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('a');
setB.add('d');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
// console.log(setA.difference(setB).values());
console.log(setB.difference(setA).values());

// ES6 Method
var setC = new Set();
var setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('a');
setD.add('d');
console.log(setD.values());
setD.delete('a')
console.log(setD.has('a'));
console.log(setD.add('d'))