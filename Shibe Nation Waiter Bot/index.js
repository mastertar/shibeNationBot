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
  client.user.setActivity(`cafehelp | ThyMaster555`, { type: 'PLAYING' });
});

client.on('message', msg => {

  if (msg.content == 'mainmenu' || msg.content == 'MainMenu') {
    const mainEmbed = new Discord.MessageEmbed()
      .setTitle('Main Menu!')
      .addFields(
        {name: 'Bepis', value: '$1.20'},
        {name: 'Burber', value: '$3.00'},
        {name: 'CheemsBurber', value: '$3.00'},
        {name: 'Happ Meal', value: '$5.00'},
        {name: 'Ramen', value: '$10.00'},
        {name: 'Boneless Water', value: '$0.90'},
        {name: 'Fronch Fry(smol, medium, large)', value: '$5.00'},
        {name: 'Chimken Nuggets(smol, medium, large)', value: '$5.90'},
        {name: 'Regular Prongles', value: '$1.00'},
        {name: 'BBQ Prongles', value: '$1.00'},
        {name: 'Cheese Prongles', value: '$1.00'},
        {name: 'Sour Crean and Onion Prongles', value: '$1.00'},
        {name: 'Bepis 6 Pack', value: '$6.50'},
        {name: 'Chimken Wings (Large Only)', value: '$10.00'},
        {name: 'Cheese Steak of Chicken', value: '$10.00'},
      )
    msg.channel.send(mainEmbed)
  }
    if (msg.content == 'drinccsmenu' || msg.content == 'Drinccsmenu') {
    const drinkEmbed = new Discord.MessageEmbed()
      .setTitle('Drinccs Menu!')
      .addFields(
        {name: 'Bepis', value: '$1.20'},
        {name: 'Molotov Cocktail (May cause death, only drink under peer pressure)', value: '$5.00'},
        {name: 'Vodka (2 shots max)', value: '$3.00'},
        {name: 'Hot Choccy', value: '$4.00'},
        {name: 'Oinge Juice', value: '$2.50'},
      )
    msg.channel.send(drinkEmbed)
  }
    if (msg.content == 'dessertmenu' || msg.content == 'DessertMenu') {
    const drinkEmbed = new Discord.MessageEmbed()
      .setTitle('Dessert Menu!')
      .addFields(
        {name: 'Lava Cake', value: '$5.99'},
        {name: 'FlAn', value: '$3.50'},
        {name: 'Donut', value: '$4.00'},
        {name: 'Churro XL', value: '$6.00'},
        {name: 'Appol Pie(Slice)', value: '$2.00'},
        {name: 'Appol Pie(Pie)', value: '$11.99'},
      )
    msg.channel.send(drinkEmbed)
  }  
    if (msg.content == 'veganmenu' || msg.content == 'VeganMenu') {
    const drinkEmbed = new Discord.MessageEmbed()
      .setTitle('Dessert Menu!')
      .addFields(
        {name: 'Salod', value: '$5.00'},
        {name: 'Impossible Borger', value: '$7.00'},
        {name: 'Diet Bepis', value: '$1.60'},
        {name: 'Baked Potat(NOT A SIBE POTAT, a regular potat)', value: '$3.99'},
        {name: 'Bean Burrito (Warning: May result in explosive diarrhea)', value: '$5.99'},
      )
    msg.channel.send(drinkEmbed)
  }
    if (msg.content == 'specialmenu' || msg.content == 'SpecialMenu') {
    const drinkEmbed = new Discord.MessageEmbed()
      .setTitle('Special Menu!')
      .addFields(
        {name: 'Susher', value: '$3.00'},
        {name: 'Fried Labradoodle', value: '$4.00'},
        {name: 'Roast Peking DUcc(Half)', value: '$8.00'},
        {name: 'Roast Peking DUcc(Whole)', value: '$16.00'},
      )
    msg.channel.send(drinkEmbed)
  }      
  if (msg.content == 'cafehelp' || msg.content == 'CafeHelp') {
    const helpEmbed = new Discord.MessageEmbed()
      .setTitle('Cafe-Shibe | Help!')
      .addFields(
        { name: 'mainmenu', value: 'Pass the menu please!', inline: false },
        { name: 'drinccsmenu', value: 'Pass the Drinccs menu please!', inline: false },
        { name: 'dessertmenu', value: 'Pass the Dessert menu please!', inline: false },
        { name: 'veganmenu', value: 'Pass the Vegan menu please!', inline: false },
        { name: 'specialmenu', value: 'Pass the Special menu please!', inline: false },
      )
      .setFooter('Created By: ThyMaster555#8751');
    msg.channel.send(helpEmbed);
  }

});


client.login('ODAxMDkyODc2NTQ5MzU3NjE4.YAbp4Q.I5z-ACIffoz_d0iQDZc5vZARFRg');