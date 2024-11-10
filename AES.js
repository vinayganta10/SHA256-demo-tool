import CryptoJS from "crypto-js";

const key = CryptoJS.enc.Utf8.parse("1234567890123456");
const iv = CryptoJS.enc.Utf8.parse("abcdef9876543210");

function encrypt(plaintext) {
  const ciphertext = CryptoJS.AES.encrypt(plaintext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return ciphertext.toString();
}

function decrypt(ciphertext) {
  const bytes = CryptoJS.AES.decrypt(ciphertext, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
  console.log(decryptedText);
  return decryptedText;
}

export {encrypt,decrypt};
