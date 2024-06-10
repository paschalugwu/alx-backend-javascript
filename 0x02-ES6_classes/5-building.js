/**
 * Represents a building with a specified square footage.
 * @class
 */
export default class Building {
  /**
   * Creates an instance of Building.
   * @param {number} sqft - The square footage of the building.
   * @throws {Error} - Throws an error if a subclass does not implement evacuationWarningMessage.
   */
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  /**
   * Retrieves the square footage of the building.
   * @return {number} The current square footage.
   */
  get sqft() {
    return this._sqft;
  }

  /**
   * Updates the square footage of the building.
   * @param {number} newSqft - The new square footage to set.
   */
  set sqft(newSqft) {
    this._sqft = newSqft;
  }
}
