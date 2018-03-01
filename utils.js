'use strict';

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


module.exports = {displayList, displaySize, isEmptyCheck};
// module.exports = displayList;

