// Checks if password meets validation requirements.
const checkPassword = (password) => {
  // Minimum: 8 characters, at least one uppercase letter, at least one lowercase letter, one number and one special character.
  const passwordToCompare = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#£¤$&?^*])(?=.{8,})"
  );

  if (password.match(passwordToCompare)) {
    return true;
  } else {
    return false;
  }
};

module.exports = { checkPassword };
