
function initOnScroll() {
    const boxSlide = $('.box-sobre');
    const boxContato = $('.box-contato');

    const scrollDown = (element) => {
        element.slideDown(1000)
        if ($(window).width() > 1000) {
            element.css({ 'display': 'inline-flex' });
        }
    }
    
    const scrollUp = (element) => element.slideUp(1000);

    
    const boxSlidePosition = boxSlide.parent().offset().top * 0.6;
    const boxContatoPosition = boxContato.parent().offset().top * 0.96;

    console.log(boxSlidePosition)
    console.log(boxContatoPosition);

    $(window).scroll(() => {
        const scrollPosition = $(window).scrollTop();
        console.log(scrollPosition);
        if (scrollPosition > boxSlidePosition) {
            scrollDown(boxSlide);
        } else {
            scrollUp(boxSlide);
        }

        if (scrollPosition > boxContatoPosition) {
            scrollDown(boxContato);
        } else {
            scrollUp(boxContato);
        }

    })
}

initOnScroll();


