const RX = require('rx')

const source = RX.Observable.create(observer => {
	observer.onNext(43)
	observer.onCompleted()

	return () => console.log('disposed')
})

const subscription = source.subscribe(
	data => console.log(`onNext:${data}`),
	err => console.log(`onError${err}`),
	() => console.log('onCompleted')
)

subscription.dispose()
