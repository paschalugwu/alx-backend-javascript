/**
 * Represents a currency with a code and name.
 */
export default class Currency {
  /**
   * Constructs an instance of the Currency class.
   * @param {string} code - The currency's code.
   * @param {string} name - The currency's full name.
   */
  constructor(code, name) {
    /**
     * The currency's code.
     * @private
     */
    this._code = code;
    /**
     * The currency's full name.
     * @private
     */
    this._name = name;
  }

  /**
   * Retrieves the currency's code.
   * @returns {string} The code of the currency.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets a new code for the currency.
   * @param {string} Code - The new code to be set for the currency.
   */
  set code(Code) {
    this._code = Code;
  }

  /**
   * Retrieves the currency's full name.
   * @returns {string} The full name of the currency.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets a new name for the currency.
   * @param {string} Name - The new name to be set for the currency.
   */
  set name(Name) {
    this._name = Name;
  }

  /**
   * Displays the full currency in the format 'name (code)'.
   * @returns {string} The currency's full name and code.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
