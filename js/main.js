// Variables
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = [
    'my name is Michael Sanchez. I am a Web Developer.', 
    'I am Michael Sanchez. I am a Front End Web Developer.',
    'I\'m Michael Sanchez and I am a Freelance Front End Web Developer.'
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
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
    {
        title: 'MyTube with CSS',
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
    {
        title: 'Responsive Website',
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
    {
        title: 'Node Calculator',
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
    {
        title: 'Node Battleship',
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
    {
        title: 'JS Website with API',
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
    {
        title: 'Portfolio',
        tech: 'i-tags',
        img: 'https://picsum.photos/id/0/300/300',
        popUpDescription: '',
        gitHub: '',
        liveLink: '',
        dataItem: ''
    },
];

/* <div data-item="tech" data-open="project" class="project-card">
<div class="img-container">
    <img src="https://picsum.photos/id/0/300/300" alt="">
</div>
<h3>Project Title</h3>
<div class="subtitle">Techs Used</div>
<div class="button-container">
    <a class="btn btn-primary btn-alt round-pill">Click to learn more!</a>
</div>
</div> */

// Functions

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
        cursorSpan.classList.remove('typing');
        setTimeout(erase, typingDelay);
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