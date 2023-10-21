console.log('so far so good');

const siteContainer=document.createElement('div');
siteContainer.classList.add('site-container');


const header=document.createElement('div');
header.classList.add('title');

const titleLeft=document.createElement('div');
titleLeft.classList.add('title-text')
titleLeft.textContent='THE';
// const titleLogo=document.createElement('svg');
// APPEND THE SITES DATA TO THIS
const titleRight=document.createElement('div');
titleRight.classList.add('title-text')
titleRight.textContent='BEAR';

header.appendChild(titleLeft);
// header.appendChild(titleLogo);
header.appendChild(titleRight);


const siteNav=document.createElement('div');
siteNav.classList.add('nav');

const navRes=document.createElement('div');
navRes.classList.add('res');
navRes.textContent='BOOK A RESERVATION';

const navMenu=document.createElement('div');
navMenu.classList.add('menu');
navMenu.textContent='MENU';

const navAbout=document.createElement('div');
navAbout.classList.add('about');
navAbout.textContent='ABOUT US';

siteNav.appendChild(navRes);
siteNav.appendChild(navMenu);
siteNav.appendChild(navAbout);

const siteContent=document.createElement('div');
siteContent.classList.add('content');

siteContainer.appendChild(header);
siteContainer.appendChild(siteNav);
siteContainer.appendChild(siteContent);