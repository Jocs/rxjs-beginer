const Rx = require('rx')

const source = Rx.Observable.range(1, 4).delay(4000)

source.subscribe( x => console.log(x))