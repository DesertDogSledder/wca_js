// Homeworlds
var homeworld_agricultural = new Homeworld({name: 'Agricultural', endurance: 1, logic: -1, available_skills: ['farming']});
var homeworld_arctic = new Homeworld({name: 'Arctic', endurance: 1, agility: -1, available_skills: ['survival']});
var homeworld_asteroid = new Homeworld({name: 'Asteroid', agility: 1, strength: -1, available_skills: ['zero-g', 'mining']});
var homeworld_barren = new Homeworld({name: 'Barren', endurance: 1, charisma: -1, available_skills: ['survival']});
var homeworld_city = new Homeworld({name: 'City', charisma: 1, endurance: -1, available_skills: ['diplomacy', 'bureaucracy']});
var homeworld_desert = new Homeworld({name: 'Desert', endurance: 1, agility: -1, available_skills: ['navigation', 'survival']});
var homeworld_jungle = new Homeworld({name: 'Jungle', agility: 1, endurance: -1, available_skills: ['climbing']});
var homeworld_ocean = new Homeworld({name: 'Ocean', agility: 1, intuition: -1, available_skills: ['swimming', 'sailing']});
var homeworld_volcanic = new Homeworld({name: 'Volcanic', agility: 1, strength: -1, available_skills: ['dodging']});

var homeworld_none = new Homeworld({name: 'None'});

var homeworld_new_list = [homeworld_none, homeworld_agricultural, homeworld_arctic, homeworld_asteroid, homeworld_barren,
                      homeworld_city, homeworld_desert, homeworld_jungle, homeworld_ocean, homeworld_volcanic];
