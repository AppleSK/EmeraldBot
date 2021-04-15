const profileModel = require("../models/profileSchema");
module.exports = {
  name: '8ball',
  permissions: [],
  cooldown: 1,
  description: 'Asks a question and let the bot determine your fate',
  async execute(client, message, args, Discord, profileData) {
    const error = new Discord.MessageEmbed() // create embed 
        .setAuthor('🎱 says...')
        .setColor('30d56b')
        .setDescription('Please ask a full question!');
    const balerror = new Discord.MessageEmbed() // create embed 
        .setAuthor('🎱 says...')
        .setColor('30d56b')
        .setDescription('You need to have at least 10<:HPemerald:831588273796415489>');
    if (!args[0]) return message.channel.send(error); // return if no question is commenced
    if (profileData.bars < 10) return message.channel.send(balerror);
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.', 'Probably']; // random responses

    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
    if (message.channel.permissionsFor(message.guild.me).has('EMBED_LINKS')) {
      const embed = new Discord.MessageEmbed() // create embed 
        .setAuthor('🎱 says...')
        .setColor('30d56b').addField('Question:', question)
        .addField('Answer:', replies[result])
        .setDescription('You bought this for 10 <:HPemerald:831588273796415489>')
      await message.channel.send(embed); // send embed message
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bars: -10,
          },
        }
      );

    }
  },
};