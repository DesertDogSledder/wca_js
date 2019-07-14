function calcDicePoolSize(rawScore) {
    var dicePoolSize = 0;
    var scoreComparison = 0;
    var comparisonIncrement = 2;

    while (rawScore > scoreComparison) {
        dicePoolSize += 1;
        scoreComparison += comparisonIncrement;
        comparisonIncrement += 1;
    };

    return dicePoolSize;
}

function calcMaxDicePoolSize(careerGrade) {
    var maxDicePoolSize = 5;
    var scoreComparison = 5;
    var comparisonIncrement = 2;

    while (careerGrade > scoreComparison) {
        maxDicePoolSize += 1;
        scoreComparison += comparisonIncrement;
        comparisonIncrement += 1;
    };

    return maxDicePoolSize;
}

function getUserCharacter() {
    if (localStorage.getItem('userCharacter') == null) {
        newCharacter();
    }
    let userCharacter = JSON.parse(localStorage.getItem('userCharacter'));
    return userCharacter;
}

function newCharacter() {
    let userCharacter = {
        'name': 'unset',
        'race': {
            'source': 'new',
            'id': 'race_new_human',
            'stats': {
                'strength': 0,
                'agility': 0,
                'endurance': 0,
                'intuition': 0,
                'logic': 0,
                'willpower': 0,
                'charisma': 0,
                'luck': 2,
                'reputation': 0,
                'magic': 0,
                'chi': 0,
                'psionics': 0
            },
            'size': 'medium',
            'skills': [],
        },
        'homeworld': {
            'source': 'new',
            'id': 'homeworld_none',
            'stats': {},
            'skills': [],
        },
        'careerTrack': [],
        'notes': '',
        'trait': {},
        'miscExploits': [],
        'defenseSkills': {
            'melee': '',
            'ranged': '',
            'mental': '',
            'vital': '',
        },
        'ageDescriptor': 'unset',
        'equipment': [],
    };

    localStorage.setItem('userCharacter', JSON.stringify(userCharacter));
}

function saveCharacter(userCharacter) {
    localStorage.setItem('userCharacter', JSON.stringify(userCharacter));
}

function fetchRaceDict(race_source) {
    if (race_source == 'old') {
        race_dict = race_old_dict;
    } else if (race_source == 'now') {
        race_dict = race_now_dict;
    } else {
        race_dict = race_new_dict;
    }
    return race_dict;
}

function getRace(userCharacter) {
    race_dict = fetchRaceDict(userCharacter.race.source);
    return race_dict[userCharacter.race.id];
}

function fetchHomeworldDict(homeworld_source) {
    homeworld_dict = homeworld_new_dict;
    return homeworld_dict;
}

function getHomeworld(userCharacter) {
    homeworld_dict = fetchHomeworldDict(userCharacter.homeworld.source);
    return homeworld_dict[userCharacter.homeworld.id];
}

function calcStatTotal(userCharacter)
{
    // Base stats
    let statTotal = {
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

    for (stat in userCharacter.race.stats) {
        statTotal[stat] += userCharacter.race.stats[stat];
    }

    for (stat in userCharacter.homeworld.stats) {
        statTotal[stat] += userCharacter.homeworld.stats[stat];
    }

    for (career in userCharacter.careerTrack)
    {
        for (stat in userCharacter.careerTrack[career].stats)
        {
            statTotal[stat] += userCharacter.careerTrack[career].stats[stat];
        }
    }

    // console.log(statTotal);
    return statTotal;
}

function calcSkillTotal(userCharacter)
{
    let skillTotal = {};
    // Racial skill tally
    for (skill in userCharacter.race.skills)
    {
        if (skill in skillTotal) skillTotal[skill] += userCharacter.race.skills[skill];
        else skillTotal[skill] = userCharacter.race.skills[skill];
    }
    // Homeworld skill tally
    for (skill in userCharacter.homeworld.skills)
    {
        if (skill in skillTotal) skillTotal[skill] += userCharacter.homeworld.skills[skill];
        else skillTotal[skill] = userCharacter.homeworld.skills[skill];
    }
    // Career skill tally
    for (career in userCharacter.careerTrack)
    {
        for (skill in userCharacter.careerTrack.skills)
        {
            if (skill in skillTotal) skillTotal[skill] += career.skills[skill];
            else skillTotal[skill] = career.skills[skill];    
        }
    }

    let storedSkillTotal = sortObject(skillTotal);
    // console.log(storedSkillTotal);
    return storedSkillTotal;
}

function calcExploitTotal(userCharacter)
{
    let exploitTotal = {};
    userCharacterRace = getRace(userCharacter)
    for (let i=0; i<userCharacterRace.exploits.length; i++)
    {
        exploitTotal[userCharacterRace.exploits[i]['Name']] = userCharacterRace.exploits[i]['Desc'];
    }

    let sortedExploitTotal = sortObject(exploitTotal);
    // console.log(sortedExploitTotal);
    return sortedExploitTotal;
}

function calcDerivedStats(userCharacter)
{
    let derivedStats = {};
    let statTotal = calcStatTotal(userCharacter)
    let skillTotal = calcSkillTotal(userCharacter)

    let maxDicePool = calcMaxDicePoolSize(userCharacter.careerTrack.length);
    let strDicePoolSize = calcDicePoolSize(statTotal['strength']);
    let agiDicePoolSize = calcDicePoolSize(statTotal['agility']);
    let endDicePoolSize = calcDicePoolSize(statTotal['endurance']);
    let intDicePoolSize = calcDicePoolSize(statTotal['intuition']);
    let wilDicePoolSize = calcDicePoolSize(statTotal['willpower']);
    let chaDicePoolSize = calcDicePoolSize(statTotal['charisma']);

    // Cap dice pools here
    // let strDicePool = (strDicePoolSize <= maxDicePool) ? strDicePoolSize : maxDicePool;
    // let agiDicePool = (agiDicePoolSize <= maxDicePool) ? agiDicePoolSize : maxDicePool;
    // let endDicePool = (endDicePoolSize <= maxDicePool) ? endDicePoolSize : maxDicePool;
    // let intDicePool = (intDicePoolSize <= maxDicePool) ? intDicePoolSize : maxDicePool;
    // let wilDicePool = (wilDicePoolSize <= maxDicePool) ? wilDicePoolSize : maxDicePool;
    // let chaDicePool = (chaDicePoolSize <= maxDicePool) ? chaDicePoolSize : maxDicePool;

    // Don't cap dice pools here
    let strDicePool = strDicePoolSize;
    let agiDicePool = agiDicePoolSize;
    let endDicePool = endDicePoolSize;
    let intDicePool = intDicePoolSize;
    let wilDicePool = wilDicePoolSize;
    let chaDicePool = chaDicePoolSize;


    ////////////
    // HEALTH //
    ////////////
    let averageHealth = endDicePool + wilDicePool;
    let healthInfo = 'Roll endurance (' + endDicePool + 'd6) + WIL (' + wilDicePool + 'd6)';

    if ('hardy' in skillTotal)
    {
        let hardyDicePoolSize = calcDicePoolSize(skillTotal.hardy);
        // Cap dice pool here
        // let hardyDicePool = (hardyDicePoolSize <= maxDicePool) ? hardyDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        let hardyDicePool = hardyDicePoolSize;
        healthInfo += ' + hardy (' + hardyDicePool + 'd6)';
        averageHealth += hardyDicePool;
    }

    averageHealth = Math.ceil(averageHealth * 3.5);
    if (averageHealth >= 10) healthInfo += ' (average = ' + averageHealth + ')';
    else healthInfo += ' (average bumped up to minimum = 10)';

    derivedStats['Health'] = healthInfo;

    ///////////
    // SPEED //
    ///////////
    let baseSpeed = strDicePool + agiDicePool;
    let speed = baseSpeed;
    if ('running' in skillTotal)
    {
        runningDicePoolSize = calcDicePoolSize(skillTotal['running']);
        // Cap dice pool here
        // runningDicePool = (runningDicePoolSize <= maxDicePool) ? runningDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        runningDicePool = runningDicePoolSize;
        
        speed += runningDicePool;
    }

    let climbing = baseSpeed;
    let swimming = baseSpeed;
    let zeroG = baseSpeed;
    let highG = baseSpeed;
    let lowG = baseSpeed;

    if ('climbing' in skillTotal)
    {
        climbingDicePoolSize = calcDicePoolSize(skillTotal['climbing']);
        // Cap dice pool here
        // climbingDicePool = (climbingDicePoolSize <= maxDicePool) ? climbingDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        climbingDicePool = climbingDicePoolSize;
        climbing += climbingDicePool;

    }
    if ('swimming' in skillTotal)
    {
        swimmingDicePoolSize = calcDicePoolSize(skillTotal['swimming']);
        // Cap dice pool here
        // swimmingDicePool = (swimmingDicePoolSize <= maxDicePool) ? swimmingDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        swimmingDicePool = swimmingDicePoolSize;
        swimming += swimmingDicePool;

    }
    if ('zero-g' in skillTotal)
    {
        zero_gDicePoolSize = calcDicePoolSize(skillTotal['zero-g']);
        // Cap dice pool here
        // zero_gDicePool = (zero_gDicePoolSize <= maxDicePool) ? zero_gDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        zero_gDicePool = zero_gDicePoolSize;
        zeroG += zero_gDicePool;

    }
    if ('high-g' in skillTotal)
    {
        highGDicePoolSize = calcDicePoolSize(skillTotal['high-g']);
        // Cap dice pool here
        // high_gDicePool = (high_gDicePoolSize <= maxDicePool) ? high_gDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        high_gDicePool = high_gDicePoolSize;
        highG += high_gDicePool;

    }
    if ('low-g' in skillTotal)
    {
        low_gDicePoolSize = calcDicePoolSize(skillTotal['low-g']);
        // Cap dice pool here
        // low_gDicePool = (low_gDicePoolSize <= maxDicePool) ? low_gDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        low_gDicePool = low_gDicePoolSize;
        lowG += low_gDicePool;

    }

    climbing = Math.ceil(climbing / 2);
    swimming = Math.ceil(swimming / 2);
    zeroG = Math.ceil(zeroG / 2);
    highG = Math.ceil(highG / 2);
    lowG = Math.ceil(lowG / 2);

    derivedStats['Speed'] = speed;
    derivedStats['Climb'] = climbing;
    derivedStats['Swim'] = swimming;
    derivedStats['Zero-G'] = zeroG;
    derivedStats['High-G'] = highG;
    derivedStats['Low-G'] = lowG;

    //////////
    // JUMP //
    //////////
    derivedStats['Horizontal Jump Running'] = statTotal['agility'] * 2;
    derivedStats['Horizontal Jump Standing'] = statTotal['agility'];
    // Vertical jump values cannot exceed horizontal jump values
    if (statTotal['strength'] <= statTotal['agility'])
    {
        var verticalJumpStanding = statTotal['strength'];
        var verticalJumpRunning = statTotal['strength'] * 2;
    }
    else
    {
        var verticalJumpStanding = statTotal['agility'];
        var verticalJumpRunning = statTotal['agility'] * 2;
    }
    derivedStats['Vertical Jump Running'] = verticalJumpRunning;
    derivedStats['Vertical Jump Standing'] = verticalJumpStanding;

    ///////////
    // CARRY //
    ///////////
    if ('carry' in skillTotal) var base_carry = (statTotal['strength'] + statTotal['endurance'] + skillTotal['carry']) * 10;
    else var base_carry = (statTotal['strength'] + statTotal['endurance']) * 10;

    if (userCharacter.race['Size'] == 'large') base_carry = Math.ceil(base_carry * 1.5);
    else if (userCharacter.race['Size'] == 'enormous') base_carry *= 2;
    else if (userCharacter.race['Size'] == 'gigantic') base_carry *= 4;
    else if (userCharacter.race['Size'] == 'colossal') base_carry *= 8;
    else if (userCharacter.race['Size'] == 'titanic') base_carry *= 16;

    derivedStats['Carry'] = base_carry + ' (before exploits)';

    ////////////////
    // INITIATIVE //
    ////////////////
    if ('tactics' in skillTotal)
    {
        var tacticsDicePoolSize = calcDicePoolSize(skillTotal['tactics']);
        // Cap dice pool here
        // var tacticsDicePool = (tacticsDicePoolSize <= maxDicePool) ? tacticsDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        var tacticsDicePool = tacticsDicePoolSize;
    }
    else var tacticsDicePool = 0;
    if ('reactions' in skillTotal)
    {
        var reactionsDicePoolSize = calcDicePoolSize(skillTotal['reactions'])
        // Cap dice pool here
        // var reactionsDicePool = (reactionsDicePoolSize <= maxDicePool) ? reactionsDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        var reactionsDicePool = reactionsDicePoolSize;
    }
    else var reactionsDicePool = 0;

    derivedStats['Initiative'] = intDicePool + Math.max(tacticsDicePool, reactionsDicePool);

    //////////////
    // DEFENSES //
    //////////////
    derivedStats['Melee Defense'] = Math.max(strDicePool, agiDicePool);
    derivedStats['Ranged Defense'] = agiDicePool;
    derivedStats['Mental Defense'] = Math.max(chaDicePool, wilDicePool);
    derivedStats['Vital Defense'] = endDicePool;

    if (userCharacter.defenseSkills['Melee'] != '' && userCharacter.defenseSkills['Melee'] in skillTotal)
    {
        defenseSkillsMeleeDicePoolSize = calcDicePoolSize(skillTotal[userCharacter.defenseSkills['Melee']]);
        // Cap dice pool here
        // var defenseSkillsMeleeDicePool = (defenseSkillsMeleeDicePoolSize <= maxDicePool) ? defenseSkillsMeleeDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        defenseSkillsMeleeDicePool = defenseSkillsMeleeDicePoolSize;

        derivedStats['Melee Defense'] += defenseSkillsMeleeDicePool;
    }
    if (userCharacter.defenseSkills['Ranged'] != '' && userCharacter.defenseSkills['Ranged'] in skillTotal)
    {
        defenseSkillsRangedDicePoolSize = calcDicePoolSize(skillTotal[userCharacter.defenseSkills['Ranged']]);
        // Cap dice pool here
        // var defenseSkillsRangedDicePool = (defenseSkillsRangedDicePoolSize <= maxDicePool) ? defenseSkillsRangedDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        defenseSkillsRangedDicePool = defenseSkillsRangedDicePoolSize;

        derivedStats['Ranged Defense'] += defenseSkillsRangedDicePool;
    }
    if (userCharacter.defenseSkills['Mental'] != '' && userCharacter.defenseSkills['Mental'] in skillTotal)
    {
        defenseSkillsMentalDicePoolSize = calcDicePoolSize(skillTotal[userCharacter.defenseSkills['Mental']]);
        // Cap dice pool here
        // var defenseSkillsMentalDicePool = (defenseSkillsMentalDicePoolSize <= maxDicePool) ? defenseSkillsMentalDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        defenseSkillsMentalDicePool = defenseSkillsMentalDicePoolSize;

        derivedStats['Mental Defense'] += defenseSkillsMentalDicePool;
    }
    if (userCharacter.defenseSkills['Vital'] != '' && userCharacter.defenseSkills['Vital'] in skillTotal)
    {
        defenseSkillsVitalDicePoolSize = calcDicePoolSize(skillTotal[userCharacter.defenseSkills['Vital']]);
        // Cap dice pool here
        // var defenseSkillsVitalDicePool = (defenseSkillsVitalDicePoolSize <= maxDicePool) ? defenseSkillsVitalDicePoolSize : maxDicePool;

        // Don't cap dice pool here
        defenseSkillsVitalDicePool = defenseSkillsVitalDicePoolSize;

        derivedStats['Vital Defense'] += defenseSkillsVitalDicePool;
    }

    derivedStats['Melee Defense'] = Math.ceil(derivedStats['Melee Defense'] * 3.5);
    derivedStats['Ranged Defense'] = Math.ceil(derivedStats['Ranged Defense'] * 3.5);
    derivedStats['Mental Defense'] = Math.ceil(derivedStats['Mental Defense'] * 3.5);
    derivedStats['Vital Defense'] = Math.ceil(derivedStats['Vital Defense'] * 3.5);

    if (userCharacter.race['Size'] == 'tiny')
    {        
        derivedStats['Melee Defense'] += 4;
        derivedStats['Ranged Defense'] += 4;
    }
    else if (userCharacter.race['Size'] == 'small')
    {
        derivedStats['Melee Defense'] += 2;
        derivedStats['Ranged Defense'] += 2;
    }
    else if (userCharacter.race['Size'] == 'large')
    {
        derivedStats['Melee Defense'] -= 4;
        derivedStats['Ranged Defense'] -= 4;
    }
    else if (userCharacter.race['Size'] == 'enormous')
    {
        derivedStats['Melee Defense'] -= 8;
        derivedStats['Ranged Defense'] -= 8;
    }
    else if (userCharacter.race['Size'] == 'gigantic')
    {
        derivedStats['Melee Defense'] -= 16;
        derivedStats['Ranged Defense'] -= 16;
    }
    else if (userCharacter.race['Size'] == 'colossal')
    {
        derivedStats['Melee Defense'] -= 32;
        derivedStats['Ranged Defense'] -= 32;
    }
    else if (userCharacter.race['Size'] == 'titantic')
    {
        // extrapolation based on previous trends
        derivedStats['Melee Defense'] -= 64;
        derivedStats['Ranged Defense'] -= 64;
    }

    if (derivedStats['Melee Defense'] < 10) derivedStats['Melee Defense'] = 10;
    if (derivedStats['Ranged Defense'] < 10) derivedStats['Ranged Defense'] = 10;
    if (derivedStats['Mental Defense'] < 10) derivedStats['Mental Defense'] = 10;
    if (derivedStats['Vital Defense'] < 10) derivedStats['Vital Defense'] = 10;

    return derivedStats;
}