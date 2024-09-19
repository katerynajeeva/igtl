$(document).ready(function(){
  $('.reviews__slider').slick({
    dots: false,        // Показывать индикаторы слайдов
    infinite: true,    // Бесконечный слайдер
    speed: 300,        // Скорость перехода
    slidesToShow: 2,   // Количество видимых слайдов
    slidesToScroll: 1, // Количество слайдов, которые прокручиваются
    arrows: true,      // Показывать стрелки
    autoplay: false,    // Автоматическая прокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки в миллисекундах
    variableWidth: true,
    responsive: [
        {
            breakpoint: 840, // При ширине экрана менее 600px
            settings: {
                slidesToShow: 1 // Показывать 1 элемент
            }
        }
    ]
  });
});


$(document).ready(function(){
  $('.insights__slider').slick({
    dots: false,        // Показывать индикаторы слайдов
    infinite: true,    // Бесконечный слайдер
    speed: 300,        // Скорость перехода
    slidesToShow: 3,   // Количество видимых слайдов
    slidesToScroll: 1, // Количество слайдов, которые прокручиваются
    arrows: true,      // Показывать стрелки
    autoplay: false,    // Автоматическая прокрутка
    autoplaySpeed: 2000, // Скорость автопрокрутки в миллисекундах
    responsive: [
        {
            breakpoint: 840, // При ширине экрана менее 600px
            settings: {
                slidesToShow: 1 // Показывать 1 элемент
            }
        }
    ]
  });
});
