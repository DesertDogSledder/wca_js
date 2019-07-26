// Event bindings
$("#car_btn_add_career").on("click", select_career_modal);
$("#car_btn_remove_career").on("click", remove_career);
$("#car_btn_move_career_up").on("click", move_career_up);
$("#car_btn_move_career_down").on("click", move_career_down);
$("#car_career_select").on("change", on_career_select);
$("#car_select_career_modal_source").on("change", career_modal_select_source);
$("#car_select_career_modal_career").on("change", career_modal_select_career);
$("#car_select_career_modal_save").on("click", select_career_modal_accept);


function refresh_careers() {
    let user_character = get_user_character();
    let stat_names = ['strength', 'agility', 'endurance', 'intuition', 'logic', 'willpower', 'charisma', 'luck', 'reputation', 'magic', 'chi', 'psionics']
    
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

    for (career in user_character.career_track) {
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

    if (selected_career == null) {
        $("#car_btn_move_career_up").prop("disabled", true);
        $("#car_btn_move_career_down").prop("disabled", true);
        $("#car_btn_remove_career").prop("disabled", true);
        
        for (stat in stat_names) {
            $("#car_" + stat_names[stat]).html('');
        }

    } else {
        selected_career = parseInt(selected_career);
        let source_val = user_character.career_track[selected_career]['source']
        let career_val = user_character.career_track[selected_career]['id']

        if (selected_career == 0) {
            $("#car_btn_move_career_up").prop("disabled", true);
        }
    
        if (selected_career == user_character.career_track.length-1) {
            $("#car_btn_move_career_down").prop("disabled", true);
        }

        for (stat in career_dict[source_val][career_val].stats) {
            $("#car_" + stat).html(format_num(career_dict[source_val][career_val].stats[stat]));        
        }
    }


}

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
    
    user_character.career_track.push({'source': source_val, 'id': career_val});
    save_character(user_character);
    $("#car_select_career_modal").modal('toggle');
    refresh_careers();
}

function remove_career() {
    let user_character = get_user_character();
    let selected_career = $("#car_career_select").val();

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