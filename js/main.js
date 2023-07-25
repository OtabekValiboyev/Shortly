const elIndexShortener = document.querySelector('.index-shortener');
const elShortenerForm = document.querySelector('.js-shortener-form');
const elShortenerResult = document.querySelector('.shortener__result');

if (elShortenerForm) {
  elShortenerForm.addEventListener('submit', function (evt) {
    evt.preventDefault()

    elShortenerResult.classList.add('shortener__result--open')
  });
}

if (elIndexShortener) {
  elIndexShortener.addEventListener('click', function (evt) {
    if (evt.target.matches('.js-copy-short-link-button')) {
      evt.target.textContent = 'Copied!';
      evt.target.classList.add('shortener-copy-link-bg');

      setTimeout(function () {
        evt.target.textContent = 'Copy!';
        evt.target.classList.remove('shortener-copy-link-bg');
      }, 1000);
    }
  });
}