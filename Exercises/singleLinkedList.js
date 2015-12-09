var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

var Node = function(val) {
  this.value = val;
  this.next = null;
};

LinkedList.prototype.addToTail = function(val) {
    var node = new Node(val);
  if (this.head === null) {
    this.head = node;
  } else if (this.tail === null) {
    this.head.next = node;
  } else {
    this.tail.next = node;
  }
  this.tail = node;
};

LinkedList.prototype.removeHead = function() {
  var val = this.head.value;
  if (this.tail === null) {
    this.head = null;
  } else {
    this.head = this.head.next;
  }
  return val;
};

LinkedList.prototype.contains = function(target) {
  var node = this.head;
  while (node.next !== null) {
    if (node.value === target || node.value.next === target) {
      return true;
    }
    node = node.next;
  }
  return false;
};