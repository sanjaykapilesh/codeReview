/**
 * Filters out users below the age of 18 from the given array.
 *
 * @param {Array} users - An array of user objects.
 * @returns {Array} - A new array containing only users above or equal to 18 years of age.
 */
function filterUsers(users) {
  // Create a new array to store filtered users
  const filteredUsers = [];

  for (const user of users) {
    if (user.age >= 18) {
      // Add users who meet the condition to the new array
      filteredUsers.push(user);
    }
  }
  return filteredUsers;
}
