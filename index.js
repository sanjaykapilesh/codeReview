// Loops the users array and based on the
function users(users) {
  for (const i = 0; i < users.length; i++) {
    if (users[i].age < 18) {
      users.splice(i, 1)
    }
    return users;
  }
