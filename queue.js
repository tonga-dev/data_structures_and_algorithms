// Queues

// First in First Out


class Queue {
    constructor() {
        var collection = [];
        this.print = function () {
            console.log(collection);
        };

        this.enqueue = function (element) {
            // Adds an element to the array
            collection.push(element);
        };

        this.dequeue = function () {
            // Removes the first element in the array
            return collection.shift();
        };

        this.front = function () {
            // Return the first element in the array
            return collection[0];
        };

        this.size = function () {
            // Returns the size of the array
            return collection.length;
        };

        this.isEmpty = function () {
            // checks if the queue is empty
            return (collection.length === 0);
        };
    }
}

// var q = new Queue();
// q.enqueue('a');
// q.enqueue('b');
// q.enqueue('c');
// q.print();
// q.dequeue();
// console.log(q.front());
// q.print();

// Priority Queue
class PriorityQueue {
    constructor() {
        var collection = [];
        this.printCollection = function () {
            (console.log(collection));
        };

        this.enqueue = function (element) {
            // Checks if the Queue is empty
            if (this.isEmpty()) {
                collection.push(element);
            } else {
                var added = false;
                for (var i = 0; i < collection.length; i++) {

                    // index 0 is the item you want to put in queue and index 1 is the priority
                    if (element[1] < collection[i][1]) {
                        // Checking Priorities
                        collection.splice(i, 0, element);
                        added = true;
                        break;
                    }
                }
                if (!added) {
                    collection.push(element);
                }
            }
        };

        this.dequeue = function () {
            var value = collection.shift();
            return value[0];
        };

        this.front = function () {
            return collection[0];
        };

        this.size = function () {
            return collection.length;
        };

        this.isEmpty = function () {
            return (collection.length === 0);
        };
    }
}

var pq = new PriorityQueue();
pq.enqueue(['Tech Blogger', 1]);
pq.enqueue(['JS Developer', 4]);
pq.enqueue(['Software Engineer', 8]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();