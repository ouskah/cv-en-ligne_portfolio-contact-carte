$(function()
{ 
$(".tooltip-link").tooltip();
});

var $elements = $('#elements');
// Je stocke le <ul> qui contient les éléments du portfolio dans une variable
// en ciblant à l'aide de son id : cela va servir à initialiser isotope


$elements.isotope({
    // j'initialise isotope sur la liste <ul>
    // Option : Aucune, ici
});


$elements.isotope({ filter: '.tous' });
// Je filtre par défaut sur "tous"
// filter items when filter link is clicked
$('.portfolio nav a').click(function(){
// Au clic sur un lien du <nav>
    var selector = $(this).attr('data-filter');
    // Définition du sélecteur :
    // le contenu de l'attribut data-filter du lien sur lequel on vient de cliquer
    $elements.isotope({ filter: selector });
    // Filtre des <li> qui correspondent au data-filter du lien cliqué
    $('.portfolio nav a').removeClass('current');
    $(this).addClass('current');
    //Esthétique : j'attribue une classe .current au lien/filtre cliqué
    return false;
});