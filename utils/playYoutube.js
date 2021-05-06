async function play(message, link) {
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
    const song = {url:link};
    var connection = await voiceChannel.join();
    const dispatcher =  connection.play(ytdl(song.url,),{ volume: 2 }).on("finish", () => {
        voiceChannel.leave()
    })

}
export default play;