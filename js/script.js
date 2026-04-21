const toggleTheme = () =>{

    let nav = document.querySelector("nav");
    const body = document.body;
    body.classList.toggle("bg-dark");
    nav.classList.toggle("bg-light");
    let toggleBtn = document.querySelector(".toggle");
    if(toggleBtn.innerText === "Dark"){
        toggleBtn.innerText = "Light";
    }else{
        toggleBtn.innerText = "Dark";
    }
}