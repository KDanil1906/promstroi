// Отслеживание наведения курсора в сайдбаре на подкатегории.
function listCategoryMouseOn() {

    let category_title;

    switch (event.target.tagName) {
        case 'LI':
            category_title = $(event.target).parent('.aside-menu__list-subcategory').siblings('.list-category__link');
            break;
        case 'UL':
            category_title = $(event.target).siblings('.list-category__link');
            break;
        case 'A':
            category_title = $(event.target).parent('li').parent('.aside-menu__list-subcategory').siblings('.list-category__link');
            break;
    }

    $(category_title).addClass('dropped');
};

function listCategoryMouseOff() {
    let category_title;

    switch (event.target.tagName) {
        case 'LI':
            category_title = $(event.target).parent('.aside-menu__list-subcategory').siblings('.list-category__link');
            break;
        case 'UL':
            category_title = $(event.target).siblings('.list-category__link');
            break;
        case 'A':
            category_title = $(event.target).parent('li').parent('.aside-menu__list-subcategory').siblings('.list-category__link');
            break;
    }

    $(category_title).removeClass('dropped');
};




$(function () {
    // $('.list-category__link').on('click', function(el){
    //     console.log('click');
    //     $(this).toggleClass('dropped');
    //     $(this).siblings('.aside-menu__list-subcategory').slideToggle();
    //     // $('.aside-menu__list-subcategory').slideToggle()
    // });

    let footer_map_titles = document.querySelectorAll('.maps__box-title')
    footer_map_titles.forEach(function (el) {
        $(el).on('click', function (item) {
            let map_box = $(this).siblings('.maps__box-map');
            $(map_box).slideToggle();
        });
    });

    $('.contant__main-tabs .tab').on('click', function (event) {
        var id = $(this).attr('data-id');
        $('.contant__main-tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.contant__main-tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#' + id).addClass('active-tab').fadeIn();
        return false;
    });

    // Обработка клика в блоке "наши клиенты"
    let all_title_clients_group = document.querySelectorAll('.client-box__item-title')
    all_title_clients_group.forEach(function (item) {
        $(item).on('click', function (el) {
            $(this).toggleClass('dropped')
            $(this).siblings('.client-box__item-text').slideToggle()
        });
    });

    $('.header__bottom-burger').on('click', function (item) {

        $(this).siblings('.header__bottom-nav').slideToggle();
    });



    $('.header__bottom-mobilephone').on('click', function (item) {
        $('.header__top-contacts').slideToggle();
    });

    // Обработка мобильного сайдбара 
    $('.header__bottom-mobilecategory').on('click', function (item) {
        let block = $('.contant__aside-mobile');
        $(block).addClass('opened')

        $(document).mouseup(function (e) {
            if (!block.is(e.target)
                && block.has(e.target).length === 0) {
                block.removeClass('opened');
            }
        });
    });

    $('.contant__aside-menuclose').on('click', function (item) {
        $('.contant__aside-mobile').removeClass('opened')
    });

    
    // // анимация кнопки наверх 
    // let arrow = $('.on-top__button-btn span');
    // setInterval(function(){
    //     $(arrow).removeClass('.active');
    //     arrow = $(arrow).siblings().next();
    //     $(arrow).addClass('active')
    // }, 1000)
    
    $('.on-top__button-btn').on('click',function(){
		$('html, body').animate({scrollTop: $(document).height() - $(window).height()}, 600);
		return false;
	});
    
    $("a#inline").fancybox({
		// 'hideOnContentClick': true
	});
});