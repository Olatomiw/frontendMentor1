// menu function
function myFunction(){
    let image = document.querySelector("#myImage")
    let menuList = document.querySelector("ul")
    if(image.src.match("./assets/images/icon-menu.svg") && screen.width<=376){
        image.src = "./assets/images/icon-menu-close.svg";
        menuList.style.display="flex"
    }
    else{
        image.src="./assets/images/icon-menu.svg"
        menuList.style.display="none"
    };
}
