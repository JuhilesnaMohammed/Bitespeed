"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateContactData = void 0;
function validateContactData(req, res, next) {
    const { email, phoneNumber } = req.body;
    if (typeof email !== 'string' || typeof phoneNumber !== 'string') {
        return res.status(400).json({ error: 'Both email and phoneNumber must be strings' });
    }
    if (!email.trim() || !phoneNumber.trim()) {
        return res.status(400).json({ error: 'Both email and phoneNumber are mandatory' });
    }
    next();
}
exports.validateContactData = validateContactData;
