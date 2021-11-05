// Variables
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = [
    'I help people and small businesses bring their vision into light.', 
    'I develop your ideas and make them a reality that is professional and cost-effective.',
    'I build user friendly and interactive websites that brings customers back.'
];
const typingDelay = 125;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

// Portfolio Card Object
const portfolioItems = [
    {
        title: 'MyTube HTML Only',
        tech: '<i class="fab fa-html5"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
    {
        title: 'MyTube with CSS',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
    {
        title: 'Responsive Website',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
    {
        title: 'Node Calculator',
        tech: '<i class="fab fa-js-square"></i><i class="fab fa-node"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
    {
        title: 'Node Battleship',
        tech: '<i class="fab fa-js-square"></i><i class="fab fa-node"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
    {
        title: 'JS Website with API',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
    {
        title: 'Portfolio',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i>',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: '',
        dataOpen: ''
    },
];


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
        <div class="tech-container">
        ${project.tech}
        </div>
        <div class="button-container">
            <a class="btn btn-primary btn-alt round-pill">Click to learn more!</a>
        </div>
        `;
        galleryDiv.appendChild(div);
    }
}

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
        setTimeout(function() {
            cursorSpan.classList.remove('typing');
            setTimeout(erase, typingDelay);
        },2000)
    }
}

// Erase Typing
const erase = () => {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0,charIndex-1);
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
}

// Actions
document.addEventListener('DOMContentLoaded', function() {
    if (textArray.length) {
        setTimeout(type, newTextDelay + 250);
    }
});

projectCards();