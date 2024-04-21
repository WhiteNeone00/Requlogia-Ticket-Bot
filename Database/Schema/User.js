const mongoose = require("mongoose");

module.exports = mongoose.model("User", new mongoose.Schema({
    id: { type: String },
    tickets: { type: Array, default: [] },
    hearUsFrom: { type: String, default: null },
    blacklisted: { type: Boolean, default: false }
}));