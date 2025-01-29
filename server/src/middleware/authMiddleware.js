import jwt from "jsonwebtoken";

export const generateToken = (user) => {
    //    will use role for a subscriptor feature, add a role to users table in workbench
    //    return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: "1h" });

    return jwt.sign({ id: user.id, firstName: user["first_name"], lastName: user["last_name"] }, process.env.JWT_SECRET, { expiresIn: "1h" });
};

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]; // Bearer token
    if (!token) {
        return res.status(401).json({ message: "Access denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded // Attach all user info to the req.user request for later use
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid token." });
    }
};
