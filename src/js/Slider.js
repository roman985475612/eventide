class Slider {
    constructor( params ) {
        this.slides = document.querySelectorAll(params.itemSelector)
        this.indicators = document.querySelectorAll('.indicators__item')
        this.activeClass = params.activeClass
        var index = 0
        
        let main = setInterval(() => {
            this.slideDown(index)
            index = index < (this.slides.length - 1) ? index + 1 : 0
            this.slideUp(index)
        }, params.interval)

        document
            .querySelector('.indicators')
            .addEventListener('click', e => {
                if (e.target.classList.contains('indicators__item')) {
                    clearTimeout(main)
                    this.slideDown(index)
                    index = parseInt(e.target.dataset.slide) - 1;
                    this.slideUp(index)
                }
            })
    }

    slideDown(i) {
        this.slides[i].classList.remove(this.activeClass)
        this.indicators[i].classList.remove('indicators__item--current')
    }

    slideUp(i) {
        this.slides[i].classList.add(this.activeClass)
        this.indicators[i].classList.add('indicators__item--current')
    }
}
