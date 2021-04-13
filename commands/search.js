const PROFILE_MODEL = require("../models/profileSchema");

module.exports = {
  name: "search",
  permissions: [],
  cooldown: 30,
  description: "Choose your search location and have a chance at some bars!",
  execute(client, message, args, Discord, profileData) {
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

    let chosenLocations = LOCATIONS.sort(() => Math.random() - Math.random()).slice(0, 3);

    const RANDOM_NUMBER = Math.floor(Math.random() * (150 - 100 + 1)) + 20;

    const FILTER = (m) => {
      return chosenLocations.some((answer) => answer.toLowerCase() === m.content.toLowerCase()) && m.author.id === message.author.id;
    };

    const COLLECTOR = message.channel.createMessageCollector(FILTER, { max: 1, time: 15000 });

    COLLECTOR.on("collect", async (m) => {
      const EMBED = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setColor("#30d56b'")
        .setTitle(`${message.author.username} searched a ${m.content}!`)
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
        return message.channel.send(
          `<@${message.author.id}>, there was ${RANDOM_NUMBER.toString().replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          )}<:HPemerald:831588273796415489>hidden inside the ${chosenLocations[0]}!`
        );
      }
    });
    const SEARCHEMBED = new Discord.MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setColor("#30d56b'")
    .setTitle('Where would you like to search?')
    .setDescription(`\nType the location in this channel.\n\`${chosenLocations.join("` `")}\``)

    message.channel.send(SEARCHEMBED);
  },
};