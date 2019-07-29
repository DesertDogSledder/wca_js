var archaic_armor_dict = {
    "cloth": {
        "name": "Cloth",
        "soak": 2,
        "defense": 0,
        "cost": 20,
        "type": "Light",
        "weight": 8,
        "vulnerable": "Blunt, Fire",
        "speed": 0,
        "special": "-"
    },
    "padded": {
        "name": "Padded",
        "soak": 2,
        "defense": 0,
        "cost": 30,
        "type": "Light",
        "weight": 10,
        "vulnerable": "Fire",
        "speed": 0,
        "special": "-"
    },
    "hide_armor": {
        "name": "Hide armor",
        "soak": 3,
        "defense": 0,
        "cost": 30,
        "type": "Light",
        "weight": 20,
        "vulnerable": "Fire",
        "speed": 0,
        "special": "-"
    },
    "leather": {
        "name": "Leather",
        "soak": 4,
        "defense": 0,
        "cost": 35,
        "type": "Light",
        "weight": 15,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "studded_leather": {
        "name": "Studded leather",
        "soak": 5,
        "defense": 0,
        "cost": 50,
        "type": "Light",
        "weight": 20,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "brigandine": {
        "name": "Brigandine",
        "soak": 5,
        "defense": 0,
        "cost": 70,
        "type": "Light",
        "weight": 25,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "ringmail": {
        "name": "Ringmail",
        "soak": 5,
        "defense": 0,
        "cost": 50,
        "type": "Light",
        "weight": 20,
        "vulnerable": "Blunt, Piercing",
        "speed": 0,
        "special": "-"
    },
    "scalemail": {
        "name": "Scalemail",
        "soak": 6,
        "defense": 0,
        "cost": 100,
        "type": "Light",
        "weight": 30,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "lamellar": {
        "name": "Lamellar",
        "soak": 6,
        "defense": 0,
        "cost": 120,
        "type": "Light",
        "weight": 27,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "chainmail": {
        "name": "Chainmail",
        "soak": 6,
        "defense": -2,
        "cost": 200,
        "type": "Medium",
        "weight": 50,
        "vulnerable": "Blunt, Electricity",
        "speed": 0,
        "special": "-"
    },
    "splintmail": {
        "name": "Splintmail",
        "soak": 7,
        "defense": -2,
        "cost": 230,
        "type": "Medium",
        "weight": 45,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "banded_mail": {
        "name": "Banded mail",
        "soak": 7,
        "defense": -2,
        "cost": 300,
        "type": "Medium",
        "weight": 40,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    },
    "platemail": {
        "name": "Platemail",
        "soak": 8,
        "defense": -2,
        "cost": 1000,
        "type": "Medium",
        "weight": 60,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    },
    "full_plate": {
        "name": "Full plate",
        "soak": 10,
        "defense": -4,
        "cost": 2000,
        "type": "Heavy",
        "weight": 70,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    }
};
var archaic_shields_dict = {
    "small_wooden": {
        "name": "Small, wooden",
        "soak": 0,
        "defense": 1,
        "cost": 40,
        "type": "Shield",
        "weight": 6,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "medium_wooden": {
        "name": "Medium, wooden",
        "soak": 0,
        "defense": 2,
        "cost": 90,
        "type": "Shield",
        "weight": 10,
        "vulnerable": "-",
        "speed": -1,
        "special": "-"
    },
    "large_wooden": {
        "name": "Large, wooden",
        "soak": 0,
        "defense": 3,
        "cost": 200,
        "type": "Shield",
        "weight": 25,
        "vulnerable": "-",
        "speed": -1,
        "special": "-"
    },
    "tower_wooden": {
        "name": "Tower, wooden",
        "soak": 0,
        "defense": 3,
        "cost": 350,
        "type": "Shield",
        "weight": 40,
        "vulnerable": "-",
        "speed": -1,
        "special": "Additionally provides +1 DEFENSE to allies on either side of the wearer"
    },
    "buckler_wooden": {
        "name": "Buckler, wooden",
        "soak": 0,
        "defense": 1,
        "cost": 10,
        "type": "Shield",
        "weight": 1,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "aspis_wooden": {
        "name": "Aspis, wooden",
        "soak": 0,
        "defense": 2,
        "cost": 350,
        "type": "Shield",
        "weight": 50,
        "vulnerable": "-",
        "speed": -1,
        "special": "-"
    },
    "small_metal": {
        "name": "Small, metal",
        "soak": 0,
        "defense": 1,
        "cost": 80,
        "type": "Shield",
        "weight": 12,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    },
    "medium_metal": {
        "name": "Medium, metal",
        "soak": 0,
        "defense": 2,
        "cost": 200,
        "type": "Shield",
        "weight": 20,
        "vulnerable": "Electricity",
        "speed": -1,
        "special": "-"
    },
    "large_metal": {
        "name": "Large, metal",
        "soak": 0,
        "defense": 3,
        "cost": 700,
        "type": "Shield",
        "weight": 50,
        "vulnerable": "Electricity",
        "speed": -1,
        "special": "-"
    },
    "tower_metal": {
        "name": "Tower, metal",
        "soak": 0,
        "defense": 3,
        "cost": 900,
        "type": "Shield",
        "weight": 80,
        "vulnerable": "Electricity",
        "speed": -1,
        "special": "Additionally provides +1 DEFENSE to allies on either side of the wearer"
    },
    "buckler_metal": {
        "name": "Buckler, metal",
        "soak": 0,
        "defense": 1,
        "cost": 30,
        "type": "Shield",
        "weight": 3,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    },
    "aspis_metal": {
        "name": "Aspis, metal",
        "soak": 0,
        "defense": 2,
        "cost": 1000,
        "type": "Shield",
        "weight": 100,
        "vulnerable": "Electricity",
        "speed": -1,
        "special": "-"
    },
    "throwing_shield": {
        "name": "Throwing shield",
        "soak": 0,
        "defense": 1,
        "cost": 400,
        "type": "Shield",
        "weight": 15,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    }
};
var eastern_armor_dict = {
    "haramaki": {
        "name": "Haramaki",
        "soak": 1,
        "defense": 0,
        "cost": 3,
        "type": "Light",
        "weight": 1,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "silken_ceremonial_armor": {
        "name": "Silken ceremonial armor",
        "soak": 1,
        "defense": 0,
        "cost": 30,
        "type": "Light",
        "weight": 4,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "lamellar_cuirass": {
        "name": "Lamellar cuirass",
        "soak": 2,
        "defense": 0,
        "cost": 15,
        "type": "Light",
        "weight": 8,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "lamellar_leather": {
        "name": "Lamellar, leather",
        "soak": 4,
        "defense": 0,
        "cost": 60,
        "type": "Light",
        "weight": 25,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "do_maru": {
        "name": "Do-maru",
        "soak": 5,
        "defense": 0,
        "cost": 200,
        "type": "Medium",
        "weight": 30,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "kikko_armor": {
        "name": "Kikko armor",
        "soak": 5,
        "defense": 0,
        "cost": 30,
        "type": "Medium",
        "weight": 25,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "lamellar_horn": {
        "name": "Lamellar, horn",
        "soak": 5,
        "defense": 0,
        "cost": 100,
        "type": "Medium",
        "weight": 30,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "four_mirror_armor": {
        "name": "Four-mirror armor",
        "soak": 6,
        "defense": 0,
        "cost": 45,
        "type": "Medium",
        "weight": 45,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "lamellar_steel": {
        "name": "Lamellar, steel",
        "soak": 6,
        "defense": 0,
        "cost": 150,
        "type": "Medium",
        "weight": 35,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "mountain_pattern_armor": {
        "name": "Mountain pattern armor",
        "soak": 6,
        "defense": 0,
        "cost": 250,
        "type": "Medium",
        "weight": 40,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "kusari_gusoku": {
        "name": "Kusari gusoku",
        "soak": 7,
        "defense": 0,
        "cost": 350,
        "type": "Heavy",
        "weight": 45,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "lamellar_iron": {
        "name": "Lamellar, iron",
        "soak": 7,
        "defense": 0,
        "cost": 200,
        "type": "Heavy",
        "weight": 50,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "tatami_do": {
        "name": "Tatami-do",
        "soak": 7,
        "defense": 0,
        "cost": 1000,
        "type": "Heavy",
        "weight": 45,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "o_yoroi": {
        "name": "O-yoroi",
        "soak": 8,
        "defense": 0,
        "cost": 1700,
        "type": "Heavy",
        "weight": 45,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "stone_coat": {
        "name": "Stone coat",
        "soak": 8,
        "defense": 0,
        "cost": 500,
        "type": "Heavy",
        "weight": 45,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    }
};
var future_armor_dict = {
    "synthetic_weave": {
        "name": "Synthetic weave",
        "soak": 2,
        "defense": 0,
        "cost": 30,
        "type": "Light",
        "weight": 5,
        "vulnerable": "Blunt",
        "speed": 0,
        "special": "Almost undetectable"
    },
    "padded": {
        "name": "Padded",
        "soak": 3,
        "defense": 0,
        "cost": 20,
        "type": "Light",
        "weight": 10,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "mesh_lining": {
        "name": "Mesh lining",
        "soak": 4,
        "defense": 0,
        "cost": 50,
        "type": "Light",
        "weight": 8,
        "vulnerable": "Blunt",
        "speed": 0,
        "special": "-"
    },
    "leather": {
        "name": "Leather",
        "soak": 4,
        "defense": 0,
        "cost": 35,
        "type": "Light",
        "weight": 15,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "kevlar_vest": {
        "name": "Kevlar vest",
        "soak": 5,
        "defense": 0,
        "cost": 100,
        "type": "Light",
        "weight": 30,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "kevlar_coat_long": {
        "name": "Kevlar coat, long",
        "soak": 6,
        "defense": -2,
        "cost": 200,
        "type": "Medium",
        "weight": 50,
        "vulnerable": "Piercing",
        "speed": 0,
        "special": "-"
    },
    "environmental_suit": {
        "name": "Environmental suit",
        "soak": 4,
        "defense": -2,
        "cost": 500,
        "type": "Medium",
        "weight": 40,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "riot_armor": {
        "name": "Riot armor",
        "soak": 6,
        "defense": -2,
        "cost": 1000,
        "type": "Medium",
        "weight": 50,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "basic_battlesuit": {
        "name": "Basic battlesuit",
        "soak": 8,
        "defense": -4,
        "cost": 2000,
        "type": "Heavy",
        "weight": 60,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "navy_battlesuit": {
        "name": "Navy battlesuit",
        "soak": 10,
        "defense": -4,
        "cost": 3000,
        "type": "Heavy",
        "weight": 65,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "powered_combat_armor": {
        "name": "Powered combat armor",
        "soak": 10,
        "defense": -2,
        "cost": 10000,
        "type": "Heavy",
        "weight": 60,
        "vulnerable": "Electricity",
        "speed": 0,
        "special": "-"
    }
};
var future_shields_dict = {
    "small_duranium": {
        "name": "Small, duranium",
        "soak": 0,
        "defense": 1,
        "cost": 40,
        "type": "Shield",
        "weight": 6,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "medium_duranium": {
        "name": "Medium, duranium",
        "soak": 0,
        "defense": 2,
        "cost": 90,
        "type": "Shield",
        "weight": 10,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "large_duranium": {
        "name": "Large, duranium",
        "soak": 0,
        "defense": 3,
        "cost": 200,
        "type": "Shield",
        "weight": 25,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    },
    "energy_shield": {
        "name": "Energy shield",
        "soak": 0,
        "defense": 2,
        "cost": 1200,
        "type": "Shield",
        "weight": 1,
        "vulnerable": "-",
        "speed": 0,
        "special": "-"
    }
};
