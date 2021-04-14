const PROFILE_MODEL = require("../models/profileSchema");

module.exports = {
  name: "search",
  permissions: ["SEND_MESSAGES"],
  cooldown: 13,
  description: "Choose your search location and have a chance at some emeralds!",
 async execute(client, message, args, Discord, profileData) {
    const LOCATIONS = [
      "car",
      "sock",
      "milk",
      "wallet",
      "box",
      "pocket",
      "bus",
      "gutters",
      "park",
      "train",
      "lounge",
      "keyboard",
      "picnic",
      "bathroom",
      "bed",
      "sofa",
      "backpack",
      "laptop",
      "oculus",
      "shirt",
    ];

    const deathrandom = Math.floor(Math.random() * 2)
    const bankrupt = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("#30d56b")
    .setTitle(`Search`)
    .setDescription(`You died while searching and lost all your<:HPemerald:831588273796415489>`)

  if (deathrandom == 1) return message.channel.send(bankrupt)
    await PROFILE_MODEL.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $set: {
          bars: 0,
        },
      },
    ); if (deathrandom !== 1) {
    let chosenLocations = LOCATIONS.sort(() => Math.random() - Math.random()).slice(0, 3);

    const RANDOM_NUMBER = Math.floor(Math.random() * (200 - 100 + 1)) + 100;

    const FILTER = (m) => {
      return chosenLocations.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor("#30d56b")
        .setTitle(`Search`)
        .setDescription(`You found ${RANDOM_NUMBER.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}<:HPemerald:831588273796415489>`)

      await PROFILE_MODEL.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            bars: RANDOM_NUMBER,
          },
        }
      );

      message.channel.send(EMBED);
    });

    COLLECTOR.on("end", (collected) => {
      if (collected.size == 0) {
        return
      }
    });
    const SEARCHEMBED = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("#30d56b'")
    .setTitle('Where would you like to search?')
    .setDescription(`\nType the location in this channel.\n\`${chosenLocations.join("` `")}\``)

    message.channel.send(SEARCHEMBED)
  }
}
}
