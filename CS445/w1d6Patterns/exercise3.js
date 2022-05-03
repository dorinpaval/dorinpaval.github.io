"use strict";

class Strategy{
    constructor(){
        this.strategy=null;
    }

    setStrategy(strategy){
        this.strategy=strategy;
        // console.log(strategy);
    }

    logging(text){
        return this.strategy.func(text);
    }
}

class Info{
    func(someText){
        console.info(someText);
    }
}

class Warn{
    func(someText){
        console.warn(someText);
    }
}
class Error{
    func(someText){
        console.error(someText);
    }
}
class Table{
    func(someText){
        console.table(someText);
    }
}


const strategy = new Strategy();

strategy.setStrategy(new Info());
strategy.logging('info....');

strategy.setStrategy(new Warn());
strategy.logging('warn....');

strategy.setStrategy(new Error());
strategy.logging('error....');

strategy.setStrategy(new Table());
strategy.logging(['table', 'table', 'something']);