const Discord = require('discord.js')

module.exports = {
    name: "embed",
    permissions: [],
    cooldown: 10,
    description: "Makes an embed!",

    async execute(client, message, args, Discord){
        const title = args[0] // args[0] is the first word or number after the command name
        const color = args[1] 
        const description = args.slice(2).join(" ") // args.slice(2).join(" ") means we're taking all the arguments including and after the second argument. An argument is just a word or number.
        const error = new Discord.MessageEmbed() 
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor('30d56b')
        .setTitle('Wrong usage!')
        .setDescription('Please use the command like this `+embed <title-one word> <color-hex or caps> <description>`') 

        if(!title) return message.channel.send(error) // ! means no, so if there's no title, return and send the error embed
        if(!color) return message.channel.send(error)
        if(!description) return message.channel.send(error)
        

        const embed = new Discord.MessageEmbed()
        .setTitle(`${title}`)
        .setColor(color)
        .setDescription(description)
        message.delete() // this deletes the command

        message.channel.send(embed)
    }
}