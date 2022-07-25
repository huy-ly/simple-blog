function changeTheme(){
    var bodyEl = document.getElementsByTagName("body")[0];

    if(bodyEl.className == "light"){
        bodyEl.className = "dark";
    }
    else bodyEl.className = "light";
     
}