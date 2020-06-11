let g = G$('Alex', 'Dollard', 'de');

//showing off the chainable methods
g.greet(true).setLang('es').greet()

//using the Greetr object on the click 
$('#login').on('click', function(){

    //start by creating a new Greetr object, assuming the  user entered a name already somewhere
    let loginGrtr = G$('Alex', 'Dollard', 'de');

    $('#loginDiv').hide();

    //grabs the language value from the dropdown box and calles setLang method from Greetr object to set the language to the selected one
    //then updates the #greeting text with the greeting returned from the 'HTMLgreeting' method
    loginGrtr.setLang($('#lang').val()).HTMLgreeting('#greeting', true);
})