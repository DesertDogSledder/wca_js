class Character 
{
    constructor(options)
    {
        if (options === undefined) options = {};
        this.name = (options.name === undefined) ? 'Unnamed' : options.name;
        this.stats = {
            str: (options.strength === undefined) ? 3 : options.strength,
            agi: (options.agility === undefined) ? 3 : options.agility,
            end: (options.endurance === undefined) ? 3 : options.endurance,
            int: (options.intuition === undefined) ? 3 : options.intution,
            log: (options.logic === undefined) ? 3 : options.logic,
            wil: (options.willpower === undefined) ? 3 : options.willpower,
            cha: (options.charisma === undefined) ? 3 : options.charisma,
            luc: (options.luck === undefined) ? 3 : options.luck,
            rep: (options.reputation === undefined) ? 0 : options.reputation,
            mag: (options.magic === undefined) ? 0 : options.magic,
            chi: (options.chi === undefined) ? 0 : options.chi,
            psi: (options.psionics === undefined) ? 0 : options.psionics
        };
        this.race = (options.race === undefined) ? null : options.race;
        this.homeworld = (options.homeworld === undefined) ? null : options.homeworld;
        this.hook = (options.hook === undefined) ? 'unset' : options.hook;
        this.career_track = (options.career_track === undefined) ? [] : options.career_track;
        this.notes = (options.notes === undefined) ? '' : options.notes;
        this.trait = (options.trait === undefined) ? null : options.traits;
        this.misc_exploits = (options.misc_exploits === undefined) ? null : options.misc_exploits;
        this.age_descriptor = (options.age_descriptor === undefined) ? 'unset' : options.age_descriptor;
        this.defense_skills = (options.defense_skills === undefined) ? null : options.defense_skills;
        this.equipment = (options.equipment === undefined) ? null : options.equipment;
    }
}

class Race 
{
    constructor(options)
    {
        if (options === undefined) options = {};
        this.name = (options.name === undefined) ? 'Race' : options.name;
        this.description = (options.description === undefined) ? 'Description' : options.description;
        this.stats = {
            str: (options.strength === undefined) ? 0 : options.strength,
            agi: (options.agility === undefined) ? 0 : options.agility,
            end: (options.endurance === undefined) ? 0 : options.endurance,
            int: (options.intuition === undefined) ? 0 : options.intution,
            log: (options.logic === undefined) ? 0 : options.logic,
            wil: (options.willpower === undefined) ? 0 : options.willpower,
            cha: (options.charisma === undefined) ? 0 : options.charisma,
            luc: (options.luck === undefined) ? 0 : options.luck,
            rep: (options.reputation === undefined) ? 0 : options.reputation,
            mag: (options.magic === undefined) ? 0 : options.magic,
            chi: (options.chi === undefined) ? 0 : options.chi,
            psi: (options.psionics === undefined) ? 0 : options.psionics
        };
        this.size = (options.size === undefined) ? 'medium' : options.size;
        this.available_skills = (options.available_skills === undefined) ? null : options.available_skills;
        this.exploits = (options.exploits === undefined) ? null : options.exploits;

    }
}

class Homeworld 
{
    constructor(options)
    {
        if (options === undefined) options = {};
        this.name = (options.name === undefined) ? 'Homeworld' : options.name;
        this.description = (options.description === undefined) ? 'Description' : options.description;
        this.stats = {
            str: (options.strength === undefined) ? 0 : options.strength,
            agi: (options.agility === undefined) ? 0 : options.agility,
            end: (options.endurance === undefined) ? 0 : options.endurance,
            int: (options.intuition === undefined) ? 0 : options.intution,
            log: (options.logic === undefined) ? 0 : options.logic,
            wil: (options.willpower === undefined) ? 0 : options.willpower,
            cha: (options.charisma === undefined) ? 0 : options.charisma,
            luc: (options.luck === undefined) ? 0 : options.luck,
            rep: (options.reputation === undefined) ? 0 : options.reputation,
            mag: (options.magic === undefined) ? 0 : options.magic,
            chi: (options.chi === undefined) ? 0 : options.chi,
            psi: (options.psionics === undefined) ? 0 : options.psionics
        };
        this.available_skills = (options.available_skills === undefined) ? null : options.available_skills;
    }
}

class Career 
{
    constructor(options)
    {
        if (options === undefined) options = {};
        this.name = (options.name === undefined) ? 'Career' : options.name;
        this.stats = {
            str: (options.strength === undefined) ? 0 : options.strength,
            agi: (options.agility === undefined) ? 0 : options.agility,
            end: (options.endurance === undefined) ? 0 : options.endurance,
            int: (options.intuition === undefined) ? 0 : options.intution,
            log: (options.logic === undefined) ? 0 : options.logic,
            wil: (options.willpower === undefined) ? 0 : options.willpower,
            cha: (options.charisma === undefined) ? 0 : options.charisma,
            luc: (options.luck === undefined) ? 0 : options.luck,
            rep: (options.reputation === undefined) ? 0 : options.reputation,
            mag: (options.magic === undefined) ? 0 : options.magic,
            chi: (options.chi === undefined) ? 0 : options.chi,
            psi: (options.psionics === undefined) ? 0 : options.psionics
        };

        this.available_skills = (options.available_skills === undefined) ? null : options.available_skills;
        this.available_exploits = (options.available_exploits === undefined) ? null : options.available_exploits;
        this.career_time = (options.career_time === undefined) ? '1d6' : options.career_time;
        this.career_time_unit = (options.career_time_unit === undefined) ? 'years' : options.career_time_unit;
        this.description = (options.description === undefined) ? 'Description' : options.description;
        this.prerequisites = (options.prerequisites === undefined) ? null : options.prerequisites;
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
    };

    return dice_pool_size;
}

function calc_max_dice_pool_size(career_grade) {
    var max_dice_pool_size = 5;
    var score_comparison = 5;
    var comparison_increment = 2;

    while (career_grade > score_comparison) {
        max_dice_pool_size += 1;
        score_comparison += comparison_increment;
        comparison_increment += 1;
    };

    return max_dice_pool_size;
}


function calc_total_stats(character)
{
    // Deep copy
    // stat_total = jQuery.extend(true, {}, this.stats);
    var stat_total = deep_copy(character.stats);
    
    // Object.entries(this.race.stats).forEach(
    //     ([key, value]) => stat_total[key] += value
    // );
    // let i;
    // let j;
    // for (i = 0; i < race.items; i++)
    // {

    // }
    // for stat, value in self.race['Stats'].items():
    //     stat_total[stat] += value

    // for stat, value in self.homeworld['Homeworld'].stats.items():
    //     stat_total[stat] += value

    // for career in self.career_track:
    //     for stat, value in career['Stats'].items():
    //         stat_total[stat] += value

    // console.log(character.race)

    for (stat in character.race.stats)
    {
        stat_total[stat] += character.race.stats[stat]
        // console.log(stat + character.race.stats[stat])
    }

    for (stat in character.homeworld.stats)
    {
        stat_total[stat] += character.homeworld.stats[stat]
    }

    for (career in character.career_track)
    {
        for (stat in character.career_track[career].stats)
        {
            stat_total[stat] += character.career_track[career].stats[stat]
        }
    }

    console.log(stat_total)

    return stat_total;
}