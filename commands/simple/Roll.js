const commando = require('discord.js-commando');

class DiceRollcommand extends commando.Command
{
    constructor(Client)
    {
        super(Client,{
            name: 'roll',
            group: 'simple',
            memberName: 'roll',
            description: 'rolls a 6 sided dice',

        })
    }
    async run(message, args)
    {
        var DiceRoll = Math.floor(Math.random() * 6) + 1;
        message.reply("Your dice landed on " + DiceRoll)
        
        }
    }
module.exports = DiceRollcommand;
