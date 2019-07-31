// Event bindings

function refresh_character_sheet () {
    let user_character = get_user_character();
    let character_race = race_dict[user_character.race.source][user_character.race.id];
    let character_homeworld = homeworld_dict[user_character.homeworld.source][user_character.homeworld.id];
    let exploit_source = 'traits';
    let max_dice_pool_size = calc_max_dice_pool_size(user_character.career_track.length);

    $("#cs_name_val").html(user_character.name);
    $("#cs_subtitle_val").html('a[n] young ' + exploit_dict[exploit_source][exploit_source][user_character.trait].name + ' ' + character_race.name + ' who ' + user_character.hook + ' (' + max_dice_pool_size + 'd6)');
    $("#cs_homeworld_val").html(character_homeworld.name);

    stat_total = calc_stat_total(user_character);
    for (stat in stat_total) {
        $("#cs_" + stat).html(format_num(stat_total[stat]));
    }

    skill_total = calc_skill_total(user_character);
    $("#cs_skill_list").html('');    // Clear skill list
    for (skill in skill_total) {
        $("#cs_skill_list").append("<li>" + skill + " (" + skill_total[skill] + ")</li>");
    }

    exploit_total = calc_exploit_total(user_character);
    $("#cs_exploit_list").html('');    // Clear exploit list
    for (exploit in exploit_total) {
        $("#cs_exploit_list").append("<li>" + exploit + ' - ' + exploit_total[exploit] + "</li>");
    }

    derived_stats = calc_derived_stats(user_character);
    $("#cs_health_info").html(derived_stats['Health']);
    $("#cs_initiative_info").html(derived_stats['Initiative']);

    $("#cs_movement_speed").html(derived_stats['Speed']);
    $("#cs_movement_climb").html(derived_stats['Climb']);
    $("#cs_movement_swim").html(derived_stats['Swim']);
    $("#cs_movement_g").html(derived_stats['Zero-G'] + '/' + derived_stats['Low-G'] + '/' + derived_stats['High-G']);
    $("#cs_movement_vertical_jump").html(derived_stats['Vertical Jump Standing'] + '\'/' + derived_stats['Vertical Jump Running'] + '\'');
    $("#cs_movement_horizontal_jump").html(derived_stats['Horizontal Jump Standing'] + '\'/' + derived_stats['Horizontal Jump Running'] + '\'');
    $("#cs_movement_carry").html(derived_stats['Carry']);
    
    $("#cs_defense_melee").html(derived_stats['Melee Defense']);
    $("#cs_defense_ranged").html(derived_stats['Ranged Defense']);
    $("#cs_defense_mental").html(derived_stats['Mental Defense']);
    $("#cs_defense_vital").html(derived_stats['Vital Defense']);


    let table_row = '';
    let source_val = '';
    let weapon_val = '';
    let armor_val = '';
    let quantity = 0;

    $("#cs_general_gear_table tbody").html('');
    for (item in user_character.equipment.general_gear) {
        source_val = user_character.equipment.general_gear[item].source;
        weapon_val = user_character.equipment.general_gear[item].id;
        quantity = user_character.equipment.general_gear[item].quantity;
        curr_item = general_gear_dict[source_val][weapon_val];

        table_row = '<tr>' +
        '<td>' + curr_item.name + '</td>' +
        '<td>' + curr_item.tech_level + '(' + curr_item.genre + ')' + '</td>' +
        '<td>' + quantity + '</td>' +
        '<td>' + (quantity * curr_item.cost) + '</td>' +
        '<td>' + (quantity * curr_item.weight) + '</td>' +
        '</tr>';

        $("#cs_general_gear_table tbody").append(table_row);
    }

    $("#cs_weapons_table tbody").html('');
    for (item in user_character.equipment.weapons) {
        source_val = user_character.equipment.weapons[item].source;
        weapon_val = user_character.equipment.weapons[item].id;
        quantity = user_character.equipment.weapons[item].quantity;
        curr_item = weapons_dict[source_val][weapon_val];

        table_row = '<tr>' +
        '<td>' + curr_item.name + '</td>' +
        '<td>' + curr_item.damage + '</td>' +
        '<td>' + curr_item.range + '</td>' +
        '<td>' + curr_item.type + '</td>' +
        '<td>' + curr_item.size + '</td>' +
        '<td>' + curr_item.special + '</td>' +
        '<td>' + curr_item.tech_level + '(' + curr_item.genre + ')' + '</td>' +
        '<td>' + quantity + '</td>' +
        '<td>' + (quantity * curr_item.cost) + '</td>' +
        '<td>' + (quantity * curr_item.weight) + '</td>' +
        '</tr>';

        $("#cs_weapons_table tbody").append(table_row);
    }

    $("#cs_armor_table tbody").html('');
    for (item in user_character.equipment.armor) {
        source_val = user_character.equipment.armor[item].source;
        armor_val = user_character.equipment.armor[item].id;
        quantity = user_character.equipment.armor[item].quantity;
        curr_item = armor_dict[source_val][armor_val];

        table_row = '<tr>' +
        '<td>' + curr_item.name + '</td>' +
        '<td>' + curr_item.soak + '</td>' +
        '<td>' + curr_item.defense + '</td>' +
        '<td>' + curr_item.type + '</td>' +
        '<td>' + curr_item.vulnerable + '</td>' +
        '<td>' + curr_item.speed + '</td>' +
        '<td>' + curr_item.special + '</td>' +
        '<td>' + quantity + '</td>' +
        '<td>' + (quantity * curr_item.cost) + '</td>' +
        '<td>' + (quantity * curr_item.weight) + '</td>' +
        '</tr>';

        $("#cs_armor_table tbody").append(table_row);
    }

    let curr_career = null;

    for (let career in user_character.career_track) {
        curr_career = user_character.career_track[career];
        $("#cs_career_list").append('<li>' + career_dict[curr_career.source][curr_career.id].name + '</li>');
    }
}

/////////////////////////
// New Character Modal //
/////////////////////////
function new_character_modal() {
    $("#cs_new_character_modal").modal();
}

function new_character_modal_accept() {
    new_character();
    $("#cs_new_character_modal").modal('toggle');
    refresh_overview();
}
//////////////////////////
// Load Character Modal //
//////////////////////////
function load_character_modal() {
    $("#cs_load_character_json_textarea").val('');
    $("#cs_load_character_modal").modal();
}

function load_character_modal_accept() {
    load_character($("#cs_load_character_json_textarea").val());
    $("#cs_load_character_modal").modal('toggle');
    refresh_overview();
}

//////////////////////////
// Save Character Modal //
//////////////////////////
function save_character_modal() {
    let user_character = get_user_character();
    $("#cs_save_character_modal").modal();
    $("#cs_save_character_json_textarea").text(export_character(user_character));
}

/////////////////////
// Edit Name Modal //
/////////////////////
function edit_name_modal() {
    let user_character = get_user_character();
    $("#cs_edit_name_modal").modal();
    $("#cs_edit_name_input").val(user_character.name);
}

function edit_name_modal_accept() {
    let user_character = get_user_character();
    user_character.name = $("#cs_edit_name_input").val();
    save_character(user_character);
    $("#cs_edit_name_modal").modal('toggle');
    refresh_overview();
}

//////////////////////
// Edit Trait Modal //
//////////////////////
function edit_trait_modal() {
    let user_character = get_user_character();
    let exploit_source = 'traits';

    $("#cs_edit_trait_modal_source").empty();
    $("#cs_edit_trait_modal_source").append($('<option value=traits>Traits</option>'));
    $("#cs_edit_trait_modal_exploit").empty();

    for (let exploit in exploit_dict[exploit_source][exploit_source]) {
        $("#cs_edit_trait_modal_exploit").append($('<option value=' + exploit + '>' + exploit_dict[exploit_source][exploit_source][exploit]['name'] + '</option>'));
    }

    $("#cs_edit_trait_modal").modal();

    if (user_character.trait) {
        $("#cs_edit_trait_modal_exploit").val(user_character.trait);
    }
    edit_trait_modal_exploit();
}

function edit_trait_modal_exploit() {
    let exploit_source = 'traits';
    let selected_exploit = $("#cs_edit_trait_modal_exploit").val();
    
    $("#cs_edit_trait_modal_exploit_desc").html(exploit_dict[exploit_source][exploit_source][selected_exploit]['desc']);
}

function edit_trait_modal_accept() {
    let user_character = get_user_character();
    let selected_exploit = $("#cs_edit_trait_modal_exploit").val();

    user_character.trait = selected_exploit;
    save_character(user_character);
    $("#cs_edit_trait_modal").modal('toggle');
    refresh_overview();
}

/////////////////////
// Edit Hook Modal //
/////////////////////
function edit_hook_modal() {
    let user_character = get_user_character();
    $("#cs_edit_hook_modal").modal();
    $("#cs_edit_hook_input").val(user_character.hook);
}

function edit_hook_modal_accept() {
    let user_character = get_user_character();
    user_character.hook = $("#cs_edit_hook_input").val();
    save_character(user_character);
    $("#cs_edit_hook_modal").modal('toggle');
    refresh_overview();
}

/////////////////////////
// Edit Defenses Modal //
/////////////////////////
function edit_defenses_modal() {
    let user_character = get_user_character();
    let skill_total = calc_skill_total(user_character);

    $("#cs_edit_defenses_modal_melee").empty();
    $("#cs_edit_defenses_modal_ranged").empty();
    $("#cs_edit_defenses_modal_mental").empty();
    $("#cs_edit_defenses_modal_vital").empty();

    $("#cs_edit_defenses_modal_melee").append('<option value=""></option>');
    $("#cs_edit_defenses_modal_ranged").append('<option value=""></option>');
    $("#cs_edit_defenses_modal_mental").append('<option value=""></option>');
    $("#cs_edit_defenses_modal_vital").append('<option value=""></option>');

    for (skill in skill_total) {
        $("#cs_edit_defenses_modal_melee").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
        $("#cs_edit_defenses_modal_ranged").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
        $("#cs_edit_defenses_modal_mental").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
        $("#cs_edit_defenses_modal_vital").append('<option value=' + skill + '>' + skill + ' (' + skill_total[skill] + ')</option>');
    }

    $("#cs_edit_defenses_modal_melee").val(user_character.defense_skills.melee);
    $("#cs_edit_defenses_modal_ranged").val(user_character.defense_skills.ranged);
    $("#cs_edit_defenses_modal_mental").val(user_character.defense_skills.mental);
    $("#cs_edit_defenses_modal_vital").val(user_character.defense_skills.vital);

    $("#cs_edit_defenses_modal").modal();
}

function edit_defenses_modal_accept() {
    let user_character = get_user_character();

    user_character.defense_skills.melee = $("#cs_edit_defenses_modal_melee").val();
    user_character.defense_skills.ranged = $("#cs_edit_defenses_modal_ranged").val();
    user_character.defense_skills.mental = $("#cs_edit_defenses_modal_mental").val();
    user_character.defense_skills.vital = $("#cs_edit_defenses_modal_vital").val();

    save_character(user_character);
    $("#cs_edit_defenses_modal").modal('toggle');
    refresh_overview();
}