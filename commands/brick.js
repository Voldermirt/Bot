const { SlashCommandBuilder } = require('discord.js');
const wait = require('node:timers/promises').setTimeout;

module.exports = {
    data: new SlashCommandBuilder()
    .setName('brick')
    .setDescription('Hurl a brick at someone. Good for friends and foes alike!')
    .addUserOption(option => 
        option.setName('target')
            .setDescription('The target of your violence')
            .setRequired(true)),

    async execute(interaction) {
        console.log('Brick');
        const member = await interaction.options.getMember('target');

        if (member.presence.clientStatus.desktop != 'dnd' && member.presence.clientStatus.mobile != 'dnd') {
            await interaction.reply(`-*WARNING*- Launching brick at <@${member.id}>! -*WARNING*-`);
        } else {
            await interaction.reply(`-*WARNING*- Launching brick at @${member.nickname}! -*WARNING*-`);
        }

        var r = await interaction.fetchReply();
        var msg = await r.channel.send('In *3*...');
        await wait(1000);
        await msg.edit('In *2*...');
        await wait(1000);
        await msg.edit('In *1*...');
        await wait(1000);
        await msg.edit('```diff\n-FIRE-\n```');
        await msg.channel.send({files: ['./images/brick.gif']})
    }
};