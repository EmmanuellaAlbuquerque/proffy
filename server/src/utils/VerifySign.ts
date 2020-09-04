var jwt = require('jsonwebtoken');

export default function VerifySign(token?: string) {
  if (token) {
    try {
      // get the decoded payload ignoring signature, no secretOrPrivateKey needed
      var decoded = jwt.decode(token, { complete: true });
      return decoded;
    } catch (err) {
      console.error(err);
    }
  } else {
    console.log('NO TOKEN FOUND');
    return false;
  }
}
