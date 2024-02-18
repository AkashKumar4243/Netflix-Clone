import jwt from "jsonwebtoken";

export default function (req, res, next) {
  const authHeader = req.headers.token;

  if (!authHeader) {
    return res.status(401).json({ Error: "Authentication Failed" });
  }

//   const token = authHeader.split(" ")[1];
  jwt.verify(authHeader, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json("Invalid Token");
    }
    req.user = user;
    next();
  });
}
