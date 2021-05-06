const {playYoutube} = require("../utils/playYoutube");


module.exports = {
    name: 'hurikan',
    description: 'Říkal jsi hurikán',
    execute(msg, args) {
        console.log("sposrals");
        playYoutube(msg, 'https://www.youtube.com/watch?v=2WhfVeHU6Uw')
    },
};
