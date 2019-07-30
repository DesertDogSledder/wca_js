// Event bindings
$("#eqp_btn_edit_armor").on("click", edit_armor_modal);
$("#eqp_edit_armor_modal_source").on("change", edit_armor_modal_source);
$("#eqp_edit_armor_modal_armor").on("change", edit_armor_modal_armor);

//////////////////////
// Edit Armor Modal //
//////////////////////
function edit_armor_modal() {
    $("#eqp_edit_armor_modal").modal();
    edit_armor_modal_source();
}

function edit_armor_modal_source() {
    let source_val = $("#eqp_edit_armor_modal_source").val();
    $("#eqp_edit_armor_modal_armor").empty()
    for (let item in armor_dict[source_val]) {
        $("#eqp_edit_armor_modal_armor").append('<option value=' + item + '>' + armor_dict[source_val][item].name + '</option>');
    }
    edit_armor_modal_armor();
}

function edit_armor_modal_armor() {
    let source_val = $("#eqp_edit_armor_modal_source").val();
    let armor_val = $("#eqp_edit_armor_modal_armor").val();
    selected_armor = armor_dict[source_val][armor_val];

    $("#eqp_edit_armor_modal_soak").text(selected_armor.soak);
    $("#eqp_edit_armor_modal_defense").text(selected_armor.defense);
    $("#eqp_edit_armor_modal_cost").text(selected_armor.cost);
    $("#eqp_edit_armor_modal_type").text(selected_armor.type);
    $("#eqp_edit_armor_modal_weight").text(selected_armor.weight);
    $("#eqp_edit_armor_modal_vulnerable").text(selected_armor.vulnerable);
    $("#eqp_edit_armor_modal_speed").text(selected_armor.speed);
    $("#eqp_edit_armor_modal_special").text(selected_armor.special);
}

function edit_armor_modal_accept() {
    let user_character = get_user_character();
    
}