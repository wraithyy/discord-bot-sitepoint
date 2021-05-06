import playYoutube from "../utils/playYoutube";

module.exports = {
    name: 'sposrals',
    description: 'Tos posral',
    execute(msg, args) {
        console.log("sposrals");
        playYoutube(msg, 'https://www.youtube.com/watch?v=2WhfVeHU6Uw')
    },
};
