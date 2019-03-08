function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const ranks = document.querySelectorAll('.ranked-list');

  for(let i = 0, length = ranks.length; i < length; i++) {
    let children = ranks[i].children;

    for(let j = 0, childLength = children.length; j < childLength; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n;
    };
  };
}

function deepestChild() {
  let node = document.getElementById('grand-node');
  let nextNode = node.children[0];

  while(nextNode) {
    node = nextNode;
    nextNode = node.children[0];
  }
  return node;
}
