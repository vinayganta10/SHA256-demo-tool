import {sha256,sha224} from 'js-sha256';

function generateHash(data) {
    const uint8Array = new TextEncoder().encode(data);
    // Generate the SHA-256 hash
    const hashBuffer = sha256.arrayBuffer(uint8Array);
    console.log(hashBuffer);
    // Convert the hash to a hexadecimal string
    const hashHex = Array.from(new Uint8Array(hashBuffer))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
    return hashHex;
}

export default generateHash;