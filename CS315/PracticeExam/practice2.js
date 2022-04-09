"use strict";

window.onload=function(){
    document.getElementById("submit").onclick=submit;
    document.getElementById("countryId").onchange=hideState;

}

function submit(){
    document.getElementById("submit").value="Done";

    let name=document.getElementById("nameId").value;
    document.getElementById("nameId").replaceWith(name);

    if(document.getElementById("countryId").options[0].selected){
        let selectState=document.getElementById("stateId");
        for(let opt of selectState.options){
            if(opt.selected){
                let optValue=opt.value;
                //console.log(document.getElementById("stateId"))
                document.getElementById("stateId").replaceWith(optValue);
                break;
            }
        }

}
    let country=document.getElementById("countryId").value;
    document.getElementById("countryId").replaceWith(country);
    let zipCode=document.getElementById("zipId").value;
    document.getElementById("zipId").replaceWith(zipCode);
}

function hideState(){
    if(document.getElementById("countryId").options[1].selected){
        document.getElementById("stateDiv").style.display="none";
        document.getElementById("break").style.display="none";
    }
    else{
        document.getElementById("stateDiv").style.display="";
        document.getElementById("break").style.display="";
    }
}