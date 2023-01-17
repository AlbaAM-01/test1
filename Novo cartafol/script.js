function changetext() {
    const btn=document.getElementById("btn");
    if (btn.dataset.click=="0"){
        btn.innerText="New Texto";
        btn.dataset.click="1";
    }else{
        btn.innerText="Texto inicial";
        btn.dataset.click="0";
    }
}
function showemail(){
    let subscribe=document.getElementById("subscribe");
    let email=document.getElementById("email");
    let label=document.getElementsByTagName("label")[1];
    if (subscribe.checked){
        email.style.visibility="visible";
        label.style.visibility="visible";
    }else{
        email.style.visibility="hidden";
        label.style.visibility="hidden";
    }
}
function checkselection(){
    let favberry=document.getElementsByTagName("favcherry");
    let correct=false;
    for(i=0;i<favberry.length;i++){
        if (favberry[i].checked){
            correct=true;
        }
    }

    if(!correct){
        let warning=document.getElementById("warning");
        warning.innerHTML="Please,select a berry";
    }
    
}