class SimpleTabs {

    constructor(selector) {
        this.tabsEl = document.querySelector(selector)
        const menu = this.tabsEl.querySelector('.simple-tabs__menu')
    
        menu.addEventListener('click', e => {
            let currentItem = e.target
    
            if (!currentItem.classList.contains('simple-tabs__item')) {
                return false;
            }
    
            this.removeCurrent('simple-tabs__item--current')

            this.removeCurrent('simple-tabs__box--current')

            currentItem.classList.add('simple-tabs__item--current')
    
            let currentBox = this.tabsEl.querySelector(currentItem.dataset.box)
            currentBox.classList.add('simple-tabs__box--current')
        })    
    }

    removeCurrent(curClass) {
        let curEl = this.tabsEl.querySelector('.' + curClass)
        curEl.classList.remove(curClass)
    }
}