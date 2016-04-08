const Rx = require('rx')

const array = [1, 2, 3, 4, 5]

const source = Rx.Observable.from(array)

const subscription = source.subscribe(
	x => console.log(x),
	e => console.log(e),
	() => console.log('completed'))

const f = function() {
	return Rx.Observable.from(arguments)
} 

f(1, 2, 3, 4).subscribe(
	x => console.log('data' + x),
	e => console.log('error' + e),
	() => console.log('completed'))

function* fibonacii () {
	var fn1 = 1
	var fn2 = 1

	while(true) {
		var current = fn1
		fn1 = fn2
		fn2 = current + fn1 
		yield current
	}
}

const fStream = Rx.Observable.from(fibonacii()).take(5)

fStream.subscribe(
	x => console.log(x),
	e => console.log(e),
	() => console.log('completed')
)
