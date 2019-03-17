export default class moveLayers  {

    mouseMove(e) {
        
        const layers = document.querySelectorAll('.parallax__layer')
        let   speed  = 100

        for (let i = 0; i < layers.length; i++) {

            const pos_x = `${e.pageX / speed}px`
            const pos_y = `${e.pageY / speed}px`

            layers[i].style.transform=`translate3d(${pos_x}, ${pos_y}, 0)`

            speed -= 10 
        }
    }

    scroll() {}

};
