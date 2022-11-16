"use strict";


let data = {
    "9.png":  {"title": "Titre de l'image", "desc": "Description de l'image"},
    "22.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "23.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "24.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "25.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "30.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "32.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "5.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "6.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "26.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
}

let tmp = 1;
let img1 = "";
Object.entries(data).forEach(([key, value]) => {
    tmp++;
    if (img1 == "" && tmp % 2 == 1) {
        img1 = key;
    }
    let img = document.createElement("img");
    img.src = "../static/imgs/imgs/" + key;
    img.alt = value.title;
    
    
    
    if (tmp%2 == 0) {
        document.getElementById("haut").appendChild(img);

    }
    else {
        document.getElementById("bas").appendChild(img);
    }
    
});



if (tmp%2==0) {
    let img = document.createElement("img");
    img.src = "../static/imgs/imgs/" + img1;
    img.alt = data[img1].title;
    document.getElementById("bas").appendChild(img);
}


 tmp = 1;
 img1 = "";
Object.entries(data).forEach(([key, value]) => {
    // console.log(key, value);
    tmp++;
    if (img1 == "" && tmp % 2 == 1) {
        img1 = key;
    }
    let img = document.createElement("img");
    img.src = "../static/imgs/imgs/" + key;
    img.alt = value.title;
    // set image position to absolute
    // img.style.position = "relative";
    // set image position to random
    
    
    
    if (tmp%2 == 0) {
        document.getElementById("haut").appendChild(img);
        // img.style.left = "calc(calc(50vh - 50px)*"+ tmp-4 + ")";

    }
    else {
        document.getElementById("bas").appendChild(img);
        // img.style.left = "calc(calc(50vh - 50px)*"+ (tmp-3)/2 + ")";
    }
    
});



if (tmp%2==0) {
    let img = document.createElement("img");
    img.src = "imgs/" + img1;
    img.alt = data[img1].title;
    document.getElementById("bas").appendChild(img);
}