const tmi = require('tmi.js')

const options = {
  options:{
    debug:true
  },
  connection:{
    reconnect:true
  },
  identity:{
    username:'', //tu nombre de usuario
    password:'' // oauth proveniente de https://twitchapps.com/tmi/
  },
  channels:[
    ''
  ] //nombre de los canales a los cuales se afecta el bot
}

const client = new tmi.client(options)

client.connect()

client.on('connected',(address, port)=> {
  client.action('saitaM__',`Hello Gamer! ${address}:${port}`)
})

client.on('chat', (target, ctx, message, self) => {
  if(self) return; // si el mensaje viene desde el bot

  const commandName = message.trim().toLowerCase()

  if(commandName == 'hello')
    client.say(target, `Welcome ${ctx.username}!!`)

  
  if(commandName == '!game')
    client.say(target, `El pibe esta jugando, no jodas`)
  
  if(commandName == '!dice'){
    let winner = rollDice()
    client.say(target, `Y el numero de la suerte es... ${winner}`)
  }

})



function rollDice(){
  const sides = 6
  return Math.floor(Math.random() * sides) +1
}
