class Accord {
    constructor(selector) {
        this.accordion = document.querySelector(selector)
        if (this.accordion === null) {
            return false
        }

        this.accordion.addEventListener('click', e => {
            if (e.target.classList.contains('accord__header')) {
                this.main(e.target.parentNode)
            }

            if (e.target.parentNode.classList.contains('accord__header')) {
                this.main(e.target.parentNode.parentNode)
            }

            if (e.target.parentNode.parentNode.classList.contains('accord__header')) {
                this.main(e.target.parentNode.parentNode.parentNode)
            }
        })    
    }

    main(accordionItem) {
        let isOpen = accordionItem.classList.contains('accord__item--open')

        if (isOpen) {
            this.close(accordionItem)
        } else {
            let openItem = this.accordion.querySelector('.accord__item--open')
            if (openItem) {
                this.close(openItem)
            }
            this.open(accordionItem)
        }
    }

    open(item) {
        item.classList.add('accord__item--open')
        item.querySelector('.calendar__icon--plus').classList.add('d-none')
        item.querySelector('.calendar__icon--minus').classList.remove('d-none')
    }
    
    close(item) {
        item.classList.remove('accord__item--open')
        item.querySelector('.calendar__icon--plus').classList.remove('d-none')
        item.querySelector('.calendar__icon--minus').classList.add('d-none')
    }
}
