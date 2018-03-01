'use strict';

/**
 *
 *
 * @class _Node
 */
class _Node {
  /**
   * Creates an instance of _Node.
   * @param {any} value
   * @param {any} next
   * @memberof _Node
   */
  constructor(value, next) {
    this.value=value,
    this.next=next;
  }
}

/**
 *
 *
 * @class LinkedList
 */
class LinkedList {
  /**
   * @memberof LinkedList
   */
  constructor() {
    this.head = null;
  }


  /**
   *
   *
   * @param {any} item
   * @param {any} beforeItem
   * @memberof LinkedList
   */
  insertBefore(item, beforeItem) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      // while (tempNode.value !== beforeItem) {
      while (tempNode.next.value !== beforeItem) {
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next);
      tempNode.next = newNode;
    }
  }

  /**
   *
   *
   * @param {any} item
   * @param {any} afterItem
   * @memberof LinkedList
   */
  insertAfter(item, afterItem) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      // while (tempNode.value !== beforeItem) {
      while (tempNode.value !== afterItem) {
        tempNode = tempNode.next;
      }
      let newNode = new _Node(item, tempNode.next);
      tempNode.next = newNode;
    }
  }

  insertAt(item, position){
    let i = 1;

    if (position < 0) {
      console.log('Invalid Index');
      return;
    }
    
    if (this.head === null || position === 0) {
      this.insertFirst(item);
    } 

    else {
      let tempNode = this.head;
      while(i !== position) {
        if (!tempNode || !tempNode.next) {
          console.log('Index Out of Bounds');
          return;
        }
        console.log(tempNode);
        tempNode = tempNode.next;
        console.log(tempNode);
        i++;
      }
      
      console.log(item);
      console.log(tempNode.value);

      // let newNode = new _Node(item, tempNode.next);
      // tempNode.next = newNode;

      this.insertBefore(item, tempNode.value);
    }
  }
  
  /**
   *
   *
   * @param {any} item
   * @memberof LinkedList
   */
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  /**
   *
   *
   * @param {any} item
   * @memberof LinkedList
   */
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  /**
   *
   *
   * @param {any} item
   * @return
   * @memberof LinkedList
   */
  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  /**
   * Removes an item from the linked list
   *
   * @param {any} item
   * @return
   * @memberof LinkedList
   */
  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}



module.exports = LinkedList;
