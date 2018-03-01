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

}


module.exports = displayList;

