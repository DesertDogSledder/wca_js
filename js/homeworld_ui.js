var homeworld_skills = {};

// Event bindings
$("#hmw_btn_edit_homeworld").on("click", select_homeworld_modal);
$("#hmw_select_homeworld_modal_homeworld").on("change", select_homeworld_modal_homeworld);
$("#hmw_select_homeworld_modal_save").on("click", select_homeworld_modal_accept);

$("#hmw_btn_edit_skills").on("click", edit_homeworld_skills_modal);
$("#hmw_edit_skils_modal_add").on("click", edit_homeworld_skills_modal_add);
$("#hmw_edit_skils_modal_remove").on("click", edit_homeworld_skills_modal_remove);
$("#hmw_edit_skills_modal_save").on("click", edit_homeworld_skills_modal_accept);

function refresh_homeworld() {
    let user_character = get_user_character();
    $("#hmw_name_val").html(homeworld_dict[user_character.homeworld.source][user_character.homeworld.id].name);

    $("#hmw_selected_skills_list").empty();
    for (skill in user_character.homeworld.skills) {
        $("#hmw_selected_skills_list").append('<li>' + skill + ' (' + user_character.homeworld.skills[skill] + ')');
    }

    for (stat in user_character.homeworld.stats) {
        $("#hmw_" + stat).html(format_num(user_character.homeworld.stats[stat]));
    }
    enable_tooltips();
}

//////////////////////////
// Edit Homeworld Modal //
//////////////////////////
function select_homeworld_modal() {
    let source_val = $("#hmw_select_homeworld_modal_source").val();
    $("#hmw_select_homeworld_modal_homeworld").empty();
    for (let homeworld in homeworld_dict[source_val]) {
        $("#hmw_select_homeworld_modal_homeworld").append('<option value=' + homeworld + '>' + homeworld_dict[source_val][homeworld].name + '</option>');
   }
    $("#hmw_select_homeworld_modal").modal();
    select_homeworld_modal_homeworld();
}

function select_homeworld_modal_homeworld() {
    let source_val = $("#hmw_select_homeworld_modal_source").val();
    let homeworld_val = $("#hmw_select_homeworld_modal_homeworld").val();
    let curr_homeworld = homeworld_dict[source_val][homeworld_val];
    $("#hmw_select_homeworld_modal_skills").html('');
    for (let skill in curr_homeworld.available_skills) {
        $("#hmw_select_homeworld_modal_skills").append('<li>' + curr_homeworld.available_skills[skill] + '</li>');
    }
    for (let stat in curr_homeworld.stats) {
        $("#hmw_select_homeworld_modal_" + stat).text(format_num(curr_homeworld.stats[stat]));
    }
}

function select_homeworld_modal_accept() {
    let user_character = get_user_character();
    let source_val = $("#hmw_select_homeworld_modal_source").val();
    let homeworld_val = $("#hmw_select_homeworld_modal_homeworld").val();
    
    set_homeworld(user_character, source_val, homeworld_val);
    save_character(user_character);

    $("#hmw_select_homeworld_modal").modal('toggle');
    refresh_homeworld();
}

/////////////////////////////////
// Edit Homeworld Skills Modal //
/////////////////////////////////
function edit_homeworld_skills_modal() {
    let user_character = get_user_character();
    let character_homeworld = homeworld_dict[user_character.homeworld.source][user_character.homeworld.id];
    $("#hmw_edit_skills_modal").modal();
    $("#hmw_edit_skills_modal_avail_skills").html('');
    $("#hmw_edit_skills_modal_skill").val('');
    $("#hmw_edit_skills_modal_rank").val(1);
    
    for (skill in character_homeworld.available_skills) {
        $("#hmw_edit_skills_modal_avail_skills").append('<li>' + character_homeworld.available_skills[skill] + '</li>');
    }

    homeworld_skills = user_character.homeworld.skills;
    
    edit_homeworld_skills_modal_refresh_curr_skills();
}

function edit_homeworld_skills_modal_refresh_curr_skills() {
    $("#hmw_edit_skills_modal_curr_skills").empty();
    let i = 0;
    for (skill in homeworld_skills) {
        $("#hmw_edit_skills_modal_curr_skills").append($('<option>', {
            value: skill,
            text: skill + " (" + homeworld_skills[skill] + ")"
        }));
    }
}

function edit_homeworld_skills_modal_add() {
    let skill_name = $("#hmw_edit_skills_modal_skill").val().toLowerCase();
    let skill_rank = parseInt($("#hmw_edit_skills_modal_rank").val());

    if (skill_name != '') {
        // Remove existing skill if setting rank to 0
        if (homeworld_skills[skill_name] && skill_rank <= 0) {
            delete homeworld_skills[skill_name];
        } else if (skill_rank > 0) {
            homeworld_skills[skill_name] = skill_rank;
            $("#hmw_edit_skills_modal_skill").val('');
            $("#hmw_edit_skills_modal_rank").val(0);
        }
        homeworld_skills = sort_object(homeworld_skills);
        edit_homeworld_skills_modal_refresh_curr_skills();
    }
}

function edit_homeworld_skills_modal_remove() {
    let selected_options = [];
    $("#hmw_edit_skills_modal_curr_skills option:selected").each(function() {
        selected_options.push($(this).val());
    });
    for (option in selected_options) {
        delete homeworld_skills[selected_options[option]];
    }
    edit_homeworld_skills_modal_refresh_curr_skills();
}

function edit_homeworld_skills_modal_accept() {
    let user_character = get_user_character();
    user_character.homeworld.skills = homeworld_skills;
    save_character(user_character);
    $("#hmw_edit_skills_modal").modal('toggle');
    refresh_homeworld();
}