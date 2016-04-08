const Rx = require('rx')
const fs = require('fs')

const exists = Rx.Observable.fromNodeCallback(fs.stat)

const source = exists('package.json')

const subscription = source.subscribe(
	x => console.log(`onNext: ${x.isFile()}`),
	e => console.log(`onError: ${e}`),
	() => console.log('completed')
)

const rename = Rx.Observable.fromNodeCallback(fs.rename)

const renameStream = rename('example1.js', 'simple.js')

const renameSubscription = renameStream.subscribe(
	x => console.log('onNext: ' + x),
	e => console.log(e),
	() => console.log('completed')
)