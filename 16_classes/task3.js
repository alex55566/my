import BaseComponent from './task1.js'

export default class AutoComponent extends BaseComponent {

    onClickGetinfo() {
        let btn = this.getComponentElement();

        let options = {
            rootMargin: '0px',
            threshold: 1
        };

        let observer = new IntersectionObserver(() => {
            this.errors.splice(0, 1)
            if (this.showLoader == 'true') {
                this.spinnerActive = this.spinner.style.display = '';
            }

            this.$el.innerHTML = ''
            btn.disabled = true;

            this.loadPage(btn);

        }, options);

        let myDivTarget = document.querySelector(this.selector);

        observer.observe(myDivTarget);
    }
}


