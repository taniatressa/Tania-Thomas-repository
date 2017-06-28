var LinkedList = function() {

  this.head = null;
  this.tail = null;

  var LinkedListNode = function(content) {
    this.next = null;
    this.content = content;
  }

  this.add = function(content) {
    //no head create one
    if (this.head === null) {
      this.head = new LinkedListNode(content);
      return this.head;
    }
    //no tail create one
    if (this.tail === null) {
      this.tail = new LinkedListNode(content);
      this.head.next = this.tail;
      return this.tail;
    }

    this.tail.next = new LinkedListNode(content);
    this.tail = this.tail.next;
    this.tail.next = null;
    return this.tail;

  };
}

LinkedList.prototype.length = function() {
  var i = 0;
  var node = this.head;

  while (node != null) {
    node = node.next;
    i++
  }
  return i;
}

LinkedList.prototype.toString = function () {
    var i = 1;
    var str = 'Linked List with ' + this.length() + ' nodes <br/>';
    var node = this.head;


    while (node != null) {
        str += i + ':  Node Value: ' + node.content;
        str += ' Next Node Value: ';

        if (node.next == null) str += ' null';

        if (node.next != null) str += node.next.content;

        i++;
        str += '<br/>';
        node = node.next;
    }
    return str;
};

//create linkedlist and add nodes
var ll = new LinkedList();
ll.add("node1");
ll.add("node2");
ll.add("node3");
console.log(ll.toString());
console.log(ll.toString());
