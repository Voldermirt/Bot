const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('corbin-bday')
    .setDescription('Don\'t use until Corbin\'s birthday!'),

    async execute(interaction) {
        console.log('Happy birthday Corbin!');
        await interaction.reply('🎉🥳🎉');
        var r = await interaction.fetchReply();
        await wait(500);
        await r.channel.send('🎉 Happy birthday, <@588172226998566912>!!! 🎉');
    }
};