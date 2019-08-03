var race_skills = {};

// Event bindings
$("#rce_btn_edit_race").on("click", select_race_modal);
$("#rce_select_race_modal_source").on("change", race_modal_select_source);
$("#rce_select_race_modal_race").on("change", race_modal_select_race);
$("#rce_select_race_modal_save").on("click", race_modal_accept);
$("#rce_btn_edit_size").on("click", edit_size_modal);
$("#rce_edit_size_modal_save").on("click", edit_size_modal_accept);
$("#rce_btn_edit_stats").on("click", edit_stats_modal);
$("#rce_edit_stats_modal_save").on("click", edit_stats_modal_accept);

$("#rce_btn_edit_skills").on("click", edit_race_skills_modal);
$("#rce_edit_skils_modal_add").on("click", edit_race_skills_modal_add);
$("#rce_edit_skils_modal_remove").on("click", edit_race_skills_modal_remove);
$("#rce_edit_skills_modal_save").on("click", edit_race_skills_modal_accept);

$("#rce_select_race_modal").on('shown.bs.modal', enable_tooltips);

function refresh_race() {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    let race_exploits = race_exploits_dict[user_character.race.source][user_character.race.id]
    console.log(user_character.race.skills);
    // $("#rce_name_val").html(race_dict[user_character.race.source][user_character.race.id].name)
    $("#rce_name_val").html(character_race.name);
    
    $("#rce_size_val").html(user_character.race.size.charAt(0).toUpperCase() + user_character.race.size.slice(1));

    $("#rce_selected_skills_list").empty();
    for (skill in user_character.race.skills) {
        $("#rce_selected_skills_list").append('<li>' + skill + ' (' + user_character.race.skills[skill] + ')');
    }
    $("#rce_exploits_list").empty();
    for (exploit in race_exploits) {
        $("#rce_exploits_list").append("<li data-toggle='tooltip' data-placement='left' title=\"" + race_exploits[exploit]['desc'] + "\">" + race_exploits[exploit]['name'] + "</li>")
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
    let source_val = $("#rce_select_race_modal_source").val();
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
    for (exploit in race_exploits_dict[source_val][race_val]) {
        $("#rce_select_race_modal_exploits").append("<li data-toggle='tooltip' data-placement='left' title=\"" + race_exploits_dict[source_val][race_val][exploit]['desc'] + "\">" + race_exploits_dict[source_val][race_val][exploit]['name'] + "</li>")
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

function edit_race_skills_modal() {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    $("#rce_edit_skills_modal").modal();
    $("#rce_edit_skills_modal_avail_skills").html('');
    $("#rce_edit_skills_modal_skill").val('');
    $("#rce_edit_skills_modal_rank").val(1);
    
    for (skill in character_race.available_skills) {
        $("#rce_edit_skills_modal_avail_skills").append('<li>' + character_race.available_skills[skill] + '</li>');
    }

    race_skills = user_character.race.skills;
    console.log(race_skills);
    
    edit_race_skills_modal_refresh_curr_skills();
}

function edit_race_skills_modal_refresh_curr_skills() {
    $("#rce_edit_skills_modal_curr_skills").empty();
    for (skill in race_skills) {
        $("#rce_edit_skills_modal_curr_skills").append($('<option>', {
            value: skill,
            text: skill + " (" + race_skills[skill] + ")"
        }));
    }
}

function edit_race_skills_modal_add() {
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
        edit_race_skills_modal_refresh_curr_skills();
    }
    // console.log(race_skills);
}

function edit_race_skills_modal_remove() {
    let selected_options = [];
    $("#rce_edit_skills_modal_curr_skills option:selected").each(function() {
        selected_options.push($(this).val());
    });
    for (option in selected_options) {
        delete race_skills[selected_options[option]];
    }
    edit_race_skills_modal_refresh_curr_skills();
}

function edit_race_skills_modal_accept() {
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