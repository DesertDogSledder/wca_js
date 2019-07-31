// Event bindings
$("#eqp_btn_edit_weapons").on("click", edit_weapons_modal);
$("#eqp_edit_weapons_modal_source").on("change", edit_weapons_modal_source);
$("#eqp_edit_weapons_modal_armor").on("change", edit_weapons_modal_armor);
$("#eqp_edit_weapons_modal_btn_save").on("click", edit_weapons_modal_accept);

$("#eqp_btn_edit_armor").on("click", edit_armor_modal);
$("#eqp_edit_armor_modal_source").on("change", edit_armor_modal_source);
$("#eqp_edit_armor_modal_armor").on("change", edit_armor_modal_armor);
$("#eqp_edit_armor_modal_btn_save").on("click", edit_armor_modal_accept);

function refresh_equipment() {
    let user_character = get_user_character();
    let item = null;
    let table_row = '';
    let source_val = '';
    let weapon_val = '';
    let armor_val = '';
    let quantity = 0;

    $("#eqp_weapons_table tbody").html('');
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
        '<td>' + curr_item.quantity + '</td>' +
        '<td>' + (quantity * curr_item.cost) + '</td>' +
        '<td>' + (quantity * curr_item.weight) + '</td>' +
        '<td>' + '<button class="btn btn-danger" id="btn_weapon_del_' + item + '">❌</button>' + '</td>' +
        '</tr>';

        $("#eqp_weapons_table tbody").append(table_row);
        $("#btn_weapon_del_" + item).on("click", {'item_index': item}, remove_weapon);
    }

    $("#eqp_armor_table tbody").html('');
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
        '<td>' + curr_item.quantity + '</td>' +
        '<td>' + (quantity * curr_item.cost) + '</td>' +
        '<td>' + (quantity * curr_item.weight) + '</td>' +
        '<td>' + '<button class="btn btn-danger" id="btn_armor_del_' + item + '">❌</button>' + '</td>' +
        '</tr>';

        $("#eqp_armor_table tbody").append(table_row);
        $("#btn_armor_del_" + item).on("click", {'item_index': item}, remove_armor);
    }
}

function remove_armor(e) {
    let user_character = get_user_character();
    user_character.equipment.armor.splice(e.data.item_index, 1);
    save_character(user_character);
    refresh_equipment();
}

function remove_weapon(e) {
    let user_character = get_user_character();
    user_character.equipment.weapons.splice(e.data.item_index, 1);
    save_character(user_character);
    refresh_equipment();
}

////////////////////////
// Edit Weapons Modal //
////////////////////////
function edit_weapons_modal() {
    $("#eqp_edit_weapons_modal").modal();
    $("#eqp_edit_weapons_modal_quantity").val(1);
    edit_weapons_modal_source();
}

function edit_weapons_modal_source() {
    let source_val = $("#eqp_edit_weapons_modal_source").val();
    $("#eqp_edit_weapons_modal_armor").empty()
    for (let item in weapons_dict[source_val]) {
        $("#eqp_edit_weapons_modal_weapon").append('<option value=' + item + '>' + weapons_dict[source_val][item].name + '</option>');
    }
    edit_weapons_modal_weapon();
}

function edit_weapons_modal_weapon() {
    let source_val = $("#eqp_edit_weapons_modal_source").val();
    let weapon_val = $("#eqp_edit_weapons_modal_weapon").val();
    selected_weapon = weapons_dict[source_val][weapon_val];

    $("#eqp_edit_weapons_modal_damage").text(selected_weapon.damage);
    $("#eqp_edit_weapons_modal_range").text(selected_weapon.range);
    $("#eqp_edit_weapons_modal_cost").text(selected_weapon.cost);
    $("#eqp_edit_weapons_modal_type").text(selected_weapon.type);
    $("#eqp_edit_weapons_modal_size").text(selected_weapon.size);
    $("#eqp_edit_weapons_modal_weight").text(selected_weapon.weight);
    $("#eqp_edit_weapons_modal_tech_level_genre").text(selected_weapon.tech_level + '(' + selected_weapon.genre + ')');
    $("#eqp_edit_weapons_modal_special").text(selected_weapon.special);
}

function edit_weapons_modal_accept() {
    let user_character = get_user_character();
    let source_val = $("#eqp_edit_weapons_modal_source").val();
    let weapon_val = $("#eqp_edit_weapons_modal_weapon").val();
    selected_weapon = weapons_dict[source_val][weapon_val];

    // user_character.equipment.weapons.push({
    //     'name': selected_weapon.name,
    //     'soak': selected_weapon.soak,
    //     'defense': selected_weapon.defense,
    //     'cost': selected_weapon.cost,
    //     'type': selected_weapon.type,
    //     'weight': selected_weapon.weight,
    //     'vulnerable': selected_weapon.vulnerable,
    //     'speed': selected_weapon.speed,
    //     'special': selected_weapon.special,
    //     'quantity': $("#eqp_edit_weapons_modal_quantity").val()
    // });

    user_character.equipment.weapons.push({
        'source': source_val,
        'id': weapon_val,
        'quantity': $("#eqp_edit_weapons_modal_quantity").val()
    });

    save_character(user_character);

    $("#eqp_edit_weapons_modal").modal('toggle');
    refresh_equipment();
}

//////////////////////
// Edit Armor Modal //
//////////////////////
function edit_armor_modal() {
    $("#eqp_edit_armor_modal").modal();
    $("#eqp_edit_armor_modal_quantity").val(1);
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
    let source_val = $("#eqp_edit_armor_modal_source").val();
    let armor_val = $("#eqp_edit_armor_modal_armor").val();
    selected_armor = armor_dict[source_val][armor_val];

    // user_character.equipment.armor.push({
    //     'name': selected_armor.name,
    //     'soak': selected_armor.soak,
    //     'defense': selected_armor.defense,
    //     'cost': selected_armor.cost,
    //     'type': selected_armor.type,
    //     'weight': selected_armor.weight,
    //     'vulnerable': selected_armor.vulnerable,
    //     'speed': selected_armor.speed,
    //     'special': selected_armor.special,
    //     'quantity': $("#eqp_edit_armor_modal_quantity").val()
    // });

    user_character.equipment.armor.push({
        'source': source_val,
        'id': armor_val,
        'quantity': $("#eqp_edit_armor_modal_quantity").val()
    });

    save_character(user_character);

    $("#eqp_edit_armor_modal").modal('toggle');
    refresh_equipment();
}