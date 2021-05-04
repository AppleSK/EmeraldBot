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
    .setTitle('Wrong usage!')
    .setDescription('Please use the command like this `+8ball <question>`') 
    if (!args[0]) return message.channel.send(commanderror); // return if no question is commenced
    const replies = ['Yes.', 'No.', 'Never.', 'Definitely.', 'Ask again later.', 'Probably.', 'A hundred percent!', 'That is a tough question, I would say yes.', , 'That is a tough question, I would say no.', 'I have no idea, here, take some <:HPemerald:831588273796415489>', 'Oh yeah.', 'Definetly not!', 'Well yes, but actually no.', 'Very doubtful.', 'Without a doubt.', 'Better not tell you now.']; // random responses
    const result = Math.floor(Math.random() * replies.length); // Get a random respons for the array
    const question = args.join(' '); // join the args(Array<string>) to a question string
    // check permissions for embed
      const embed = new Discord.MessageEmbed() // create embed 
      .setAuthor(message.author.tag, message.author.avatarURL())  
        .setColor('30d56b').addField(`**Question**`, question)
        .addField(`**Answer**`, replies[result])
        .setTitle(`The ball responds...`)
        .setTimestamp()
      await message.channel.send(embed); // send embed message
    }
  }