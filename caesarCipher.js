function caesarCipher(str, shift) {
    // Wrap shift around the alphabet
    shift = shift % 26;
    // Convert string to array of characters
    const chars = str.split("");
    // Loop through each character
    for (let i = 0; i < chars.length; i++) {
      // Get character code
      const code = chars[i].charCodeAt();
      // Check if character is a letter
      if (code >= 65 && code <= 90) {
        // Convert uppercase letters
        chars[i] = String.fromCharCode(((code - 65 + shift) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Convert lowercase letters
        chars[i] = String.fromCharCode(((code - 97 + shift) % 26) + 97);
      }
    }
    // Convert array back to string
    return chars.join("");
  }
module.exports = caesarCipher;