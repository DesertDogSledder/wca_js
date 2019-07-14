var race_dict = {
    'old': race_old_dict,
    'now': race_now_dict,
    'new': race_new_dict,
};

// Event Bindings
// Overview
$("#ovrBtnEditName").on("click", editNameModal);
$("#ovrEditNameModalBtnSave").on("click", editNameModalAccept);
$("#ovrBtnNewCharacter").on("click", newCharacterModal);
$("#ovrNewCharacterModalBtnSave").on("click", newCharacterModalAccept);
$("#rceBtnEditRace").on("click", selectRaceModal);

$("#rceSelectRaceModalSource").on("change", raceModalSelectSource);
$("#rceSelectRaceModalRace").on("change", raceModalSelectRace);
$("#rceSelectRaceModalSave").on("click", raceModalAccept);

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Overview Tab
function refreshOverview () {
    let userCharacter = getUserCharacter();
    $("#ovrNameVal").html(userCharacter.name);
    $("#ovrRaceVal").html(getRace(userCharacter).name);
    $("#ovrHomeworldVal").html(getHomeworld(userCharacter).name);

    statTotal = calcStatTotal(userCharacter);
    for (stat in statTotal) {
        $("#ovr" + stat.charAt(0).toUpperCase() + stat.slice(1)).html(statTotal[stat]);
    }

    skillTotal = calcSkillTotal(userCharacter);
    $("#ovrSkillList").html('');    // Clear skill list
    for (skill in skillTotal) {
        $("#ovrSkillList").appendTo("<li>" + skill + "</li");
    }

    exploitTotal = calcExploitTotal(userCharacter);
    $("#ovrExploitList").html('');    // Clear exploit list
    for (exploit in exploitTotal) {
        $("#ovrExploitList").append("<li data-toggle='tooltip' data-placement='left' title=\'" + exploitTotal[exploit] + "\'>" + exploit + "</li>");
    }

    derivedStats = calcDerivedStats(userCharacter);
    $("#ovrHealthInfo").html(derivedStats['Health']);
    $("#ovrInitiativeInfo").html(derivedStats['Initiative']);

    $("#ovrMovementSpeed").html(derivedStats['Speed']);
    $("#ovrMovementClimb").html(derivedStats['Climb']);
    $("#ovrMovementSwim").html(derivedStats['Swim']);
    $("#ovrMovementG").html(derivedStats['Zero-G'] + '/' + derivedStats['Low-G'] + '/' + derivedStats['High-G']);
    $("#ovrMovementVerticalJump").html(derivedStats['Vertical Jump Standing'] + '\'/' + derivedStats['Vertical Jump Running'] + '\'');
    $("#ovrMovementHorizontalJump").html(derivedStats['Horizontal Jump Standing'] + '\'/' + derivedStats['Horizontal Jump Running'] + '\'');
    $("#ovrMovementCarry").html(derivedStats['Carry']);
    
    $("#ovrDefenseMelee").html(derivedStats['Melee Defense']);
    $("#ovrDefenseRanged").html(derivedStats['Ranged Defense']);
    $("#ovrDefenseMental").html(derivedStats['Mental Defense']);
    $("#ovrDefenseVital").html(derivedStats['Vital Defense']);
}

function newCharacterModal() {
    $("#ovrNewCharacterModal").modal();
}

function newCharacterModalAccept() {
    newCharacter();
    $("#ovrNewCharacterModal").modal('toggle');
    refreshOverview();
}

function editNameModal() {
    let userCharacter = getUserCharacter();
    $("#ovrEditNameModal").modal();
    $("#ovrEditNameInput").val(userCharacter.name);
}

function editNameModalAccept() {
    let userCharacter = getUserCharacter();
    userCharacter.name = $("#ovrEditNameInput").val();
    saveCharacter(userCharacter);
    $("#ovrEditNameModal").modal('toggle');
    refreshOverview();
}


// Race Tab
function refreshRace() {
    let userCharacter = getUserCharacter();
    $("#rceNameVal").html(race_dict[userCharacter.race.source][userCharacter.race.id].name)

    for (stat in userCharacter.race.stats) {
        $("#rce" + stat.charAt(0).toUpperCase() + stat.slice(1)).html(userCharacter.race.stats[stat]);
    }
}

function selectRaceModal() {
    let userCharacter = getUserCharacter();
    $("#rceSelectRaceModal").modal();
    // console.log(userCharacter.race.source);
    $("#rceSelectRaceModalSource").val(userCharacter.race.source);
    raceModalSelectSource();
    $("#rceSelectRaceModalRace").val(userCharacter.race.id);
    raceModalSelectRace();
}

function raceModalSelectSource() {
    // console.log('raceModalSelectSource called');
    let source_val = $("#rceSelectRaceModalSource").val();
    $("#rceSelectRaceModalRace").empty();
    for (race in race_dict[source_val]) {
        $("#rceSelectRaceModalRace").append($('<option>', {
            value: race,
            text: race_dict[source_val][race].name
        }));
    }
}

function raceModalSelectRace() {
    let race_val = $("#rceSelectRaceModalRace").val();
    let source_val = $("#rceSelectRaceModalSource").val();
    $("#rceSelectRaceModalDesc").html(race_dict[source_val][race_val].description);
    $("#rceSelectRaceModalSkills").html('');
    // for (let i = 0; i < race_dict[source_val][race_val].availableSkills.length; i++) {
    for (skill in race_dict[source_val][race_val].availableSkills) {
        $("#rceSelectRaceModalSkills").append('<li>' + race_dict[source_val][race_val].availableSkills[skill] + '</li>');
    }
    $("#rceSelectRaceModalExploits").html('');
    for (exploit in race_dict[source_val][race_val].exploits) {
        $("#rceSelectRaceModalExploits").append("<li data-toggle='tooltip' data-placement='left' title=\'" + race_dict[source_val][race_val].exploits[exploit]['Desc'] + "\'>" + race_dict[source_val][race_val].exploits[exploit]['Name'] + "</li>")
    }
    for (stat in race_dict[source_val][race_val].stats) {
        $("#rceSelectRaceModal" + stat.charAt(0).toUpperCase() + stat.slice(1)).val(race_dict[source_val][race_val].stats[stat]);
    }
}

function raceModalAccept() {
    let userCharacter = getUserCharacter();
    userCharacter.race.source = $("#rceSelectRaceModalSource").val();
    userCharacter.race.id = $("#rceSelectRaceModalRace").val();
    for (stat in userCharacter.race.stats) {
        userCharacter.race.stats[stat] = $("#rceSelectRaceModal" + stat.charAt(0).toUpperCase() + stat.slice(1)).val();
    }
    saveCharacter(userCharacter);
    $("#rceSelectRaceModal").modal('toggle');
    refreshRace();
}