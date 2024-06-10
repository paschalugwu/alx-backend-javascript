export default class ClassRoom {
  /**
   * ClassRoom class defining the maximum size of students.
   * @param {number} maxStudentsSize - The maximum number of students in the class.
   */
  constructor(maxStudentsSize) {
    /**
     * The constructor takes a single argument `maxStudentsSize` and assigns it
     * to the class property `_maxStudentsSize`. This property holds the maximum
     * number of students that the classroom can accommodate.
     */
    this._maxStudentsSize = maxStudentsSize;
  }
}
