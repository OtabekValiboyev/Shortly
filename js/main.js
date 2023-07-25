// FORM ELEMENTINI JSDA CHAQIRIB OLISH
// UNGA HODISA QO`SHISH
  // 1-HODISA UNI ISHLAYOTGANINI TEKSHIRISH SIFATIDA CONSSOLGA TEST MATNINI FORM SUBMIT BO`LGANIDA CHIQARISH
  // 2-HODISA PREVENTDEFAULT YORDAMIDA SUBMITNI BACKENDGA REQUEST YUBORISHINI OLDINI OLISH
// FORM - RESULT ELEMENTINI JSDA TOPIB OLISH
// UNGA EVT HODISASI ICHIDA AGARDA SUMBIT HODISASI BO`LSA UNGA YANGI CLASS QO`SHISH
// VA NATIJANI TEKSHIRISH

const elShortenerForm = document.querySelector('.js-shortener-form');
const elShortenerResult = document.querySelector('.shortener__result');

elShortenerForm.addEventListener('submit', function (evt) {
  evt.preventDefault()

  elShortenerResult.classList.add('shortener__result--open')
});