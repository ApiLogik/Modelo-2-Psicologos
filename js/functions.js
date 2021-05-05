import Mask from './phonemask.js';

//Slide down / up menu mobile
function toggleMobMenu(){
    let menudown = false;

    $('.icon-menu-mob').click(function(event){
        if(menudown === false){
            $('.mobile').slideDown(500);
            menudown = true;
        }else{
            $('.mobile').slideUp(500)
            menudown = false;
        }
        event.stopPropagation();
    });

    $('body,html').click(function(){
        if(menudown === true){
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
const inputPhone = document.querySelector('#fone');

const loadMask = () => {
	//Novo objeto Mask - parâmetro: o campo p/ tel do formulário;
	const phoneMask = new Mask(inputPhone);
	phoneMask.mask();
}
loadMask();

inputPhone.addEventListener('focusin', e => e.target.placeholder = '(__)____-____');
inputPhone.addEventListener('focusout', e => e.target.placeholder = 'Telefone p/ contato...');

inputPhone.addEventListener('paste', event => event.preventDefault());

//Disable Enter key on form inputs
$(document).on("keydown", ":input:not(textarea)", function(event){
	return event.key != "Enter";
});

//Close Whatsapp
$('.atend-ws span').click(function(){
    $('.atend-ws').hide(300);
})
