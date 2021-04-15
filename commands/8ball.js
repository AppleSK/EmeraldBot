const profileModel = require("../models/profileSchema");
module.exports = {
  name: '8ball',
  permissions: [],
  cooldown: 10,
  description: 'Asks a question and let the bot determine your fate',
  async execute(client, message, args, Discord, profileData) {
    const commanderror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())  
    .setColor('#30d56b')
    .setTitle('`Wrong usage!`')
    .setDescription('Please use the command like this `+8ball <question>`') 
    const balanceerror = new Discord.MessageEmbed() // create embed 
    .setAuthor(message.author.tag, message.author.avatarURL())  
    .setColor('#30d56b')
    .setTitle('`Insufficient balance!`')
    .setDescription('Please make sure you have at least `10` <:HPemerald:831588273796415489>')
    if (!args[0]) return message.channel.send(commanderror); // return if no question is commenced
    if (profileData.bars < 10) return message.channel.send(balanceerror);
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.', 'Probably']; // random responses
    const price = Math.floor(Math.random() * 5)
    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
      .setAuthor(message.author.tag, message.author.avatarURL())  
        .setTitle('`🎱 says...`')
        .setColor('30d56b').addField(`\n\`Question\``, question)
        .addField(`\n\`Answer\``, replies[result])
        .setDescription(`You bought this for ${price} <:HPemerald:831588273796415489>`)
      await message.channel.send(embed); // send embed message
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bars: -price,
          },
        }
      );

    }
  },
};