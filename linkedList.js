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
   *
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
