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

        // if(tab.classList[2]=='selected'){
        //     tab.classList
        // }

        switch (currentTab) {
            case 'menu':
                console.log('1');
                tab.classList.add('selected');
                // tab.classList.remove('selected');
                // Clear content
                // Add new respective content
                // tab.classList.add('selected');
                break;
            case 'res':
                console.log('2');
                // tab.classList.remove('selected');
                // Clear content
                // Add new respective content
                // tab.classList.add('selected');
                break;
            case 'about':
                console.log('3');
                // tab.classList.remove('selected');
                // Clear content
                // Add new respective content
                // tab.classList.add('selected');
                break;
        }
    })
})