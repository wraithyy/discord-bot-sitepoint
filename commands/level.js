module.exports = {
    name: 'level',
    description: 'Level',
    execute(msg, args) {
        if(!args[0]){
            msg.reply("zadej nick omegalul!");
        }
        const axios = require('axios');
        axios.get('https://s6.zenmu.eu/api/character/'+args[0]+'/characterDetail')
            .then(response => {
                msg.channel.send(response.data.name+': '+response.data.cLevel+' ('+response.data.resets+') -- '+response.data.className);
            })
            .catch(error => {
                msg.channel.send(error)
            });
    },
};
