//------JS-JQUERY------

//Slide down / up menu mobile
function toggleMobMenu(){
    let menudown = false;

    $('.icon-menu-mob').click(function(event){
        if(menudown == false){
            $('.mobile').slideDown(500);
            menudown = true;
        }else{
            $('.mobile').slideUp(500)
            menudown = false;
        }
        event.stopPropagation();
    });

    $('body,html').click(function(){
        if(menudown == true){
            $('.mobile').slideUp(500);
            menudown = false;
        }
    })
}//End function toggleMobmenu

toggleMobMenu();

//Scroll to anchor -100px top
$('.desktop a, .mobile a, .logo a').click(function(event){
    event.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr("href")).offset().top -100 }, 700);
});


//Form mask - phone
$('#fone').inputmask({
    mask: ["(99) 9999-9999", "(99) 99999-9999", ],
    keepStatic: true
  });

//Disable Enter key on form inputs
$(document).on("keydown", ":input:not(textarea)", function(event){
	return event.key != "Enter";
});

if(window.location.search == "?sended=1" || window.location.search == "?sended=2") {
	let anchorPosition = document.getElementById('contato').getBoundingClientRect();
	let offset = { top: anchorPosition.top + window.pageYOffset }; 
	document.querySelector('html, body').scrollTo({top: offset.top});
}

//Close Whatsapp
$('.atend-ws span').click(function(){
    $('.atend-ws').hide(300);
})
