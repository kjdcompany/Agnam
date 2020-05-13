const lienDesScan = [document.getElementById('url').innerHTML, "/", ".jpg"];

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
    for (let i = 0; i <= 30; i++) {

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
        //        img.onload = function () {
        //        div.appendChild(img);
        //        container.appendChild(div);
        //        }

        div.appendChild(img);
        container.appendChild(div);

    }
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
    for (let i = 0; i <= 30; i++) {

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
        //        img.onload = function () {
        //        div.appendChild(img);
        //        container.appendChild(div);
        //        }

        div.appendChild(img);
        container.appendChild(div);

    }
    //Insertion du numero du chapitre suivant dans la barre du bas
    chapitreSuivant.value = (Number(chapitre) + 1);

    //Insertion du numero du chapitre en cours dans la barre du haut
    chapitreEnCours.value = chapitre;

    //Ramene la fenetre au debut de la page
    window.scrollTo(0, 0);
})

//     ***06.08.2019      ==  Debut des vrais affaires mon poto  ==
//     ***22.03.2020      ==  Je me suis perdu un moment mais me revoila en pleine crise de corona  ==