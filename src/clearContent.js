export function clearContent() {
        // CLEAR THE PREVIOUS SITE CONTENT BEFORE SETTING NEW CONTENT
        const siteContent=document.querySelector('.content');
        const contentAnchor=document.getElementById('content');
        siteContent.innerHTML='';
}