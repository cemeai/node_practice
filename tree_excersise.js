const _ = require('lodash');

class Node {
  constructor(val) {
    this.value = val
    this.left = null
    this.right= null
  }
}

function insert(val, root) {
  let node = new Node(val)
  if (val >= root.value) {
    if (root.left != null) {
      insert(val, root.left)
    } else {
      root.left = node
    }
  } else {
    if (root.right != null) {
      insert(val, root.right)
    } else {
      root.right = node
    }
  }
}

// A, B, D, E, C
function preorder (root, arr) {
  arr.push(root.value)
  if (root && root.left) {
    preorder(root.left, arr)
  }
  if (root && root.right) {
    preorder(root.right, arr)
  }
  return arr
}

// D, B, E, A, C
function inorder (root, arr) {
  if (root && root.left) {
    inorder(root.left, arr)
  }
  arr.push(root.value)
  if (root && root.right) {
    inorder(root.right, arr)
  }
  return arr
}

// D, B ,E, C, A
function postorder (root, arr) {
  if (root && root.left) {
    inorder(root.left, arr)
  }
  if (root && root.right) {
    inorder(root.right, arr)
  }
  arr.push(root.value)
  return arr
}

// A, B, C, D, E
function levelorder (root, arr) {
  var q = []
  q.push(root)
  while (q.length > 0) {
    var x = q.shift()
    if (x.left) {
      q.push(x.left)
    }
    if (x.right) {
      q.push(x.right)
    }
    
    arr.push(x.value)
  }
  return arr
}

function main() {
  let a = new Node(26);
  let b = new Node(10);
  let c = new Node(3);
  let d = new Node(3);
  let f = new Node(4);
  let g = new Node(6);
  let h = new Node(30);
  a.left = b
  a.right = c; c.right = d
  b.left = f; f.right = h
	b.right = g
	
  
  console.log(levelorder(a, []))
}

_.times(1, main);

// is subtree https://coderbyte.com/algorithm/determine-if-binary-tree-is-subtree
function areIdentical(a, b) {
  if (a == null && b == null) return true
  if (a == null || b == null) return false
  
  if (a.value == b.value) 
    return areIdentical(a.left, b.left) && areIdentical(a.right, b.right)
  else 
    return false
}

function isSubTree(main, sub) {
  if (sub == null) return true
  if (main == null) return false
  
  if (areIdentical(main, sub)) return true
  
  return isSubTree(main.left, sub) || isSubTree(main.right, sub)
}

function main() {
  let a1 = new Node(26);
  let a2 = new Node(10);
  let a3 = new Node(3);
  let a4 = new Node(3);
  let a5 = new Node(4);
  let a6 = new Node(6);
  let a7 = new Node(30);
  a1.left = a2
  a1.right = a3; a3.right = a4
  a2.left = a5; a5.right = a7
  a2.right = a6
  
  let b1 = new Node(10);
  let b2 = new Node(4);
  let b3 = new Node(6);
  let b4 = new Node(30);
  b1.left = b2
  b1.right = b3
  b2.right = b4
  
  console.log(isSubTree(a1, b1))
}