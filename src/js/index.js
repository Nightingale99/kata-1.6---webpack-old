/*SCSS IMPORTS*/
import '../scss/service.scss'
import '../scss/aside.scss'
import '../scss/fonts.scss'
import '../scss/brands.scss'
import '../scss/repair.scss'
import '../scss/price.scss'
import '../scss/footer.scss'
import '../scss/call.scss'

/*ASIDE MENU*/
const menuButton = document.getElementById('menu');
const blur = document.querySelector('.blur');
const closeButton = document.getElementById('close');
const aside = document.querySelector('.service-aside');
menuButton.addEventListener('click', () => {
  aside.classList.toggle('service-aside--active');
  blur.classList.toggle('blur--active');
})

closeButton.addEventListener('click', () => {
  aside.classList.add('closing');
  setTimeout(() => {
    aside.classList.toggle('service-aside--active')
    aside.classList.remove('closing');
  }, 300);
  blur.classList.toggle('blur--active');
})

blur.addEventListener('click', () => {
  console.log('жопа')
  if(blur.classList.contains('blur--active') !== -1) {
    aside.classList.add('closing');
    setTimeout(() => {
      aside.classList.toggle('service-aside--active')
      aside.classList.remove('closing');
    }, 300);
    blur.classList.toggle('blur--active');
  }
})

/*WORK WITH TEXT*/

const readNextButton = document.querySelector('.service-info__read-next');
readNextButton.addEventListener('click', () => {
  document.querySelector('.service-info__text').classList.toggle('service-info__text--active');
  document.querySelector('.service-info__read-next').classList.toggle('service-info__read-next--active');
  readNextButton.textContent = readNextButton.classList.contains('service-info__read-next--active') ? 'Скрыть' : 'Читать далее';
})

/*ALL SWIPERS*/
let swiperBrands = new Swiper('.swiper-brands', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-brands__swiper-pagination',
  },

  autoplay: {
    delay: 3000, 
    disableOnInteraction: true,
  },  
  slidesPerView: 'auto',
  spaceBetween: 35,
});

let swiperRepair = new Swiper('.swiper-repair', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-repair__swiper-pagination',
  },

  autoplay: {
    delay: 3000, 
    disableOnInteraction: true,
  },  
  slidesPerView: 'auto',
  spaceBetween: 35,
});

let swiperPrice = new Swiper('.swiper-price', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  pagination: {
    el: '.swiper-price__swiper-pagination',
  },

  autoplay: {
    delay: 3000, 
    disableOnInteraction: true,
  },  
  slidesPerView: 'auto',
  spaceBetween: 35,
});

if(window.innerWidth > 767) {
  swiperBrands.destroy();
  swiperBrands = 0;
  swiperRepair.destroy();
  swiperRepair = 0;
  swiperPrice.destroy();
  swiperPrice = 0;
}

window.addEventListener('resize', function(event) {
  if(event.target.innerWidth > 767 && swiperBrands) {
    swiperBrands.destroy();
    swiperBrands = 0;
    swiperRepair.destroy();
    swiperRepair = 0;
    swiperPrice.destroy();
    swiperPrice = 0;
  } else if(event.target.innerWidth < 767 && !swiperBrands) {
    swiperBrands = new Swiper('.swiper-brands', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-brands__swiper-pagination',
      },
    
      autoplay: {
        delay: 3000, 
        disableOnInteraction: true, 
      },
    
      slidesPerView: 'auto', // Количество видимых слайдов
      spaceBetween: 35,
    });

    swiperRepair = new Swiper('.swiper-repair', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
    
      pagination: {
        el: '.swiper-repair__swiper-pagination',
      },
    
      autoplay: {
        delay: 3000, 
        disableOnInteraction: true, 
      },
    
      slidesPerView: 'auto', // Количество видимых слайдов
      spaceBetween: 35,
    });
    swiperPrice = new Swiper('.swiper-price', {
      // Optional parameters
      direction: 'horizontal',
      loop: true,
      
      pagination: {
        el: '.swiper-price__swiper-pagination',
      },
    
      autoplay: {
        delay: 3000, 
        disableOnInteraction: true,
      },  
      slidesPerView: 'auto',
      spaceBetween: 35,
    });
  }
}, true);

/*BRANDS*/
const showAll = document.querySelector('.brands__show-all');
showAll.addEventListener('click', () => {
  let hiddens = document.querySelectorAll('.hidden, .grid-hidden');
  if(hiddens[0].classList.contains('visible')){
    hiddens.forEach(element => {
      element.classList.remove('visible');
    });
    showAll.textContent = 'Показать все';
    showAll.classList.remove('brands__show-all--active');
  }else{
    hiddens.forEach(element => {
      element.className += ' visible';
    });
    showAll.textContent = 'Скрыть';
    showAll.className += ' brands__show-all--active'
  }
})

/*REPAIR*/
const showAllRepair = document.querySelector('.repair__show-all');
showAllRepair.addEventListener('click', () => {
  let hiddens = document.querySelectorAll('.repair-hidden');
  if(hiddens[0].classList.contains('visible')){
    hiddens.forEach(element => {
      element.classList.remove('visible');
    });
    showAllRepair.textContent = 'Показать все';
    showAllRepair.classList.remove('repair__show-all--active');
  }else{
    hiddens.forEach(element => {
      element.className += ' visible';
    });
    showAllRepair.textContent = 'Скрыть';
    showAllRepair.className += ' repair__show-all--active'
  }
})