let img = document.querySelector(".img-blub") ,
    btn_off = document.querySelector(".btn-1") ,
    btn_toggle = document.querySelector(".btn-2") ,
    btn_on = document.querySelector(".btn-3") ;

    btn_on.addEventListener("click" , () => {
        img.src = "img/on-bulb.png";
    });

    btn_off.addEventListener("click" , () => {
        img.src = "img/off-bulb.png";
    });

    btn_toggle.addEventListener("click" , () => {
        if(img.src.endsWith("img/off-bulb.png")){
            img.src = "img/on-bulb.png";
        }
        else{
            img.src = "img/off-bulb.png";
        }
    })