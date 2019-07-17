// Event bindings
$("#ovr_btn_edit_name").on("click", edit_name_modal);
$("#ovr_edit_name_modal_btn_save").on("click", edit_name_modal_accept);
$("#ovr_btn_new_character").on("click", new_character_modal);
$("#ovr_new_character_modal_btn_save").on("click", new_character_modal_accept);

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