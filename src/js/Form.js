class Form {
    constructor(selector) {
        const form = document.querySelector(selector)
        if (form === null) {
            return false
        }

        const submitBtn = form.querySelector('.form__submit')
    
        form.addEventListener('focusin', this.clearForm)
        form.addEventListener('submit', async e => {
            e.preventDefault()
    
            submitBtn.disabled = true
    
            if (this.validation(e.target)) {
                console.log('Valid OK')
            }
            
            submitBtn.disabled = false
        })    
    }

    clearForm(e) {
        if (e.target.classList.contains('form__control')) {
            e.target.classList.remove('is-invalid')
            e.target.classList.remove('is-valid')
        }
    }
    
    validation(form) {
        let patterns = {
            notEmpty: /.+/,
            email: /^.+@.+\..+$/,
            phone: /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
        }
    
        let fields = form.querySelectorAll('.form__control')
        let isValid = true
        
        fields.forEach(f => {
            let pattern = patterns[f.dataset.valid]
            f.value = f.value.trim()
            
            if (pattern.test(f.value)) {
                f.classList.add('is-valid')
            } else {
                f.classList.add('is-invalid')
                isValid = false
            }
        })
        return isValid
    }
}
