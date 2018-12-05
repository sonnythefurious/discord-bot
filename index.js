const commando = require("discord.js-commando");
const bot = new commando.Client();
const TOKEN = "NDk1NjY2NDQxMzc5NjQzNDI1.Dt-fiA.FKsuqZFUbmt0Dcr0ex2LdQcTsLM"

bot.registry.registerGroup('simple', 'simple');
bot.registry.registerGroup('music', 'music');
bot.registry.registerCommandsIn(__dirname + "/commands");
bot.registry.registerDefaults();

bot.on("message", function(message){
    if(message.content == "hi")
    {
        message.reply("hi")
    }
    })

    bot.on("message", function(message){
        if(message.content == "Hello")
        {
            message.reply("hi")
        }
        })

        bot.on("message", function(message){
            if(message.content == "HELLO")
            {
                message.reply("hi")
            }
            })


bot.on("message", function(message){
    if(message.content == "hello")
    {
        message.reply("hi")
    }
    })
bot.on("message", function(message)
    {
    if(message.content == "anime")
    {
        message.reply("OOOOOF")
    }
    })
    bot.on("message", function(message)
    {
        if(message.content == "never gonna give you up never going to let you down")
    {
            message.reply("never going to turn around and harm you... oh sorry")
    }
    })
    bot.on("message", function(message)
    {
        if(message.content == "pls meme")
    {
            message.reply("https://www.tenor.co/MQly.gif ")
    }
    }) 

    bot.on("message", function(message)
    {
        if(message.content == "the bot has some thing to say to you")
    {
            message.reply("YEA", message.author, '.')
    }
    }) 
    bot.on("guildMemberAdd", function(member)
    {
        member.send("Welcome to the server");
        if(message.content == 'hey you')
        {
            message.send("yes what did you want sir"); 
        }
    });
    bot.on('message', function(message){
        if(message.content == "Hello")
        {
            message.reply("hi")
        }
        })





bot.login(TOKEN);