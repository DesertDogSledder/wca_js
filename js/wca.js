var race_dict = {
    'old': race_old_dict,
    'now': race_now_dict,
    'new': race_new_dict,
};

var race_exploits_dict = {
    'old': exploits_races_old,
    'now': exploits_races_now,
    'new': exploits_races_new,
};

var homeworld_dict = {
    'new': homeworld_new_dict,
};

var exploit_dict = {
    'android': exploits_android,
    'psionic': exploits_psionic,
    'traits': exploits_traits,
    'universal': exploits_universal,
    'origins': exploits_origins,
    'old': exploits_careers_old,
    'now': exploits_careers_now,
    'new': exploits_careers_new,
    'martial_arts': exploits_careers_martial_arts,
};

var career_dict = {
    'origins': career_woin_origin_dict,
    'old': career_old_dict,
    'now': career_now_dict,
    'new': career_new_dict,
    'martial_arts': career_ma_dict,
};

var general_gear_dict = {
    'general_gear': general_gear_dict
};

var armor_dict = {
    'archaic_armor': archaic_armor_dict,
    'archaic_shields': archaic_shields_dict,
    'eastern_armor': eastern_armor_dict,
    'future_armor': future_armor_dict,
    'future_shields': future_shields_dict
};

var weapons_dict = {
    'archaic_axes': archaic_axes_dict,
    'archaic_gunpowder': archaic_gunpowder_dict,
    'archaic_misc': archaic_misc_dict,
    'archaic_polearm': archaic_polearm_dict,
    'archaic_ranged': archaic_ranged_dict,
    'archaic_swords': archaic_swords_dict,
    'eastern_melee': eastern_melee_dict,
    'future_explosive_ordnance': future_explosive_ordnance_dict,
    'future_exotic_melee': future_exotic_melee_dict,
    'future_exotic_ranged': future_exotic_ranged_dict,
    'future_melee': future_melee_dict,
    'future_ranged': future_ranged_dict,
    'laser_swords': laser_swords_dict,
    'modern_firearms': modern_firearms_dict,
    'western_handguns': western_handguns_dict,
    'western_logarms': western_longarms_dict,
    'ww2_firearms': ww2_firearms_dict
};

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

function get_user_character() {
    if (localStorage.getItem('user_character') == null) {
        new_character();
    }
    let user_character = JSON.parse(localStorage.getItem('user_character'));
    return user_character;
}

function new_character() {
    let user_character = {
        'name': 'unset',
        'race': {
            'source': '',
            'id': '',
            'stats': {},
            'size': 'medium',
            'skills': {},
        },
        'homeworld': {
            'source': '',
            'id': '',
            'stats': {},
            'skills': [],
        },
        'career_track': [],
        'notes': '',
        'trait': null,
        'hook': '',
        'misc_exploits': [],
        'defense_skills': {
            'melee': '',
            'ranged': '',
            'mental': '',
            'vital': '',
        },
        'age_descriptor': 'unset',
        'equipment': [],
    };

    set_race(user_character, 'new', 'race_new_human');
    set_homeworld(user_character, 'new', 'homeworld_none');

    localStorage.setItem('user_character', JSON.stringify(user_character));
}

function load_character(character_json) {
    try {
        JSON.parse(character_json);
        localStorage.setItem('user_character', character_json);
    } catch (err) {
        alert(err);
    }
}

function save_character(user_character) {
    localStorage.setItem('user_character', JSON.stringify(user_character));
}

function export_character(user_character) {
    return JSON.stringify(user_character);
}

function set_race(user_character, race_source, race_id) {
    user_character.race.source = race_source;
    user_character.race.id = race_id;
    for (stat in race_dict[race_source][race_id].stats) {
        user_character.race.stats[stat] = race_dict[race_source][race_id].stats[stat];
    }
}

function set_homeworld(user_character, homeworld_source, homeworld_id) {
    user_character.homeworld.source = homeworld_source;
    user_character.homeworld.id = homeworld_id;
    for (stat in homeworld_dict[homeworld_source][homeworld_id].stats) {
        user_character.homeworld.stats[stat] = homeworld_dict[homeworld_source][homeworld_id].stats[stat];
    }
}

function set_career(user_character, career_source, career_id) {
    let career_stats = {};
    for (stat in career_dict[career_source][career_id].stats) {
        career_stats[stat] = career_dict[career_source][career_id].stats[stat];
    }
    user_character.career_track.push({
        'source': career_source, 'id': career_id, 'stats': career_stats, 'exploits': {}, 'skills': {}});
}

function calc_stat_total(user_character)
{
    // Base stats
    let stat_total = {
        'strength': 3,
        'agility': 3,
        'endurance': 3,
        'intuition': 3,
        'logic': 3,
        'willpower': 3,
        'charisma': 3,
        'luck': 3,
        'reputation': 0,
        'magic': 0,
        'chi': 0,
        'psionics': 0
    };

    for (stat in user_character.race.stats) {
        stat_total[stat] += user_character.race.stats[stat];
    }

    for (stat in user_character.homeworld.stats) {
        stat_total[stat] += user_character.homeworld.stats[stat];
    }

    for (career in user_character.career_track)
    {
        for (stat in user_character.career_track[career].stats)
        {
            stat_total[stat] += user_character.career_track[career].stats[stat];
        }
    }

    return stat_total;
}

function calc_skill_total(user_character)
{
    console.log('calc_skill_total called')
    let skill_total = {};
    // Racial skill tally
    for (skill in user_character.race.skills)
    {
        if (skill in skill_total) skill_total[skill] += user_character.race.skills[skill];
        else skill_total[skill] = user_character.race.skills[skill];
    }
    // Homeworld skill tally
    for (skill in user_character.homeworld.skills)
    {
        if (skill in skill_total) skill_total[skill] += user_character.homeworld.skills[skill];
        else skill_total[skill] = user_character.homeworld.skills[skill];
    }
    // Career skill tally
    for (career in user_character.career_track)
    {
        if (user_character.career_track[career].skills){
            for (skill in user_character.career_track[career].skills)
            {
                if (skill in skill_total) skill_total[skill] += user_character.career_track[career].skills[skill];
                else skill_total[skill] = user_character.career_track[career].skills[skill];    
            }
        }
    }

    let stored_skill_total = sort_object(skill_total);
    // console.log(stored_skill_total);
    return stored_skill_total;
}

function calc_exploit_total(user_character)
{
    let exploit_total = {};
    let race_exploits = race_exploits_dict[user_character.race.source][user_character.race.id];
    let curr_exploit = null;
    let trait_source = 'traits';

    for (let exploit in race_exploits) {
        exploit_total[race_exploits[exploit]['name']] = race_exploits[exploit]['desc'];
    }

    for (let career in user_character.career_track) {
        for (exploit in user_character.career_track[career].exploits) {
            curr_exploit = user_character.career_track[career].exploits[exploit];
            exploit_total[exploit_dict[curr_exploit.source1][curr_exploit.source2][curr_exploit.id]['name']] = exploit_dict[curr_exploit.source1][curr_exploit.source2][curr_exploit.id]['desc'];
        }
    }

    for (exploit in user_character.misc_exploits) {
        curr_exploit = user_character.misc_exploits[exploit];
        exploit_total[exploit_dict[curr_exploit.source][curr_exploit.source][curr_exploit.id]['name']] = exploit_dict[curr_exploit.source][curr_exploit.source][curr_exploit.id]['desc'];
    }

    if (user_character.trait) {
        exploit_total[exploit_dict[trait_source][trait_source][user_character.trait]['name']] = exploit_dict[trait_source][trait_source][user_character.trait]['desc']
    }

    let sorted_exploit_total = sort_object(exploit_total);
    return sorted_exploit_total;
}

function calc_derived_stats(user_character)
{
    let derived_stats = {};
    let stat_total = calc_stat_total(user_character)
    let skill_total = calc_skill_total(user_character)

    let maxDicePool = calc_max_dice_pool_size(user_character.career_track.length);
    let str_dice_pool_size = calc_dice_pool_size(stat_total['strength']);
    let agi_dice_pool_size = calc_dice_pool_size(stat_total['agility']);
    let end_dice_pool_size = calc_dice_pool_size(stat_total['endurance']);
    let int_dice_pool_size = calc_dice_pool_size(stat_total['intuition']);
    let wil_dice_pool_size = calc_dice_pool_size(stat_total['willpower']);
    let cha_dice_pool_size = calc_dice_pool_size(stat_total['charisma']);

    // Cap dice pools here
    // let str_dice_pool = (str_dice_pool_size <= maxDicePool) ? str_dice_pool_size : maxDicePool;
    // let agi_dice_pool = (agi_dice_pool_size <= maxDicePool) ? agi_dice_pool_size : maxDicePool;
    // let end_dice_pool = (end_dice_pool_size <= maxDicePool) ? end_dice_pool_size : maxDicePool;
    // let int_dice_pool = (int_dice_pool_size <= maxDicePool) ? int_dice_pool_size : maxDicePool;
    // let wil_dice_pool = (wil_dice_pool_size <= maxDicePool) ? wil_dice_pool_size : maxDicePool;
    // let cha_dice_pool = (cha_dice_pool_size <= maxDicePool) ? cha_dice_pool_size : maxDicePool;

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
    let average_health = end_dice_pool + wil_dice_pool;
    let health_info = 'Roll endurance (' + end_dice_pool + 'd6) + WIL (' + wil_dice_pool + 'd6)';

    if ('hardy' in skill_total)
    {
        let hardy_dice_pool_size = calc_dice_pool_size(skill_total.hardy);
        // Cap dice pool here
        // let hardy_dice_pool = (hardy_dice_pool_size <= maxDicePool) ? hardy_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        let hardy_dice_pool = hardy_dice_pool_size;
        health_info += ' + hardy (' + hardy_dice_pool + 'd6)';
        average_health += hardy_dice_pool;
    }

    average_health = Math.ceil(average_health * 3.5);
    if (average_health >= 10) health_info += ' (average = ' + average_health + ')';
    else health_info += ' (average bumped up to minimum = 10)';

    derived_stats['Health'] = health_info;

    ///////////
    // SPEED //
    ///////////
    let base_speed = str_dice_pool + agi_dice_pool;
    let speed = base_speed;
    if ('running' in skill_total)
    {
        running_dice_pool_size = calc_dice_pool_size(skill_total['running']);
        // Cap dice pool here
        // running_dice_pool = (running_dice_pool_size <= maxDicePool) ? running_dice_pool_size : maxDicePool;

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
        climbing_dice_pool_size = calc_dice_pool_size(skill_total['climbing']);
        // Cap dice pool here
        // climbing_dice_pool = (climbing_dice_pool_size <= maxDicePool) ? climbing_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        climbing_dice_pool = climbing_dice_pool_size;
        climbing += climbing_dice_pool;

    }
    if ('swimming' in skill_total)
    {
        swimming_dice_pool_size = calc_dice_pool_size(skill_total['swimming']);
        // Cap dice pool here
        // swimming_dice_pool = (swimming_dice_pool_size <= maxDicePool) ? swimming_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        swimming_dice_pool = swimming_dice_pool_size;
        swimming += swimming_dice_pool;

    }
    if ('zero-g' in skill_total)
    {
        zero_g_dice_pool_size = calc_dice_pool_size(skill_total['zero-g']);
        // Cap dice pool here
        // zero_g_dice_pool = (zero_g_dice_pool_size <= maxDicePool) ? zero_g_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        zero_g_dice_pool = zero_g_dice_pool_size;
        zero_g += zero_g_dice_pool;

    }
    if ('high-g' in skill_total)
    {
        high_g_dice_pool_size = calc_dice_pool_size(skill_total['high-g']);
        // Cap dice pool here
        // high_g_dice_pool = (high_g_dice_pool_size <= maxDicePool) ? high_g_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        high_g_dice_pool = high_g_dice_pool_size;
        high_g += high_g_dice_pool;

    }
    if ('low-g' in skill_total)
    {
        low_g_dice_pool_size = calc_dice_pool_size(skill_total['low-g']);
        // Cap dice pool here
        // low_g_dice_pool = (low_g_dice_pool_size <= maxDicePool) ? low_g_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        low_g_dice_pool = low_g_dice_pool_size;
        low_g += low_g_dice_pool;

    }

    climbing = Math.ceil(climbing / 2);
    swimming = Math.ceil(swimming / 2);
    zero_g = Math.ceil(zero_g / 2);
    high_g = Math.ceil(high_g / 2);
    low_g = Math.ceil(low_g / 2);

    derived_stats['Speed'] = speed;
    derived_stats['Climb'] = climbing;
    derived_stats['Swim'] = swimming;
    derived_stats['Zero-G'] = zero_g;
    derived_stats['High-G'] = high_g;
    derived_stats['Low-G'] = low_g;

    //////////
    // JUMP //
    //////////
    derived_stats['Horizontal Jump Running'] = stat_total['agility'] * 2;
    derived_stats['Horizontal Jump Standing'] = stat_total['agility'];
    // Vertical jump values cannot exceed horizontal jump values
    if (stat_total['strength'] <= stat_total['agility'])
    {
        var vertical_jump_standing = stat_total['strength'];
        var vertical_jump_running = stat_total['strength'] * 2;
    }
    else
    {
        var vertical_jump_standing = stat_total['agility'];
        var vertical_jump_running = stat_total['agility'] * 2;
    }
    derived_stats['Vertical Jump Running'] = vertical_jump_running;
    derived_stats['Vertical Jump Standing'] = vertical_jump_standing;

    ///////////
    // CARRY //
    ///////////
    if ('carry' in skill_total) var base_carry = (stat_total['strength'] + stat_total['endurance'] + skill_total['carry']) * 10;
    else var base_carry = (stat_total['strength'] + stat_total['endurance']) * 10;

    if (user_character.race['Size'] == 'large') base_carry = Math.ceil(base_carry * 1.5);
    else if (user_character.race['Size'] == 'enormous') base_carry *= 2;
    else if (user_character.race['Size'] == 'gigantic') base_carry *= 4;
    else if (user_character.race['Size'] == 'colossal') base_carry *= 8;
    else if (user_character.race['Size'] == 'titanic') base_carry *= 16;

    derived_stats['Carry'] = base_carry + ' (before exploits)';

    ////////////////
    // INITIATIVE //
    ////////////////
    if ('tactics' in skill_total)
    {
        var tactics_dice_pool_size = calc_dice_pool_size(skill_total['tactics']);
        // Cap dice pool here
        // var tactics_dice_pool = (tactics_dice_pool_size <= maxDicePool) ? tactics_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        var tactics_dice_pool = tactics_dice_pool_size;
    }
    else var tactics_dice_pool = 0;
    if ('reactions' in skill_total)
    {
        var reactions_dice_pool_size = calc_dice_pool_size(skill_total['reactions'])
        // Cap dice pool here
        // var reactions_dice_pool = (reactions_dice_pool_size <= maxDicePool) ? reactions_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        var reactions_dice_pool = reactions_dice_pool_size;
    }
    else var reactions_dice_pool = 0;

    derived_stats['Initiative'] = int_dice_pool + Math.max(tactics_dice_pool, reactions_dice_pool);

    //////////////
    // DEFENSES //
    //////////////
    derived_stats['Melee Defense'] = Math.max(str_dice_pool, agi_dice_pool);
    derived_stats['Ranged Defense'] = agi_dice_pool;
    derived_stats['Mental Defense'] = Math.max(cha_dice_pool, wil_dice_pool);
    derived_stats['Vital Defense'] = end_dice_pool;

    if (user_character.defense_skills.melee != '' && user_character.defense_skills.melee in skill_total)
    {
        defense_skills_melee_dice_pool_size = calc_dice_pool_size(skill_total[user_character.defense_skills.melee]);
        // Cap dice pool here
        // var defense_skills_melee_dice_pool = (defense_skills_melee_dice_pool_size <= maxDicePool) ? defense_skills_melee_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        defense_skills_melee_dice_pool = defense_skills_melee_dice_pool_size;

        derived_stats['Melee Defense'] += defense_skills_melee_dice_pool;
    }
    if (user_character.defense_skills.ranged != '' && user_character.defense_skills.ranged in skill_total)
    {
        defense_skills_ranged_dice_pool_size = calc_dice_pool_size(skill_total[user_character.defense_skills.ranged]);
        // Cap dice pool here
        // var defense_skills_ranged_dice_pool = (defense_skills_ranged_dice_pool_size <= maxDicePool) ? defense_skills_ranged_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        defense_skills_ranged_dice_pool = defense_skills_ranged_dice_pool_size;

        derived_stats['Ranged Defense'] += defense_skills_ranged_dice_pool;
    }
    if (user_character.defense_skills.mental != '' && user_character.defense_skills.mental in skill_total)
    {
        defense_skills_mental_dice_pool_size = calc_dice_pool_size(skill_total[user_character.defense_skills.mental]);
        // Cap dice pool here
        // var defense_skills_mental_dice_pool = (defense_skills_mental_dice_pool_size <= maxDicePool) ? defense_skills_mental_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        defense_skills_mental_dice_pool = defense_skills_mental_dice_pool_size;

        derived_stats['Mental Defense'] += defense_skills_mental_dice_pool;
    }
    if (user_character.defense_skills.vital != '' && user_character.defense_skills.vital in skill_total)
    {
        defense_skills_vital_dice_pool_size = calc_dice_pool_size(skill_total[user_character.defense_skills.vital]);
        // Cap dice pool here
        // var defense_skills_vital_dice_pool = (defense_skills_vital_dice_pool_size <= maxDicePool) ? defense_skills_vital_dice_pool_size : maxDicePool;

        // Don't cap dice pool here
        defense_skills_vital_dice_pool = defense_skills_vital_dice_pool_size;

        derived_stats['Vital Defense'] += defense_skills_vital_dice_pool;
    }

    derived_stats['Melee Defense'] = Math.ceil(derived_stats['Melee Defense'] * 3.5);
    derived_stats['Ranged Defense'] = Math.ceil(derived_stats['Ranged Defense'] * 3.5);
    derived_stats['Mental Defense'] = Math.ceil(derived_stats['Mental Defense'] * 3.5);
    derived_stats['Vital Defense'] = Math.ceil(derived_stats['Vital Defense'] * 3.5);

    if (user_character.race['Size'] == 'tiny')
    {        
        derived_stats['Melee Defense'] += 4;
        derived_stats['Ranged Defense'] += 4;
    }
    else if (user_character.race['Size'] == 'small')
    {
        derived_stats['Melee Defense'] += 2;
        derived_stats['Ranged Defense'] += 2;
    }
    else if (user_character.race['Size'] == 'large')
    {
        derived_stats['Melee Defense'] -= 4;
        derived_stats['Ranged Defense'] -= 4;
    }
    else if (user_character.race['Size'] == 'enormous')
    {
        derived_stats['Melee Defense'] -= 8;
        derived_stats['Ranged Defense'] -= 8;
    }
    else if (user_character.race['Size'] == 'gigantic')
    {
        derived_stats['Melee Defense'] -= 16;
        derived_stats['Ranged Defense'] -= 16;
    }
    else if (user_character.race['Size'] == 'colossal')
    {
        derived_stats['Melee Defense'] -= 32;
        derived_stats['Ranged Defense'] -= 32;
    }
    else if (user_character.race['Size'] == 'titantic')
    {
        // extrapolation based on previous trends
        derived_stats['Melee Defense'] -= 64;
        derived_stats['Ranged Defense'] -= 64;
    }

    if (derived_stats['Melee Defense'] < 10) derived_stats['Melee Defense'] = 10;
    if (derived_stats['Ranged Defense'] < 10) derived_stats['Ranged Defense'] = 10;
    if (derived_stats['Mental Defense'] < 10) derived_stats['Mental Defense'] = 10;
    if (derived_stats['Vital Defense'] < 10) derived_stats['Vital Defense'] = 10;

    return derived_stats;
}