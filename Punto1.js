class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
}
  
class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(value) {
      const newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    toArray() {
      const elements = [];
      let current = this.head;
      while (current) {
        elements.push(current.value);
        current = current.next;
      }
      return elements;
    }
  
    fromArray(elements) {
      elements.forEach(element => this.append(element));
    }
  
    printList() {
      let current = this.head;
      const result = [];
      while (current) {
        result.push(current.value);
        current = current.next;
      }
      console.log(result.join(" -> ") + " -> null");
    }
}

function mergeSortedLinkedLists(list1, list2) {
    // Convertir listas enlazadas a arrays de JavaScript
    const elements1 = list1.toArray();
    const elements2 = list2.toArray();
  
    const mergedArray = [...elements1, ...elements2].sort((a, b) => a - b);
  
    const mergedLinkedList = new LinkedList();
    mergedLinkedList.fromArray(mergedArray);
  
    return mergedLinkedList;
}

const mergedList = mergeSortedLinkedLists(list1, list2);
mergedList.printList();