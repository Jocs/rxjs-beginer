const Rx = require('rx')

// Choice of either plan, the first set of timers or second set
var source = Rx.Observable.when(
    Rx.Observable.timer(200).and(Rx.Observable.timer(300)).then(function (x, y) { return 'first'; }),
    Rx.Observable.timer(400).and(Rx.Observable.timer(500)).then(function (x, y) { return 'second'; })
);

var subscription = source.subscribe(
    function (x) {
        console.log('Next: ' + x);
    },
    function (err) {
        console.log('Error: ' + err);   
    },
    function () {
        console.log('Completed');   
    });

// => Next: first
// => Next: second
// => Completed   