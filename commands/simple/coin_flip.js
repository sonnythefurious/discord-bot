const commando = require('discord.js-commando');

class Coinflipcommand extends commando.Command
{
    constructor(Client)
    {
        super(Client,{
            name: 'flip',
            group: 'simple',
            memberName: 'flip',
            description: 'flips a coin either heads or tails',

        })
    }
    async run(message, args)
    {
        var chance = Math.floor(Math.random() * 2);
        if(chance == 0){
          message.reply('your coin landed on heads')  
        }
        else{
            message.reply("your coin landed on tails")
        }
    }
}
module.exports = Coinflipcommand;
