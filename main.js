const LinkedList = require('./linkedList');

const main = () => {
  const SSL = new LinkedList();
  SSL.insertFirst('Apollo');
  SSL.insertLast('Boomer');
  SSL.insertLast('Helo');
  SSL.insertLast('Husker');
  SSL.insertLast('Starbuck');

  SSL.insertLast('Tauhida');
  SSL.remove('squirrel');
  SSL.insertBefore('squirrel', 'Boomer');
  SSL.insertAfter('Starship', 'Husker');
  console.log(JSON.stringify(SSL));
};

main();
