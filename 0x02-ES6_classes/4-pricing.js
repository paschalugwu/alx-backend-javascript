// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

/**
 * Pricing class representing the price of an item in a specific currency.
 */
export default class Pricing {
  /**
   * Constructor for creating a new Pricing object.
   * @param {number} amount - The amount of the item.
   * @param {Currency} currency - The currency in which the amount is specified.
   */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
   * Retrieves the amount.
   * @return {number} The amount of the item.
   */
  get amount() {
    return this._amount;
  }

  /**
   * Retrieves the currency.
   * @return {Currency} The currency of the amount.
   */
  get currency() {
    return this._currency;
  }

  /**
   * Sets a new amount.
   * @param {number} newAmount - The new amount of the item.
   */
  set amount(newAmount) {
    this._amount = newAmount;
  }

  /**
   * Sets a new currency.
   * @param {Currency} newCurrency - The new currency of the amount.
   */
  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  /**
   * Displays the full price as a string.
   * @return {string} The full price in the format "amount currency_name (currency_code)".
   */
  displayFullPrice() {
    return `${this._amount} ${this.currency.displayFullCurrency()}`;
  }

  /**
   * Converts the price from one currency to another using a conversion rate.
   * @param {number} amount - The amount to be converted.
   * @param {number} conversionRate - The rate used for conversion.
   * @return {number} The converted amount.
   */
  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
