export default function Skills() {

    const circles   = $('.circle__second')
    const container = $('.block-title_skills')
    let count       = [20, 25, 30, 35, 40, 45, 50, 55, 60, 65]
    function active() {
        console.log(container[0].getBoundingClientRect().top);
        if (container[0].getBoundingClientRect().top < 100) {
            for (let i = 0; i < circles.length; i++) {
                circles.eq(i).addClass(`circle-${count[i]}`)
            }
        }
    }

    return {
        init() {
            if (circles.length > 0) {
                console.log('!');
                $(document).on('scroll', function(e) { active() })
            }
        }
    }
}