const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('speak')
    .setDescription('Speak.')
    .addStringOption(option => 
        option.setName('message')
            .setDescription('The words to speak.')
            .setRequired(true)),

    async execute(interaction) {
        console.log('Speaking...')
        const message = interaction.options.getString('message');
        await interaction.reply({ content: 'Sending...', ephemeral: true });

        const r = await interaction.fetchReply();
        await r.channel.send(message);
    }
};