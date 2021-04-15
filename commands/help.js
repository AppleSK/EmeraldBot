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
    if(!args[0]) {
    const helpEmbed = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor('#30d56b')
    .setTitle('`Help`')
    .addFields(
    {name: '`bal`', value: 'help bal'},
    {name: '`beg`', value: 'help beg'},
    {name: '`withdraw`', value: 'help withdraw'},
    {name: '`deposit`', value: 'help deposit'},
    {name: '`search`', value: 'help search'},
    {name: '`icon`', value: 'help icon'},
    {name: '`daily`', value: 'help daily'},
    {name: '`hourly`', value: 'help hourly'},
    {name: '`crime`', value: 'help crime'},
    {name: '`gamble`', value: 'help gamble'},
    {name: '`work`', value: 'help work'},
    {name: '`pay`', value: 'help pay'},
    {name: '`8ball`', value: 'help 8ball'}, )
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
    } else {
        message.channel.send(commanderror)
    }
    }  
    } 