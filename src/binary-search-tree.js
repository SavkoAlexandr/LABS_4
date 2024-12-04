 const { NotImplementedError } = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }}



module.exports = class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
   
  }

  add( data ) {
    const newNode = new Node(data);

    if (!this.treeRoot) {
      this.treeRoot = newNode; 
    } else {
      let current = this.treeRoot;

      while (true) {
        if (data < current.data) {
          if (!current.left) {
            current.left = newNode; 
            break;
          }
          current = current.left;
        } else {
          if (!current.right) {
            current.right = newNode; 
            break;
          }
          current = current.right;
        }
      }
    }
  }
  


  has( data )  { 
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) {
        return true; 
      } else if (data < current.data) {
        current = current.left; 
      } else {
        current = current.right; 
      }
    }
  
    return false;
  }
  find(data) {
    let current = this.treeRoot;

    while (current) {
      if (data === current.data) {
        return current;
      } else if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }
  
  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null; 
      }
  
      if (data < node.data) {
        node.left = removeNode(node.left, data); 
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data); 
        return node;
      } else {
     
        if (!node.left && !node.right) {
          return null; 
        }
        if (!node.left) {
          return node.right; 
        }
        if (!node.right) {
          return node.left; 
        }
  
       
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left; 
        }
        node.data = minRight.data; 
        node.right = removeNode(node.right, minRight.data); 
        return node;
      }
    };
  
    this.treeRoot = removeNode(this.treeRoot, data);
  }


  min() {
    if (!this.treeRoot) {
      return null; 
    }

    let current = this.treeRoot;
    while (current.left) {
      current = current.left; 
    }

    return current.data;
  }

  max() {
    
    if (!this.treeRoot) {
      return null; 
    }

    let current = this.treeRoot;
    while (current.right) {
      current = current.right; 
    }

    return current.data;
  }
};
