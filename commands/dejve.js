import playYoutube from "../utils/playYoutube";

module.exports = {
    name: 'dejve',
    description: 'Dejve',
    execute(msg, args) {
        playYoutube(msg,'https://www.youtube.com/watch?v=IpO7C0iTOu8');
    },
};