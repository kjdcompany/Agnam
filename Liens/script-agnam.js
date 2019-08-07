const lienDesScan = [document.getElementById('url').innerHTML, "/", ".png"];

//Creation des massifs contenant les liens des pages pour les differents format
let liensPages = [];
let liensPagesJpg = [];
let liensPages00 = [];
let liensPages00Jpg = [];


//Le bouton de la premiere ligne
const button = document.getElementById('btn');

//Click sur le bouton pour charger le chapitre
button.addEventListener("click", () => {

    //Reinitialise le conteneur d'images
    var container = document.getElementById("container");
    container.innerHTML = "";

    //Valeur de ce qui est inscrit dans le imput
    let chapitre = document.getElementById('chapitre').value;

    //Premier 'for' pour les images PNG 
    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images PNG

        if (i < 10) {

            //Pages normales avec fichiers png du chapitre
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');


        } else {

            //Pages normales avec fichiers png
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], i, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        }


        //Creation et Insertion des images
        let img = document.createElement("img");
        img.src = liensPages[i];

        //ajout de la classe none aux images non chargees
        img.onerror = function () {
            return img.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let div = document.createElement("div");
        div.className = "scan";

        //Insertion de l'image dans le div
        div.appendChild(img);
        container.appendChild(div);
    }

    //Deuxieme 'for' pour les images PNG en utilisant un 0 suplementaire pour le chapitre et les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images PNG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers PNG
            lienDesPages00 = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `00${i}`, lienDesScan[2]];
            liensPages00[i] = lienDesPages00.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers PNG
            lienDesPages00 = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages00[i] = lienDesPages00.join('');

        }


        //Creation et Insertion des images
        let img00 = document.createElement("img");
        img00.src = liensPages00[i];

        //ajout de la classe none aux images non chargees
        img00.onerror = function () {
            return img00.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let div00 = document.createElement("div");
        div00.className = "scan";


        //Insertion de l'image dans le div
        div00.appendChild(img00);
        container.appendChild(div00);

    }

    //Troisieme 'for' pour les images JPG
    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG

        if (i < 10) {

            //Pages normales avec fichiers JPG
            lienDesPagesJpg = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, '.jpg'];
            liensPagesJpg[i] = lienDesPagesJpg.join('');


        } else {

            //Pages normales avec fichiers JPG
            lienDesPagesJpg = [lienDesScan[0], chapitre, lienDesScan[1], i, '.jpg'];
            liensPagesJpg[i] = lienDesPagesJpg.join('');

        }


        //Creation et Insertion des images
        let imgJpg = document.createElement("img");
        imgJpg.src = liensPagesJpg[i]


        //ajout de la classe 'none' aux images non chargees
        imgJpg.onerror = function () {
            return imgJpg.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let divJpg = document.createElement("div");
        divJpg.className = "scan";

        //Insertion de l'image dans le div
        divJpg.appendChild(imgJpg);
        container.appendChild(divJpg);

    }

    //Quatrieme 'for' pour les images JPG en utilisant un 0 suplementaire pour le chapitre et les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `00${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `0${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');

        }


        //Creation et Insertion des images
        let img00Jpg = document.createElement("img");
        img00Jpg.src = liensPages00Jpg[i]


        //ajout de la classe none aux images non chargees
        img00Jpg.onerror = function () {
            return img00Jpg.className = "none";
        };


        //Creation d'un div pour contenir l'image
        let div00Jpg = document.createElement("div");
        div00Jpg.className = "scan";


        //Insertion de l'image dans le div
        div00Jpg.appendChild(img00Jpg);
        container.appendChild(div00Jpg);

    }
    
    //Cinquieme 'for' pour les images JPG en utilisant un 00 suplementaire pour le chapitre et 0 les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `00${chapitre}`, lienDesScan[1], `00${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `00${chapitre}`, lienDesScan[1], `0${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');

        }


        //Creation et Insertion des images
        let img00Jpg = document.createElement("img");
        img00Jpg.src = liensPages00Jpg[i]


        //ajout de la classe none aux images non chargees
        img00Jpg.onerror = function () {
            return img00Jpg.className = "none";
        };


        //Creation d'un div pour contenir l'image
        let div00Jpg = document.createElement("div");
        div00Jpg.className = "scan";


        //Insertion de l'image dans le div
        div00Jpg.appendChild(img00Jpg);
        container.appendChild(div00Jpg);

    }
    
    //Sixieme 'for' pour les images JPG en utilisant un 000 suplementaire pour le chapitre et 0 les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `000${chapitre}`, lienDesScan[1], `00${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `000${chapitre}`, lienDesScan[1], `0${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');

        }


        //Creation et Insertion des images
        let img00Jpg = document.createElement("img");
        img00Jpg.src = liensPages00Jpg[i]


        //ajout de la classe none aux images non chargees
        img00Jpg.onerror = function () {
            return img00Jpg.className = "none";
        };


        //Creation d'un div pour contenir l'image
        let div00Jpg = document.createElement("div");
        div00Jpg.className = "scan";


        //Insertion de l'image dans le div
        div00Jpg.appendChild(img00Jpg);
        container.appendChild(div00Jpg);

    }

    //Insertion du numero du chapitre suivant dans la barre du bas
    chapitreSuivant.value = (Number(chapitre) + 1);

})


//Le bouton de la derniere ligne
const buttonNext = document.getElementById('chapSuivant');



buttonNext.addEventListener("click", () => {

    //Reinitialise le conteneur d'images
    var container = document.getElementById("container");
    container.innerHTML = "";

    //Prends l'element contenant le chapitre en cours
    let chapitreEnCours = document.getElementById('chapitre');

    //Prends la valeur contenue dans le input du bas
    let chapitre = document.getElementById('chapitreSuivant').value;

    //Premier 'for' pour les images PNG 
    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images PNG

        if (i < 10) {

            //Pages normales avec fichiers png du chapitre
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');


        } else {

            //Pages normales avec fichiers png
            lienDesPages = [lienDesScan[0], chapitre, lienDesScan[1], i, lienDesScan[2]];
            liensPages[i] = lienDesPages.join('');
        }


        //Creation et Insertion des images
        let img = document.createElement("img");
        img.src = liensPages[i];

        //ajout de la classe none aux images non chargees
        img.onerror = function () {
            return img.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let div = document.createElement("div");
        div.className = "scan";

        //Insertion de l'image dans le div
        div.appendChild(img);
        container.appendChild(div);
    }

    //Deuxieme 'for' pour les images PNG en utilisant un 0 suplementaire pour le chapitre et les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images PNG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers PNG
            lienDesPages00 = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `00${i}`, lienDesScan[2]];
            liensPages00[i] = lienDesPages00.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers PNG
            lienDesPages00 = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `0${i}`, lienDesScan[2]];
            liensPages00[i] = lienDesPages00.join('');

        }


        //Creation et Insertion des images
        let img00 = document.createElement("img");
        img00.src = liensPages00[i];

        //ajout de la classe none aux images non chargees
        img00.onerror = function () {
            return img00.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let div00 = document.createElement("div");
        div00.className = "scan";


        //Insertion de l'image dans le div
        div00.appendChild(img00);
        container.appendChild(div00);

    }

    //Troisieme 'for' pour les images JPG
    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG

        if (i < 10) {

            //Pages normales avec fichiers JPG
            lienDesPagesJpg = [lienDesScan[0], chapitre, lienDesScan[1], `0${i}`, '.jpg'];
            liensPagesJpg[i] = lienDesPagesJpg.join('');


        } else {

            //Pages normales avec fichiers JPG
            lienDesPagesJpg = [lienDesScan[0], chapitre, lienDesScan[1], i, '.jpg'];
            liensPagesJpg[i] = lienDesPagesJpg.join('');

        }


        //Creation et Insertion des images
        let imgJpg = document.createElement("img");
        imgJpg.src = liensPagesJpg[i]


        //ajout de la classe 'none' aux images non chargees
        imgJpg.onerror = function () {
            return imgJpg.className = "none";
        };

        //Creation d'un div pour contenir l'image
        let divJpg = document.createElement("div");
        divJpg.className = "scan";

        //Insertion de l'image dans le div
        divJpg.appendChild(imgJpg);
        container.appendChild(divJpg);

    }

    //Quatrieme 'for' pour les images JPG en utilisant un 0 suplementaire pour le chapitre et les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `00${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `0${chapitre}`, lienDesScan[1], `0${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');

        }


        //Creation et Insertion des images
        let img00Jpg = document.createElement("img");
        img00Jpg.src = liensPages00Jpg[i]


        //ajout de la classe none aux images non chargees
        img00Jpg.onerror = function () {
            return img00Jpg.className = "none";
        };


        //Creation d'un div pour contenir l'image
        let div00Jpg = document.createElement("div");
        div00Jpg.className = "scan";


        //Insertion de l'image dans le div
        div00Jpg.appendChild(img00Jpg);
        container.appendChild(div00Jpg);

    }
    
    //Cinquieme 'for' pour les images JPG en utilisant un 00 suplementaire pour le chapitre et 0 les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `00${chapitre}`, lienDesScan[1], `00${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `00${chapitre}`, lienDesScan[1], `0${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');

        }


        //Creation et Insertion des images
        let img00Jpg = document.createElement("img");
        img00Jpg.src = liensPages00Jpg[i]


        //ajout de la classe none aux images non chargees
        img00Jpg.onerror = function () {
            return img00Jpg.className = "none";
        };


        //Creation d'un div pour contenir l'image
        let div00Jpg = document.createElement("div");
        div00Jpg.className = "scan";


        //Insertion de l'image dans le div
        div00Jpg.appendChild(img00Jpg);
        container.appendChild(div00Jpg);

    }

    //Sixieme 'for' pour les images JPG en utilisant un 000 suplementaire pour le chapitre et 0 les images

    for (let i = 1; i <= 30; i++) {

        //Creation des liens pour les images JPG du chapitre en utilisant un 0 suplementaire pour le chapitre et les images 

        if (i < 10) {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `000${chapitre}`, lienDesScan[1], `00${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');


        } else {

            //Pages chap +0 Image+0 avec fichiers JPG
            lienDesPages00Jpg = [lienDesScan[0], `000${chapitre}`, lienDesScan[1], `0${i}`, `.jpg`];
            liensPages00Jpg[i] = lienDesPages00Jpg.join('');

        }


        //Creation et Insertion des images
        let img00Jpg = document.createElement("img");
        img00Jpg.src = liensPages00Jpg[i]


        //ajout de la classe none aux images non chargees
        img00Jpg.onerror = function () {
            return img00Jpg.className = "none";
        };


        //Creation d'un div pour contenir l'image
        let div00Jpg = document.createElement("div");
        div00Jpg.className = "scan";


        //Insertion de l'image dans le div
        div00Jpg.appendChild(img00Jpg);
        container.appendChild(div00Jpg);

    }
    
    
    //Insertion du numero du chapitre suivant dans la barre du bas
    chapitreSuivant.value = (Number(chapitre) + 1);

    //Insertion du numero du chapitre en cours dans la barre du haut
    chapitreEnCours.value = chapitre;

    //Ramene la fenetre au debut de la page
    window.scrollTo(0, 0);
})

//     ***06.08.2019      ==  Debut des vrais affaires mon poto  ==
