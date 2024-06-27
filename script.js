class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.nextNode !== null) {
                current = current.nextNode;
            }
            current.nextNode = newNode
        }
    }
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }
    size() {
        if (this.head === null) {
            return 0;
        } else {
            let counter = 1;
            let current = this.head;
            while (current.nextNode !== null) {
                counter++;
                current = current.nextNode;
            }
            return counter;
        }
    }
    head() {
        return this.head;
    }
    tail() {
        let current = this.head;
        if (current === null) {
            return null;
        }
        while (current.nextNode !== null) {
            current = current.nextNode;
        }
        return current;
    }
    at(index = 0) {
        let current = this.head;
        let counter = 0;
        if (index < 0 || index >= this.size()) {
            return null;
        }
        while (index > counter && current !== null) {
            current = current.nextNode;
            counter++;
        }

        return current.value;
    }
    pop() {
        let current = this.head;
        while (current.nextNode.nextNode !== null) {
            current = current.nextNode;
        }
        current.nextNode = null;
    }
    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) {
                return true
            }
            current = current.nextNode;
        }
        return false;
    }
    find(value) {
        let current = this.head;
        let counter = 0;
        while (current !== null) {
            if (current.value === value) {
                return counter;
            }
            current = current.nextNode;
            counter++;
        }
        return 'The value is not in the list';
    }
    toString() {
        if (this.head === null) {
            return 'null';
        }
        let current = this.head;
        let result = '';
        result += `(${current.value}) -> `;
        while (current.nextNode !== null) {
            current = current.nextNode;
            result += `(${current.value}) -> `;

        }
        result += 'null';
        return result;
    }
    insertAt(value, index) {
        const newNode = new Node(value);
        let counter = 0;
        if (this.head === null || index === 0) {
            newNode.nextNode = this.head;
            this.head = newNode;
            return;
        } else {
            let current = this.head;
            let prev = null;
            while (current !== null && counter !== index) {
                prev = current;
                current = current.nextNode;
                counter++;
            }
            if (counter === index) {
                prev.nextNode = newNode;
                newNode.nextNode = current;
            } else {
                prev.nextNode = newNode;
            }

        }
    }
    removeAt(index = 0) {
        let counter = 0;
        let current = this.head;
        let prev = this.head;
        if (this.head === null) {
            return "No node to remove in the list;"
        }
        if (index === 0) {
            this.head = this.head.nextNode;
        }
        while (current !== null && counter < index) {
            prev = current;
            current = current.nextNode;
            counter++;
        }
        if (counter === index) {
            prev.nextNode = current.nextNode;
            return;
        } else {
            return 'Index greater than the list size';
        }
    }
}
const list = new LinkedList();
console.log("Size of empty list:", list.size()); // 0
console.log("Empty list:", list.toString()); // null

list.append(10);
list.append(20);
list.prepend(5);
console.log("List after insertions:", list.toString()); // (5) -> (10) -> (20) -> null

console.log("Element at index 1:", list.at(1));
console.log("Element at index 0:", list.at(0));
console.log("Element at index 2:", list.at(2));
console.log("Element at index -1:", list.at(-1));
console.log("Element at index 3:", list.at(3));

console.log("Does list contain 10:", list.contains(10)); // true
console.log("Does list contain 15:", list.contains(15)); // false
console.log("Index of value 20:", list.find(20)); // 2
console.log("Index of value 15:", list.find(15)); // The value is not in the list

list.removeAt(1);
console.log("List after removing element at index 1:", list.toString()); // (5) -> (20) -> null
list.removeAt(0);
console.log("List after removing element at index 0:", list.toString()); // (20) -> null
console.log("Removing from empty list:", list.removeAt()); // No node to remove in the list

