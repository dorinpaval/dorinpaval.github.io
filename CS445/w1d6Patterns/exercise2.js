"use strict";

class User{
    constructor(name){
        this.name=name;
    }
}

class DecoratedUser{
    constructor(user, city, state){
        this.user=user;
        this.name=user.name;
        this.city=city;
        this.state=state;
    }

    logger(){
        console.log(`${this.name} is from ${this.city} ${this.state}`);
    }
}
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();