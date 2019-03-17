export default class Blure {
    bl() {
        const wrap = document.querySelector('.section-comments__bg')
        const blure = document.querySelector('.blure')
        const form_comments = document.querySelector('.form__comments')
        const bg = document.querySelector('.blure_bg')
 
        const style = bg.style
        const bg_width = wrap.offsetWidth
        const bg_height = wrap.offsetHeight
        const posL = blure.offsetLeft
        const posT = form_comments.offsetTop

        style.backgroundSize = `${bg_width}px ${bg_height}px`
        style.backgroundPosition = `-${posL}px -${posT}px`

    }
}