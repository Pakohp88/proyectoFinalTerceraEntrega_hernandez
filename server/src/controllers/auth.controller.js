const authController = {}
const jwt = require("jsonwebtoken");

authController.generateToken = (req, res) => {
    jwt.sign({ aplicationName: "movieOn" }, "coderHouseExample", (err, token) => {
        return res.json({ token });
    });
}


authController.verifyToken = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Not token provide" });
    }

    const token = req.headers.authorization.split(" ")[1];

    if (token === "null") {
        return res.status(401).send({ message: "Unauthorize request" });
    }

    const payload = jwt.verify(token, "coderHouseExample");

    if (payload.aplicationName === "movieOn") {
        next();
    } else {
        return res.status(401).send({ message: "Unauthorize application" });
    }
}

module.exports = authController;