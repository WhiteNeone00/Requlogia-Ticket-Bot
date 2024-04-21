const mongoose = require("mongoose");

module.exports = mongoose.model("Feedback", new mongoose.Schema({
    staffId: { type: String },
    userId: { type: String },
    chnId: { type: String },
    date: { type: String, default: null },
    star: { type: Number, default: 0 },
    message: { type: String, default: null }
}));