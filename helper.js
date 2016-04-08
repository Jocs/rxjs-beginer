const Rx = require('rx')

const compare = Rx.helpers.defaultComparer
const compare2 = Rx.helpers.defaultSubComparer
const identity = Rx.helpers.identity
// const just = Rx.helpers.just 移除呢？？
const isPromise = Rx.helpers.isPromise
const noop = Rx.helpers.noop


console.log(Rx.helpers)

// const defaultError = Rx.helpers.defaultError


const a = {x: 3, b: {c: 4}}
const b = {x: 1, b: {c: 4}}
// defaultError(new Error('hello world'))

console.log(identity(42))

console.log(compare(a, b))
console.log(compare2(a, b))

console.log(isPromise(new Promise((resolve, reject) => {resolve(42)})))
console.log(noop())


