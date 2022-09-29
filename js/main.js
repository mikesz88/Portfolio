// Variables

// Typing Variables
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = [
  'I help people and small businesses bring their vision into light.',
  'I develop your ideas and make them a reality that is professional and cost-effective.',
  'I build user friendly and interactive websites that bring customers back.',
];
const typingDelay = 125;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

// Body Tag Variable
const body = document.documentElement.querySelector('body');

//modal open, close, item tags
let modalOpen;
let modalClose;
let dataSelector = document.querySelectorAll('[data-selector]');
// filter portfolio projects
let dataItem;
// Portfolio Items
const portfolioData = '[data-item]';

// navToggler
const navButton = document.querySelector('button[aria-expanded]');

// scroll variable
const scrollToTop = document.querySelector('scroll-to-top-container');

// Create Cards
const projectCards = () => {
  const galleryDiv = document.querySelector('.project-gallery-container');
  for (const project of portfolioItems) {
    const div = document.createElement('div');
    div.setAttribute('data-item', project.dataItem);
    div.setAttribute('data-open', project.dataOpen);
    div.classList.add('project-card');
    div.innerHTML = `
        <div class="img-container">
            <img src="${project.img}" alt="">
        </div>
        <h3>${project.title}</h3>
        <div class="subtitle">
        Techs Used:
        </div>
        <div class='tech-container'>
        ${project.tech}
        </div>
        <div class="button-container">
            <a class="btn btn-primary btn-alt round-pill">Click to learn more!</a>
        </div>
        `;
    galleryDiv.appendChild(div);
  }
};

// Typing Function
const type = () => {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(function () {
      cursorSpan.classList.remove('typing');
      setTimeout(erase, typingDelay);
    }, 2000);
  }
};

// Erase Typing
const erase = () => {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) {
      cursorSpan.classList.add('typing');
    }
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
};

// popUp Modal
const popUpModal = (project) => {
  const section = document.createElement('section');
  section.id = `${project.dataOpen}`;
  section.classList.add('popup-container');
  section.setAttribute('data-animation', 'slideInOutTop');
  section.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-title header-sm">
                <h3>${project.title}</h3>
                <i data-close class="pop-modal-close fas fa-times"></i>
            </div>
            <div class="pop-modal-body">
                <div class="img-container">
                    <img src="${project.img}" alt="project image">
                </div>
                <div class=${project.tech ? 'tech-icons' : 'typescript-logo'}>
                ${
                  project.tech
                    ? project.tech
                    : `<img src="../assets/Typescript_logo_2020.svg.png" alt="">`
                }
                </div>
                <div class="modal-text-container">
                    ${project.popUpDescription}
                </div>
            </div>
                <div class="modal-footer">
                    ${
                      project.gitHubBackend
                        ? `
                    <a class="btn btn-primary round-pill" href="${project.gitHub}" target="_blank">Front-End Code<i class="fab fa-github"></i></a>
                    <a class="btn btn-primary round-pill" href="${project.gitHubBackend}" target="_blank">Back-End Code<i class="fab fa-github"></i></a>
                    `
                        : `<a class="btn btn-primary round-pill" href="${project.gitHub}" target="_blank">Source Code<i class="fab fa-github"></i></a>`
                    }
                    
                    <a class="btn btn-primary round-pill" href="${
                      project.liveLink
                    }" target="_blank">Website<i class="fas fa-external-link-alt"></i></a>
                </div>
        </div>
    `;
  body.appendChild(section);
};

//open Modals
const openModal = () => {
  for (const ele of modalOpen) {
    ele.addEventListener('click', function () {
      const modalId = this.dataset.open;
      const projectCard = portfolioItems.filter(
        (project) => project.dataOpen === modalId
      );
      popUpModal(...projectCard);
      setTimeout(function () {
        document.getElementById(modalId).classList.add('is-visible');
      }, 100);
      closeModal();
    });
  }
};

// close modals
const closeModal = () => {
  modalClose = document.querySelectorAll('[data-close]');
  for (const ele of modalClose) {
    ele.addEventListener('click', function () {
      ele.parentElement.parentElement.parentElement.classList.remove(
        'is-visible'
      );
      setTimeout(function () {
        ele.parentElement.parentElement.parentElement.remove();
      }, 400);
    });
  }
};

const setActive = (elm, selector) => {
  if (document.querySelector(`${selector}.active`) !== null) {
    document.querySelector(`${selector}.active`).classList.remove('active');
  }
  elm.classList.add('active');
};

// Toggle menu
function toggleNav({ target }) {
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  navButton.setAttribute('aria-expanded', !expanded);
}

// Actions after functions
document.addEventListener('DOMContentLoaded', function () {
  if (textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
});

// Create project cards
projectCards();

// Establish variables prior to function use
modalOpen = document.querySelectorAll('[data-open]');
dataItem = document.querySelectorAll('[data-item]');
const portfolioItemsHTML = document.querySelectorAll(portfolioData);
openModal();

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.popup-container.is-visible')) {
    const module = document.querySelector('.popup-container.is-visible');
    module.classList.remove('is-visible');
    setTimeout(function () {
      module.remove();
    }, 400);
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    const module = document.querySelector('.popup-container.is-visible');
    module.classList.remove('is-visible');
    setTimeout(function () {
      module.remove();
    }, 400);
  }
});

for (const selector of dataSelector) {
  selector.addEventListener('click', function () {
    setActive(selector, '.icon-text-container');
    const filter = this.dataset.selector;
    portfolioItemsHTML.forEach((card) => {
      if (filter === 'all') {
        card.style.display = 'block';
      } else if (card.dataset.item.includes(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

navButton.addEventListener('click', toggleNav);
