"use strict";
/* exports at end of file since exporting an object, which can only be referenced after definition */
/* eslint-disable */


function askPassword(ok, fail, password) {
    if(password==="rockstar")
        return ok();
    else
        return fail();
}

let user = {
    name: "John",
    loginOk :function() {
        return this.name+" logged in";
    },
    
    
    loginFail: function() {
        return this.name+" failed to log in";
    }
    

};



function askPassword2(ok, fail, password) {
    if(password==="rockstar")
        return ok();
    else
        return fail();

}

let user2 = {
    name: "John",
    login :function(ans) {
        if (ans===true)
            return this.name+" logged in";
        else
            return this.name+" failed to log in";
    }
};


function spy(func) {

    function wrap(...args) {
      wrap.calls.push(args);
      return func.apply(this, args);
    }
  
    wrap.calls = [];
  
    return wrap;
  }




/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser 
*/
//module.exports = {askPassword, user, askPassword2, user2 ,spy}; //add all of your function names here that you need for the node mocha tests


//console.log(askPassword(correct,wrong,'rockstar'));