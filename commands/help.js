module.exports = {
    name: 'help',
    permissions: [],
    cooldown: 5,
    description: "Embed for commands!",
    execute(client, message, args, Discord) {
    const commanderror = new Discord.MessageEmbed() 
    .setAuthor(message.author.tag, message.author.avatarURL())  
    .setColor('#30d56b')
    .setTitle('Unknown command!')
    .setDescription('Please use the +help command to view valid commands.') 
    const balhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Balance command')
    .addFields(
    {name: 'Description', value: 'Check the balance in your wallet and bank by using this.'},
    {name: 'Usage', value: '`+bal`'})
    const beghelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Beg command')
    .addFields(
    {name: 'Description', value: 'Beg for some<a:EmeraldbotCurrency:838846098847039599> and hope you will get some.'},
    {name: 'Usage', value: '`+beg`'}) 
    const withdrawhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Withdraw command')
    .addFields(
    {name: 'Description', value: 'Withdraw<a:EmeraldbotCurrency:838846098847039599> from your bank into your wallet.'},
    {name: 'Usage', value: '`+withdraw <amount>`'},
    {name: 'Example', value: '`+withdraw 800`'})
    const deposithelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Deposit command')
    .addFields(
    {name: 'Description', value: 'Deposit<a:EmeraldbotCurrency:838846098847039599> from your wallet into your bank.'},
    {name: 'Usage', value: '`+deposit <amount>`'},
    {name: 'Example', value: '`+deposit 800`'}) 
    const searchhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Search command')
    .addFields(
    {name: 'Description', value: 'Search a random location and get<a:EmeraldbotCurrency:838846098847039599>'},
    {name: 'Usage', value: '`+search`'})
    const iconhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Icon command')
    .addFields(
    {name: 'Description', value: 'Get the profile picture of a user.'},
    {name: 'Usage', value: '`+icon <user>`'},
    {name: 'Example', value: '`+icon @AppleSK#3293`'})
    const dailyhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Daily command')
    .addFields(
    {name: 'Description', value: 'Get a daily reward of<a:EmeraldbotCurrency:838846098847039599>'},
    {name: 'Usage', value: '`+daily`'})
    const hourlyhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Hourly command')
    .addFields(
    {name: 'Description', value: 'Get an hourly reward of<a:EmeraldbotCurrency:838846098847039599>'},
    {name: 'Usage', value: '`+hourly`'}) 
    const crimehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Crime command')
    .addFields(
    {name: 'Description', value: 'Commit a crime and you will either get away with it or get arrested!'},
    {name: 'Usage', value: '`+crime`'}) 
    const gamblehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Gamble command')
    .addFields(
    {name: 'Description', value: 'Gamble with any amount of<a:EmeraldbotCurrency:838846098847039599> and see how much you get!'},
    {name: 'Usage', value: '`+gamble <amount>`'},
    {name: 'Example', value: '`+gamble 642`'})
    const workhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Work command')
    .addFields(
    {name: 'Description', value: 'Go to work and get paid with some<a:EmeraldbotCurrency:838846098847039599>'},
    {name: 'Usage', value: '`+work`'})
    const payhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Pay command')
    .addFields(
    {name: 'Description', value: 'Pay a user some<a:EmeraldbotCurrency:838846098847039599>!'},
    {name: 'Usage', value: '`+pay <user> <amount>`'},
    {name: 'Example', value: '`+pay @AppleSK#3293 1489`'})   
    const ballhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('8ball command')
    .addFields(
    {name: 'Description', value: 'Ask the 8-ball a question and it will give you an answer'},
    {name: 'Usage', value: '`+8ball <question>`'},
    {name: 'Example', value: '`+8ball Am I cute?`'})  
    const banhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Ban command')
    .addFields(
    {name: 'Description', value: 'Ban a user from the server.'},
    {name: 'Usage', value: '`+ban <user>`'})
    const kickhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Kick command')
    .addFields(
    {name: 'Description', value: 'Kick a user from the server.'},
    {name: 'Usage', value: '`+kick <user>`'})   
    const clearhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Clear command')
    .addFields(
    {name: 'Description', value: 'Clear up to a hundred messages at once!'},
    {name: 'Usage', value: '`+clear <amount>`'})
    const embedhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Embed command')
    .addFields(
    {name: 'Description', value: 'Create an embed.'},
    {name: 'Usage', value: '`+embed <title-one word> <color-hex or caps> <description>`'},
    {name: 'Example', value: '`+embed Embed RED/FF0000 This is an example.`'})
    const mutehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Mute command')
    .addFields(
    {name: 'Description', value: 'Mute a user!'},
    {name: 'Usage', value: '`+mute <user> <time-optional/in ms>`'},
    {name: 'Example', value: '`+mute @AppleSK#3293 100`'})
    const unmutehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Unmute command')
    .addFields(
    {name: 'Description', value: 'Unmute a user!'},
    {name: 'Usage', value: '`+unmute <user>`'}) 
    const pollhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Poll command')
    .addFields(
    {name: 'Description', value: 'Create a poll for voting.'},
    {name: 'Usage', value: '`+poll <content>`'})
    const sayhelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Say command')
    .addFields(
    {name: 'Description', value: 'Makes the bot say something!'},
    {name: 'Usage', value: '`+say <message>`'})
    const slowmodehelp = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('Slowmode command')
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
    {name: '**+bal**          **+beg**', value: '+help bal               \u200e+help beg'},
    {name: '**+withdraw**          **+deposit**', value: '+help withdraw               \u200e+help deposit'},
    {name: '**+daily**          **+hourly**', value: '+help daily               \u200e+help hourly'},
    {name: '**+crime**          **+gamble**', value: '+help crime               \u200e+help gamble'},
    {name: '**+work**          **+pay**', value: '+help work               \u200e+help pay'},
    {name: '**+search**', value: '+help search'},
    {name: 'Moderation', value: 'Commands for moderation!'},
    {name: '**+ban**          **+kick**', value: '+help ban               \u200e+help kick'},
    {name: '**+clear**          **+embed**', value: '+help clear               \u200e+help embed'},
    {name: '**+mute**          **+unmute**', value: '+help mute               \u200e+help unmute'},
    {name: '**+poll**          **+slowmode**', value: '+help poll               \u200e+help slowmode'},
    {name: 'Fun', value: 'Commands that are just for fun!'},
    {name: '**+8ball**          **+icon**', value: '+help 8ball               \u200e+help icon'},
    {name: '**+say**', value: '+help say'},
    {name: 'Support', value: `If you need help feel free to join the official Emeraldbot Support server https://discord.gg/c3cxbNyDa8 !`})
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