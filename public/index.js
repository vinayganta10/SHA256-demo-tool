document.getElementById('sha256Form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const inputString = document.getElementById('inputString').value;

    if (inputString) {
        try {
            const response = await axios.post('http://localhost:4000', {
                message: inputString
            });
            document.getElementById('sha256Result').value = response.data;
        } catch (error) {
            console.error('Error generating SHA256 hash:', error);
        }
    } else {
        alert("Please enter a string to generate SHA256 hash.");
    }
});

document.getElementById('aesEncryptForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const inputText = document.getElementById('encryptInput').value;

    if (inputText) {
        try {
            const response = await axios.post('http://localhost:4000/encrypt', {
                message: inputText
            });
            document.getElementById('encryptedResult').value = response.data;
        } catch (error) {
            console.error('Error during encryption:', error);
        }
    } else {
        alert("Please enter text to encrypt.");
    }
});

document.getElementById('aesDecryptForm').addEventListener('submit', async function (event) {
    event.preventDefault();
    const ciphertext = document.getElementById('decryptInput').value;

    if (ciphertext) {
        try {
            const response = await axios.post('http://localhost:4000/decrypt', {
                message: ciphertext
            });
            console.log(response);
            document.getElementById('decryptedResult').value = response.data;
        } catch (error) {
            console.error('Error during decryption:', error);
        }
    } else {
        alert("Please enter text to decrypt.");
    }
});