module.exports = {
    name: "bal",
    permissions: [],
    cooldown: 10,
    description: "Check the user balance",
    execute (client, message, args, Discord, profileData){
        message.channel.send(`**Balance:** ${profileData.bars}<:HPbar:830500268089147424>
**Bank:** ${profileData.bank}<:HPbar:830500268089147424>`);
    },
};