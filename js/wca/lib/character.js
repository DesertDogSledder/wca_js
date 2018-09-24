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
        this.race = (options.race === undefined) ? deep_copy(race_new_human) : options.race;
        this.homeworld = (options.homeworld === undefined) ? deep_copy(homeworld_none) : options.homeworld;
        this.hook = (options.hook === undefined) ? 'unset' : options.hook;
        this.career_track = (options.career_track === undefined) ? [] : options.career_track;
        this.notes = (options.notes === undefined) ? '' : options.notes;
        this.trait = (options.trait === undefined) ? {name: 'unset', desc: 'unset'} : options.traits;
        this.misc_exploits = (options.misc_exploits === undefined) ? [] : options.misc_exploits;
        this.age_descriptor = (options.age_descriptor === undefined) ? 'unset' : options.age_descriptor;
        this.defense_skills = (options.defense_skills === undefined) ? {melee: '', ranged: '', mental: '', vital: ''} : options.defense_skills;
        this.equipment = (options.equipment === undefined) ? {general: [], weapons: [], armor: []} : options.equipment;
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
        this.skills = (options.skills === undefined) ? [] : options.skills;
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
        this.available_skills = (options.available_skills === undefined) ? [] : options.available_skills;
        this.skills = (options.skills === undefined) ? [] : options.skills;
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


function calc_stat_total(character)
{
    // Deep copy
    var stat_total = deep_copy(character.stats);

    for (stat in character.race.stats)
    {
        stat_total[stat] += character.race.stats[stat];
        // console.log(stat + character.race.stats[stat])
    }

    for (stat in character.homeworld.stats)
    {
        stat_total[stat] += character.homeworld.stats[stat];
    }

    for (career in character.career_track)
    {
        for (stat in character.career_track[career].stats)
        {
            stat_total[stat] += character.career_track[career].stats[stat];
        }
    }

    return stat_total;
}

function calc_skill_total(character)
{
    let skill_total = {};
    // Racial skill tally
    for (skill in character.race.skills)
    {
        if (skill in skill_total) skill_total[skill] += character.race.skills[skill];
        else skill_total[skill] = character.race.skills[skill];
    }
    // Homeworld skill tally
    for (skill in character.homeworld.skills)
    {
        if (skill in skill_total) skill_total[skill] += character.homeworld.skills[skill];
        else skill_total[skill] = character.homeworld.skills[skill];
    }
    // Career skill tally
    for (career in character.career_track)
    {
        for (skill in character.career_track.skills)
        {
            if (skill in skill_total) skill_total[skill] += career.skills[skill];
            else skill_total[skill] = career.skills[skill];    
        }
    }

    let sorted_skill_total = sort_object(skill_total);
    return sorted_skill_total;
}

function calc_exploit_total(character)
{
    let exploit_total = {};

    for (let i=0; i<character.race.exploits.length; i++)
    {
        exploit_total[character.race.exploits[i].name] = character.race.exploits[i].desc;
    }

    let sorted_exploit_total = sort_object(exploit_total);
    // console.log(sorted_exploit_total);
    return sorted_exploit_total;
}

function calc_derived_stats(character)
{
    let derived_stats = {};
    let stat_total = calc_stat_total(character)
    let skill_total = calc_skill_total(character)

    let max_dice_pool = calc_max_dice_pool_size(woin_character.career_track.length);
    let str_dice_pool_size = calc_dice_pool_size(total_stats['str']);
    let agi_dice_pool_size = calc_dice_pool_size(total_stats['agi']);
    let end_dice_pool_size = calc_dice_pool_size(total_stats['end']);
    let int_dice_pool_size = calc_dice_pool_size(total_stats['int']);
    let wil_dice_pool_size = calc_dice_pool_size(total_stats['wil']);
    let cha_dice_pool_size = calc_dice_pool_size(total_stats['cha']);

    // Cap dice pools here
    // let str_dice_pool = (str_dice_pool_size <= max_dice_pool) ? str_dice_pool_size : max_dice_pool;
    // let agi_dice_pool = (agi_dice_pool_size <= max_dice_pool) ? agi_dice_pool_size : max_dice_pool;
    // let end_dice_pool = (end_dice_pool_size <= max_dice_pool) ? end_dice_pool_size : max_dice_pool;
    // let int_dice_pool = (int_dice_pool_size <= max_dice_pool) ? int_dice_pool_size : max_dice_pool;
    // let wil_dice_pool = (wil_dice_pool_size <= max_dice_pool) ? wil_dice_pool_size : max_dice_pool;
    // let cha_dice_pool = (cha_dice_pool_size <= max_dice_pool) ? cha_dice_pool_size : max_dice_pool;

    // Don't cap dice pools here
    let str_dice_pool = str_dice_pool_size;
    let agi_dice_pool = agi_dice_pool_size;
    let end_dice_pool = end_dice_pool_size;
    let int_dice_pool = int_dice_pool_size;
    let wil_dice_pool = wil_dice_pool_size;
    let cha_dice_pool = cha_dice_pool_size;


    ////////////
    // HEALTH //
    ////////////
    let average_health = end_dice_pool + wil_dice_pool
    let health_info = 'Roll END (' + end_dice_pool + 'd6) + WIL (' + wil_dice_pool + 'd6)';;

    if ('hardy' in skill_total)
    {
        let hardy_dice_pool_size = calc_dice_pool_size(skill_total.hardy);
        // Cap dice pool here
        // let hardy_dice_pool = (hardy_dice_pool_size <= max_dice_pool) ? hardy_dice_pool_size : max_dice_pool;

        // Don't cap dice pool here
        let hardy_dice_pool = hardy_dice_pool_size;
        health_info += ' + hardy (' + hardy_dice_pool + 'd6)';
        average_health += hardy_dice_pool;
    }

    average_health = Math.ceil(average_health * 3.5);
    if (average_health >= 10) health_info += ' (average = ' + average_health + ')';
    else health_info += ' (average bumped up to minimum = 10)';

    derived_stats['health'] = health_info;

    ///////////
    // SPEED //
    ///////////
    let base_speed = str_dice_pool + agi_dice_pool;
    let speed = base_speed;
    if ('running' in skill_total)
    {
        running_dice_pool_size = calc_dice_pool_size(skill_total['running'])
        // Cap dice pool here
        // running_dice_pool = (running_dice_pool_size <= max_dice_pool) ? running_dice_pool_size : max_dice_pool;

        // Don't cap dice pool here
        running_dice_pool = running_dice_pool_size;
        
        speed += running_dice_pool;
    }

    let climbing = base_speed;
    let swimming = base_speed;
    let zero_g = base_speed;
    let high_g = base_speed;
    let low_g = base_speed;

    if ('climbing' in skill_total)
    {
        climbing_dice_pool_size
        climbing += calc_dice_pool_size(skill_total['climbing'])

    }
    // if 'swimming' in skill_total:
    //     swimming += calc_dice_pool_size(skill_total['swimming'])
    // if 'zero-g' in skill_total:
    //     zero_g += calc_dice_pool_size(skill_total['zero-g'])
    // if 'high-g' in skill_total:
    //     high_g += calc_dice_pool_size(skill_total['high-g'])
    // if 'low-g' in skill_total:
    //     low_g += calc_dice_pool_size(skill_total['low-g'])

    // climbing = math.ceil(climbing / 2)
    // swimming = math.ceil(swimming / 2)
    // zero_g = math.ceil(zero_g / 2)
    // high_g = math.ceil(high_g / 2)
    // low_g = math.ceil(low_g / 2)

    // derived_stats['Speed'] = speed
    // derived_stats['Climb'] = climbing
    // derived_stats['Swim'] = swimming
    // derived_stats['Zero-G'] = zero_g
    // derived_stats['High-G'] = high_g
    // derived_stats['Low-G'] = low_g

    // ########
    // # JUMP #
    // ########
    // derived_stats['Horizontal Jump Running'] = stat_total['AGI']*2
    // derived_stats['Horizontal Jump Standing'] = stat_total['AGI']
    // # Vertical jump values cannot exceed horizontal jump values
    // if stat_total['STR'] <= stat_total['AGI']:
    //     vertical_jump_standing = stat_total['STR']
    //     vertical_jump_running = stat_total['STR'] * 2
    // else:
    //     vertical_jump_standing = stat_total['AGI']
    //     vertical_jump_running = stat_total['AGI'] * 2
    // derived_stats['Vertical Jump Running'] = vertical_jump_running
    // derived_stats['Vertical Jump Standing'] =vertical_jump_standing

    // #########
    // # CARRY #
    // #########
    // if 'carry' in skill_total:
    //     base_carry = (stat_total['STR'] + stat_total['END'] + skill_total['carry']) * 10
    // else:
    //     base_carry = (stat_total['STR'] + stat_total['END']) * 10

    // if self.race['Size'] == 'large':
    //     base_carry = math.ceil(base_carry * 1.5)
    // elif self.race['Size'] == 'enormous':
    //     base_carry *= 2
    // elif self.race['Size'] == 'gigantic':
    //     base_carry *= 4
    // elif self.race['Size'] == 'colossal':
    //     base_carry *= 8
    // elif self.race['Size'] == 'titanic':
    //     base_carry *= 16

    // derived_stats['Carry'] = '{} (before exploits)'.format(base_carry)

    // ##############
    // # INITIATIVE #
    // ##############
    // if 'tactics' in skill_total:
    //     tactics_dice_pool = calc_dice_pool_size(skill_total['tactics'])
    // else:
    //     tactics_dice_pool = 0
    // if 'reactions' in skill_total:
    //     reactions_dice_pool = calc_dice_pool_size(skill_total['reactions'])
    // else:
    //     reactions_dice_pool = 0

    // derived_stats['Initiative'] = int_dice_pool + max([tactics_dice_pool, reactions_dice_pool])

    // ############
    // # DEFENSES #
    // ############
    // derived_stats['Melee Defense'] = max([str_dice_pool, agi_dice_pool])
    // derived_stats['Ranged Defense'] = agi_dice_pool
    // derived_stats['Mental Defense'] = max([cha_dice_pool, wil_dice_pool])
    // derived_stats['Vital Defense'] = end_dice_pool

    // if self.defense_skills['Melee'] != '' and self.defense_skills['Melee'] in skill_total:
    //     derived_stats['Melee Defense'] += calc_dice_pool_size(skill_total[self.defense_skills['Melee']])
    // if self.defense_skills['Ranged'] != '' and self.defense_skills['Ranged'] in skill_total:
    //     derived_stats['Ranged Defense'] += calc_dice_pool_size(skill_total[self.defense_skills['Ranged']])
    // if self.defense_skills['Mental'] != '' and self.defense_skills['Mental'] in skill_total:
    //     derived_stats['Mental Defense'] += calc_dice_pool_size(skill_total[self.defense_skills['Mental']])
    // if self.defense_skills['Vital'] != '' and self.defense_skills['Vital'] in skill_total:
    //     derived_stats['Vital Defense'] += calc_dice_pool_size(skill_total[self.defense_skills['Vital']])

    // derived_stats['Melee Defense'] = math.ceil(derived_stats['Melee Defense'] * 3.5)
    // derived_stats['Ranged Defense'] = math.ceil(derived_stats['Ranged Defense'] * 3.5)
    // derived_stats['Mental Defense'] = math.ceil(derived_stats['Mental Defense'] * 3.5)
    // derived_stats['Vital Defense'] = math.ceil(derived_stats['Vital Defense'] * 3.5)

    // if self.race['Size'] == 'tiny':
    //     derived_stats['Melee Defense'] += 4
    //     derived_stats['Ranged Defense'] += 4
    // elif self.race['Size'] == 'small':
    //     derived_stats['Melee Defense'] += 2
    //     derived_stats['Ranged Defense'] += 2
    // elif self.race['Size'] == 'large':
    //     derived_stats['Melee Defense'] -= 4
    //     derived_stats['Ranged Defense'] -= 4
    // elif self.race['Size'] == 'enormous':
    //     derived_stats['Melee Defense'] -= 8
    //     derived_stats['Ranged Defense'] -= 8
    // elif self.race['Size'] == 'gigantic':
    //     derived_stats['Melee Defense'] -= 16
    //     derived_stats['Ranged Defense'] -= 16
    // elif self.race['Size'] == 'colossal':
    //     derived_stats['Melee Defense'] -= 32
    //     derived_stats['Ranged Defense'] -= 32
    // elif self.race['Size'] == 'titantic':
    //     # extrapolation based on previous trends
    //     derived_stats['Melee Defense'] -= 64
    //     derived_stats['Ranged Defense'] -= 64

    // if derived_stats['Melee Defense'] < 10:
    //     derived_stats['Melee Defense'] = 10
    // if derived_stats['Ranged Defense'] < 10:
    //     derived_stats['Ranged Defense'] = 10
    // if derived_stats['Mental Defense'] < 10:
    //     derived_stats['Mental Defense'] = 10
    // if derived_stats['Vital Defense'] < 10:
    //     derived_stats['Vital Defense'] = 10

    return derived_stats
}