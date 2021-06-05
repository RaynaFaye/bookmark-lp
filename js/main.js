//Functionality for the features section to show and hide blocks
const featureButtons = document.querySelectorAll('.features__button');
const featureFacts = document.querySelectorAll('.features__fact');

function removeCurrentButton(button) {
  button.setAttribute('aria-expanded', 'false');
  button.classList.remove('features__current-button');
}
function setNewCurrentButton(button) {
  button.setAttribute('aria-expanded', 'true');
  button.classList.add('features__current-button');
}
function showHidePanels(buttonId) {
  featureFacts.forEach((featureFact) => {
    featureFact.classList.remove('features__current-fact');
    if (featureFact.id === buttonId) {
      featureFact.classList.add('features__current-fact');
    }
  });
}
//Add click to each feature Button to remove current button and add new and show hide panels
featureButtons.forEach((featureButton) => {
  featureButton.addEventListener('click', function () {
    if (featureButton.classList.contains('features__current-button')) {
      return;
    }
    featureButtons.forEach((button) => {
      removeCurrentButton(button);
    });
    setNewCurrentButton(featureButton);
    const buttonIdFact = featureButton.getAttribute('aria-controls');
    showHidePanels(buttonIdFact);
  });
});

// Functionality for the contact input
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

//Menu functionalities for mobile or small screen sizes
const headerContainer = document.querySelector('.header__container');
const menuButton = headerContainer.querySelector('.header__mobile-menu__button');
const menuButtonImage = menuButton.querySelector('img');
const menuBlock = headerContainer.querySelector('.header__menu');
const menuLinks = headerContainer.querySelectorAll('.header__menu__link');
const headerSocialLinks = headerContainer.querySelector('.header__mobile__social-links');

function showMenu() {
  headerContainer.classList.add('open');
  menuBlock.style.display = 'flex';
  headerSocialLinks.style.display = 'flex';
  menuButtonImage.src = 'images/icon-close.svg';
  menuButton.setAttribute('aria-expanded', 'true');
}
function hideMenu() {
  headerContainer.classList.remove('open');
  menuBlock.style.display = 'none';
  headerSocialLinks.style.display = 'none';
  menuButtonImage.src = 'images/icon-hamburger.svg';
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', function () {
  if (headerContainer.classList.contains('open')) {
    hideMenu();
  } else {
    showMenu();
  }
});

document.addEventListener('keyup', function () {
  if (headerContainer.classList.contains('open') && event.key === 'Escape') {
    hideMenu();
  }
});

menuLinks.forEach((link) => {
  link.addEventListener('focusout', (event) => {
    if (event.relatedTarget.classList.contains('header__menu__link')) {
      return;
    } else {
      hideMenu();
    }
  });
});
