"use strict";


let data = {
    "9.png":  {"title": "Titre de l'image", "desc": "Description de l'image"},
    "22.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "23.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "24.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "25.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "30.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
    "32.png": {"title": "Titre de l'image", "desc": "Description de l'image"},
}

let tmp = 1;
Object.entries(data).forEach(([key, value]) => {
    console.log(key, value);
    tmp++;
    
    let img = document.createElement("img");
    img.src = "img/" + key;
    img.alt = value.title;
    
    if (tmp%2 == 0) {
        document.getElementById("div#haut").appendChild(img);
    }
    else {
        document.getElementById("div#bas").appendChild(img);
    }

});