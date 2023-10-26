export function loadAbout(){
    const siteContent=document.querySelector('.content');

    const welcomeDialog = document.createElement('div');
    welcomeDialog.classList.add('about-welcome');

    welcomeDialog.textContent = "Heard, Chef.";

    const aboutPara=document.createElement('p');
    aboutPara.textContent=
    `Previously known as "The Original Beef of Chicagoland", The Bear is a new fine dining restaurant in Chicago, helmed by world-renowned chef Carmen "Carmy" Berzatto. Carmy's vision for The Bear is to create a restaurant that is both innovative and accessible, where guests can enjoy a truly unique and unforgettable dining experience.
    The Bear's wine list is carefully curated by our in-house sommelier, and features a wide selection of wines from around the world. We also offer a variety of cocktails and non-alcoholic beverages to pair with your meal.
    We hope that you will join us for a truly special dining experience.`;

    // PHOTO OF THE BEAR RESTAURANT FROM THE OUTSIDE GOES HERE
    siteContent.appendChild(welcomeDialog);
    siteContent.appendChild(aboutPara);

}