module.exports = {
    name: 'dejve',
    description: 'Dejve',
    execute(msg, args) {
        play(msg);
    },
};

async function play(message) {
    const ytdl = require("ytdl-core");

    if (!message.member.voice.channel)
        return message.channel.send(
            "Musíš být ve Voice channelu lul!"
        );
    const voiceChannel = message.member.voice.channel;
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
        return message.channel.send(
            "I need the permissions to join and speak in your voice channel!"
        );
    }
    console.log("hraju");
    const song = {url:'https://www.youtube.com/watch?v=IpO7C0iTOu8'};
    var connection = await voiceChannel.join();
    const dispatcher =  connection.play(ytdl(song.url,){ volume: 2 }).on("finish", () => {
        voiceChannel.leave()
    })

}

