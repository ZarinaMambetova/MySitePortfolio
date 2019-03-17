export default function preload() {  
    
    const text = document.querySelector('.text')
    const container = document.querySelector('.preloader')
    let percent = 0

    const layer = document.querySelectorAll('.parallax__layer-img') 
    const count = 100 / layer.length 

    if (layer) { container.style.display = 'none' }

    for (let i = 0; i < layer.length; i++) {
       layer[i].onload = function() { 
            percent += Math.ceil(count)
           text.textContent = percent

            if (Math.ceil(percent) > 100) {
                text.textContent = 100
                container.style.display = 'none'
            }
        }
    }

}
