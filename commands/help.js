module.exports = {
    name: 'help',
    permissions: [],
    cooldown: 5,
    description: "Embed for commands!",
    execute(client, message, args, Discord) {
    const commanderror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())  
    .setColor('#30d56b')
    .setTitle('`Unknown command!`')
    .setDescription('Please use the +help command to view valid commands.') 
    const balhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`bal command`')
    .addFields(
    {name: 'Description', value: 'Check your balance in your wallet and bank by using this.'},
    {name: 'Usage', value: '`+bal`'})
    const beghelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`beg command`')
    .addFields(
    {name: 'Description', value: 'Beg for some <:HPemerald:831588273796415489> and hope you will get some.'},
    {name: 'Usage', value: '`+beg`'}) 
    const withdrawhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`withdraw command`')
    .addFields(
    {name: 'Description', value: 'Withdraw <:HPemerald:831588273796415489> from your bank into your wallet.'},
    {name: 'Usage', value: '`+withdraw <amount>`'},
    {name: 'Example', value: '`+withdraw 800`'})
    const deposithelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`deposit command`')
    .addFields(
    {name: 'Description', value: 'Deposit <:HPemerald:831588273796415489> from your wallet into your bank.'},
    {name: 'Usage', value: '`+deposit <amount>`'},
    {name: 'Example', value: '`+deposit 800`'}) 
    const searchhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`search command`')
    .addFields(
    {name: 'Description', value: 'Search a random location and get <:HPemerald:831588273796415489>'},
    {name: 'Usage', value: '`+search`'})
    const iconhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`icon command`')
    .addFields(
    {name: 'Description', value: 'Get the profile picture of a user.'},
    {name: 'Usage', value: '`+icon <user>`'},
    {name: 'Example', value: '`+icon @AppleSK#3293`'})
    const dailyhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`daily command`')
    .addFields(
    {name: 'Description', value: 'Get a daily reward of <:HPemerald:831588273796415489>'},
    {name: 'Usage', value: '`+daily`'})
    const hourlyhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`hourly command`')
    .addFields(
    {name: 'Description', value: 'Get an hourly reward of <:HPemerald:831588273796415489>'},
    {name: 'Usage', value: '`+hourly`'}) 
    const crimehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`crime command`')
    .addFields(
    {name: 'Description', value: 'Commit a crime and you will either get away with it or get arrested!'},
    {name: 'Usage', value: '`+crime`'}) 
    const gamblehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`gamble command`')
    .addFields(
    {name: 'Description', value: 'Gamble with any amount of <:HPemerald:831588273796415489> and see how much you get!'},
    {name: 'Usage', value: '`+gamble <amount>`'},
    {name: 'Example', value: '`+gamble 642`'})
    const workhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`work command`')
    .addFields(
    {name: 'Description', value: 'Go to work and get paid with some <:HPemerald:831588273796415489>'},
    {name: 'Usage', value: '`+work`'})
    const payhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`pay command`')
    .addFields(
    {name: 'Description', value: 'Pay a user!'},
    {name: 'Usage', value: '`+pay <user> <amount>`'},
    {name: 'Example', value: '`+pay @AppleSK#3293 1489`'})   
    const ballhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`8ball command`')
    .addFields(
    {name: 'Description', value: 'Ask the 🎱 a question and it will give you an answer for a small fine!'},
    {name: 'Usage', value: '`+8ball <question>`'},
    {name: 'Example', value: '`+8ball Am I cute?`'})  
    const banhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`ban command`')
    .addFields(
    {name: 'Description', value: 'Ban a user from the server.'},
    {name: 'Usage', value: '`+ban <user>`'})
    const kickhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`kick command`')
    .addFields(
    {name: 'Description', value: 'Kick a user from the server.'},
    {name: 'Usage', value: '`+kick <user>`'})   
    const clearhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`clear command`')
    .addFields(
    {name: 'Description', value: 'Clear up to a hundred messages at once!'},
    {name: 'Usage', value: '`+clear <amount>`'})
    const embedhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`embed command`')
    .addFields(
    {name: 'Description', value: 'Create an embed.'},
    {name: 'Usage', value: '`+embed <title-one word> <color-hex or caps> <description>`'},
    {name: 'Example', value: '`+embed Embed RED/FF0000 This is an example.`'})
    const mutehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`mute command`')
    .addFields(
    {name: 'Description', value: 'Mute a user!'},
    {name: 'Usage', value: '`+mute <user> <time-optional/in ms>`'},
    {name: 'Example', value: '`+mute @AppleSK#3293 100`'})
    const unmutehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`unmute command`')
    .addFields(
    {name: 'Description', value: 'Unmute a user!'},
    {name: 'Usage', value: '`+unmute <user>`'}) 
    const pollhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`poll command`')
    .addFields(
    {name: 'Description', value: 'Create a poll for voting.'},
    {name: 'Usage', value: '`+poll <content>`'})
    const sayhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`say command`')
    .addFields(
    {name: 'Description', value: 'Makes the bot say something!'},
    {name: 'Usage', value: '`+say <message>`'})
    const slowmodehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`slowmode command`')
    .addFields(
    {name: 'Description', value: 'Set the slowmode for a channel.'},
    {name: 'Usage', value: '`+slowmode <time-in ms>`'},
    {name: 'Example', value: '`+slowmode 200`'})       
    if(!args[0]) {
    const helpEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Help')
    .addFields(
    {name: 'Economy', value: 'Commands for the economy system!'},
    {name: '`+bal`          `+beg`', value: '+help bal               \u200e+help beg'},
    {name: '`+withdraw`          `+deposit`', value: '+help withdraw               \u200e+help deposit'},
    {name: '`+daily`          `+hourly`', value: '+help daily               \u200e+help hourly'},
    {name: '`+crime`          `+gamble`', value: '+help crime               \u200e+help gamble'},
    {name: '`+work`          `+pay`', value: '+help work               \u200e+help pay'},
    {name: '`+search`', value: '+help search'},
    {name: 'Moderation', value: 'Commands for moderation!'},
    {name: '`+ban`          `+kick`', value: '+help ban               \u200e+help kick'},
    {name: '`+clear`          `+embed`', value: '+help clear               \u200e+help embed'},
    {name: '`+mute`          `+unmute`', value: '+help mute               \u200e+help unmute'},
    {name: '`+poll`          `+slowmode`', value: '+help poll               \u200e+help slowmode'},
    {name: 'Fun', value: 'Commands that are just for fun!'},
    {name: '`+8ball`          `+icon`', value: '+help 8ball               \u200e+help icon'},
    {name: '`+say`', value: '+help say'})
    message.channel.send(helpEmbed)
    } else if(args[0] == 'bal') {
        message.channel.send(balhelp)
    } else if(args[0] == 'beg') {
        message.channel.send(beghelp)
    } else if(args[0] == 'withdraw') {
        message.channel.send(withdrawhelp)
    } else if(args[0] == 'deposit') {
        message.channel.send(deposithelp)
    } else if(args[0] == 'search') {
        message.channel.send(searchhelp)
    } else if(args[0] == 'icon') {
        message.channel.send(iconhelp)
    } else if(args[0] == 'daily') {
        message.channel.send(dailyhelp)
    } else if(args[0] == 'hourly') {
        message.channel.send(hourlyhelp)
    } else if(args[0] == 'crime') {
        message.channel.send(crimehelp)
    } else if(args[0] == 'gamble') {
        message.channel.send(gamblehelp)
    } else if(args[0] == 'work') {
        message.channel.send(workhelp)
    } else if(args[0] == 'pay') {
        message.channel.send(payhelp)
    } else if(args[0] == '8ball') {
        message.channel.send(ballhelp)
    } else if(args[0] == 'clear') {
        message.channel.send(clearhelp)
    } else if(args[0] == 'embed') {
        message.channel.send(embedhelp)
    } else if(args[0] == 'mute') {
        message.channel.send(mutehelp)
    } else if(args[0] == 'unmute') {
        message.channel.send(unmutehelp)
    } else if(args[0] == 'poll') {
        message.channel.send(pollhelp)
    } else if(args[0] == 'say') {
        message.channel.send(sayhelp)
    } else if(args[0] == 'ban') {
        message.channel.send(banhelp)
    } else if(args[0] == 'kick') {
        message.channel.send(kickhelp)
    } else if(args[0] == 'slowmode') {
        message.channel.send(slowmodehelp)
    } else {
        message.channel.send(commanderror)
    }
    }  
    } 