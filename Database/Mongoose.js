const userSchema = require("./Schema/User.js");
const guildSchema = require("./Schema/Guild.js");
const ticketSchema = require("./Schema/Ticket.js");
const staffSchema = require("./Schema/Staff.js");
const feedbackSchema = require("./Schema/Feedback.js");

module.exports.fetchUser = async function(key) {
    let userDB = await userSchema.findOne({ id: key });
    if(userDB){
        return userDB;
    } else {
        userDB = new userSchema({
            id: key
        })
        await userDB.save().catch(err => console.log(err));
        return userDB;
    }
}
module.exports.fetchGuild = async function(key) {
    let guildDB = await guildSchema.findOne({ id: key });
    if(guildDB){
        return guildDB;
    } else {
        guildDB = new guildSchema({
            id: key
        })
        await guildDB.save().catch(err => console.log(err));
        return guildDB;
    }
}
module.exports.fetchTicket = async function(key) {
    let ticketDB = await ticketSchema.findOne({ id: key });
    if(ticketDB){
        return ticketDB;
    } else {
        ticketDB = new ticketSchema({
            id: key
        })
        await ticketDB.save().catch(err => console.log(err));
        return ticketDB;
    }
}
module.exports.fetchStaffChn = async function(uid, cid){
    let stfDB = await staffSchema.findOne({ userId: uid, chnId: cid });

    if(stfDB){
        return stfDB;
    }else{
        stfDB = new staffSchema({
            userId: uid,
            chnId: cid
        })
        await stfDB.save().catch(err => console.log(err));
        return stfDB;
    }
};

module.exports.fetchFeedback = async function(sid, uid, cid){
    let stfDB = await feedbackSchema.findOne({ staffId: sid, userId: uid, chnId: cid });

    if(stfDB){
        return stfDB;
    }else{
        stfDB = new feedbackSchema({
            staffId: sid,
            userId: uid,
            chnId: cid
        })
        await stfDB.save().catch(err => console.log(err));
        return stfDB;
    }
};