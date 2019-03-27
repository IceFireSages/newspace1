/*
nav li event*/

window.onload=function () {
    let nav_div=document.getElementById('content');
    let li_active=document.getElementById('li_active');
    li_active.onfocus= function () {
        let dd=nav_div.firstElementChild.firstElementChild.className;
        nav_div.firstElementChild.firstElementChild.className='nav-item';
        li_active.onfocus='';
    };


};
