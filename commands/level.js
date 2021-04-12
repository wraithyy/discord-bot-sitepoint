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
                if(args[1] && args[1]=='nahlas'){
                tts(msg, response.data.name+' má level '+response.data.cLevel+' a '+response.data.resets+ ' resů a jeho máma váží'+(Math.floor(Math.random() * (500 - 200) + 200))+' kilo')
                }
            }).catch(console.log);

    },
};

async function tts(message, text) {
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
    const googleTTS = require('google-tts-api'); // CommonJS
    var connection =  await voiceChannel.join()
    const intoStream = require('into-stream');
    const url = googleTTS.getAudioUrl(text, {
        lang: 'cs',
        slow: false,
        host: 'https://translate.google.com',
        timeout: 10000,
    })

    const dispatcher =  connection.play(url,{ volume: 1 }).on("finish", () => {
        voiceChannel.leave()})


}