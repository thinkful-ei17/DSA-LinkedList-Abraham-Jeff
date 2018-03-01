

const LinkedList = require('./linkedList');
const {displayList, displaySize, isEmptyCheck, findPrevious, findLast} = require('./utils');

const main = () => {
  const SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  // SSL.insertLast('Starbuck');
  // SSL.insertLast('Tauhida');
  // SSL.remove('squirrel');
  // SSL.insertBefore('squirrel', 'Boomer');
  // SSL.insertAfter('Starship', 'Husker');
  // console.log(JSON.stringify(SSL));
  // SSL.insertAt('Number Seven', 2);
  // SSL.insertAt('Laura Roslin', 2);
  // SSL.insertAt('Adama', 1);
  // console.log(JSON.stringify(SSL));
  // SSL.remove('Starbuck');
  // console.log((JSON.stringify(SSL)));
  // displayList(SSL, true);
  // displaySize(SSL);
  // isEmptyCheck(SSL);
  // console.log((JSON.stringify(SSL)));
  // console.log(findPrevious(SSL, 'Husker'));
  console.log(findLast(SSL));
};

main();


