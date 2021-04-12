module.exports = {
    name: 'reset',
    description: 'reset',
    execute(msg, args) {
        if (args[0].length < 3) {
            msg.reply("nejdřív Account a Heslo a pak Char");
        }
        const axios = require('axios');
        axios.post('https://s6.zenmu.eu/api/player/login', {
                account: args[0],
                password: args[1]
            }
        ).then((response) => {
            const config = {
                headers: { Authorization: `Bearer ${response.data.token}` }
            };
            return axios.post('https://s6.zenmu.eu/api/character/reset', {Name: args[2]}, config); // using response.data
        }).then((response)=>{
            msg.reply(response.data.message);
        }).catch(console.error);


    },
};
