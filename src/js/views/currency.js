class CurrencyUI {
    constructor() {
        this.currency = document.getElementById('currency')
        this.dicionary = {
            USD: '$',
            EUR: '€',
        }
    }

    get currencyValue() {
        return this.currency.value
    }

    getCurrencySymbol() {
        return this.dicionary[this.currencyValue]
    }
}

const currencyUI = new CurrencyUI()

export default currencyUI