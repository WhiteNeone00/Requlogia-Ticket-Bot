const mongoose = require("mongoose");

module.exports = mongoose.model("Ticket", new mongoose.Schema({
    id: { type: String },
    type: { type: String, default: null },
    author: { type: String, default: null },
    questions: { type: Array, default: [] },
    members: { type: Array, default: [] }
}));