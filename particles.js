let username=document.getElementById("username");
let password=document.getElementById("password");
let flag1=1,flag2=1;
function validateform(){
    if(username.value == "")
    {
        document.getElementById("usererror").innerHTML="user name is  empty";
        flag1=0;
        
    }
    else if(username.value.length <3){
        document.getElementById("usererror").innerHTML="User name require min 3 char";
        flag1=0;

    }
    else{
        document.getElementById("usererror").innerHTML="";
        flag=1;

    }
    if(password.value == "")
    {
        document.getElementById("passworderror").innerHTML="Password  is  Empty";
        flag2=0;
    }
    else{
        document.getElementById("passworderror").innerHTML="";
        flag2=1;

    }
    if(flag1&&flag2){
        return true;
    }
    else{
        return false;
    }
    
}
