import EventEmitter from 'events'

let emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log(`On anything receive data:`, data)
// })

// emitter.emit('anything', {a: 1})
// emitter.emit('anything', {b: 2})

// setTimeout( () => {
//     emitter.emit('anything', 'this was delayed')
// }, 2000)

class Dispatcher extends EventEmitter {
    subscribe (eventName, callback) {
        console.log(`[Subscribe...]`)
        this.on(eventName, callback)
    }

    dispatch(eventName, data){
        console.log('[Dispatching...]')
        this.emit(eventName, data)
    }
}

let dispTest = new Dispatcher()

// the order of subscribe and THEN dispatch meters!
dispTest.subscribe('anyNameForEvent', data => {
    console.log('On given Event: ', data)
})

dispTest.dispatch('anyNameForEvent', 'testing data. What is this all about?')

