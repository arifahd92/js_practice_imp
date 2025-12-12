function registerUserBad(user) {
  // Validate user
  if (!user.name) {
    throw new Error("name is required ");
  }
  if (!user.email) {
    throw new Error("email is required ");
  }

  // Save user to database
  console.log(`User ${user.name} saved to database.`);

  // Send welcome email
  console.log(`Welcome email sent to ${user.email}.`);
}

// Refactored code following Single Responsibility Principle (SRP)
function registerUser(user) {
  isValidUser(user);
  saveUserToDatabase(user);
  sendWelcomeEmail(user.email);
}

function isValidUser(user) {
  if (!user.name) {
    throw new Error("name is required ");
  }
  if (!user.email) {
    throw new Error("email is required ");
  }

  return user.name && user.email;
}

function saveUserToDatabase(user) {
  // Logic to save user to the database
  console.log(`User ${user.name} saved to database.`);
}

function sendWelcomeEmail(email) {
  // Logic to send a welcome email
  console.log(`Welcome email sent to ${email}.`);
}
// Example usage:
const newUser = { name: "Alice", email: " arif@gmail.com" };
registerUser(newUser);
