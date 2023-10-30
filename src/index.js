console.log('so far so good');
import { loadPage } from './pageload';
import { loadReservation } from './reservation';
import { clearContent } from './clearContent';
import { loadAbout } from './about';
import './style.css';
import { loadMenu } from './menu';

loadPage();

const selectTab = document.querySelectorAll('.tab');
const siteContainer = document.querySelector('.content');

selectTab.forEach((tab) => {
    tab.addEventListener('click', () => {

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
                tab.classList.add('selected');
                clearContent();
                loadMenu();

                break;
            case 'res':
                console.log('2');
                tab.classList.add('selected');
                clearContent();
                loadReservation();

                
                break;
            case 'about':
                console.log('3');
                tab.classList.add('selected');
                clearContent();
                loadAbout();

                break;
        }
    })
})