const form = document.querySelector('.contact__form');
const emailInput = form.querySelector('.contact__input');
const errorMessage = form.querySelector('.contact__error-message');
const sentMessage = form.querySelector('.contact__sent-message');
const errorIcon = form.querySelector('.contact__error-icon');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const emailInputValue = event.target.email.value;
  const regexEmail = /^[a-z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  if (!regexEmail.test(emailInputValue)) {
    errorIcon.style.display = 'block';
    errorMessage.style.visibility = 'visible';
    emailInput.classList.add('incorrect');
  } else {
    errorIcon.style.display = 'none';
    errorMessage.style.visibility = 'hidden';
    sentMessage.style.visibility = 'visible';
    emailInput.classList.remove('incorrect');
    setTimeout(function () {
      sentMessage.style.visibility = 'hidden';
    }, 2000);
  }
});
