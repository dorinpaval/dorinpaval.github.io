"use script";

class Regular{
    constructor(){
        this.lumen="50-100 lumens";
        this.lastFor="1 year";
    }
}

class Energy{
    constructor(color){
        this.lumen="5-40 lumens";
        this.lastFor="10 years";
        this.color=color;
    }
}

class Factory{
    createBulb(type, color){
        let bulb;
        if(type==="regular"){
            bulb=new Regular();
        }
        else if(type==="energy"){
            bulb=new Energy(color);
        }
        bulb.type=type;
        return bulb;
    }
}

const bulbs = [];
const factory = new Factory();

bulbs.push(factory.createBulb("regular"));
bulbs.push(factory.createBulb("energy", "red"));


for (let i = 0, len = bulbs.length; i < len; i++) {
    console.log(bulbs[i]);
}