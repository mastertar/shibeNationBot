const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Starting to boot the bot!"));

app.listen(process.env.PORT, () =>
  console.log("Example app listening on port")
);
const { count } = require('console');
const { sign } = require('crypto');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(`help | ThyMaster555`, { type: 'PLAYING' });
});

client.on('message', msg => {

  //Github: https://github.com/JesseBoogaard/CaDoBiBot-discord/commit/d028302d304f96281be7aa55602b22580ee8685f
  // Shibe API: https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true
  // Cat API: http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true
  // Bird API: http://shibe.online/api/birds?count=[1]&urls=true&httpsUrls=true
  // Dog API: https://dog.ceo/api/breeds/image/random
  //HowToUse: https://hackersandslackers.com/making-api-requests-with-nodejs/
  //https://some-random-api.ml/

  const fetch = require('node-fetch');
  if (msg.content == 'shibe' || msg.content == 'Shibe') {
    fetch('https://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'cat' || msg.content == 'Cat' || msg.content == 'cats' || msg.content == 'Cats') {
    fetch('http://shibe.online/api/cats?count=1&urls=true&httpsUrls=true')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'panda' || msg.content == 'Panda' || msg.content == 'pandas' || msg.content == 'Pandas') {
    fetch('https://some-random-api.ml/img/panda')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['link']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
    if (msg.content == 'redpanda' || msg.content == 'Redpanda' || msg.content == 'redpandas' || msg.content == 'Redpandas') {
    fetch('https://some-random-api.ml/img/red_panda')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['link']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
    if (msg.content == 'dogfact' || msg.content == 'Dogfact' || msg.content == 'dogfacts' || msg.content == 'Dogfacts') {
    fetch('https://some-random-api.ml/facts/dog')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['fact']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
      if (msg.content == 'birdfact' || msg.content == 'Birdfact' || msg.content == 'birdfacts' || msg.content == 'Birdfacts') {
    fetch('https://some-random-api.ml/facts/bird')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['fact']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
      if (msg.content == 'catfact' || msg.content == 'Catfact' || msg.content == 'catfacts' || msg.content == 'Catfacts') {
    fetch('https://some-random-api.ml/facts/cat')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['fact']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
      if (msg.content == 'pandafact' || msg.content == 'Pandafact' || msg.content == 'pandafacts' || msg.content == 'Pandafacts') {
    fetch('https://some-random-api.ml/facts/panda')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['fact']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'dog' || msg.content == 'Dog' || msg.content == 'dogs' || msg.content == 'Dogs') {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'husky' || msg.content == 'Husky' || msg.content == 'huskies' || msg.content == 'Huskies') {
    fetch('https://dog.ceo/api/breed/husky/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'pug' || msg.content == 'Pug' || msg.content == 'pugs' || msg.content == 'Pugs') {
    fetch('https://dog.ceo/api/breed/pug/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'collie' || msg.content == 'Collie' || msg.content == 'collies' || msg.content == 'Collies') {
    fetch('https://dog.ceo/api/breed/collie/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'bordercollie' || msg.content == 'Bordercollie' || msg.content == 'Bordercollies' || msg.content == 'bordercollies') {
    fetch('https://dog.ceo/api/breed/collie/border/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'samoyed' || msg.content == 'Samoyed' || msg.content == 'samoyeds' || msg.content == 'Samoyeds') {
    fetch('https://dog.ceo/api/breed/samoyed/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'akita' || msg.content == 'Akita' || msg.content == 'akitas' || msg.content == 'Akitas') {
    fetch('https://dog.ceo/api/breed/akita/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'corgi' || msg.content == 'Corgi' || msg.content == 'corgies' || msg.content == 'Corgies') {
    fetch('https://dog.ceo/api/breed/corgi/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'rottweiler' || msg.content == 'Rottweiler' || msg.content == 'rottweilers' || msg.content == 'Rottweilers') {
    fetch('https://dog.ceo/api/breed/rottweiler/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'australianshepherd' || msg.content == 'Australianshepherd' || msg.content == 'australianshepherds' || msg.content == 'Australianshepherds') {
    fetch('https://dog.ceo/api/breed/australian/shepherd/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'beagle' || msg.content == 'Beagle' || msg.content == 'beagles' || msg.content == 'Beagles') {
    fetch('https://dog.ceo/api/breed/beagle/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'goldenretriever' || msg.content == 'Goldenretriever' || msg.content == 'goldenretrievers' || msg.content == 'Goldenretrievers') {
    fetch('https://dog.ceo/api/breed/retriever/golden/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'labrador' || msg.content == 'Labrador' || msg.content == 'labradors' || msg.content == 'Labradors') {
    fetch('https://dog.ceo/api/breed/labrador/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'pomeranian' || msg.content == 'Pomeranian' || msg.content == 'pomeranians' || msg.content == 'Pomeranians' || msg.content == 'pom' || msg.content == 'Pom' || msg.content == 'poms' || msg.content == 'Poms') {
    fetch('https://dog.ceo/api/breed/pomeranian/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'germanshepherd' || msg.content == 'Germanshepherd' || msg.content == 'germanshepherds' || msg.content == 'Germanshepherds') {
    fetch('https://dog.ceo/api/breed/germanshepherd/images/random')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data['message']);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'bird' || msg.content == 'Bird' || msg.content == 'birds' || msg.content == 'Birds') {
    fetch('http://shibe.online/api/birds?count=[1]&urls=true&httpsUrls=true')
      .then(response => response.json())
      .then(data => {
        msg.channel.send(data);
      })
      .catch(err => {
        msg.channel.send('An error has occured!');

      })
  }
  if (msg.content == 'chucrh') {
    const chucrh = new Discord.MessageAttachment('./chucrh');
    msg.channel.send(chucrh);
  }
  if (msg.content == 'help' || msg.content == 'Help') {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Shibe Nation | Help!')
      .addFields(
        { name: 'shibe', value: 'Get Shibe Pictures!', inline: false },
        { name: 'bird', value: 'Get Bird Pictures!', inline: false },
        { name: 'cat', value: 'Get Cat Pictures!', inline: false },
        { name: 'dog', value: 'Get Dog Pictures!', inline: false },
        { name: 'husky', value: 'Get Husky Dog Pictures!', inline: false },
        { name: 'samoyed', value: 'Get Samoyed Dog Pictures!', inline: false },
        { name: 'corgi', value: 'Get Corgi Dog Pictures!', inline: false },
        { name: 'akita', value: 'Get Akita Dog Pictures!', inline: false },
        { name: 'goldenretriever', value: 'Get Golden Retriever Dog Pictures!', inline: false },
        { name: 'beagle', value: 'Get Beagle Dog Pictures!', inline: false },
        { name: 'labrador', value: 'Get Labrador Retriever Dog Pictures!', inline: false },
        { name: 'germanshepherd', value: 'Get German Sheperd Dog Pictures!', inline: false },
        { name: 'pomeranian', value: 'Get Pomeranian Dog Pictures!', inline: false },
        { name: 'collie', value: 'Get Collie Dog Pictures!', inline: false },
        { name: 'bordercollie', value: 'Get Border Collie Dog Pictures!', inline: false },
        { name: 'rottweiler', value: 'Get Rottweiler Dog Pictures!', inline: false },
        { name: 'australianshepherd', value: 'Get Australian Shepherd Dog Pictures!', inline: false },
        { name: 'panda', value: 'Get Panda Pictures!', inline: false },
        { name: 'redpanda', value: 'Get Red Panda Pictures!', inline: false },
        { name: 'dogfacts', value: 'Get Facts About Dogs!', inline: false },
        { name: 'pandafacts', value: 'Get Facts About Pandas!', inline: false },
        { name: 'birdfacts', value: 'Get Facts About Birds!', inline: false },
        { name: 'catfacts', value: 'Get Facts About Cats!', inline: false },
      )
      .setFooter('Created By: ThyMaster555#8751');
    msg.channel.send(helpEmbed);
  }

});


client.login('token');
