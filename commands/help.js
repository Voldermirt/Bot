const { SlashCommandBuilder, Collection } = require('discord.js');

const fs = require('node:fs');
const path = require('node:path');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Displays command information.'),

    async execute(interaction) {
        console.log('Help');
        await interaction.deferReply();
        var output = 'Commands:\n';

        console.log(__dirname);

        commands = new Collection()

        const commandsPath = './commands';
        const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));

        /*for (const file of commandFiles) {
            const filePath = path.join(commandsPath, file);
            const command = require(filePath);
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            if ('data' in command && 'execute' in command) {
                commands.set(command.data.name, command);
            }
        }

        for (const command of commands) { 
            if ('data' in command) {
                output += `\`\`\`${command.data.name}\`\`\` -> \`\`\`${command.data.description}\`\`\`\n`;
            }
        }*/

        await interaction.editReply(output);
    }
};