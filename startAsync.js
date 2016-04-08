const Rx = require('rx')

const source = Rx.Observable.startAsync(() => {
	return new Promise((resolve, reject) => {
		resolve(42)
	})
})
.map(x => x + 5)

source.subscribe(
	data => console.log(data),
	err => console.log(err)
)