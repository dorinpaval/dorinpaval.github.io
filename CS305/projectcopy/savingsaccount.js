"use strict";
/* eslint-disable*/
 //do this for all of the functions used in the Mocha tests

/* exports at end of file since exporting an object, which can only be referenced after definition   */


class SavingsAccount extends Account{
    constructor(number,inter){
        super(number);
        this.interest= inter;
    }

    getNumber(){
        return this._number;
    }
    getInterest(){
        return this.interest;
    }

    setInterest(inter){
        this.interest= inter;
    }
    
    deposit(dep){
        this._balance= this._balance + dep;
    }
    addInterest(){
        this._balance=this._balance + (this._balance*this.interest/100);
    }

    
    getBalance(){
        return this._balance;
    }
    toString(){
        return `SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this.interest}`;
    }

    endOfMonth(){
        this.addInterest();
        return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this.interest}`;
    }
};



/* global exports */
