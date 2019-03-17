// const slider = require('./common/slider');
// const $ = require('jquery'); // если будет нужен
const map = require('./common/map');
import hamburger from './common/hamburger';
const onScroll = require('./common/scrolling');
import moveLayers from './common/parallax';
import Blure from './common/blure';
import preload from './common/preloader';
import Scroll from './common/scrolling';
import Skills from './common/skills'
import Slider from './common/slider'
// import slider from './common/slider';

// const slide = new slider()

import  valid from './common/validation';


const form = new Blure()
const parallax = new moveLayers()
const blogScroll = new Scroll()
const slider = new Slider()
const skills = Skills()

skills.init()
// const validform = new valid()

if (document.getElementsByClassName('blure').length > 0) {
    form.bl()
    window.addEventListener('resize', form.bl)
}

if (document.getElementsByClassName('hamburger').length > 0) {
    const hamburger_but = document.querySelector('.hamburger')
    hamburger_but.addEventListener('click', hamburger)
}

if (document.getElementsByClassName('parallax__layer').length > 0) {
    preload()
    window.addEventListener('mousemove', parallax.mouseMove)
}

if (document.querySelector('.entries')) {
    // const blogScroll = new Scroll()
    // blogScroll.initScroll()
}

if (document.querySelector('.welcome__btn')) {
    // флип-эффект по клику!
    var flip = document.querySelector(".welcome__btn");
    var welcome = document.querySelector(".welcome-login");
    var home = document.querySelector('.form__button-main')

    flip.addEventListener("click", function () {
        flip.classList.add("welcome__btn_active");
        welcome.classList.add("welcome-login_active");
    });

    home.addEventListener('click', function(e) {
        welcome.classList.remove("welcome-login_active");
        flip.classList.remove("welcome__btn_active");
    })
}


// СЛАЙДЕР

// const slide_right = document.querySelector('.slider-slide__list--right')
// const slide_left = document.querySelector('.slider-slide__list--left')
// const slide_head = document.querySelector('.slider-head')
// const height = document.querySelector('.slider-slide').clientHeight
// const textCapt = document.querySelector('.slide-text__capt')

// const classli = 'slider-slide__item'

// const slide = [
//     { src: 'assets/images/content/afrodita.png', value: 'one', id: 1 },
//     { src: 'assets/images/content/adaptive.png', value: 'two', id: 2 },
//     { src: 'assets/images/content/my-site-mon.png', value: 'three', id: 3 }

// ]

// for (let i = 0; i < slide.length; i++) {
//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     li.classList.add(classli)
//     img.classList.add('img_class')
//     img.setAttribute('src', slide[i].src)
 
//     li.appendChild(img)
//     console.log(img)
//     slide_right.appendChild(li)
// }

// for (let i = 0; i < slide.length; i++) {
//     const li = document.createElement('li')
//     const img = document.createElement('img')
//     li.classList.add(classli)
//     img.classList.add('img_class')
//     img.setAttribute('src', slide[i].src)

//     li.appendChild(img)
//     slide_left.appendChild(li)
// }

// const left = slide_left.children
// const right = slide_right.children

// for (let i = 0; i < right.length; i++) {
//     //ight[i].textContent = slide[i].id
//     right[i].setAttribute('data-id', slide[i].id)
//     //left[i].textContent = slide[i].id
//     left[i].setAttribute('data-id', slide[i].id)
// }

// slide_right.addEventListener('click', e => {
//     e.preventDefault()
//     slide_move(true)
// })

// slide_left.addEventListener('click', e => {
//     e.preventDefault()
//     slide_move(false)
// })


// async function slide_move(flag) {
//     console.log('click')
//     const trans_wait = await append_ins(flag)

//     if (trans_wait.complete) {
//         if (flag) {
//             slide_right.style.transform = `translateY(-${height})`
//             slide_left.style.transform = `translateY(${height})`
//             await change_head(slide_right)
//         } else {
//             slide_right.style.transform = `translateY(${height})`
//             slide_left.style.transform = `translateY(-${height})`
//             await change_head(slide_left)
//         }
//     }
// }

// function append_ins(flag = false) {
//     if (flag) {
//         slide_right.appendChild(slide_right.children[0])
//         slide_left.insertBefore(slide_left.children[slide_left.children.length - 1], slide_left.children[0])
//         slide_right.children[0].cloneNode(true)
//         slide_left.lastChild.cloneNode(true)
//     } else {
//         slide_left.appendChild(slide_left.children[0])
//         slide_right.insertBefore(slide_right.children[slide_right.children.length - 1], slide_right.children[0])
//         slide_left.children[0].cloneNode(true)
//         slide_right.lastChild.cloneNode(true)
//     }
//     trans = { complete: true }
//     return trans
// }

// function change_head(elem) {
//     const color = getComputedStyle(elem.children[0], '').backgroundColor
//     const data_id = elem.children[0].getAttribute('data-id')
//     console.log(data_id)
//     for (let i = 0; i < slide.length; i++) {
//         if (data_id == slide[i].id) {
//             textCapt.textContent = ''
//             textCapt.textContent = slide[i].value
//         }
//     }
//     slide_head.style.backgroundColor = color
// }
