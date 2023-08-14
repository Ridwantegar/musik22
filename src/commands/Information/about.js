const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');

module.exports = {
  name: 'about',
  category: 'Information',
  aliases: ['botinfo'],
  description: 'See description about this project',
  args: false,
  usage: '',
  userPrams: [],
  botPrams: ['EMBED_LINKS'],
  owner: false,
  execute: async (message, args, client, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageButton().setLabel('Invite').setStyle('LINK').setURL(client.config.links.invite),
      new MessageButton()
        .setLabel('Bot Musik')
        .setStyle('LINK')
        .setURL('https://dsc.gg/nimetune'),
      new MessageButton().setLabel('Support').setStyle('LINK').setURL(client.config.links.support),
    );
    const mainPage = new MessageEmbed()
      .setAuthor({
        name: 'WaveMusic',
        iconURL:
          'https://cdn.discordapp.com/attachments/1134575796867051552/1136489066599301200/Nimekun.png',
      })
      .setThumbnail(
        'https://cdn.discordapp.com/attachments/1134575796867051552/1136489066599301200/Nimekun.png',
      )
      .setColor('#303236')
      .addFields([
        { name: 'Creator' , value:'[youtube husen](https://www.youtube.com/@husenaja)', inline: true },
        { name: 'deve' , value: '[keuta and husen]', inline: true },
        { name: 'server', value:'[Nimenation](https://discord.gg/nimenation)' , inline: true },
        { name: '\u200b' , value: `This is just a bot coded by Husen and Keita, don't forget to stop by on our YouTube [husen](https://www.youtube.com/@husenaja) and  [keita](https://www.youtube.com/channel/UCHbshEAL0Q6ZQQIUqBGUMoQ) ty` }
      ])
    return message.reply({ embeds: [mainPage], components: [row] });
  },
};