// const register_id = document.getElementById("register");
// fetch("http://localhost:63342/semicolonLibrary/com.secolon.africa/register.html?_ijt=4j9hbagatrt4ufkmkunr96628s&_ij_reload=RELOAD_ON_SAVE")
// .then(response => response.json()).then((json) => {
//
const register = async () =>{
    const url = "http://localhost:63342/semicolonLibrary/com.secolon.africa/register.html?_ijt=4j9hbagatrt4ufkmkunr96628s&_ij_reload=RELOAD_ON_SAVE"
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
}
register()