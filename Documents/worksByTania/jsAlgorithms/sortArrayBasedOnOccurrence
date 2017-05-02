var name = ['cat', 'rat', 'mat', 'bat', 'cat', 'sat', 'cat', 'mat', 'bat', 'bat'];

var unique = name
  .map((name) => {
    return {
      count: 1,
      name: name
    }
  })
  .reduce((a, b) => {
    a[b.name] = (a[b.name] || 0) + b.count
    return a;
  }, {});
console.log(unique)
var sorted = Object.keys(unique).sort((a, b) => unique[a] < unique[b]);

console.log(sorted);
