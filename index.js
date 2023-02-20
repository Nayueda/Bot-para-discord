const { Client, Events, GatewayIntentBits } = require('discord.js');

//dotenv
const dotenv = require ('dotenv');
dotenv.config();

// process.env é onde vai pegar as variáveis que sao constantes do arquivo env
const{ TOKEN, CLIENT_ID, GUILD_ID } = process.env;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(TOKEN);