class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            let current = this.root;
            let isFound = false;

            while (!isFound) {
                if (current.value === value) {
                    isFound = true;
                    return null;
                }
                if (current.value > value) {
                    if (!current.left) {
                        current.left = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (!current.right) {
                        current.right = newNode;
                        isFound = true;
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // Función para calcular la altura del árbol binario
    getHeight(node = this.root) {
        if (node === null) {
            return 0;
        }
        const leftHeight = this.getHeight(node.left);
        const rightHeight = this.getHeight(node.right);

        return Math.max(leftHeight, rightHeight) + 1;
    }
}