
let userNode=$('#uname');
let errorNode5=$('#error5');
let passNode=$('#pass');
let errorNode6=$('#error6');

$(function(){
   
    userNode.blur(()=>validate5());
    passNode.blur(()=>validate6());
   
    $('#regForm').submit(()=>validateForm());
});

function validate5(){
    errorNode5.text("");
    let username=userNode.val();
    userNode.css({border:"2px red solid"});
    if(username==""){
        errorNode5.text("Username is required");
        return false;
    }
    else if(username.length<4 || username.length>10){
        errorNode5.text("Username must be 4 to 10 characters long");
        return false;
    }
    else{
        userNode.css({border:"2px green solid"});
        return true;
    }
}

let ulNode=$('<ul>');
let liNode1=$('<li>');
liNode1.text("Password must not contain symbol");
let liNode2=$('<li>');
liNode2.text("Password should contain alphabets and/or digits");
let liNode3=$('<li>');
liNode3.text("password must be 4 to 8 characters long");
ulNode.append(liNode1,liNode2,liNode3);
function validate6(){
    errorNode6.text("");
    let password=passNode.val();
    passNode.css({border:"2px red solid"});
    let passPattern= new RegExp("^[A-Za-z0-9]{4,8}$");
    if(password==""){
        errorNode6.text("Password is required");
        return false;
    }
    else if(passPattern.test(password)==false){
        errorNode6.append(ulNode);
        return false;
    }
    else{
        passNode.css({border:"2px green solid"});
        return true;
    }

}


let nodeArray=[userNode,passNode];
function validateForm(){
   
    let flag5=validate5();
    let flag6=validate6();
    
    let flagArray=[flag5,flag6];
    for(let i=0;i<flagArray.length;i++){
            if(flagArray[i]==false){
                nodeArray[i].focus();
                break;
            }
        }
    return ( flag5 && flag6 )
}