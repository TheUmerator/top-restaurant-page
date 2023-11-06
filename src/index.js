console.log('so far so good');
import { loadPage } from './pageload';
import { loadReservation } from './reservation';
import { clearContent } from './clearContent';
import { loadAbout } from './about';
import './style.css';
import { loadMenu } from './menu';

loadPage();

const selectTab = document.querySelectorAll('.tab');
const menuTab=document.querySelector('.menu');
const resTab=document.querySelector('.res');
const aboutTab=document.querySelector('.about');
const siteContainer = document.querySelector('.content');

selectTab.forEach((tab) => {
    tab.addEventListener('click', () => {

        // if(selectTab.classList.contains('selected'))
        tab.classList.remove('selected');

        const currentTab = tab.classList[0];
        console.log(currentTab);


        if(siteContainer.classList.contains('pageload')){
            siteContainer.classList.remove('pageload');
        }

        // DOESNT WORK THE WAY ITS SUPPOSED TO
        if(tab.classList[2]==('selected')){
            tab.classList.remove('selected');
        }

        switch (currentTab) {
            case 'menu':
                console.log('1');
                // I wish I knew a cleaner way to do this
                if(resTab.classList.contains('selected')){
                    resTab.classList.remove('selected')
                }
                if(aboutTab.classList.contains('selected')){
                    aboutTab.classList.remove('selected')
                }
                tab.classList.add('selected');
                clearContent();
                loadMenu();

                break;
            case 'res':
                console.log('2');
                if(menuTab.classList.contains('selected')){
                    menuTab.classList.remove('selected')
                }
                if(aboutTab.classList.contains('selected')){
                    aboutTab.classList.remove('selected')
                }
                tab.classList.add('selected');
                clearContent();
                loadReservation();

                
                break;
            case 'about':
                console.log('3');
                if(resTab.classList.contains('selected')){
                    resTab.classList.remove('selected')
                }
                if(menuTab.classList.contains('selected')){
                    menuTab.classList.remove('selected')
                }
                tab.classList.add('selected');
                clearContent();
                loadAbout();

                break;
        }
    })
})