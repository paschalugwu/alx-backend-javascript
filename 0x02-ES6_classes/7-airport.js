/**
 * Represents an airport with a unique name and code.
 */
export default class Airport {
  /**
   * Constructs an Airport instance with a given name and code.
   * @param {string} name - The full name of the airport.
   * @param {string} code - The airport's unique code.
   */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
   * Returns a string representation of the airport code.
   * @return {string} The airport code in the format `[object CODE]`.
   */
  toString() {
    return `[object ${this._code}]`;
  }
}
