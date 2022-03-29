"use strict";
/* eslint-disable */
/* global exports require Account   SavingsAccount CheckingAccount */

/* exports at end of file since exporting an object, which can only be referenced after definition   */
    
// const acc = require("./account.js");//with node need the name of your file with your functions here
// const Account = acc.Account;  //do this for all of the functions used in the Mocha tests
// const chk = require("./checkingaccount.js");
// const CheckingAccount = chk.CheckingAccount;
// const sav = require("./savingsaccount.js");
// const SavingsAccount = sav.SavingsAccount; 



class Bank {
    constructor(){
        this._accounts=[];
    }

    getNumber() {
        return this._number;
    }

    getBalace(){
       return this._balance; 
    }

    addAccount(){
            let num= Bank.nextNumber;
            let newSavings= new Account(num);
            this._accounts.push(newSavings);
            Bank.nextNumber++;
            return num;
    }

    addSavingsAccount(interest){
        let num= Bank.nextNumber;
        let newSavings= new SavingsAccount(num, interest);
        this._accounts.push(newSavings);
        Bank.nextNumber++;
        return num;
    }

    addCheckingAccount(overdraft){
        let num= Bank.nextNumber;
        let newChecking= new CheckingAccount(num, overdraft);
        this._accounts.push(newChecking);
        Bank.nextNumber++;
        return num;
    }
    static nextNumber = 1; 
    
    closeAccount(accNum){
        for(let acc of this._accounts)
            if(acc._number===accNum)
                this._accounts.splice(accNum-1,1);
    }


    accountReport(){
        let phrase=[];
        for(let acc of this._accounts)
            phrase = phrase + acc.toString()+ "\n";
        return phrase;
    }

    endOfMonth(){
        let result=[];
        for(let elem=0; elem<this._accounts.length; elem++)
            if(elem!==this._accounts.length-1)
                result = result+ this._accounts[elem].endOfMonth()+ "\n";
        return result;
    }

}



/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;










/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//exports.Bank = Bank;