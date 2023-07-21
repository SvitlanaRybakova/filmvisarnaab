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

// Checks if email meets validation requirements.
const checkEmail = (email) => {
  const emailToCompare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailToCompare.test(email);
};

module.exports = { checkEmail, checkPassword };
