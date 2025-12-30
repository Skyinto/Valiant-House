let toggle = true;
let toggleBar = false;
async function menu(e){
    if(e.target !== document.querySelector("#sidemenu") && e.target !== document.querySelectorAll(".links")[1] && toggleBar){
        console.log(e.target === document.querySelectorAll(".links")[1])
        console.log(e.target, document.querySelectorAll(".links")[1])

        toggleBar = false;
        setAdjustments();
        return;
    }
    else if(e.target === document.querySelector("#menubars")){
    toggle = !toggle;
    console.log(e.target)
    
    toggleBar = true;
    document.querySelector("#sidemenu").style.display = "block";
    document.querySelector("nav").style.filter = "brightness(40%)";
    document.querySelector("header").style.filter = "brightness(40%)"
    document.querySelector("main").style.filter = "brightness(40%)"
    document.querySelector("footer").style.filter = "brightness(40%)"
    document.querySelector(".box").style.filter = "brightness(40%)"
    document.querySelector(".process").style.opacity = "0.1"
    document.querySelector(".box-inline").style.opacity = "0.1"
    document.querySelector(".box").style.opacity = "0.1"
    document.querySelector("h1").style.filter = "brightness(40%)";
    document.querySelector("body").style.overflowY = "hidden";
      for(var i = 0; i <= 400; i+=200){
        document.querySelector("#sidemenu").style.transition = "all .3s ease-in-out";
        document.querySelector("#sidemenu").style.width = `${i.toString()}px`;
        await delay(0);
      }
    }
}
document.body.addEventListener("click", menu);
document.body.addEventListener("mousewheel", setNav);
document.body.addEventListener("mousedown", setNav);
function clientSize(){
    if(document.documentElement.clientWidth > 966){
        setAdjustments()
    }
}

const delay = (ms) =>  new Promise(res=>setTimeout(res, ms));

async function setAdjustments(){
    document.querySelector("header").style.filter = ""
    document.querySelector("main").style.filter = ""
    document.querySelector("footer").style.filter = ""
    document.querySelector(".box").style.filter = ""
    document.querySelector(".process").style.opacity = ""
    document.querySelector(".box-inline").style.opacity = ""
    document.querySelector(".box").style.opacity = ""
    document.querySelector("h1").style.filter = "";
    document.querySelector("body").style.overflowY = "";
    document.querySelector("nav").style.filter = "";
    for(var i = 400; i >= 0; i-=200){
        document.querySelector("#sidemenu").style.transition = "all .3s ease-in-out";
        document.querySelector("#sidemenu").style.width = `${i.toString()}px`;
        await delay(0);
      }
}
function setNav(e){
    const nav = document.querySelector("nav")
    const donate = document.querySelector(".donate")
    
    if(window.pageYOffset > 140){
        nav.style.height = "100px";
        nav.style.backgroundColor = "white";
        donate.style.paddingTop = "20px";
    }
    else{
        nav.style.height = "120px";
        nav.style.backgroundColor = "beige";
        nav.style.transition = "all .3s ease-in-out";
        donate.style.paddingTop = "8px";
    }
}

setNav();