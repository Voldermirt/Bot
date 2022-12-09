const { SlashCommandBuilder } = require('discord.js');

var jokes = [
    "What are some reasons you should move to Switzerland?|Well, the flag is a big plus!",
    "I was wondering why the brick was getting bigger|And then it hit me.",
    "Do you want to know a secret?|All of these jokes suck.",
    "Egg|Egg",
    "What do you get when you combine a rhetorical question and a joke?|   ...   ",
    "I should get a new vacuum cleaner.|My current one *sucks*.",
    "My new thesaurus is terrible.|Not only that, but it's also terrible.",
    "Did you know french fries aren't french?|They're made in Greece.",
    "I wanted to make a chemistry joke...|... but all the good ones argon.",
    "You know what you need?|🧱🧱🧱"
];

module.exports = {
    data: new SlashCommandBuilder()
    .setName('joke')
    .setDescription('Tells a joke. The jokes aren\'t very funny.'),

    async execute(interaction) {
        console.log('Joke');
        var joke = jokes[(Math.floor(Math.random() * jokes.length))].split('|');
        await interaction.reply(`${joke[0]}\n||${joke[1]}||`);
    },
};