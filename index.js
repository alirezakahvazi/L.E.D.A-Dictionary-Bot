const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

//=====================================================================================================

require('dotenv').config()
// Import relevant classes from discord.js
const {   MessageEmbed, Client, Intents } = require('discord.js');
// Instantiate a new client with some necessary parameters.
const client = new Client(
    { intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] }
);
// Notify progress
client.on('ready', function(e){
    console.log(`Logged in as ${client.user.tag}!`)
})
// Authenticate
client.login(process.env.DISCORD_TOKEN)

client.on('message',
    function(msg){
        var msgc = msg.content
        var bool = false
        var channelid = msg.channelId
        var channel = client.channels.cache.get(channelid)
        if(msg.content.includes("کلاس") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("کلاس","کالاس")
        }
        if(msg.content.includes("تشکر") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("تشکر","تشکیور")
        }
        if(msg.content.includes("خواهش") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("خواهش","خوایوش")
        }
        if(msg.content.includes("نمیدونم") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("نمیدونم","نمد")
        }
        if(msg.content.includes("میدونم") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("میدونم","مودونم")
            
        }
        if(msg.content.includes("آفرین") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("آفرین","آفنر")
            
        }
        if(msg.content.includes("نوشابه") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("نوشابه","نوشابا")
            
        }
        if(msg.content.includes("امتحان") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("امتحان","ایمتیحان")
            
        }
        if(msg.content.includes("بخون") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("بخون","بهون")
            
        }
        if(msg.content.includes("موفق") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("موفق","موبفق")
            
        }
        if(msg.content.includes("بخوابم") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("بخوابم","بخبسم")
            
        }
        if(msg.content.includes("کن") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("کن","کون")
            
        }
        if(msg.content.includes("کجا") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("کجا","کوجا")
            
        }
        if(msg.content.includes("تمام") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("تمام","تامام")
            
        }
        if(msg.content.includes("جالب") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("جالب","جالف")
            
        }
        if(msg.content.includes("مطالب طنز") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("مطالب طنز","متالب تنظ")
            
        }
        if(msg.content.includes("بهتر") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("بهتر","بیهتر")
            
        }
        if(msg.content.includes("نخوندم") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("نخوندم","نخیندم")
            
        }
        if(msg.content.includes("بفرما") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("بفرما","بیفرما")
            
        }
        if(msg.content.includes("حق") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("حق","حاق")
            
        }
        if(msg.content.includes("جناب") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("جناب","ژناب")
        }
	if(msg.content.includes("مطالب") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("مطالب","متالب")
        }
	if(msg.content.includes("طنز") && !msg.author.bot){
            var channelid = msg.channelId
            bool = true
            var channel = client.channels.cache.get(channelid)
            msgc = msgc.replace("طنز","تنز")
        }
        if(bool === true) {
            embedMS()
            msg.delete
        }
        function embedMS() {
            const exampleEmbed = new MessageEmbed()
            .setAuthor({ name: msg.author.username, iconURL: msg.author.displayAvatarURL()})
            .addFields(
                { name: "تصحیح توسط بات بر اساس لغت نامه:", value: msgc }
            )
            msg.reply({ embeds: [exampleEmbed] } );
        }
    }
)
