const Rx = require('rx')

const array = [
  800,
  700,
  600,
  500
];

var source = Rx.Observable.for(
    array,
    function (x) { return Rx.Observable.timer(x) }
  )
  .map(function(x, i) { return i; })
  //.debounce(function (x) { return Rx.Observable.timer(700); });

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });

// => Next: 0
// => Next: 3
// => Completed