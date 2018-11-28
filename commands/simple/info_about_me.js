const commando = require('discord.js-commando');
const discord = require("discord.js");

class InfoAboutMecommand extends commando.Command
{
    constructor(Client)
    {
        super(Client,{
            name: 'info',
            group: 'simple',
            memberName: 'info',
            description: 'info about me',

        });
    }
    async run(message, args)
    {
        var MyInfo = new discord.RichEmbed()
            .addField("about me djfjffjjjfjjfjffjfjfj", true)
            .addField("why tho", true)
            .setDescription("hello, my name is jfdjg;fdj")
            .setColor("0xff0000")
            .setThumbnail(message.author.avatarURL)
            .setFooter("thanks for reading this :D")
            //hi

        message.channel.sendEmbed(MyInfo);
    }
}
module.exports = InfoAboutMecommand;
