var race_dict = {
    'old': race_old_dict,
    'now': race_now_dict,
    'new': race_new_dict,
};

var homeworld_dict = {
    'new': homeworld_new_dict,
}

var race_skills = {};
var homeworld_skills = {};

// Event Bindings
// Overview
$("#ovr_btn_edit_name").on("click", edit_name_modal);
$("#ovr_edit_name_modal_btn_save").on("click", edit_name_modal_accept);
$("#ovr_btn_new_character").on("click", new_character_modal);
$("#ovr_new_character_modal_btn_save").on("click", new_character_modal_accept);

// Race
$("#rce_btn_edit_race").on("click", select_race_modal);
$("#rce_select_race_modal_source").on("change", race_modal_select_source);
$("#rce_select_race_modal_race").on("change", race_modal_select_race);
$("#rce_select_race_modal_save").on("click", race_modal_accept);
$("#rce_btn_edit_size").on("click", edit_size_modal);
$("#rce_edit_size_modal_save").on("click", edit_size_modal_accept);
$("#rce_btn_edit_stats").on("click", edit_stats_modal);
$("#rce_edit_stats_modal_save").on("click", edit_stats_modal_accept);

$("#rce_btn_edit_skills").on("click", edit_skills_modal);
$("#rce_edit_skils_modal_add").on("click", edit_skills_modal_add);
$("#rce_edit_skils_modal_remove").on("click", edit_skills_modal_remove);
$("#rce_edit_skills_modal_save").on("click", edit_skills_modal_accept);

$("#rce_select_race_modal").on('shown.bs.modal', enable_tooltips);

//////////////////
// Overview Tab //
//////////////////
function refresh_overview () {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    let character_homeworld = homeworld_dict[user_character.homeworld.source][user_character.homeworld.id];

    $("#ovr_name_val").html(user_character.name);
    $("#ovr_race_val").html(character_race.name);
    $("#ovr_homeworld_val").html(character_homeworld.name);

    stat_total = calc_stat_total(user_character);
    for (stat in stat_total) {
        $("#ovr_" + stat).html(format_num(stat_total[stat]));
    }

    skill_total = calc_skill_total(user_character);
    $("#ovr_skill_list").html('');    // Clear skill list
    for (skill in skill_total) {
        $("#ovr_skill_list").append("<li>" + skill + " (" + skill_total[skill] + ")</li>");
    }

    exploit_total = calc_exploit_total(user_character);
    $("#ovr_exploit_list").html('');    // Clear exploit list
    for (exploit in exploit_total) {
        $("#ovr_exploit_list").append("<li data-toggle='tooltip' data-placement='left' title=\'" + exploit_total[exploit] + "\'>" + exploit + "</li>");
    }

    derived_stats = calc_derived_stats(user_character);
    $("#ovr_health_info").html(derived_stats['Health']);
    $("#ovr_initiative_info").html(derived_stats['Initiative']);

    $("#ovr_movement_speed").html(derived_stats['Speed']);
    $("#ovr_movement_climb").html(derived_stats['Climb']);
    $("#ovr_movement_swim").html(derived_stats['Swim']);
    $("#ovr_movement_g").html(derived_stats['Zero-G'] + '/' + derived_stats['Low-G'] + '/' + derived_stats['High-G']);
    $("#ovr_movement_vertical_jump").html(derived_stats['Vertical Jump Standing'] + '\'/' + derived_stats['Vertical Jump Running'] + '\'');
    $("#ovr_movement_horizontal_jump").html(derived_stats['Horizontal Jump Standing'] + '\'/' + derived_stats['Horizontal Jump Running'] + '\'');
    $("#ovr_movement_carry").html(derived_stats['Carry']);
    
    $("#ovr_defense_melee").html(derived_stats['Melee Defense']);
    $("#ovr_defense_ranged").html(derived_stats['Ranged Defense']);
    $("#ovr_defense_mental").html(derived_stats['Mental Defense']);
    $("#ovr_defense_vital").html(derived_stats['Vital Defense']);

    enable_tooltips();
}

function new_character_modal() {
    $("#ovr_new_character_modal").modal();
}

function new_character_modal_accept() {
    new_character();
    $("#ovr_new_character_modal").modal('toggle');
    refresh_overview();
}

function edit_name_modal() {
    let user_character = get_user_character();
    $("#ovr_edit_name_modal").modal();
    $("#ovr_edit_name_input").val(user_character.name);
}

function edit_name_modal_accept() {
    let user_character = get_user_character();
    user_character.name = $("#ovr_edit_name_input").val();
    save_character(user_character);
    $("#ovr_edit_name_modal").modal('toggle');
    refresh_overview();
}

//////////////
// Race Tab //
//////////////
function refresh_race() {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    console.log(user_character.race.skills);
    // $("#rce_name_val").html(race_dict[user_character.race.source][user_character.race.id].name)
    $("#rce_name_val").html(character_race.name);
    
    $("#rce_size_val").html(user_character.race.size.charAt(0).toUpperCase() + user_character.race.size.slice(1));

    $("#rce_selected_skills_list").empty();
    for (skill in user_character.race.skills) {
        $("#rce_selected_skills_list").append('<li>' + skill + ' (' + user_character.race.skills[skill] + ')');
    }
    $("#rce_exploits_list").empty();
    for (exploit in character_race.exploits) {
        $("#rce_exploits_list").append("<li data-toggle='tooltip' data-placement='left' title=\"" + character_race.exploits[exploit]['Desc'] + "\">" + character_race.exploits[exploit]['Name'] + "</li>")
    }

    for (stat in user_character.race.stats) {
        $("#rce_" + stat).html(format_num(user_character.race.stats[stat]));
    }
    enable_tooltips();
}

function select_race_modal() {
    let user_character = get_user_character();
    $("#rce_select_race_modal").modal();
    // console.log(user_character.race.source);
    $("#rce_select_race_modal_source").val(user_character.race.source);
    race_modal_select_source();
    $("#rce_select_race_modal_race").val(user_character.race.id);
    race_modal_select_race();
}

function race_modal_select_source() {
    // console.log('race_modal_select_source called');
    let source_val = $("#rce_select_race_modal_source").val();
    console.log(source_val);
    console.log(race_dict[source_val]);
    console.log(race_dict);
    $("#rce_select_race_modal_race").empty();
    for (race in race_dict[source_val]) {
        $("#rce_select_race_modal_race").append($('<option>', {
            value: race,
            text: race_dict[source_val][race].name
        }));
    }
}

function race_modal_select_race() {
    let race_val = $("#rce_select_race_modal_race").val();
    let source_val = $("#rce_select_race_modal_source").val();
    $("#rce_select_race_modal_desc").html(race_dict[source_val][race_val].description);
    $("#rce_select_race_modal_skills").html('');
    // for (let i = 0; i < race_dict[source_val][race_val].available_skills.length; i++) {
    for (skill in race_dict[source_val][race_val].available_skills) {
        $("#rce_select_race_modal_skills").append('<li>' + race_dict[source_val][race_val].available_skills[skill] + '</li>');
    }
    $("#rce_select_race_modal_exploits").html('');
    for (exploit in race_dict[source_val][race_val].exploits) {
        $("#rce_select_race_modal_exploits").append("<li data-toggle='tooltip' data-placement='left' title=\"" + race_dict[source_val][race_val].exploits[exploit]['Desc'] + "\">" + race_dict[source_val][race_val].exploits[exploit]['Name'] + "</li>")
    }
    for (stat in race_dict[source_val][race_val].stats) {
        $("#rce_select_race_modal_" + stat).html(format_num(race_dict[source_val][race_val].stats[stat]));
    }
}

function race_modal_accept() {
    let user_character = get_user_character();
    let race_val = $("#rce_select_race_modal_race").val();
    let race_source_val = $("#rce_select_race_modal_source").val();
    set_race(user_character, race_source_val, race_val);
    // user_character.race.source = $("#rce_select_race_modal_source").val();
    // user_character.race.id = $("#rce_select_race_modal_race").val();
    // for (stat in user_character.race.stats) {
    //     // user_character.race.stats[stat] = $("#rce_select_race_modal" + stat.charAt(0).toUpperCase() + stat.slice(1)).val();
    //     user_character.race.stats[stat] = race_dict[source_val][race_val].stats[stat];
    // }
    save_character(user_character);
    $("#rce_select_race_modal").modal('toggle');
    refresh_race();
}

function edit_size_modal() {
    let user_character = get_user_character();
    $("#rce_edit_size_modal").modal();
    $("#rce_edit_size_modal_select_size").val(user_character.race.size);
}

function edit_size_modal_accept() {
    let user_character = get_user_character();
    user_character.race.size = $("#rce_edit_size_modal_select_size").val();
    save_character(user_character);
    $("#rce_edit_size_modal").modal('toggle');
    refresh_race();
}

function edit_skills_modal() {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    $("#rce_edit_skills_modal").modal();
    $("#rce_edit_skills_modal_avail_skills").html('');
    $("#rce_edit_skills_modal_skill").val('');
    $("#rce_edit_skills_modal_rank").val(0);
    
    for (skill in character_race.available_skills) {
        $("#rce_edit_skills_modal_avail_skills").append('<li>' + character_race.available_skills[skill] + '</li>');
    }

    race_skills = user_character.race.skills;
    console.log(race_skills);
    
    edit_skills_modal_refresh_curr_skills();
}

function edit_skills_modal_refresh_curr_skills() {
    $("#rce_edit_skills_modal_curr_skills").empty();
    let i = 0;
    for (skill in race_skills) {
        $("#rce_edit_skills_modal_curr_skills").append($('<option>', {
            value: skill,
            text: skill + " (" + race_skills[skill] + ")"
        }));
    }
}

function edit_skills_modal_add() {
    let skill_name = $("#rce_edit_skills_modal_skill").val().toLowerCase();
    let skill_rank = parseInt($("#rce_edit_skills_modal_rank").val());
    // console.log(skill_name + ": " + skill_rank);

    if (skill_name != '') {
        // Remove existing skill if setting rank to 0
        if (race_skills[skill_name] && skill_rank <= 0) {
            delete race_skills[skill_name];
        } else if (skill_rank > 0) {
            race_skills[skill_name] = skill_rank;
            $("#rce_edit_skills_modal_skill").val('');
            $("#rce_edit_skills_modal_rank").val(0);
        }
        race_skills = sort_object(race_skills);
        edit_skills_modal_refresh_curr_skills();
    }
    // console.log(race_skills);
}

function edit_skills_modal_remove() {
    let selected_options = [];
    $("#rce_edit_skills_modal_curr_skills option:selected").each(function() {
        selected_options.push($(this).val());
    });
    for (option in selected_options) {
        delete race_skills[selected_options[option]];
    }
    edit_skills_modal_refresh_curr_skills();
}

function edit_skills_modal_accept() {
    let user_character = get_user_character();
    user_character.race.skills = race_skills;
    save_character(user_character);
    $("#rce_edit_skills_modal").modal('toggle');
    refresh_race();
}

function edit_stats_modal() {
    let user_character = get_user_character();
    $("#rce_edit_stats_modal").modal();
    for (stat in user_character.race.stats) {
        $("#rce_edit_stats_modal_" + stat).val(user_character.race.stats[stat]);
    }
}

function edit_stats_modal_accept() {
    let user_character = get_user_character();
    for (stat in user_character.race.stats) {
        user_character.race.stats[stat] = parseInt($("#rce_edit_stats_modal_" + stat).val());
    }
    save_character(user_character);
    $("#rce_edit_stats_modal").modal('toggle');
    refresh_race();
}

///////////////////
// Homeworld Tab //
///////////////////

function refresh_homeworld() {
    let user_character = get_user_character();
    console.log(homeworld_dict[user_character.homeworld.source][user_character.homeworld.id]);
    $("#hmw_name_val").html(homeworld_dict[user_character.homeworld.source][user_character.homeworld.id].name);

    console.log(user_character.homeworld.stats);
    for (stat in user_character.homeworld.stats) {
        $("#hmw_" + stat).html(format_num(user_character.homeworld.stats[stat]));
    }
    enable_tooltips();
}