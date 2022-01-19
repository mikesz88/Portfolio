// Variables

// Typing Variables
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');
const textArray = [
    'I help people and small businesses bring their vision into light.', 
    'I develop your ideas and make them a reality that is professional and cost-effective.',
    'I build user friendly and interactive websites that bring customers back.'
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

// Portfolio Card Object
const portfolioItems = [
    {
        title: 'MyTube HTML Only',
        tech: '<i class="fab fa-html5"></i>',
        img: '/assets/myTubeHTMLpic.PNG',
        popUpDescription: 'This project was built with HTML only. The premise was to create a website that would display videos without any CSS that would connect to nearly 20 other HTML files. The project isn’t responsive whatsoever. Overall, this project was not very difficult when I was creating it. The hardest part of the project for me was making sure all the links all worked with the correct syntax especially with GitHub. From there I was able to successfully redo the links to work as expected. Creating the layout was the easiest portion for me in the project. By not being able to use CSS yet, I effectively used the tables to my advantage. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/myTubeHTMLOnly',
        liveLink: 'https://mikesz88.github.io/myTubeHTMLOnly/',
        dataItem: 'html',
        dataOpen: 'mytubeHTML'
    },
    {
        title: 'MyTube with CSS',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i>',
        img: '/assets/myTubeCSSpic.PNG',
        popUpDescription: 'The project was built with the work from MyTube HTML Only, but with basic CSS. The goal behind this project was to make a beautiful platform to display my videos like Youtube (but not to make it exactly). The project isn’t responsive whatsoever.  As I was in my early days of learning CSS, I will admit after rereading the code, I definitely see many opportunities for growth where I could have grouped many classes together or even simplify it more and use a lot less code. Another challenge was the need to create a design from scratch. I took an extra day longer on this project than I wanted to because it was difficult for me to come up with a design that would be easy for viewers to see. I believe I restarted at least three times before I settled on with what I have now. The easiest part of the project for me was the navigation sections. The setup without any knowledge of grid or flexbox and the use of hovering in CSS was easy for me to understand and implement. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/myTubeWithCSS',
        liveLink: 'https://mikesz88.github.io/myTubeWithCSS/',
        dataItem: 'html css',
        dataOpen: 'mytubeCSS'
    },
    {
        title: 'Responsive Website',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i>',
        img: 'assets/responsiveWebsite.PNG',
        popUpDescription: 'The project was built from scratch only using a mockup to assist in the design. The website was made with HTML and CSS. The intention of this project was to use flexbox, grid, and media queries to make the website responsive. I was given assets to use in the project, however, they are only allowed for educational purposes. Therefore, the images and icons you see are from free-to-use websites to allow me to show my project to you. The challenge I had with creating the website was the footer section of the website. I redid the section many times to try to find the right solution to make it responsive to whichever screen is being used. Eventually, I settled with a combination of using them all to make it work. The ‘About Us’ and ‘Our Team’ sections were the easiest for me to create in the project. The use of flexbox was a fantastic way to make it responsive with the use of media queries. Looking back on this portion of the code, I again realize many solutions that could eliminate a lot of the code and still achieve the same goal like the use of Flex-wrap instead of media queries. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/ResponsiveWebsite',
        liveLink: 'https://mikesz88.github.io/ResponsiveWebsite/',
        dataItem: 'html css',
        dataOpen: 'responsiveWebsite'
    },
    {
        title: 'SaaS Website',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i>',
        img: 'assets/SaaSProject.PNG',
        popUpDescription: 'The project was built from scratch only using a mockup to assist in the design. The website was made with HTML and CSS. The goal of the project was to combine the different ways to manipulate CSS successfully and apply it on a ‘Software as a Service’ type website. I was given assets to use in the project, however, they are only allowed for educational purposes. Therefore, the images and icons you see are from free-to-use websites to allow me to show my project to you. The hardest part I had was the icons on the introduction portion of the page. The combination of multiple types of positioning and grid made it work as it should, but it wasn’t without many attempts to use flexbox and the types of positions, not both. After struggling with the footer in a previous project and learning the possibilities of how to make it responsive, the footer in the SaaS project was by far much easier than anticipated. The use of flexbox with flexbox\'s made for a responsive page regardless of what screen you used. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/SaaS-Website',
        liveLink: 'https://mikesz88.github.io/SaaS-Website/',
        dataItem: 'html css',
        dataOpen: 'saasWebsite'
    },
    {
        title: 'Node Calculator',
        tech: '<i class="fab fa-js-square"></i><i class="fab fa-node"></i>',
        img: 'assets/nodeJSCalc.PNG',
        popUpDescription: 'The project was built solely with JavaScript and Node.js. The premise of the program was to make a single operation expression that can be solved for you whether it was an integer or a decimal. The challenge when I was making the project was using the npm package to my advantage as effectively as possible. After struggling to use the package initially, I decided to read the documentation to help me use it correctly. That is where I learned that documentation can be your best friend! The easier portions of the project were when I was breaking parts into small functions for easier debugging. I realized early on that if I was able to write many of my parts in small functions I would be able to debug a lot faster and continue on with coding. Overall, this project gave me a great understanding of how functions complement each other when used effectively. Click either of the links below to see the source code. There is no live preview. You will need to upload the code into your IDE and use node.js to run it. There is a README file that shows the expectations of the project and how to run it on your computer!',
        gitHub: 'https://github.com/mikesz88/NodeJsCalculator',
        liveLink: 'https://github.com/mikesz88/NodeJsCalculator',
        dataItem: 'node js',
        dataOpen: 'nodeCalc'
    },
    {
        title: 'Node Battleship',
        tech: '<i class="fab fa-js-square"></i><i class="fab fa-node"></i>',
        img: 'assets/nodeJSBattleship.PNG',
        popUpDescription: 'The project was built only with JavaScript and Node.js. The program was to be made with multiple versions built upon each other to create a game of player vs computer. This game was very fun to make because of the challenges I had to overcome to make it work successfully. One of the struggles I had, when I was making the game, was the inability of breaking the functions down into even smaller parts. Looking back on this code, I see many opportunities of refactoring that can be done that would make the code much easier to read and not repeat itself. The part I had the most success with was when I was creating classes and subclasses to differentiate the player and computer. I wanted to make sure the computer had a function to use at its disposal that the player could not access. The project overall was very fun to make! Click either of the links below to see the source code. There is no live preview. You will need to upload the code into your IDE and use node.js to run it. There is a README file that shows the expectations of the project and how to run it on your computer!',
        gitHub: 'https://github.com/mikesz88/NodeJsBattleship',
        liveLink: 'https://github.com/mikesz88/NodeJsBattleship',
        dataItem: 'node js',
        dataOpen: 'nodeBattleship'
    },
    {
        title: 'JS Website with API',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i>',
        img: 'assets/jsWebsiteAPI.PNG',
        popUpDescription: 'This was my favorite project thus far. I learned so much from this project! This project was built with HTML, CSS, and JavaScript. It also was fetching API requests as well! One of the reasons I liked this project a lot was being able to see the logic of a website working behind the scenes with JavaScript. It was an awesome experience putting it all together. The challenge I had the most was the handling of the data throughout each event. As I look back on my code and realize the potential things I can do differently, I realize the use of a filter would be much more effective in this situation rather than handling multiple arrays for all the events. I definitely made it much harder on myself than it needed it to be. One of the easier parts of the project that I gained a lot of confidence in was the CSS of the website. I was able to focus on design a lot more vs figuring out what syntax to use. That definitely boosted my confidence in using CSS in future websites! The project was a great experience and definitely gave me confidence in my abilities as a web developer! Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/JS-Website-with-API',
        liveLink: 'https://mikesz88.github.io/JS-Website-with-API/',
        dataItem: 'html css js',
        dataOpen: 'jsWebsite'
    },
    {
        title: 'Portfolio',
        tech: '<i class="fab fa-html5"></i><i class="fab fa-css3-alt"></i><i class="fab fa-js-square"></i>',
        img: 'assets/portfolioPic.PNG',
        popUpDescription: 'This project by far has been one of my best. One reason is the challenge of creating a portfolio from scratch with no expectations and all the possibilities at my disposal. The challenge gave me an opportunity to showcase my skills as a developer and also challenge myself to find new ways to implement JavaScript into my website. For example, the typing portion in the introduction was a new technique I learned in my research that shows my skills of using JavaScript effectively. Click the links below to see the source code, a README file that shows more information, and a link back to the website!',
        gitHub: 'https://github.com/mikesz88/Portfolio',
        liveLink: 'https://michaelsanchez.page',
        dataItem: 'html css js',
        dataOpen: 'portfolio'
    },    
    {
        title: 'Debt-Free Calculator',
        tech: '<i class="fab fa-react"></i>',
        img: './assets/DebtFreeCalcReact.PNG',
        popUpDescription: 'I definitely learned a lot by doing this project in React. This was my first exposure to React and its different syntaxes. This project was built with HTML, CSS, and JavaScript technically, but it was all developed through the React Library. This challenge gave me a chance to redo some learning and even restart the project. I recognized mistakes and saw what I could do instead in order to make a more efficient web app. One of the struggles I had that forced me to restart the project was when I was continuously modifying the props in the child components when I needed to actually update the state in the parent component instead. You can read more about it in my <a target="_blank" href="https://medium.com/@michaelsanchez8815/how-to-change-state-variables-in-child-components-in-react-d5a0d9dd769d"><strong>blog post</strong></a>. One of the easier parts for me was the ability to structure the components within each other and still figure out how to style them all with CSS. The project was a great introduction to React Library! Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/Debt-Free-Calc-React',
        liveLink: 'https://mikesz88.github.io/Debt-Free-Calc-React/',
        dataItem: 'react',
        dataOpen: 'debtFreeCalcReact'
    },
    {
        title: 'Code Commerce',
        tech: '<i class="fab fa-react"></i>',
        img: './assets/CodeCommercePic.PNG',
        popUpDescription: 'This was my longest project yet! This had many moving parts and edge cases to work on to make sure it met the qualifications of the project criteria! When working with the React Library, I am technically building a web app that encompasses HTML, CSS, and JavaScript. The challenge I noticed with this project was the edge casing. As I was building each component, there were many cases that I had to cover in the case of what a user might do when interacting with the website. Over time I researched the correct material to fix the necessary cases. I loved the challenge this provided of a prolonged time of working on one project. It felt very realistic to work on such a project that all connected. The project definitely fine-tuned my understanding of how React works and the ways it can be used for many websites! Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
        gitHub: 'https://github.com/mikesz88/code-commerce',
        liveLink: 'https://mikesz88.github.io/code-commerce/',
        dataItem: 'react',
        dataOpen: 'codeCommerce'
    },
    {
        title: 'House Essentials eCommerce',
        tech: '<i class="fab fa-react"></i>',
        img: './assets/houseEssentialsPic.PNG',
        popUpDescription: '',
        gitHub: 'https://github.com/mikesz88/house_essential_commerce_with_api',
        liveLink: 'https://mikesz88.github.io/house_essential_commerce_with_api/',
        dataItem: 'react',
        dataOpen: 'houseEssentials'
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
                <div class="tech-icons">
                    ${project.tech}
                </div>
                <div class="modal-text-container">
                    ${project.popUpDescription}
                </div>
            </div>
                <div class="modal-footer">
                    <a class="btn btn-primary round-pill" href="${project.gitHub}" target="_blank">Source Code<i class="fab fa-github"></i></a>
                    <a class="btn btn-primary round-pill" href="${project.liveLink}" target="_blank">Website<i class="fas fa-external-link-alt"></i></a>
                </div>
        </div>
    `;
    body.appendChild(section);
}

//open Modals
const openModal = () => {
    for (const ele of modalOpen) {
        ele.addEventListener('click', function() {
            const modalId = this.dataset.open;
            const projectCard = portfolioItems.filter(project => project.dataOpen === modalId);
            popUpModal(...projectCard);
            setTimeout(function() {
                document.getElementById(modalId).classList.add('is-visible');
            },100)
            closeModal();
        })
    }
    
}


// close modals
const closeModal = () => {
    modalClose = document.querySelectorAll('[data-close]');
    for (const ele of modalClose) {
        ele.addEventListener('click', function() {
            ele.parentElement.parentElement.parentElement.classList.remove('is-visible');
            setTimeout(function () {
                ele.parentElement.parentElement.parentElement.remove();
            },400)
        })
    }
}

const setActive = (elm, selector) => {
    if (document.querySelector(`${selector}.active`) !== null) {
        document.querySelector(`${selector}.active`).classList.remove('active');
    };
    elm.classList.add('active');
}

// Toggle menu
function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}

// Actions after functions
document.addEventListener('DOMContentLoaded', function() {
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


document.addEventListener('click', e => {
    if (e.target === document.querySelector('.popup-container.is-visible')) {
        const module = document.querySelector('.popup-container.is-visible');
        module.classList.remove('is-visible');
        setTimeout(function() {
            module.remove();
        },400);
    }
});

document.addEventListener('keyup', e => {
    if (e.key === 'Escape') {
        const module = document.querySelector('.popup-container.is-visible');
        module.classList.remove('is-visible');
        setTimeout(function() {
            module.remove();
        },400);        
    }
});

for (const selector of dataSelector) {
    selector.addEventListener('click', function() {
        setActive(selector, '.icon-text-container');
        const filter = this.dataset.selector;
        portfolioItemsHTML.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else if (card.dataset.item.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    })
}

navButton.addEventListener('click', toggleNav);