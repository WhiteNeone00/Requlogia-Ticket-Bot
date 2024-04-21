const mongoose = require("mongoose");

module.exports = mongoose.model("Guild", new mongoose.Schema({
    id: { type: String },
    ticketCounts: { type: Object, default: {} }
}));