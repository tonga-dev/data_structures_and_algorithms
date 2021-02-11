// Represent Each node in the tree
class Node {
    constructor(data, left = null, right = null) {
        // Data to be  stored
        this.data = data;
        // Left node
        this.left = left;
        // Right node
        this.right = right;
    }
}

class BST {
    constructor() {
        // Top of the Tree
        this.root = null
    }
    add(data) {
        const node = this.root;
        if (node === null) {
            this.root = new Node(data);
            return;
        } else {
            // Recursive Function
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else if (node.left !== null) {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else if (node.right !== null) {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            };
            return searchTree(node);
        }
    }
}