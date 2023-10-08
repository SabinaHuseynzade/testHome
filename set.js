// 1)
// // С помощью каких методов мы можем получить контент в Jquery?

//.text()
//.html()
//.val()

// 2)
// // Для чего нужен метод .text()

//чтобы взять или добваить текст элемента html

// 3)
// // Для чего нужен метод .html()

//чтобы взять или добваить эелемент в html

// 4)
// // Для чего нужен метод .val()

// чтобы взять или добваить значение инпута

// 5)
// // Получите контент из элемента ниже c помощью .text()
// <div class="text">Some text</div>

// $(".text").text()

// 6)
// // Получите контент из элемента ниже c помощью .html()
// <div class="text">Some text</div>

// $(".text").html()


// 7)
// // Получите контент из элемента ниже c помощью .val()
// // <input type="text" class="text">

// $(".text").val()


// 8)
// // Поместите текст "New Text" в тег ниже с помощью .text() 
// <div class="text">Some text</div>

// $(".text").text("New Text")


// 9)
// // Поместите текст "New Text" в тег ниже с помощью .html() 
// <div class="text">Some text</div>


// $(".text").html("New Text")


// 10)
// // Поместите текст "New Text" в тег ниже с помощью .val()
// // <input type="text" class="text">

// $(".text").val("New Text")


// 11)
// // Для чего нужен метод .attr()

//для получения,установки или изменения значений атрибутов

// 12)
// // Установите атрибут title="text" для элемента ниже
// <a href="#">Link</a>

//$("a").attr("title", "text")

// 13)
// // Установите атрибут title="text" для элемента ниже
// <a href="#">Link</a>

//$("a").attr("title", "text")


// 14)
// // Измените атрибут title="text" на title="title" для элемента ниже
// <a href="#" title="text">Link</a>

//$("a").attr("title", "title")


// 15)
// // Установите атрибуты title="text" и class="text" для элемента ниже с помощью одного метода .attr()
// <a href="#">Link</a>

//$("a").attr({
//  "title": "text",
//  "class": "text"
// })


// 16)
// // Добавьте первый тег div ниже внутрь в конец второго тега div с помощью метода .append()
// // 1) <div class="child"></div>
// // 2) <div class="parent"></div>

// $('.child').append('.parent')

// 17)
// // Добавьте первый тег div ниже внутрь в начало второго тега div с помощью метода .append()
// // 1) <div class="child"></div>
// // 2) <div class="parent"></div>

// $('.child').prepend('.parent')

// 18)
// // Добавьте первый тег div ниже до второго тега div с помощью метода .append()
// // 1) <div class="child"></div>
// // 2) <div class="parent"></div>


// $('.child').before('.parent')


// 19)
// // Добавьте первый тег div ниже после второго тега div с помощью метода .append()
// // 1) <div class="child"></div>
// // 2) <div class="parent"></div>

// $('.child').after('.parent')


// 20)
// // Удалите элемент ниже
// <div class="child"></div>

// $('.child').remove()


// 21)
// // Очистите элемент ниже
// <div class="child"></div>

// $('.child').empty()
