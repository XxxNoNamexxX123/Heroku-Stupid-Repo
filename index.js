const discord = require("discord.js")
const bot = new discord.Client()

bot.on('ready', () => {
    bot.user.setActivity("Something....")
    console.log("Logged in successfully :D")
})

bot.on('message', message => {
    if(message.content === "!ping") {
        message.channel.send("pong!")
    }
})

bot.login("NjMyNjg2NzE5ODA3NzgyOTI1.XaJBbA.fmRUc3Yp_d2VtASgohTJCYpzu5U") //Your own token, thus one sadly won't work :P
