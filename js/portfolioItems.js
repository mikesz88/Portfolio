
// Portfolio Card Object
const portfolioItems = [
  {
      title: 'MyTube HTML Only',
      tech: 'HTML',
      img: './assets/myTubeHTMLpic.PNG',
      popUpDescription: 'This project was built with HTML only. The premise was to create a website that would display videos without any CSS that would connect to nearly 20 other HTML files. The project isn’t responsive whatsoever. Overall, this project was not very difficult when I was creating it. The hardest part of the project for me was making sure all the links all worked with the correct syntax especially with GitHub. From there I was able to successfully redo the links to work as expected. Creating the layout was the easiest portion for me in the project. By not being able to use CSS yet, I effectively used the tables to my advantage. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/myTubeHTMLOnly',
      liveLink: 'https://mikesz88.github.io/myTubeHTMLOnly/',
      dataItem: 'html',
      dataOpen: 'mytubeHTML'
  },
  {
      title: 'MyTube with CSS',
      tech: 'HTML, CSS',
      img: './assets/myTubeCSSpic.PNG',
      popUpDescription: 'The project was built with the work from MyTube HTML Only, but with basic CSS. The goal behind this project was to make a beautiful platform to display my videos like Youtube (but not to make it exactly). The project isn’t responsive whatsoever.  As I was in my early days of learning CSS, I will admit after rereading the code, I definitely see many opportunities for growth where I could have grouped many classes together or even simplify it more and use a lot less code. Another challenge was the need to create a design from scratch. I took an extra day longer on this project than I wanted to because it was difficult for me to come up with a design that would be easy for viewers to see. I believe I restarted at least three times before I settled on with what I have now. The easiest part of the project for me was the navigation sections. The setup without any knowledge of grid or flexbox and the use of hovering in CSS was easy for me to understand and implement. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/myTubeWithCSS',
      liveLink: 'https://mikesz88.github.io/myTubeWithCSS/',
      dataItem: 'html css',
      dataOpen: 'mytubeCSS'
  },
  {
      title: 'Responsive Website',
      tech: 'HTML, CSS',
      img: './assets/responsiveWebsite.PNG',
      popUpDescription: 'The project was built from scratch only using a mockup to assist in the design. The website was made with HTML and CSS. The intention of this project was to use flexbox, grid, and media queries to make the website responsive. I was given assets to use in the project, however, they are only allowed for educational purposes. Therefore, the images and icons you see are from free-to-use websites to allow me to show my project to you. The challenge I had with creating the website was the footer section of the website. I redid the section many times to try to find the right solution to make it responsive to whichever screen is being used. Eventually, I settled with a combination of using them all to make it work. The ‘About Us’ and ‘Our Team’ sections were the easiest for me to create in the project. The use of flexbox was a fantastic way to make it responsive with the use of media queries. Looking back on this portion of the code, I again realize many solutions that could eliminate a lot of the code and still achieve the same goal like the use of Flex-wrap instead of media queries. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/ResponsiveWebsite',
      liveLink: 'https://mikesz88.github.io/ResponsiveWebsite/',
      dataItem: 'html css',
      dataOpen: 'responsiveWebsite'
  },
  {
      title: 'SaaS Website',
      tech: 'HTML, CSS',
      img: './assets/SaaSProject.PNG',
      popUpDescription: 'The project was built from scratch only using a mockup to assist in the design. The website was made with HTML and CSS. The goal of the project was to combine the different ways to manipulate CSS successfully and apply it on a ‘Software as a Service’ type website. I was given assets to use in the project, however, they are only allowed for educational purposes. Therefore, the images and icons you see are from free-to-use websites to allow me to show my project to you. The hardest part I had was the icons on the introduction portion of the page. The combination of multiple types of positioning and grid made it work as it should, but it wasn’t without many attempts to use flexbox and the types of positions, not both. After struggling with the footer in a previous project and learning the possibilities of how to make it responsive, the footer in the SaaS project was by far much easier than anticipated. The use of flexbox with flexbox\'s made for a responsive page regardless of what screen you used. Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/SaaS-Website',
      liveLink: 'https://mikesz88.github.io/SaaS-Website/',
      dataItem: 'html css',
      dataOpen: 'saasWebsite'
  },
  {
      title: 'Node Calculator',
      tech: 'NODEJS',
      img: './assets/nodeJSCalc.PNG',
      popUpDescription: 'The project was built solely with JavaScript and Node.js. The premise of the program was to make a single operation expression that can be solved for you whether it was an integer or a decimal. The challenge when I was making the project was using the npm package to my advantage as effectively as possible. After struggling to use the package initially, I decided to read the documentation to help me use it correctly. That is where I learned that documentation can be your best friend! The easier portions of the project were when I was breaking parts into small functions for easier debugging. I realized early on that if I was able to write many of my parts in small functions I would be able to debug a lot faster and continue on with coding. Overall, this project gave me a great understanding of how functions complement each other when used effectively. Click either of the links below to see the source code. There is no live preview. You will need to upload the code into your IDE and use node.js to run it. There is a README file that shows the expectations of the project and how to run it on your computer!',
      gitHub: 'https://github.com/mikesz88/NodeJsCalculator',
      liveLink: 'https://github.com/mikesz88/NodeJsCalculator',
      dataItem: 'node js',
      dataOpen: 'nodeCalc'
  },
  {
      title: 'Node Battleship',
      tech: 'NODEJS',
      img: './assets/nodeJSBattleship.PNG',
      popUpDescription: 'The project was built only with JavaScript and Node.js. The program was to be made with multiple versions built upon each other to create a game of player vs computer. This game was very fun to make because of the challenges I had to overcome to make it work successfully. One of the struggles I had, when I was making the game, was the inability of breaking the functions down into even smaller parts. Looking back on this code, I see many opportunities of refactoring that can be done that would make the code much easier to read and not repeat itself. The part I had the most success with was when I was creating classes and subclasses to differentiate the player and computer. I wanted to make sure the computer had a function to use at its disposal that the player could not access. The project overall was very fun to make! Click either of the links below to see the source code. There is no live preview. You will need to upload the code into your IDE and use node.js to run it. There is a README file that shows the expectations of the project and how to run it on your computer!',
      gitHub: 'https://github.com/mikesz88/NodeJsBattleship',
      liveLink: 'https://github.com/mikesz88/NodeJsBattleship',
      dataItem: 'node js',
      dataOpen: 'nodeBattleship'
  },
  {
      title: 'JS Website with API',
      tech: 'HTML, CSS, JS',
      img: './assets/jsWebsiteAPI.PNG',
      popUpDescription: 'This was my favorite project thus far. I learned so much from this project! This project was built with HTML, CSS, and JavaScript. It also was fetching API requests as well! One of the reasons I liked this project a lot was being able to see the logic of a website working behind the scenes with JavaScript. It was an awesome experience putting it all together. The challenge I had the most was the handling of the data throughout each event. As I look back on my code and realize the potential things I can do differently, I realize the use of a filter would be much more effective in this situation rather than handling multiple arrays for all the events. I definitely made it much harder on myself than it needed it to be. One of the easier parts of the project that I gained a lot of confidence in was the CSS of the website. I was able to focus on design a lot more vs figuring out what syntax to use. That definitely boosted my confidence in using CSS in future websites! The project was a great experience and definitely gave me confidence in my abilities as a web developer! Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/JS-Website-with-API',
      liveLink: 'https://mikesz88.github.io/JS-Website-with-API/',
      dataItem: 'html css js',
      dataOpen: 'jsWebsite'
  },
  {
    title: 'TypeScript with API',
    tech: 'HTML, CSS, TS',
    img: './assets/typescriptAPI.PNG',
    popUpDescription: '',
    gitHub: 'https://github.com/mikesz88/TypeScriptWithAPI',
    liveLink: 'https://mikesz88.github.io/TypeScriptWithAPI/',
    dataItem: 'html css ts',
    dataOpen: 'tsWebsite'
  },
  {
      title: 'Portfolio',
      tech: 'HTML, CSS, JS',
      img: './assets/portfolioPic.PNG',
      popUpDescription: 'This project by far has been one of my best. One reason is the challenge of creating a portfolio from scratch with no expectations and all the possibilities at my disposal. The challenge gave me an opportunity to showcase my skills as a developer and also challenge myself to find new ways to implement JavaScript into my website. For example, the typing portion in the introduction was a new technique I learned in my research that shows my skills of using JavaScript effectively. Click the links below to see the source code, a README file that shows more information, and a link back to the website!',
      gitHub: 'https://github.com/mikesz88/Portfolio',
      liveLink: 'https://michaelsanchez.page',
      dataItem: 'html css js',
      dataOpen: 'portfolio'
  },    
  {
      title: 'Debt-Free Calculator',
      tech: 'REACT',
      img: './assets/DebtFreeCalcReact.PNG',
      popUpDescription: 'I definitely learned a lot by doing this project in React. This was my first exposure to React and its different syntaxes. This project was built with HTML, CSS, and JavaScript technically, but it was all developed through the React Library. This challenge gave me a chance to redo some learning and even restart the project. I recognized mistakes and saw what I could do instead in order to make a more efficient web app. One of the struggles I had that forced me to restart the project was when I was continuously modifying the props in the child components when I needed to actually update the state in the parent component instead. You can read more about it in my <a target="_blank" href="https://medium.com/@michaelsanchez8815/how-to-change-state-variables-in-child-components-in-react-d5a0d9dd769d"><strong>blog post</strong></a>. One of the easier parts for me was the ability to structure the components within each other and still figure out how to style them all with CSS. The project was a great introduction to React Library! Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/Debt-Free-Calc-React',
      liveLink: 'https://mikesz88.github.io/Debt-Free-Calc-React/',
      dataItem: 'react',
      dataOpen: 'debtFreeCalcReact'
  },
  {
      title: 'Code Commerce',
      tech: 'REACT',
      img: './assets/CodeCommercePic.PNG',
      popUpDescription: 'This was my longest project yet! This had many moving parts and edge cases to work on to make sure it met the qualifications of the project criteria! When working with the React Library, I am technically building a web app that encompasses HTML, CSS, and JavaScript. The challenge I noticed with this project was the edge casing. As I was building each component, there were many cases that I had to cover in the case of what a user might do when interacting with the website. Over time I researched the correct material to fix the necessary cases. I loved the challenge this provided of a prolonged time of working on one project. It felt very realistic to work on such a project that all connected. The project definitely fine-tuned my understanding of how React works and the ways it can be used for many websites! Click the links below to see the source code, a README file that shows the expectations of the project, and a live preview!',
      gitHub: 'https://github.com/mikesz88/code-commerce',
      liveLink: 'https://mikesz88.github.io/code-commerce/',
      dataItem: 'react',
      dataOpen: 'codeCommerce'
  },
  {
      title: 'House Essentials eCommerce',
      tech: 'REACT',
      img: './assets/houseEssentialsPic.PNG',
      popUpDescription: '',
      gitHub: 'https://github.com/mikesz88/house_essential_commerce_with_api',
      liveLink: 'https://mikesz88.github.io/house_essential_commerce_with_api/',
      dataItem: 'react',
      dataOpen: 'houseEssentials'
  },
  {
    title: 'Student API Database',
    tech: 'NODE, EXPRESS, MONGODB',
    img: './assets/studentAPI.PNG',
    popUpDescription: '',
    gitHub: 'https://github.com/mikesz88/API_with_Real-DB',
    liveLink: 'https://first-db-module-14.herokuapp.com/',
    dataItem: 'backend',
    dataOpen: 'studentAPI'
  },
  {
    title: 'Bookstagram',
    tech: 'REACT, NODE, EXPRESS, MONGODB',
    img: './assets/bookstagram.PNG',
    popUpDescription: '',
    gitHub: 'https://github.com/mikesz88/bookstagram-front-end',
    gitHubBackend: 'https://github.com/mikesz88/bookstagram-back-end',
    liveLink: 'https://sanchezbookstagram.netlify.app/',
    dataItem: 'react backend fullstack',
    dataOpen: 'bookstagram'
  }
];