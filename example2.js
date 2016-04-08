const Rx = require('rx')

// range用于产生连续的整数，第一个参数是开始的整数，第二个参数是整数的个数
const source = Rx.Observable.range(0, 5)

const subscription = source.subscribe(
	data => console.log(data),
	err => console.log(err),
	() => console.log('completed')
)