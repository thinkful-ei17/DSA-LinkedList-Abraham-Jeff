
/*eslint-disable*/
/**
   * Displays the linked listen
   * @param {any} SSL takes a linked list
   * @param {boolean} Display out in pretty format
   */
function displayList(SSL, pretty=false) {
  if (pretty) {
    console.log((JSON.stringify(SSL, null, ' ')));
  }
  else {
    console.log((JSON.stringify(SSL)));
  }
}


function displaySize(SSL) {
  let depth = 0;
  let head = SSL.head;
  while (head !== null) {
    depth++;
    head = head.next;
  }
  console.log('We found this many stuffs', depth);
}


function isEmptyCheck(SSL) {
  if (SSL.head === null) {
    console.log('Nothing to see here');
  }
  else {
    console.log('It is not empty');
  }
}

/**
 * Finds the previous node for a given node value
 * 
 * @param {LinkedList} linkedList the linked list to search
 * @param {any} item a node value item to search for
 * @returns {Node} returns the found node 
 */
function findPrevious(linkedList, item){
  let head = linkedList.head;
  while(head.next.value !== item){
    head = head.next;
  }
  return head;
}

/**
 * 
 * 
 * @param {any} linkedList 
 * @returns 
 */
function findLast (linkedList){
  let head = linkedList.head;
  while(head.next !== null){
    head = head.next;
  }
  return head;
}

function reverseList(list){
  let node = list.head;
  let previousNode = null;
  let previousNodeNext;

  while(node !== null){
    previousNodeNext = node.next;
    node.next = previousNode;
    previousNode = node;
    node = previousNodeNext;
  }
  list.head = previousNode;
  return node;
}

module.exports = {displayList, displaySize, isEmptyCheck, findPrevious, findLast, reverseList};
// module.exports = displayList;

