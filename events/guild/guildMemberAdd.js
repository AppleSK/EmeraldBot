const profileModel = require('../../models/profileSchema');

module.exports = async(client, Discord, member) =>{
    let profile = await profileModel.create({
        userID: member.id,
        serverID: member.guild.id,
        bars: 500,
        bank: 0
    });
    profile.save();
}