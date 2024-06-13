import ClassRoom from './0-classroom';

/**
 * Initializes an array of ClassRoom objects with predefined sizes.
 * @returns {ClassRoom[]} An array of ClassRoom instances.
 */
export default function initializeRooms() {
  // Create an empty array to store ClassRoom instances
  const ClassRoomList = [];

  // Instantiate ClassRoom objects with the given sizes
  const class1 = new ClassRoom(19);
  const class2 = new ClassRoom(20);
  const class3 = new ClassRoom(34);

  // Add the ClassRoom instances to the array
  ClassRoomList.push(class1, class2, class3);

  // Return the array of ClassRoom instances
  return ClassRoomList;
}
