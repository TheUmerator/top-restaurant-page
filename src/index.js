console.log('so far so good');
import {
    loadPage
} from "./pageload";
import './style.css';

loadPage();

const selectTab = document.querySelectorAll('.tab');

selectTab.forEach((tab) => {
    tab.addEventListener('click', () => {
        // console.log('tab click');
        const currentTab = tab.classList[0];
        console.log(currentTab);

        switch (currentTab) {
            case 'menu':
                console.log('1');
                
                break;
            case 'res':
                console.log('2');
                break;
            case 'about':
                console.log('3');
                break;
        }
    })
})