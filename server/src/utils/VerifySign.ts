var jwt = require("jsonwebtoken");

export default function VerifySign(token: string) {
  try {
    // get the decoded payload ignoring signature, no secretOrPrivateKey needed
    var decoded = jwt.decode(token, { complete: true });
    return decoded;
  } catch (err) {
    console.error(err);
  }
}
