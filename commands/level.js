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
                tts(msg, response.data.name+' má level '+response.data.cLevel+' a '+response.data.resets+ ' resů a jeho máma váží'+(Math.random() * (500 - 200) + 200)+' kilo')
                }
            })
            .catch(error => {
                msg.channel.send("Asi to neexistuje")
            });
    },
};
function tts(message, text) {
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
    const say = require('say');
    const FS = require('fs');
    say.getInstalledVoices(console.log)
    if (!FS.existsSync('./temp')){
        FS.mkdirSync('./temp');
    }
    const timestamp = new Date().getTime();
    const soundPath = `./temp/${timestamp}.wav`;
    say.export(text, null, 1, soundPath, (err) => {
        if (err) {
            console.error(err);
            return;
        }else{
            voiceChannel.join().then((connection) => {
                connection.play(soundPath).on('end', () => {
                    connection.disconnect();
                    FS.unlinkSync(soundPath);
                }).on('error', (err) => {
                    console.error(err);
                    connection.disconnect();
                    FS.unlinkSync(soundPath);
                });
            }).catch((err) => {
                console.error(err);
            });
        }
    });
}