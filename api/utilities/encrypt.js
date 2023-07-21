const crypto = require("crypto");

const encrypt = (password) => {
  // Sha256-encryption with the build in Node.js module crypto.
  return (
      crypto
        // Creates and returns a Hmac object that uses the given algorithm and key (salt). sha stands for Secure Hash Algorithm.
        .createHmac("sha256", "Ciro Immobile")
        .update(password) // Hashes the password
        .digest("hex") // The encoding type
  );
};

module.exports = encrypt;