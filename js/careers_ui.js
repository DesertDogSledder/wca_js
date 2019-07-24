// Event bindings
$("#car_btn_add_career").on("click", select_career_modal);
$("#car_select_career_modal_source").on("change", career_modal_select_source);
$("#car_select_career_modal_career").on("change", career_modal_select_career);
$("#car_select_career_modal_save").on("click", select_career_modal_accept);


function refresh_careers() {
    let user_character = get_user_character();
    if (user_character.career_track.length <= 0) {
        $("#car_career_select").prop("disabled", true);
        $("#car_btn_remove_career").prop("disabled", true);
    } else {
        $("#car_career_select").prop("disabled", false);
        $("#car_btn_remove_career").prop("disabled", false);
    }

    for (career in user_character.career_track) {
        curr_career = user_character.career_track[career];
        $("#car_career_select").append($('<option>', {
            value: career,
            text: career_dict[curr_career.source][curr_career.id].name
        }));
    }

    enable_tooltips();
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