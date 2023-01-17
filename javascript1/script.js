function hello(){
    var named=document.getElementById("user");
    var name=named.value;
    var welcomeDOM=document.getElementById("welcome")
    if(name.length>2){
        welcomeDOM.innerHTML="Welcome "+name;
    }else{
        welcomeDOM.style.borderColor="red";
        welcomeDOM.style.borderStyle="dotted";
        welcomeDOM.style.borderWidth="4px";
        welcomeDOM.innerHTML="The user name is short";
    }
   
}
function noSubmmit(event){
    event.preventDefault();
}