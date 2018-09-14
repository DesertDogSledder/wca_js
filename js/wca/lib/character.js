class Character 
{
    constructor(name='unnamed', strength=3, agility=3, endurance=3, willpower=3, intuition=3, logic=3,
        charisma=3, luck=3, reputation=0, magic=0, chi=0, psionics=0, race=null,
        homeworld=null, hook='unset', career_track=null, notes='', trait=null, misc_exploits=null,
        age_descriptor='unset', defense_skills=null, equipment=null)
    {
        this.name = name;
        this.stats = {
            str: strength,
            agi: agility,
            end: endurance,
            int: intuition,
            log: logic,
            wil: willpower,
            cha: charisma,
            luc: luck,
            rep: reputation,
            mag: magic,
            chi: chi,
            psi: psionics
        };
        this.race = race;
        this.homeworld = homeworld;
        this.hook = hook;
        this.career_track = career_track;
        this.notes = notes;
        this.trait = trait;
        this.misc_exploits = misc_exploits;
        this.age_descriptor = age_descriptor;
        this.defense_skills = defense_skills;
        this.equipment = equipment;
    }
}

class Race 
{
    constructor(name='Race', description='Description', strength=0, agility=0, endurance=0, willpower=0, intuition=0,
        logic=0, charisma=0, luck=0, reputation=0, magic=0, chi=0, psionics=0, size='medium',
        available_skills=null, exploits=null)
    {
        this.name = name;
        this.description = description;
        this.stats = {
            str: strength,
            agi: agility,
            end: endurance,
            int: intuition,
            log: logic,
            wil: willpower,
            cha: charisma,
            luc: luck,
            rep: reputation,
            mag: magic,
            chi: chi,
            psi: psionics
        };
        this.size = size;
        this.available_skills = available_skills;
        this.exploits = exploits;
    }
}

class Homeworld 
{
    constructor(name='Homeworld', strength=0, agility=0, endurance=0, willpower=0, intuition=0, logic=0,
        charisma=0, luck=0, reputation=0, magic=0, chi=0, psionics=0, available_skills=null)
    {
        this.name = name;
        this.description = description;
        this.stats = {
            str: strength,
            agi: agility,
            end: endurance,
            int: intuition,
            log: logic,
            wil: willpower,
            cha: charisma,
            luc: luck,
            rep: reputation,
            mag: magic,
            chi: chi,
            psi: psionics
        };
        this.available_skills = available_skills;
    }
}

class Career 
{
    constructor(name='Career', strength=0, agility=0, endurance=0, willpower=0, intuition=0, logic=0,
        charisma=0, luck=0, reputation=0, magic=0, chi=0, psionics=0,
        available_skills=null, available_exploits=null,
        career_time='1d6', career_time_unit='years', description='Description', prerequisites=null)
    {
        this.name = name;
        this.stats = {
            str: strength,
            agi: agility,
            end: endurance,
            int: intuition,
            log: logic,
            wil: willpower,
            cha: charisma,
            luc: luck,
            rep: reputation,
            mag: magic,
            chi: chi,
            psi: psionics
        };
        this.available_skills = available_skills;
        this.available_exploits = available_exploits;
        this.career_time = career_time;
        this.career_time_unit = career_time_unit;
        this.description = description;
        this.prerequisites = prerequisites;
    }
}

function calc_dice_pool_size(raw_score) {
    var dice_pool_size = 0;
    var score_comparison = 0;
    var comparison_increment = 2;

    while (raw_score > score_comparison) {
        dice_pool_size += 1;
        score_comparison += comparison_increment;
        comparison_increment += 1;
    }

    return dice_pool_size;
}

function calc_max_dice_pool_size(career_grade) {
    var max_dice_pool_size = 5;
    var score_comparison = 5;
    var comparison_increment = 3;

    while (raw_score > score_comparison) {
        max_dice_pool_size += 1;
        score_comparison += comparison_increment;
        comparison_increment += 1;
    }

    return max_dice_pool_size;
}

// function calc_stat_total(character, race, homeworld, career) {
//     // Deep copy
//     stat_total = jQuery.extend(true, {}, character.stats);

//     // let i;
//     // let j;
//     // for (i = 0; i < race.items; i++)
//     // {

//     // }
//     // for stat, value in self.race['Stats'].items():
//     //     stat_total[stat] += value

//     // for stat, value in self.homeworld['Homeworld'].stats.items():
//     //     stat_total[stat] += value

//     // for career in self.career_track:
//     //     for stat, value in career['Stats'].items():
//     //         stat_total[stat] += value

//     return stat_total
// }