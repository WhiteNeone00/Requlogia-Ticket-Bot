const mongoose = require("mongoose");

module.exports = mongoose.model("Staff", new mongoose.Schema({
    userId: { type: String },
    chnId: { type: String },
    msgCount: { type: Number, default: 0 },
    date: { type: String, default: null }
}));