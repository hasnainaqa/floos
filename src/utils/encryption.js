// Public keys in PEM
const publicKeyPem = `
-----BEGIN PUBLIC KEY-----
MIGeMA0GCSqGSIb3DQEBAQUAA4GMADCBiAKBgGPaxI/3uWYal0D5TVxzMhmflLBP
q+YoRT65Kbene3nr1j4TkjoS0lT6fIq5pSFEKgkserjPUaZ+Vei1tYib9kDsTk7o
WJvR2/99BV6eidW8LvXiaqLNO+K6XJHaL41R5w036o6yWQeJl8rp/jw4gvMYbnH7
+zL/YWOMAp9FxgOLAgMBAAE=
-----END PUBLIC KEY-----
`;

const publicPinKey = `
-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCbzDr9N8xLhNSgfUeTuhLZ4cHm
ozQk81BLCPbYIo1OUndO7uD93SchaS11WzJZq56JtnlyuEvy7vUwY97/pT0QDzA0
25gVaJ5WFoGytgyRCNyGuXf7KuvMsopAbjRGw7SZ6VauA9YC6kAU2lCo0R5HB+v0
LFI9B2OIRbR1yGnmfwIDAQAB
-----END PUBLIC KEY-----
`;

// Helper: convert PEM → CryptoKey
async function importPublicKey(pem) {
  const pemContents = pem
    .replace("-----BEGIN PUBLIC KEY-----", "")
    .replace("-----END PUBLIC KEY-----", "")
    .replace(/\s+/g, "");

  const binaryDer = Uint8Array.from(atob(pemContents), (c) => c.charCodeAt(0));

  return await window.crypto.subtle.importKey(
    "spki",
    binaryDer.buffer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    false,
    ["encrypt"]
  );
}

// Encrypt text with RSA-OAEP-SHA256
export async function encryptRSA(plainText, isPinCode = false) {
  const publicKey = isPinCode ? publicPinKey : publicKeyPem;

  const key = await importPublicKey(publicKey);

  const encoded = new TextEncoder().encode(plainText);

  const encrypted = await window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    key,
    encoded
  );

  // Convert to base64
  return btoa(String.fromCharCode(...new Uint8Array(encrypted)));
}


