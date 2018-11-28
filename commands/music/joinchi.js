const commando = require('discord.js-commando');

module.exports = class JoinChannelCommand extends commando.Command
{
    constructor(client)
    {
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the commander'
        });
    }

    async run(message, args)
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                message.member.voiceChannel.join()
                    .then(connection =>{
                        message.reply("Successfully Joined!");
                    })
            
            } 
        }
        else
        {
            message.reply("You must be in a voice channel to summon me!");
        }
    }
}