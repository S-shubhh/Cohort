const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */

const zod = require('zod');

const usernameSchema = zod.string().email();
const passwordSchema = zod.string().min(6); 
function signJwt(username, password) {
    const usernameStatus = usernameSchema.safeParse(username);
    const passswordStatus = passwordSchema.safeParse(password);
    if(!usernameStatus.success || !passswordStatus.success ){
        return null;     
    } 
    const singnature  = jwt.sign({username }, jwtPassword);
   return singnature;

}

/**
 * Verifies a JWT u
 sing a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */
function verifyJwt(token) {
    let ans = true;
    try{
        jwt.verify(token, jwtPassword);
        
    }
    catch(e){
        ans = false;
    }
    return ans;
 }

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */
function decodeJwt(token) {
    // Your code here
    const decode = jwt.decode(token,jwtPassword);
    if(decode){
        return true;
    }
    return false;
}
module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};
