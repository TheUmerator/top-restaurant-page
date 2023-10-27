console.log('so far so good');
import { loadPage } from './pageload';
import { loadReservation } from './reservation';
import { clearContent } from './clearContent';
import { loadAbout } from './about';
import './style.css';
import { loadMenu } from './menu';

loadPage();

const selectTab = document.querySelectorAll('.tab');

selectTab.forEach((tab) => {
    tab.addEventListener('click', () => {
        // console.log('tab click');
        const currentTab = tab.classList[0];
        console.log(currentTab);

        // if(tab.classList[2]=='selected'){
        //     tab.classList
        // }

        switch (currentTab) {
            case 'menu':
                console.log('1');
                tab.classList.add('selected');
                clearContent();
                loadMenu();

                break;
            case 'res':
                console.log('2');
                clearContent();

                loadReservation();

                
                break;
            case 'about':
                console.log('3');

                clearContent();
                loadAbout();

                break;
        }
    })
})