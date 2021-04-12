module.exports = {
    name: 'level',
    description: 'Level',
    execute(msg, args) {
        const axios = require('axios');
        axios.get('https://s6.zenmu.eu/api/character/'+args[0]+'/characterDetail')
            .then(response => {
                msg.channel.send(response.data.name+': '+response.data.cLevel+' ('+response.data.resets+') -- '+response.data.className);
            })
            .catch(error => {
                msg.channel.send(error)
            });
        msg.reply('pong');
        msg.channel.send('pong');
    },
};
