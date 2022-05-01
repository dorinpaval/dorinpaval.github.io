class Subject {
    constructor() {
        this.obs = [];
    }

    on(event, fn) {
        if (this.obs[event]) {
            this.obs[event].push(fn);
        }
        else
            this.obs[event] = [fn];
    }

    emit(event, msg) {
        this.obs[event].forEach(fct => { fct(msg) });
    }
}


const subject = new Subject();
subject.on('eat', console.log); // register an observer
subject.on('study', console.log); // register an observer

function foo(msg) {
    console.log('foo: ' + msg);
}
subject.on('eat', foo);
subject.on('study', foo);

subject.emit('eat', 'Corn');
//output for Line above: subject.emit('eat', 'Corn');
// Corn
// foo: Corn
subject.emit('study', 'cs445');
//output for Line above: subject.emit('study', 'cs445');
// cs445
// foo: cs445