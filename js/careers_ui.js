var career_skills = {};

// Event bindings
$("#car_btn_add_career").on("click", select_career_modal);
$("#car_btn_remove_career").on("click", remove_career);
$("#car_btn_move_career_up").on("click", move_career_up);
$("#car_btn_move_career_down").on("click", move_career_down);
$("#car_career_select").on("change", on_career_select);

$("#car_select_career_modal_source").on("change", career_modal_select_source);
$("#car_select_career_modal_career").on("change", career_modal_select_career);
$("#car_select_career_modal_save").on("click", select_career_modal_accept);

$("#car_btn_edit_exploits").on("click", edit_career_exploits_modal);
$("#car_edit_exploits_modal_source").on("change", edit_career_exploits_modal_source);
$("#car_edit_exploits_modal_exploit").on("change", edit_career_exploits_modal_exploit);
$("#car_edit_exploits_modal_add").on("click", edit_career_exploits_modal_add);
$("#car_edit_exploits_modal_remove").on("click", edit_career_exploits_modal_remove);
$("#car_edit_exploits_modal_save").on("click", edit_career_exploits_modal_accept);

$("#car_btn_edit_skills").on("click", edit_career_skills_modal);
$("#car_edit_skils_modal_add").on("click", edit_career_skills_modal_add);
$("#car_edit_skils_modal_remove").on("click", edit_career_skills_modal_remove);
$("#car_edit_skills_modal_save").on("click", edit_career_skills_modal_accept);

$("#car_btn_edit_stats").on("click", edit_career_stats_modal);
$("#car_edit_stats_modal_save").on("click", edit_career_stats_modal_accept);


function refresh_careers() {
    let user_character = get_user_character();
    let stat_names = ['strength', 'agility', 'endurance', 'intuition', 'logic', 'willpower', 'charisma', 'luck', 'reputation', 'magic', 'chi', 'psionics']
    let curr_career = null;
    
    for (stat in stat_names) {
        $("#car_" + stat).html('');
    }

    $("#car_career_list").html('');
    $("#car_career_select").empty();

    if (user_character.career_track.length <= 0) {
        $("#car_career_select").prop("disabled", true);
        // $("#car_btn_remove_career").prop("disabled", true);
    } else {
        $("#car_career_select").prop("disabled", false);
        // $("#car_btn_remove_career").prop("disabled", false);
    }

    for (let career in user_character.career_track) {
        curr_career = user_character.career_track[career];
        $("#car_career_select").append($('<option>', {
            value: career,
            text: career_dict[curr_career.source][curr_career.id].name
        }));
        $("#car_career_list").append('<li>' + career_dict[curr_career.source][curr_career.id].name + '</li>');
    }

    enable_tooltips();
    on_career_select();
}

function on_career_select() {
    let user_character = get_user_character();
    let selected_career = $("#car_career_select").val();
    let stat_names = ['strength', 'agility', 'endurance', 'intuition', 'logic', 'willpower', 'charisma', 'luck', 'reputation', 'magic', 'chi', 'psionics']

    $("#car_btn_remove_career").prop("disabled", false);
    $("#car_btn_move_career_up").prop("disabled", false);
    $("#car_btn_move_career_down").prop("disabled", false);
    $("#car_btn_edit_exploits").prop("disabled", false);
    $("#car_btn_edit_skills").prop("disabled", false);
    $("#car_btn_edit_stats").prop("disabled", false);
    $("#car_skills_list").html('');
    $("#car_exploits_list").html('');
    $("#car_skills_div").show();
    $("#car_exploits_div").show();
    $("#car_stats_div").show();

    if (selected_career == null) {
        $("#car_btn_move_career_up").prop("disabled", true);
        $("#car_btn_move_career_down").prop("disabled", true);
        $("#car_btn_remove_career").prop("disabled", true);
        $("#car_btn_edit_exploits").prop("disabled", true);
        $("#car_btn_edit_skills").prop("disabled", true);
        $("#car_btn_edit_stats").prop("disabled", true);
        $("#car_skills_div").hide();
        $("#car_exploits_div").hide();
        $("#car_stats_div").hide();
        
        for (stat in stat_names) {
            $("#car_" + stat_names[stat]).html('');
        }

    } else {
        selected_career = parseInt(selected_career);
        let source_val = user_character.career_track[selected_career]['source']
        let career_val = user_character.career_track[selected_career]['id']

        $("#car_skills_header").html(career_dict[source_val][career_val].name + ' Skills <span class="text-primary" data-toggle="tooltip" data-placement="left" title="Choose two of the listed skills and advance each by one point. Note that characters may always select a defensive skill instead.">?</span>');
        $("#car_exploits_header").html(career_dict[source_val][career_val].name + ' Exploits <span class="text-primary" data-toggle="tooltip" data-placement="left" title="Choose one new career exploit from the list shown or choose one universal exploit.">?</span>');
        $("#car_stats_header").html(career_dict[source_val][career_val].name + ' Stats <span class="text-primary" data-toggle="tooltip" data-placement="left" title="Stats are automatically applied when a career is selected. Customizing the stats is entirely optional.">?</span>');

        if (selected_career == 0) {
            $("#car_btn_move_career_up").prop("disabled", true);
        }
    
        if (selected_career == user_character.career_track.length-1) {
            $("#car_btn_move_career_down").prop("disabled", true);
        }

        for (skill in user_character.career_track[selected_career].skills) {
            $("#car_skills_list").append('<li>' + skill + ' (' + user_character.career_track[selected_career].skills[skill] + ')');
        }

        for (exploit in user_character.career_track[selected_career].exploits) {
            curr_exploit = user_character.career_track[selected_career].exploits[exploit];
            $("#car_exploits_list").append("<li data-toggle='tooltip' data-placement='left' title=\"" + exploit_dict[curr_exploit.source1][curr_exploit.source2][curr_exploit.id]['desc'] + "\">" + exploit_dict[curr_exploit.source1][curr_exploit.source2][curr_exploit.id]['name'] + "</li>")
        }

        for (stat in user_character.career_track[selected_career].stats) {
            $("#car_" + stat).html(format_num(user_character.career_track[selected_career].stats[stat]));        
        }
    }
    enable_tooltips();
}

function remove_career() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());

    user_character.career_track.splice(selected_career, 1);
    save_character(user_character);
    refresh_careers();
}

function move_career_up() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());

    if (selected_career-1 >= 0) {
        [user_character.career_track[selected_career-1], user_character.career_track[selected_career]] = [user_character.career_track[selected_career], user_character.career_track[selected_career-1]];
        save_character(user_character);
        refresh_careers();
        $("#car_career_select").val(String(selected_career-1));
        on_career_select();
    }
}

function move_career_down() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());

    if (selected_career+1 < user_character.career_track.length) {
        [user_character.career_track[selected_career], user_character.career_track[selected_career+1]] = [user_character.career_track[selected_career+1], user_character.career_track[selected_career]];
        save_character(user_character);
        refresh_careers();
        $("#car_career_select").val(String(selected_career+1));
        on_career_select();
    }
}

//////////////////
// Career Modal //
//////////////////
function select_career_modal() {
    $("#car_select_career_modal").modal();
    career_modal_select_source();
    career_modal_select_career();
    enable_tooltips();
}

function career_modal_select_source() {
    let source_val = $("#car_select_career_modal_source").val();
    $("#car_select_career_modal_career").empty();
    for (career in career_dict[source_val]) {
        $("#car_select_career_modal_career").append($('<option>', {
            value: career,
            text: career_dict[source_val][career].name
        }));
    }
    career_modal_select_career();
    enable_tooltips();
}

function career_modal_select_career() {
    let source_val = $("#car_select_career_modal_source").val();
    let career_val = $("#car_select_career_modal_career").val();
    $("#car_select_career_modal_desc").html(career_dict[source_val][career_val].description);
    $("#car_select_career_modal_skills").html('');
    for (skill in career_dict[source_val][career_val].available_skills) {
        $("#car_select_career_modal_skills").append('<li>' + career_dict[source_val][career_val].available_skills[skill] + '</li>');
    }

    $("#car_select_career_modal_exploits").html('');
    console.log(exploit_dict[source_val][career_val]);
    for (exploit in exploit_dict[source_val][career_val]) {
        $("#car_select_career_modal_exploits").append("<li data-toggle='tooltip' data-placement='left' title=\"" + exploit_dict[source_val][career_val][exploit]['desc'] + "\">" + exploit_dict[source_val][career_val][exploit]['name'] + "</li>")
    }

    for (stat in career_dict[source_val][career_val].stats) {
        $("#car_select_career_modal_" + stat).html(format_num(career_dict[source_val][career_val].stats[stat]));
    }

    enable_tooltips();
}

function select_career_modal_accept() {
    let user_character = get_user_character();
    let source_val = $("#car_select_career_modal_source").val();
    let career_val = $("#car_select_career_modal_career").val();
    
    // user_character.career_track.push({'source': source_val, 'id': career_val});
    set_career(user_character, source_val, career_val);
    save_character(user_character);
    $("#car_select_career_modal").modal('toggle');
    refresh_careers();
    $("#car_career_select").val(String(user_character.career_track.length-1));
    on_career_select();
}

////////////////////
// Exploits Modal //
////////////////////
function edit_career_exploits_modal() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    let career_source = user_character.career_track[selected_career].source
    let curr_exploit = null;

    $("#car_edit_exploits_modal_source").empty();
    $("#car_edit_exploits_modal_source").append($('<option value=career>Career</option>'));
    $("#car_edit_exploits_modal_source").append($('<option value=universal>Universal</option>'));

    temp_exploits = new Map();
    for (let exploit in user_character.career_track[selected_career].exploits) {
        curr_exploit = user_character.career_track[selected_career].exploits[exploit];
        temp_exploits.set(exploit_dict[curr_exploit.source1][curr_exploit.source2][curr_exploit.id]['name'], curr_exploit);
    }
    $("#car_edit_exploits_modal").modal();
    $("#car_edit_exploits_modal_source").val("career");
    edit_career_exploits_modal_source();
    edit_career_exploits_modal_refresh();
    enable_tooltips();
}

function edit_career_exploits_modal_source() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    let exploit_source = $("#car_edit_exploits_modal_source").val();

    $("#car_edit_exploits_modal_exploit").empty();
    if (exploit_source == 'career') {
        let career_source = user_character.career_track[selected_career].source;
        let career_id = user_character.career_track[selected_career].id;
        for (let exploit in exploit_dict[career_source][career_id]) {
            $("#car_edit_exploits_modal_exploit").append($('<option value=' + exploit + '>' + exploit_dict[career_source][career_id][exploit]['name'] + '</option>'));
        }
    } else {
        for (let exploit in exploit_dict[exploit_source][exploit_source]) {
            $("#car_edit_exploits_modal_exploit").append($('<option value=' + exploit + '>' + exploit_dict[exploit_source][exploit_source][exploit]['name'] + '</option>'));
        }
    }
    edit_career_exploits_modal_exploit();
}

function edit_career_exploits_modal_exploit() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    let exploit_source = $("#car_edit_exploits_modal_source").val();
    let selected_exploit = $("#car_edit_exploits_modal_exploit").val();
    
    if (exploit_source == 'career') {
        let career_source = user_character.career_track[selected_career].source;
        let career_id = user_character.career_track[selected_career].id;
        $("#car_edit_exploits_modal_exploit_desc").html(exploit_dict[career_source][career_id][selected_exploit]['desc']);
    } else {
        $("#car_edit_exploits_modal_exploit_desc").html(exploit_dict[exploit_source][exploit_source][selected_exploit]['desc']);
    }
}

function edit_career_exploits_modal_add() {
    let user_character = get_user_character();
    let exploit_source = $("#car_edit_exploits_modal_source").val();
    let selected_exploit = $("#car_edit_exploits_modal_exploit").val();
    if (exploit_source == 'career') {
        let selected_career = parseInt($("#car_career_select").val());
        let career_source = user_character.career_track[selected_career].source;
        let career_id = user_character.career_track[selected_career].id;
        temp_exploits = temp_exploits.set(
            exploit_dict[career_source][career_id][selected_exploit]['name'], 
            {
                'source1': user_character.career_track[selected_career].source,
                'source2': user_character.career_track[selected_career].id,
                'id': selected_exploit
            });
    } else {
        temp_exploits = temp_exploits.set(
            exploit_dict[exploit_source][exploit_source][selected_exploit]['name'], 
            {
                'source1': exploit_source, 
                'source2': exploit_source,
                'id': selected_exploit
            });
    }
    temp_exploits = new Map([...temp_exploits.entries()].sort());
    edit_career_exploits_modal_refresh();
}

function edit_career_exploits_modal_remove() {
    let selected_curr_exploits = $("#car_edit_exploits_modal_exploits_list").val();
    if (selected_curr_exploits.length > 0) {
        for (let exploit in selected_curr_exploits) {
            temp_exploits.delete(selected_curr_exploits[exploit]);
        }
        edit_career_exploits_modal_refresh();
    }
}

function edit_career_exploits_modal_refresh() {
    $("#car_edit_exploits_modal_exploits_list").empty();
    for (let exploit of temp_exploits.values()) {
        $("#car_edit_exploits_modal_exploits_list").append($('<option data-value=' + exploit + '>' + exploit_dict[exploit.source1][exploit.source2][exploit.id]['name'] + '</option>'));
    }
}

function edit_career_exploits_modal_accept() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    let new_career_exploits = [];
    for (let exploit of temp_exploits.values()) {
        new_career_exploits.push(exploit);
    }
    user_character.career_track[selected_career].exploits = new_career_exploits;
    save_character(user_character);
    $("#car_edit_exploits_modal").modal('toggle');
    refresh_careers();
    $("#car_career_select").val(String(selected_career));
    on_career_select();
}

//////////////////
// Skills Modal //
//////////////////
function edit_career_skills_modal() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    let character_career = career_dict[user_character.career_track[selected_career].source][user_character.career_track[selected_career].id];

    $("#car_edit_skills_modal").modal();
    $("#car_edit_skills_modal_avail_skills").html('');
    $("#car_edit_skills_modal_skill").val('');
    $("#car_edit_skills_modal_rank").val(1);
    
    for (skill in character_career.available_skills) {
        $("#car_edit_skills_modal_avail_skills").append('<li>' + character_career.available_skills[skill] + '</li>');
    }

    career_skills = user_character.career_track[selected_career].skills;
    console.log(career_skills);
    
    edit_career_skills_modal_refresh_curr_skills();
}

function edit_career_skills_modal_refresh_curr_skills() {
    $("#car_edit_skills_modal_curr_skills").empty();
    for (skill in career_skills) {
        $("#car_edit_skills_modal_curr_skills").append($('<option>', {
            value: skill,
            text: skill + " (" + career_skills[skill] + ")"
        }));
    }
}

function edit_career_skills_modal_add() {
    let skill_name = $("#car_edit_skills_modal_skill").val().toLowerCase();
    let skill_rank = parseInt($("#car_edit_skills_modal_rank").val());
    // console.log(skill_name + ": " + skill_rank);

    if (skill_name != '') {
        // Remove existing skill if setting rank to 0
        if (career_skills[skill_name] && skill_rank <= 0) {
            delete career_skills[skill_name];
        } else if (skill_rank > 0) {
            career_skills[skill_name] = skill_rank;
            $("#car_edit_skills_modal_skill").val('');
            $("#car_edit_skills_modal_rank").val(1);
        }
        career_skills = sort_object(career_skills);
        edit_career_skills_modal_refresh_curr_skills();
    }
    // console.log(career_skills);
}

function edit_career_skills_modal_remove() {
    let selected_options = [];
    $("#car_edit_skills_modal_curr_skills option:selected").each(function() {
        selected_options.push($(this).val());
    });
    for (option in selected_options) {
        delete career_skills[selected_options[option]];
    }
    edit_career_skills_modal_refresh_curr_skills();
}

function edit_career_skills_modal_accept() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());

    user_character.career_track[selected_career].skills = career_skills;
    save_character(user_character);
    $("#car_edit_skills_modal").modal('toggle');
    refresh_careers();
    $("#car_career_select").val(String(selected_career));
    on_career_select();
}


/////////////////
// Stats Modal //
/////////////////
function edit_career_stats_modal() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    $("#car_edit_stats_modal").modal();
    for (stat in user_character.career_track[selected_career].stats) {
        $("#car_edit_stats_modal_" + stat).val(user_character.career_track[selected_career].stats[stat]);
    }
}

function edit_career_stats_modal_accept() {
    let user_character = get_user_character();
    let selected_career = parseInt($("#car_career_select").val());
    for (stat in user_character.career_track[selected_career].stats) {
        user_character.career_track[selected_career].stats[stat] = parseInt($("#car_edit_stats_modal_" + stat).val());
    }
    save_character(user_character);
    $("#car_edit_stats_modal").modal('toggle');
    refresh_careers();
}