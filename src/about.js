import resDrawing from './about-photo.webp';
export function loadAbout(){
    const siteContent=document.querySelector('.content');

    const welcomeDialog = document.createElement('div');
    welcomeDialog.classList.add('about-welcome');

    welcomeDialog.textContent = "Heard, Chef.";

    const aboutPara1=document.createElement('p');
    aboutPara1.textContent=
    `Previously known as "The Original Beef of Chicagoland", The Bear is a new fine dining restaurant in Chicago, helmed by world-renowned chef Carmen "Carmy" Berzatto. Carmy's vision for The Bear is to create a restaurant that is both innovative and accessible, where guests can enjoy a truly unique and unforgettable dining experience.`;

    const aboutPara2=document.createElement('p');
    aboutPara2.textContent=
    `The Bear's wine list is carefully curated by our in-house sommelier, and features a wide selection of wines from around the world. We also offer a variety of cocktails and non-alcoholic beverages to pair with your meal.`;
    const aboutPara3=document.createElement('p');
    aboutPara3.textContent=
    `We hope that you will join us for a truly special dining experience.`;
    
    const aboutPhoto=new Image();
    aboutPhoto.src=resDrawing;
        
    siteContent.appendChild(welcomeDialog);
    siteContent.appendChild(aboutPara1);
    siteContent.appendChild(aboutPara2);
    siteContent.appendChild(aboutPara3);
    siteContent.appendChild(aboutPhoto);


}