const hamburger = document.querySelector(
  '.header .nav-bar .nav-list .hamburger'
);
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll(
  '.header .nav-bar .nav-list ul li a'
);
const header = document.querySelector('.header.container');
const phone_number = document.querySelector('#phone-number');
const mail = document.querySelector('#mail');
const address = document.querySelector('#address');

const scroll_btn = document.querySelector('.scroll-up-btn');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
  if (scroll_position > 500) {
    scroll_btn.classList.add('show');
  } else {
    scroll_btn.classList.remove('show');
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

phone_number.addEventListener('click', () => {
  window.location.href = 'tel:+21629310210';
});

mail.addEventListener('click', () => {
  window.location.href = 'mailto:melekhomrani87@gmail.com';
});

address.addEventListener('click', () => {
  window.open(
    'https://www.google.com/maps?ll=36.802715,10.169079&z=13&t=m&hl=en&gl=US&mapclient=embed&q=Tunis'
  );
});

scroll_btn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
