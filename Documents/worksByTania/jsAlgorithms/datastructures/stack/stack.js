var Stack = function() {
  this.count = 0;
  this.storage = {};

  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  this.peek = function() {
    return this.storage[this.count - 1];
  }
  this.size = function() {
    return this.count;
  }
}

var newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push("name");
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.size());
