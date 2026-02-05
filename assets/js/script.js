
//سكربت التبديل
const btn = document.getElementById('theme-toggle');
const darkIcon = document.getElementById('theme-toggle-dark-icon');
const lightIcon = document.getElementById('theme-toggle-light-icon');

// تحديد الأيقونة حسب الوضع الحالي
if (localStorage.getItem('color-theme') === 'dark' ||
    (!localStorage.getItem('color-theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
    lightIcon.classList.remove('hidden');
} else {
    darkIcon.classList.remove('hidden');
}

// عند الضغط
btn.addEventListener('click', () => {
    darkIcon.classList.toggle('hidden');
    lightIcon.classList.toggle('hidden');

    if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
});

// زر القائمة في وضع الموبايل


const toggleBtn = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggleBtn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
});


//   كود تشغيل مكتبة السكرول

ScrollReveal().reveal('.info-hero', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.img-hero', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.boxses', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.tt', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'top',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.about-right', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out'
});
ScrollReveal().reveal('.about-left', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.corse', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.text-faq', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'right',
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.jobs', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'bottom',
    easing: 'ease-in-out',
});

ScrollReveal().reveal('.t-f', {
    delay: 200,
    duration: 800,
    distance: '50px',
    origin: 'left',
    easing: 'ease-in-out',
});


// تشغيل السلايدر

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 570px
        570: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 5,
            spaceBetween: 10
        }
    },

    navigation: {
    nextEl: '.btn-r',
    prevEl: '.btn-l',
  },
});



