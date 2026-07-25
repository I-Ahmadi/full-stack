/*
What is the Crypto Module?
The Crypto module is a built-in Node.js module that provides cryptographic functionality including:

- Hash functions (SHA-256, SHA-512, etc.)
- HMAC (Hash-based Message Authentication Code)
- Symmetric encryption (AES, DES, etc.)
- Asymmetric encryption (RSA, ECDSA, etc.)
- Digital signatures and verification
- Secure random number generation

The Crypto module is essential for applications that need to handle sensitive 
information securely.

The Crypto module wraps the OpenSSL library, providing access to well-established and 
tested cryptographic algorithms.

This module is often used to handle sensitive data, such as:
- User authentication and password storage
- Secure data transmission
- File encryption and decryption
- Secure communication channels
*/

// Getting Started with Crypto

const crypto = require('crypto');

// 1. Create a hash object
const hash = crypto.createHash('sha256');
// 2. Update the hash with data
hash.update('Hello, Node JS!')
// 3. Get the digest in hexadecimal format
const digest = hash.digest('hex');

console.log(digest); // SHA-256 Hash: 4695813a8d1ade632d4bcf74d2e58e296883db03306149e8c78f2de0886ef665

// createHash() creates a hash object with the specified algorithm
// update() updates the hash content with the given data
// digest() calculates the digest and outputs it in the specified format

/*
Installing the Crypto Module:
The Crypto module is included in Node.js by default.
You can use it by requiring it in your script:
const crypto = require('crypto');
*/
