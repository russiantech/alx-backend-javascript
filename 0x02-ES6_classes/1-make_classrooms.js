// 1-make_classrooms.js

import ClassRoom from './0-classroom';

function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34), // Add a trailing comma
  ];
}

export default initializeRooms;
