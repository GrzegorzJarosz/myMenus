(function(){
  const xburger = document.querySelector('.xburger');
  const menuList = document.querySelector('.xburger-menu-container');
  const menuLink = document.querySelectorAll('.menu-nav-list ul li a');

  xburger.addEventListener('click', () => {
    xburger.classList.toggle('active');
    menuList.classList.toggle('opened');
  });

  menuLink.forEach((el) => {
    el.addEventListener('click',() => {
      xburger.classList.remove('active');
      menuList.classList.remove('opened');
    });
  });
})();
