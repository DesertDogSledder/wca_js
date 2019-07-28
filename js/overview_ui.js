// Event bindings
$("#ovr_btn_new_character").on("click", new_character_modal);
$("#ovr_new_character_modal_btn_save").on("click", new_character_modal_accept);

$("#ovr_btn_load_character").on("click", load_character_modal);
$("#ovr_load_character_modal_btn_load").on("click", load_character_modal_accept);

$("#ovr_btn_save_character").on("click", save_character_modal);

$("#ovr_btn_edit_name").on("click", edit_name_modal);
$("#ovr_edit_name_modal_btn_save").on("click", edit_name_modal_accept);

$("#ovr_btn_edit_trait").on("click", edit_trait_modal);
$("#ovr_edit_trait_modal_exploit").on("change", edit_trait_modal_exploit);
$("#ovr_edit_trait_modal_save").on("click", edit_trait_modal_accept);

$("#ovr_btn_edit_defenses").on("click", edit_defenses_modal);
$("#ovr_edit_defenses_modal_btn_save").on("click", edit_defenses_modal_accept);

$("#ovr_btn_edit_hook").on("click", edit_hook_modal);
$("#ovr_edit_hook_modal_btn_save").on("click", edit_hook_modal_accept);

function refresh_overview () {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    let character_homeworld = homeworld_dict[user_character.homeworld.source][user_character.homeworld.id];
    let exploit_source = 'traits';

    $("#ovr_name_val").html(user_character.name);
    $("#ovr_race_val").html(character_race.name);
    $("#ovr_homeworld_val").html(character_homeworld.name);
    $("#ovr_trait_val").html('');
    $("#ovr_trait_val").attr("title", '');
    $("#ovr_hook_val").html(user_character.hook);

    if (user_character.trait) {
        $("#ovr_trait_val").html(exploit_dict[exploit_source][exploit_source][user_character.trait].name);
        $("#ovr_trait_val").attr("title", exploit_dict[exploit_source][exploit_source][user_character.trait].desc);
    }

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

/////////////////////////
// New Character Modal //
/////////////////////////
function new_character_modal() {
    $("#ovr_new_character_modal").modal();
}

function new_character_modal_accept() {
    new_character();
    $("#ovr_new_character_modal").modal('toggle');
    refresh_overview();
}
//////////////////////////
// Load Character Modal //
//////////////////////////
function load_character_modal() {
    $("#ovr_load_character_json_textarea").val('');
    $("#ovr_load_character_modal").modal();
}

function load_character_modal_accept() {
    load_character($("#ovr_load_character_json_textarea").val());
    $("#ovr_load_character_modal").modal('toggle');
    refresh_overview();
}

//////////////////////////
// Save Character Modal //
//////////////////////////
function save_character_modal() {
    let user_character = get_user_character();
    $("#ovr_save_character_modal").modal();
    $("#ovr_save_character_json_textarea").text(export_character(user_character));
}

/////////////////////
// Edit Name Modal //
/////////////////////
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

//////////////////////
// Edit Trait Modal //
//////////////////////
function edit_trait_modal() {
    let user_character = get_user_character();
    let exploit_source = 'traits';

    $("#ovr_edit_trait_modal_source").empty();
    $("#ovr_edit_trait_modal_source").append($('<option value=traits>Traits</option>'));
    $("#ovr_edit_trait_modal_exploit").empty();

    for (let exploit in exploit_dict[exploit_source][exploit_source]) {
        $("#ovr_edit_trait_modal_exploit").append($('<option value=' + exploit + '>' + exploit_dict[exploit_source][exploit_source][exploit]['name'] + '</option>'));
    }

    $("#ovr_edit_trait_modal").modal();

    if (user_character.trait) {
        $("#ovr_edit_trait_modal_exploit").val(user_character.trait);
    }
    edit_trait_modal_exploit();
}

function edit_trait_modal_exploit() {
    let exploit_source = 'traits';
    let selected_exploit = $("#ovr_edit_trait_modal_exploit").val();
    
    $("#ovr_edit_trait_modal_exploit_desc").html(exploit_dict[exploit_source][exploit_source][selected_exploit]['desc']);
}

function edit_trait_modal_accept() {
    let user_character = get_user_character();
    let selected_exploit = $("#ovr_edit_trait_modal_exploit").val();

    user_character.trait = selected_exploit;
    save_character(user_character);
    $("#ovr_edit_trait_modal").modal('toggle');
    refresh_overview();
}

/////////////////////
// Edit Hook Modal //
/////////////////////
function edit_hook_modal() {
    let user_character = get_user_character();
    $("#ovr_edit_hook_modal").modal();
    $("#ovr_edit_hook_input").val(user_character.hook);
}

function edit_hook_modal_accept() {
    let user_character = get_user_character();
    user_character.hook = $("#ovr_edit_hook_input").val();
    save_character(user_character);
    $("#ovr_edit_hook_modal").modal('toggle');
    refresh_overview();
}

/////////////////////////
// Edit Defenses Modal //
/////////////////////////
function edit_defenses_modal() {
    let user_character = get_user_character();
    let skill_total = calc_skill_total(user_character);

    $("#ovr_edit_defenses_modal_melee").empty();
    $("#ovr_edit_defenses_modal_ranged").empty();
    $("#ovr_edit_defenses_modal_mental").empty();
    $("#ovr_edit_defenses_modal_vital").empty();

    $("#ovr_edit_defenses_modal_melee").append('<option value=""></option>');
    $("#ovr_edit_defenses_modal_ranged").append('<option value=""></option>');
    $("#ovr_edit_defenses_modal_mental").append('<option value=""></option>');
    $("#ovr_edit_defenses_modal_vital").append('<option value=""></option>');

    for (skill in skill_total) {
        $("#ovr_edit_defenses_modal_melee").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
        $("#ovr_edit_defenses_modal_ranged").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
        $("#ovr_edit_defenses_modal_mental").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
        $("#ovr_edit_defenses_modal_vital").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
    }

    $("#ovr_edit_defenses_modal_melee").val(user_character.defense_skills.melee);
    $("#ovr_edit_defenses_modal_ranged").val(user_character.defense_skills.ranged);
    $("#ovr_edit_defenses_modal_mental").val(user_character.defense_skills.mental);
    $("#ovr_edit_defenses_modal_vital").val(user_character.defense_skills.vital);

    $("#ovr_edit_defenses_modal").modal();
}

function edit_defenses_modal_accept() {
    let user_character = get_user_character();

    user_character.defense_skills.melee = $("#ovr_edit_defenses_modal_melee").val();
    user_character.defense_skills.ranged = $("#ovr_edit_defenses_modal_ranged").val();
    user_character.defense_skills.mental = $("#ovr_edit_defenses_modal_mental").val();
    user_character.defense_skills.vital = $("#ovr_edit_defenses_modal_vital").val();

    save_character(user_character);
    $("#ovr_edit_defenses_modal").modal('toggle');
    refresh_overview();
}