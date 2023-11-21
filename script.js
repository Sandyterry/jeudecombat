let data ={

    "Archer" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "3", "Point Défense" : "3", "Attaque Spéciale" : "Flèche Empoisonée", "Description" : "Inflige les dégats d'attaques, plus un point de dégat à chaque tour pendant 2tours", "Points d'Attaque Spécial": "3 + 1 + 1 "},

    "Guerrier" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "5", "Point Défense" : "4", "Attaque Spéciale" : "Super Force", "Description" : "Inflige les dégats d'attaques plus importants", "Points d'Attaque Spécial": "7"},

    "Mage" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "5", "Point Défense" : "2", "Attaque Spéciale" : "Sort de paralysie", "Description" : "Empeche le joueur d'attaquer au prochain tour", "Points d'Attaque Spécial": "5 pour chaque tour"},

    "Prêtre" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "4", "Point Défense" : "3", "Attaque Spéciale" : "Autoguérison", "Description" : "Récupère 1 point de vie par tour pendant 2 tours", "Points de Défense Spécial":"3 puis  + 1 puis + 1"},

    "Prêtresse" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "4", "Point Défense" : "3", "Attaque Spéciale" : "Autoguérison", "Description" : "Récupère 1 point de vie par tour pendant 2 tours", "Points de Défense Spécial":"3 puis  + 1 puis + 1"},

    "Guerrière" :{"Nombre de point de vie" : "30" , "Points d'Attaque" : "5", "Point Défense" : "4", "Attaque Spéciale" : "Super Force", "Description" : "Inflige les dégats d'attaques plus importants", "Points d'Attaque Spécial": "7"}
}
function
afficherCarteCapacites(cartearcherj1){
    let carte = document.getElementById(cartearcherj1);
    carte.style.display= 'block';
}
