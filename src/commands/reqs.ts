import { Message, TextChannel } from "discord.js";
import Client from "../structures/Client";
import channels from "../data/calm/channels.json";

module.exports = {
  name: "reqs",
  description: "Displays current guild requirements",
  category: "Information",
  run: async function run(client: Client, message: Message) {
    let infoChannel: TextChannel;
      if (message.guild.id === '501501905508237312'){
        infoChannel = message.guild.channels.cache.find((chan) => chan.id === channels.UPON_JOINING.INFO.id) as TextChannel;
      } else {
        infoChannel = message.guild.channels.cache.find((chan) => chan.name === channels.UPON_JOINING.INFO.name) as TextChannel;
      }
      const send =
      `For all the requirements please head to ${infoChannel} as they are stated there\n\n` +
      'They are also stated on our forums thread & on our application!\n' +
      'Forums thread: <https://hypixel.net/threads/3013892/>\n' +
      'Application: <https://forms.gle/hdwJWdFsgiXdiCW58>';
      try {
        message.channel.send(send);
      } catch {
        message.channel.send("Uh oh! We could not find the info channel!");
      }
  },
};
