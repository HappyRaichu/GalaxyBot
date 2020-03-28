const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
    name: "dog",
    category: "images",
    description: "Generate and find dog pictures!",
    usage: "&dog",
    run: async (client, message, args) => {

        let msg = await message.channel.send("Generating...")

        fetch(`https://dog.ceo/api/breeds/image/random`).then(res => res.json()).then(body => {
            if(!body) return message.channel.send("Unable to fetch dog picture!");

            const dogembed = new MessageEmbed()
            .setAuthor(`${client.user.username} DOG PICTURES!`)
            .setColor("RANDOM")
            .setImage(body.message)
            .setTimestamp()
            .setFooter(client.user.username.toUpperCase(), client.user.displayAvatarURL);

            message.channel.send(dogembed);
            msg.delete();

        })
    }
}