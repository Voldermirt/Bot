const { SlashCommandBuilder } = require('discord.js');

const conversion = require('./runes.json');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('rune')
    .setDescription('Translates a message into Elder Futhark runes, character-by-character.')
    .addStringOption(option => 
        option.setName('message')
            .setDescription('The mesage to translate')
            .setRequired(true)),

    async execute(interaction) {
        console.log('Translating into runes')
        await interaction.deferReply();
        var result = '';

        var msg = interaction.options.getString('message');

        for (var i = 0; i < msg.length; i++) {
            const c = msg[i].toLowerCase();

            if (c === 't') {
                if (msg[i + 1].toLowerCase() == 'h') {
                    result += conversion['th'];
                    i++;
                    continue;
                }
            }

            if (c === 'n') {
                if (msg[i + 1].toLowerCase() == 'g') {
                    result += conversion['ng'];
                    i++;
                    continue;
                }
            }

            if (c in conversion) {
                result += conversion[c];
            } else {
                result += c;
            }

        }

        await interaction.editReply(`"${msg}" in runes is:\n${result}`);
    }
};