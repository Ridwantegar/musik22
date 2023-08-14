require("dotenv").config();

module.exports = {
  token: process.env.TOKEN || 'MTEzOTg4Nzc2Mzc2OTAwMDAwNg.GrdIx1.qIaUNORMymiD0foz5OMIneoTJaZ39jB-09ieOo', // your discord bot token
  prefix: process.env.PREFIX || 'KTL!', // bot prefix
  ownerID: process.env.OWNERID?.split(',') || ['1125031170422345738','337663518952390656',``], //your discord id
  SpotifyID: process.env.SPOTIFYID || '2d340b0e4f6143d0b908f7061a2474d7', // spotify client id
  SpotifySecret: process.env.SPOTIFYSECRET || 'adb0862e14a7403ab904b360a33ca49a', // spotify client secret
  mongourl: process.env.MONGO_URI || 'mongodb+srv://tegarridwan82:tegargajah@oke.n95ygua.mongodb.net/?retryWrites=true&w=majority', // MongoDb URL
  embedColor: process.env.COlOR || '#3366ff', // embed colour
  logs: process.env.LOGS || '1134575796867051552', // Discord channel id 
  links: {
    support: process.env.SUPPORT || 'https://discord.gg/nimenation',
    invite: process.env.INVITE || 'https://dsc.gg/visualcss',
    vote: process.env.VOTE || 'https://www.youtube.com/@husenaja',
    bg: process.env.BG || 'https://media.discordapp.net/attachments/1134575796867051552/1136489066599301200/Nimekun.png'
  },

  nodes: [
    {
      url: process.env.NODE_URL || 'lava.link:80',
      name: process.env.NODE_NAME || 'Main',
      auth: process.env.NODE_AUTH || 'youshallnotpass',
      secure: parseBoolean(process.env.NODE_SECURE || 'false'),
    },
  ],
};

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
