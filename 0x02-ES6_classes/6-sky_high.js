import Building from './5-building';

/**
 * Represents a skyscraper with a specified number of floors.
 * @class
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
  /**
   * Creates an instance of SkyHighBuilding.
   * @param {number} sqft - The square footage of the skyscraper.
   * @param {number} floors - The number of floors in the skyscraper.
   */
  constructor(sqft, floors) {
    super(sqft); // Assigns sqft to the parent class (Building)
    this._floors = floors; // Stores the number of floors in an underscore attribute
  }

  /**
   * Retrieves the number of floors in the skyscraper.
   * @return {number} The current number of floors.
   */
  get floors() {
    return this._floors;
  }

  /**
   * Updates the number of floors in the skyscraper.
   * @param {number} newFloors - The new number of floors to set.
   */
  set floors(newFloors) {
    this._floors = newFloors;
  }

  /**
   * Provides an evacuation warning message specific to skyscrapers.
   * @return {string} The evacuation warning message.
   */
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this.floors} floors`;
  }
}
