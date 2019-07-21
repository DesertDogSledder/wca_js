$("#car_btn_add_career").on("click", select_career_modal);


function refresh_careers() {
    let user_character = get_user_character();
    if (user_character.career_track.length <= 0) {
        $("#car_career_select").prop("disabled", true);
        $("#car_btn_remove_career").prop("disabled", true);
    }
}

function select_career_modal() {
    $("#car_select_career_modal").modal();
}