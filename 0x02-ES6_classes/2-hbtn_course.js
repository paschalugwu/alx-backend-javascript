/**
 * Represents a course at Holberton School.
 */
export default class HolbertonCourse {
  /**
   * Constructs the HolbertonCourse object.
   * @param {string} name - The name of the course.
   * @param {number} length - The duration of the course in weeks.
   * @param {string[]} students - The list of students enrolled in the course.
   * @throws {TypeError} Throws an error if the types of the arguments are not as expected.
   */
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = name;

    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = length;

    if (!Array.isArray(students) || !students.every((i) => typeof i === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = students;
  }

  /**
   * Gets the name of the course.
   * @return {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of the course.
   * @param {string} newName - The new name of the course.
   * @throws {TypeError} Throws an error if newName is not a string.
   */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  /**
   * Gets the length of the course.
   * @return {number} The duration of the course in weeks.
   */
  get length() {
    return this._length;
  }

  /**
   * Sets the length of the course.
   * @param {number} newLength - The new duration of the course in weeks.
   * @throws {TypeError} Throws an error if newLength is not a number.
   */
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  /**
   * Gets the list of students enrolled in the course.
   * @return {string[]} The list of students.
   */
  get students() {
    return this._students;
  }

  /**
   * Sets the list of students enrolled in the course.
   * @param {string[]} newStudents - The new list of students.
   * @throws {TypeError} Throws an error if newStudents is not an array of strings.
   */
  set students(newStudents) {
    if (!Array.isArray(newStudents) || !newStudents.every((i) => typeof i === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
