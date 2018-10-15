// On écoute le click sur les éléments qui ont la classe .nav-item
$('.nav-item').click(function (event){
    //console.log(event);
    //event.currentTarget == this
    $('.nav-item').removeClass('active');
    $(this).addClass('active');
});

//Effet apparition texte lettre par lettre
//trim enlève les espaces au début et à la fin de la chaine

var word = $('#tap-text').text().trim();

//On vide la div qui contient le mot
$('#tap-text').text('')

//Parcourir les lettres du mot

for (let i =0; i < word.length; i++) {
    console.log(word[i]);

    setTimeout(function () {
        console.log(i);
        $('#tap-text').append(word[i]);
    }, 300 * i );
}