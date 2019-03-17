export default class Slider {
    constructor() {
        if (document.querySelector('.slider-slide')) {

            this.slide_right = document.querySelector('.slider-slide__list--right')
            this.slide_left  = document.querySelector('.slider-slide__list--left')
            this.slide_head  = document.querySelector('.slider-slide__img')
            this.capt        = document.querySelector('.slider-text__capt')
            this.tech        = document.querySelector('.slider-text__tech')
            this.link        = document.querySelector('.slider-text__link')

            this.isAnim = false
            this.slide  = [
                {
                    src: '../assets/images/content/my-site-mon.png', 
                    name: 'Сайт портфолио', 
                    tech: 'Sass/Pug, Vue.js, node.js', 
                    link: '#'
                },
                {
                    src: '../assets/images/content/afrodita.png',
                    name: 'Корпоротивный сайт фитнесс клуба',
                    tech: 'HTML5, CSS3',
                    link: '#'
                },
                {
                    src: '../assets/images/content/adaptive.png',
                    name: 'Сайт бургерной',
                    tech: 'HTML5, sass, jquery, php',
                    link: '#'
                }
            ]

            this.slideAdd(this.slide)

            const first_img = this.slide_left.children[0].children[0].getAttribute('src')
            this.add_text(first_img)

            this.slide_head.setAttribute('src', first_img)
            this.slide_left.insertBefore(this.slide_left.children[this.slide_left.children.length-1], this.slide_left.children[1])

            this.slide_left.addEventListener('click', e => {
                this.slideMove(false)
            })

            this.slide_right.addEventListener('click', e => {
                this.slideMove(true)
            })

            setInterval(()=> this.isAnim = false, 2000)
        }
    }

    slideAdd(slide) {
        for (let i = 0; i < slide.length; i++) {            
            const li  = document.createElement('li')
            const img = document.createElement('img')
            li.classList.add('slider-slide__item')
            img.classList.add('slider-slide__img')
            img.setAttribute('src', slide[i].src)
            li.appendChild(img)
            this.slide_left.appendChild(li)
        }

        for (let i = 0; i < slide.length; i++) {            
            const li  = document.createElement('li')
            const img = document.createElement('img')
            li.classList.add('slider-slide__item')
            img.classList.add('slider-slide__img')
            img.setAttribute('src', slide[i].src)
            li.appendChild(img)
            this.slide_right.appendChild(li)
        }
    }

    slideMove(flag) {
        
        if (this.isAnim) return
        
        this.isAnim = true
        
        const height = document.querySelector('.slider-slide__slides').clientHeight

        if (flag===true) {
            this.slide_right.style.transition = 'transform 1s'
            this.slide_left.style.transition = 'transform 1s'
            this.slide_right.style.transform  = `translateY(-${height}px)`
            this.slide_left.style.transform   = `translateY(${height}px)`
            this.change_head(this.slide_right)
        } else {
            this.slide_right.style.transition = 'transform 1s'
            this.slide_left.style.transition = 'transform 1s'
            this.slide_right.style.transform = `translateY(${height}px)`
            this.slide_left.style.transform  = `translateY(-${height}px)`
            this.change_head(this.slide_left)
        }

        setTimeout(() => this.append_ins(flag), 1200)
    }


    append_ins(flag=false) {

        this.slide_left.removeAttribute('style')
        this.slide_right.removeAttribute('style')

        if (flag) {
            this.slide_right.appendChild(this.slide_right.children[0])
            this.slide_left.insertBefore(this.slide_left.children[this.slide_left.children.length-1], this.slide_left.children[0])
            this.slide_right.children[0].cloneNode(true)
            this.slide_left.lastChild.cloneNode(true)
        } else {
            this.slide_left.appendChild(this.slide_left.children[0])
            this.slide_right.insertBefore(this.slide_right.children[this.slide_right.children.length-1], this.slide_right.children[0])
            this.slide_left.children[0].cloneNode(true)
            this.slide_right.lastChild.cloneNode(true)
        }
        const trans = { complete:true }
        return trans
    }

    change_head(elem) {
        const img = elem.children[1].children[0].getAttribute('src')
        this.slide_head.setAttribute('src', img)
        this.add_text(img)
    }

    add_text(src) {
        for (let i = 0; i < this.slide.length; i++) {
        
            if (src == this.slide[i].src) {
                this.capt.textContent = this.slide[i].name
                this.tech.textContent = this.slide[i].tech
                this.link.setAttribute('href', this.slide[i].link)
            }
        }
    }
 }