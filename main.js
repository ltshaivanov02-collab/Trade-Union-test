let swiper = new Swiper(".mySwiper .swiper-container", {
    slidesPerView: 3,          // Показываем 3 слайда
    spaceBetween: 40,          // Расстояние между слайдами
    grabCursor: true,          // Курсор "рука" при наведении
            // Отключаем бесконечную прокрутку
    
    // Навигация (стрелки)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Пагинация (точки)
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    }
    
});



