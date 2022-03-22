import BaseHooks from './base';

export default class extends BaseHooks {
    /**
     * @Constructor
     */
    constructor() {
        // call parent
        super();

        this.optionsChange();
        this.quantityChange();
    }

    optionsChange() {
        this.subscribe('change', '[data-product-option-change]', (event, target) => {
            this.emit('product-option-change', event, target);
        });
    }

    quantityChange() {
        this.subscribe('change', '[data-quantity-change]', (event, target) => {
            this.emit('product-quantity-change', event, target);
        });
        this.subscribe('click', '[data-quantity-change] > button', (event, target) => {
            this.emit('product-quantity-change', event, target);
        });
    }
}
