
const dug  = document.querySelector(`#dug`);

function Promeni(e)
{   
    
    if(window.innerWidth < 997)
    {
        dug.classList.remove('nav-justified');
        dug.classList.add('nav-pills');
    }
    else
    {
        dug.classList.remove('nav-pills');
        dug.classList.add('nav-justified');
    }
}

window.addEventListener('mouseover',Promeni);



// Start jQuery

$(document).ready(function(){
    $("#sve").click(function(){
        $(".c").removeClass("sakr");
    });

    $("#htm").click(function(){
        $(".c").addClass("sakr");
        $(".htm").removeClass("sakr");
    });

    $("#seo").click(function(){
        $(".c").addClass("sakr");
        $(".seo").removeClass("sakr");
    });

    $("#best").click(function(){
        $(".c").addClass("sakr");
        $(".best").removeClass("sakr");
    });

    $("#moder").click(function(){
        $(".c").addClass("sakr");
        $(".moder").removeClass("sakr");
    });



    $(".fullScreen").click(function(){
        $(".modal-content").toggleClass("full-Screen");
    });

});

//Finished jQuery