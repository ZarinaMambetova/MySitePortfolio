export default class Scroll {
    constructor() {
      
        if ($('.sidebar_item')) {
            
            this.link    = $('.sidebar_item')
            this.article = $('.entry__content')
    
            this.link.eq(0).children().addClass('active')
            this.link.eq(0).addClass('border')
    
            for (let i = 0; i < this.link.length; i++) {
                this.link.eq(i).attr('data-name', i)
                this.article.eq(i).attr('data-name', i)
            }

            const scrollToArt = target => this.ScrollToArticle(target)

            $(document).on("scroll", (e) => {
                this.fixedSidebar()
                this.blogOnScroll()
            });

            this.link.on('click', function(e) {
                e.preventDefault()
                const target = $(this)
                scrollToArt(target)
            })
        }

        if ($('.scroll__link')) {
            console.log('!')
            const scrollLinkTop = $('#up')
            let finishElem

            $('.about__right-title')
                ? finishElem = $('.about__right-title')
                : finishElem = $('.section_works')


            scrollLinkTop.on('click', e => {
                this.scrollAnimate(finishElem)
            })

            $('#down').on('click', e => {
                this.scrollAnimate($('html'))
            })
        }
    }

    fixedSidebar() {
        const scrollPos = $(document).scrollTop();
        const sidebar = $('.sidebar')

        scrollPos > 400
            ? sidebar.addClass('fixed')
            : sidebar.removeClass('fixed')
    }

    blogOnScroll() {
        for (let i = 0; i < this.article.length; i++) {

            if (this.article[i].getBoundingClientRect().top - 200 < 0 
                && this.article[i].getBoundingClientRect().bottom - 200 > 0) {

                const data_name = this.article.eq(i).attr('data-name')
                
                for (let j=0; j < this.article.length; j++) {

                   const link_dataname = this.link.eq(j).attr('data-name')

                    if (data_name === link_dataname ) {
                        this.link.eq(j).siblings().removeClass('border')
                        this.link.eq(j).siblings().children().removeClass('active')
                        this.link.eq(j).children().addClass('active')
                        this.link.eq(j).addClass('border')
                    }
                }
            }   
        }
    }

    ScrollToArticle(target=false) {
        let data_article

        const data_link = target.attr('data-name')

        for (let i=0; i < this.article.length; i++) {

            const data = this.article.eq(i).attr('data-name')
  
            if (data_link === data) {
                data_article = this.article.eq(i)
                this.scrollAnimate(data_article)
            }
        }
    }

    scrollAnimate(elem) {
        const top = elem.offset().top - 50
        $('html, body').animate({scrollTop: top}, 1000)
    }
}