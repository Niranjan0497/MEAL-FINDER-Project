function showSiderbar(){
    const sidebar = document.querySelector('.siderbar');
    const nav = document.querySelector('nav');
    sidebar.style.disply ='block';
    nav.classList.add('active');
}

function hideSiderbar(){
    const sidebar = document.querySelector('.siderbar');
    const nav = document.querySelector('nav');
    sidebar.style.disply = 'none';
    nav.classList.remove('active');
}
document.querySelector('.menu-icon').addEventListener('click',showSiderbar);
document.querySelector('.close-icon').addEventListener('click',hideSiderbar);
    
 