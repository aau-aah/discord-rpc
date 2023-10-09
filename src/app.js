const clientId = "1160746862337347695";
const discordRPC = require("discord-rpc");
const RPC = new discordRPC.Client({ transport: "ipc" });

discordRPC.register(clientId);

async function setActivity(params) {
  if (!RPC) return;
  RPC.setActivity({
    details: "Playing life in the world.",
    state: "Chapter (2027 of 93874283)",
    startTimestamp: new Date(Date.now() - 10000000 * 1500),
    largeImageKey: "https://media.tenor.com/pReb4zVx7eEAAAAC/emi-emilia.gif",
    largeImageText: "Nothing",
    smallImageKey:
      "https://media.tenor.com/2KCIqz9s1MYAAAAC/emilia-re-zero.gif",
    buttons: [
      {
        label: "Instagram",
        url: "https://www.instagram.com/aau.aah/",
      },
      {
        label: "Website",
        url: "https://aauaah.github.io/",
      },
    ],
  });
}

RPC.on("ready", () => {
  setActivity();
  setInterval(() => {
    setActivity();
  }, 15 * 1000);
});

RPC.login({ clientId }).catch(console.error);
