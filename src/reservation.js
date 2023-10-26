// import { NormalModuleReplacementPlugin } from "webpack";

export function loadReservation() {


    // PREVIOUS SITE CONTENT HAS BEEN CLEARED
    const siteContent=document.querySelector('.content');

    const welcomeDialog = document.createElement('div');
    welcomeDialog.classList.add('res-welcome');

    welcomeDialog.textContent = "Let's get you set up.";

    siteContent.appendChild(welcomeDialog);

    const resForm=document.createElement('form');
    
    const nameInput=document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('id','name');
    const nameLabel=document.createElement('label');
    nameLabel.textContent='Name: ';
    nameLabel.setAttribute('for','name');
    nameLabel.appendChild(nameInput);


    const numInput=document.createElement('input');
    numInput.setAttribute('type','number');
    numInput.setAttribute('id','number');
    const numLabel=document.createElement('label');
    numLabel.textContent='Number: ';
    numLabel.setAttribute('for','number');
    numLabel.appendChild(numInput);

   
    const dateInput=document.createElement('input');
    dateInput.setAttribute('type','date');
    dateInput.setAttribute('id','date');
    const dateLabel=document.createElement('label');
    dateLabel.textContent='Date: ';
    dateLabel.setAttribute('for','date');
    dateLabel.appendChild(dateInput);


    const availButton=document.createElement('button');
    availButton.setAttribute('type','submit');
    availButton.textContent='Check for Availability';
    
    resForm.appendChild(nameLabel);
    resForm.appendChild(numLabel);
    resForm.appendChild(dateLabel);
    resForm.appendChild(availButton);
    siteContent.appendChild(resForm);

    
}