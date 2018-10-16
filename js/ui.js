$(function() {

// Tabs
var $tabs = $("#tabs").tabs();

// Career Accordion
var $accordion = $("#accordion").accordion(
    {
        header: "> div > h3",
        autoHeight: false,
        clearStyle: true
    }).sortable(
        {
            axis: "y",
            handle: "h3",
            stop: function( event, ui )
            {
                // IE doesn't register the blur when sorting
                // so trigger focusout handlers to remove .ui-state-focus
                ui.item.children( "h3" ).triggerHandler( "focusout" );
        
                // Refresh accordion to handle new order
                $( this ).accordion( "refresh" );
            }
        });

// Overview tab
var $ovr_btn_jump_to_race = $("#ovr_btn_jump_to_race").button()
$ovr_btn_jump_to_race.on("click", function(event) { // bind click event to link
    var index = $("#tabs-race").index()-1;
    $('#tabs').tabs("option", "active", index);
});


var $ovr_btn_jump_to_homeworld = $("#ovr_btn_jump_to_homeworld").button()
$ovr_btn_jump_to_homeworld.on("click", function(event) { // bind click event to link
    var index = $("#tabs-homeworld").index()-1;
    $('#tabs').tabs("option", "active", index);
});
var $ovr_btn_set_trait = $("#ovr_btn_set_trait").button();

var $ovr_txt_character_hook = $("#ovr_txt_character_hook");
var $ovr_txt_character_name = $("#ovr_txt_character_name");
var $ovr_lst_skills = $("#ovr_lst_skills");
var $ovr_lst_exploits = $("#ovr_lst_exploits");
//// Derived Stats
var $ovr_div_ds_health = $("#ovr_div_ds_health");
var $ovr_div_ds_init = $("#ovr_div_ds_init");
var $ovr_div_ds_speed = $("#ovr_div_ds_speed");
var $ovr_div_ds_climb = $("#ovr_div_ds_climb");
var $ovr_div_ds_swim = $("#ovr_div_ds_swim");
var $ovr_div_ds_g = $("#ovr_div_ds_g");
var $ovr_div_ds_vert_jump = $("#ovr_div_ds_vert_jump");
var $ovr_div_ds_hori_jump = $("#ovr_div_ds_hori_jump");
//// Defenses
var $ovr_div_ds_carry = $("#ovr_div_ds_carry");
var $ovr_div_def_melee = $("#ovr_div_def_melee");
var $ovr_div_def_ranged = $("#ovr_div_def_ranged");
var $ovr_div_def_mental = $("#ovr_div_def_mental");
var $ovr_div_def_vital = $("#ovr_div_def_vital");
//// Total Stats
var $ovr_div_total_str = $("#ovr_div_total_str");
var $ovr_div_total_agi = $("#ovr_div_total_agi");
var $ovr_div_total_end = $("#ovr_div_total_end");
var $ovr_div_total_int = $("#ovr_div_total_int");
var $ovr_div_total_log = $("#ovr_div_total_log");
var $ovr_div_total_wil = $("#ovr_div_total_wil");
var $ovr_div_total_cha = $("#ovr_div_total_cha");
var $ovr_div_total_luc = $("#ovr_div_total_luc");
var $ovr_div_total_rep = $("#ovr_div_total_rep");
var $ovr_div_total_mag = $("#ovr_div_total_mag");
var $ovr_div_total_chi = $("#ovr_div_total_chi");
var $ovr_div_total_psi = $("#ovr_div_total_psi");

// Race tab 
var $rce_btn_set_race = $("#rce_btn_set_race").button();
$rce_btn_set_race.on("click", function(){
    $rce_diag_race_select.dialog("open");
});
var $rce_btn_set_race_skills = $("#rce_btn_set_race_skills").button();
$rce_btn_set_race_skills.on('click', function(){
    $rce_diag_race_skill_select.dialog("open");
});
var $rce_sm_size = $("#rce_sm_size").selectmenu({
    change: select_size,
    width: 150
});
var $rce_lst_exploits = $("#rce_lst_exploits");
var $rce_lst_skills = $("#rce_lst_skills");
var $rce_div_race_str = $("#rce_div_race_str");
var $rce_div_race_agi = $("#rce_div_race_agi");
var $rce_div_race_end = $("#rce_div_race_end");
var $rce_div_race_int = $("#rce_div_race_int");
var $rce_div_race_log = $("#rce_div_race_log");
var $rce_div_race_wil = $("#rce_div_race_wil");
var $rce_div_race_cha = $("#rce_div_race_cha");
var $rce_div_race_luc = $("#rce_div_race_luc");
var $rce_div_race_rep = $("#rce_div_race_rep");
var $rce_div_race_mag = $("#rce_div_race_mag");
var $rce_div_race_chi = $("#rce_div_race_chi");
var $rce_div_race_psi = $("#rce_div_race_psi");

// Homeworld tab
var $hmw_btn_set_homeworld = $("#hmw_btn_set_homeworld").button();
var $hmw_btn_set_homeworld_skills = $("#hmw_btn_set_homeworld_skills").button();
var $hmw_lst_skills = $("#hmw_lst_skills");
var $hmw_div_hmw_str = $("#hmw_div_hmw_str");
var $hmw_div_hmw_agi = $("#hmw_div_hmw_agi");
var $hmw_div_hmw_end = $("#hmw_div_hmw_end");
var $hmw_div_hmw_int = $("#hmw_div_hmw_int");
var $hmw_div_hmw_log = $("#hmw_div_hmw_log");
var $hmw_div_hmw_wil = $("#hmw_div_hmw_wil");
var $hmw_div_hmw_cha = $("#hmw_div_hmw_cha");
var $hmw_div_hmw_luc = $("#hmw_div_hmw_luc");
var $hmw_div_hmw_rep = $("#hmw_div_hmw_rep");
var $hmw_div_hmw_mag = $("#hmw_div_hmw_mag");
var $hmw_div_hmw_chi = $("#hmw_div_hmw_chi");
var $hmw_div_hmw_psi = $("#hmw_div_hmw_psi");

// Race select dialog
var race_modules = {
    "races_new": race_new_list,
    "races_now": race_now_list,
    "races_old": race_old_list
};
var $rs_sp_race_str = $("#rs_sp_race_str").spinner().width(30);
var $rs_sp_race_agi = $("#rs_sp_race_agi").spinner().width(30);
var $rs_sp_race_end = $("#rs_sp_race_end").spinner().width(30);
var $rs_sp_race_int = $("#rs_sp_race_int").spinner().width(30);
var $rs_sp_race_log = $("#rs_sp_race_log").spinner().width(30);
var $rs_sp_race_wil = $("#rs_sp_race_wil").spinner().width(30);
var $rs_sp_race_cha = $("#rs_sp_race_cha").spinner().width(30);
var $rs_sp_race_luc = $("#rs_sp_race_luc").spinner().width(30);
var $rs_sp_race_rep = $("#rs_sp_race_rep").spinner().width(30);
var $rs_sp_race_mag = $("#rs_sp_race_mag").spinner().width(30);
var $rs_sp_race_chi = $("#rs_sp_race_chi").spinner().width(30);
var $rs_sp_race_psi = $("#rs_sp_race_psi").spinner().width(30);

var $rce_diag_race_select = $("#rce_div_race_select").dialog({
    autoOpen: false,
    height: 'auto',
    minWidth: 1070,
    width: 1070,
    maxWidth: 1070,
    modal: true,
    buttons: [
        {
            text: "OK",
            click: function()
            {
                // console.log($rs_sm_race_module.val());
                // console.log($rs_sm_race_select.val());

                let selected_race_module = $rs_sm_race_module.val();
                let selected_race_var = $rs_sm_race_select.val();
                let selected_race = race_modules[selected_race_module][selected_race_var];
                // console.log($rs_sm_race_select.val());

                // console.log(selected_race);

                woin_character.race['Race'] = deep_copy(selected_race);
                woin_character.race['Source']['File'] = selected_race_module;
                woin_character.race['Source']['Var'] = selected_race_var;

                woin_character.race['Stats']['STR'] = parseInt($rs_sp_race_str.val());
                woin_character.race['Stats']['AGI'] = parseInt($rs_sp_race_agi.val());
                woin_character.race['Stats']['END'] = parseInt($rs_sp_race_end.val());
                woin_character.race['Stats']['INT'] = parseInt($rs_sp_race_int.val());
                woin_character.race['Stats']['LOG'] = parseInt($rs_sp_race_log.val());
                woin_character.race['Stats']['WIL'] = parseInt($rs_sp_race_wil.val());
                woin_character.race['Stats']['CHA'] = parseInt($rs_sp_race_cha.val());
                woin_character.race['Stats']['LUC'] = parseInt($rs_sp_race_luc.val());
                woin_character.race['Stats']['REP'] = parseInt($rs_sp_race_rep.val());
                woin_character.race['Stats']['MAG'] = parseInt($rs_sp_race_mag.val());
                woin_character.race['Stats']['CHI'] = parseInt($rs_sp_race_chi.val());
                woin_character.race['Stats']['PSI'] = parseInt($rs_sp_race_psi.val());

                // console.log(woin_character.race['Stats']);

                $(this).dialog("close");
                update_info();

                // console.log(woin_character.race['Var']);
            }
        },
        {
            text: "Cancel",
            click: function()
            {
                $(this).dialog("close");
            }
        },
    ],
    close: function() 
    {
        // $rs_sm_race_module.val(woin_character.race['Source']);
        // $rs_sm_race_select.val(woin_character.race['Source']['Var']);
    },
    open: function()
    {
        // $rs_sm_race_module.val(woin_character.race['Source']['File']);
        // $rs_sm_race_module.selectmenu("refresh");
        // $rs_sm_race_module.change();

        // $rs_sm_race_select.val(woin_character.race['Source']['Var']);
        // $rs_sm_race_select.selectmenu("refresh");
        // $rs_sm_race_select.change();
        
        $rs_sp_race_str.val(woin_character.race['Stats']['STR']);
        $rs_sp_race_agi.val(woin_character.race['Stats']['AGI']);
        $rs_sp_race_end.val(woin_character.race['Stats']['END']);
        $rs_sp_race_int.val(woin_character.race['Stats']['INT']);
        $rs_sp_race_log.val(woin_character.race['Stats']['LOG']);
        $rs_sp_race_wil.val(woin_character.race['Stats']['WIL']);
        $rs_sp_race_cha.val(woin_character.race['Stats']['CHA']);
        $rs_sp_race_luc.val(woin_character.race['Stats']['LUC']);
        $rs_sp_race_rep.val(woin_character.race['Stats']['REP']);
        $rs_sp_race_mag.val(woin_character.race['Stats']['MAG']);
        $rs_sp_race_chi.val(woin_character.race['Stats']['CHI']);
        $rs_sp_race_psi.val(woin_character.race['Stats']['PSI']);

        // console.log(woin_character.race['Source']['File']);

        // select_race_module(null, {item: {value: woin_character.race['Source']['File']}});
        // select_race(null, {item: {value: woin_character.race['Source']['Var']}});

    }
});
var $rs_sm_race_module = $("#rs_sm_race_module").selectmenu({
    change: select_race_module,
    width: 150
});
var $rs_sm_race_select = $("#rs_sm_race_select").selectmenu({
    change: select_race,
});
var $rs_div_race_desc = $("#rs_div_race_desc");
var $rs_div_race_size = $("#rs_div_race_size");
var $rs_lst_race_available_skills = $("#rs_lst_race_available_skills");
var $rs_lst_race_exploits = $("#rs_lst_race_exploits");

// Race skill select dialog
var $rsk_sel_current_skills = $("#rsk_sel_current_skills").selectable();
var $rsk_btn_del_skill = $("#rsk_btn_del_skill").button();
$rsk_btn_del_skill.on("click", function(event) { // bind click event to link
    var index = $("#tabs-race").index()-1;
    $('#tabs').tabs("option", "active", index);
});
var $rsk_txt_skill_name = $("#rsk_txt_skill_name");
var $rsk_sp_skill_lvl = $("#rsk_sp_skill_lvl").spinner({
    spin: function(event, ui) {
        if (ui.value < 0) {
            $(this).spinner("value", 0);
            return false;
        }
    }
}).width(30);
var $rsk_btn_add_skill = $("#rsk_btn_add_skill").button();
var $rce_diag_race_skill_select = $("#rce_diag_race_skill_select").dialog({
    autoOpen: false,
    height: 'auto',
    minWidth: 1070,
    width: 1070,
    maxWidth: 1070,
    modal: true,
    buttons: [
        {
            text: "OK",
            click: function()
            {
                $(this).dialog("close");
                update_info();
            }
        },
        {
            text: "Cancel",
            click: function()
            {
                $(this).dialog("close");
            }
        },
    ],
    close: function() 
    {

    },
    open: function()
    {
        $rsk_sel_current_skills.empty();
        let race_skills_sorted = sort_object(woin_character.race['Skills']);
        console.log(woin_character.race['Skills']);
        var new_race_skills = deep_copy(race_skills_sorted);
        for (skill in race_skills_sorted)
        {
            $rsk_sel_current_skills.append('<li>' + skill + ' (' + race_skills_sorted[skill] + ')</li>');
        }
        $rsk_sel_current_skills.selectable();
        $rsk_sp_skill_lvl.val(0);
    }
});


// Functions
function select_race_module(event, data) 
{
    let options = [];
    let selected_race_module = data.item.value;
    for (race in race_modules[selected_race_module])
    {
        options.push("<option value=" + race + ">" + race_modules[selected_race_module][race].name + "</option>");
    }

    $rs_sm_race_select.find('option').remove().end();
    // $rs_sm_race_select.append(options.join("")).selectmenu();
    $rs_sm_race_select.append(options.join(""));
    // console.log($rs_sm_race_select.selectmenu("value"));

    // let arrayOfValues = $("#rs_sm_race_select option").map(0);
    // console.log(arrayOfValues);
    // $rs_sm_race_select.val($rs_sm_race_select.val()[0]);
    $rs_sm_race_select.prop("selectedIndex", 0);
    $rs_sm_race_select.selectmenu("refresh");
    $rs_sm_race_select.change();
};

function select_race(event, data)
{
    let selected_race_module = $rs_sm_race_module.val();
    let selected_race_var = data.item.value;
    // Exception happens here.  If page loads and user goes to race select too quickly,
    // selected_race_module aka $("#rs_sm_race_module").val() is null and borks it all up
    let selected_race = race_modules[selected_race_module][selected_race_var];
    let available_skills = sort_object(selected_race.available_skills);
    
    $rs_div_race_desc.html(selected_race.description);
    $rs_div_race_size.html(selected_race.size);

    // Skills
    $rs_lst_race_available_skills.empty();
    for (skill in available_skills)
    {
        $rs_lst_race_available_skills.append('<li>' + available_skills[skill] + '</li>');
    }

    // Exploits
    race_exploits = JSON.parse(JSON.stringify(woin_character.race['Race'].exploits));
    race_exploits.sort(dynamic_sort_multiple('Name'));
    $rs_lst_race_exploits.empty();
    for (exploit in race_exploits)
    {
        $rs_lst_race_exploits.append('<li title="' + race_exploits[exploit]['Desc'] + '">' + race_exploits[exploit]['Name'] + '</li>')
    }

    $rs_sp_race_str.val(selected_race.stats['STR']);
    $rs_sp_race_agi.val(selected_race.stats['AGI']);
    $rs_sp_race_end.val(selected_race.stats['END']);
    $rs_sp_race_int.val(selected_race.stats['INT']);
    $rs_sp_race_log.val(selected_race.stats['LOG']);
    $rs_sp_race_wil.val(selected_race.stats['WIL']);
    $rs_sp_race_cha.val(selected_race.stats['CHA']);
    $rs_sp_race_luc.val(selected_race.stats['LUC']);
    $rs_sp_race_rep.val(selected_race.stats['REP']);
    $rs_sp_race_mag.val(selected_race.stats['MAG']);
    $rs_sp_race_chi.val(selected_race.stats['CHI']);
    $rs_sp_race_psi.val(selected_race.stats['PSI']);

}

function select_size(event, data)
{
    woin_character.race['Size'] = data.item.value;
    update_info();
}

function update_info() {
    // Overview
    console.log('update_info called');
    $ovr_txt_character_name.val(woin_character.name);

    let total_stats = calc_stat_total(woin_character);
    let skill_total = calc_skill_total(woin_character);
    let exploit_total = calc_exploit_total(woin_character);
    let derived_stats = calc_derived_stats(woin_character);

    // Main
    $ovr_btn_jump_to_race.button('option', 'label', woin_character.race['Race'].name);
    $ovr_btn_jump_to_homeworld.button('option', 'label', woin_character.homeworld['Homeworld'].name);
    $ovr_btn_set_trait.button('option', 'label', woin_character.trait.name);
    $ovr_txt_character_hook.val(woin_character.hook);

    // Skills and exploits
    $ovr_lst_skills.empty();
    $ovr_lst_exploits.empty();

    for (skill in skill_total)
    {
        $ovr_lst_skills.append('<li>' + skill + ' (' + skill_total[skill] + ')</li>');
    }
    for (exploit in exploit_total)
    {
        $ovr_lst_exploits.append('<li title="' + exploit_total[exploit] + '">' + exploit + '</li>')
    }


    // Derived Stats
    $ovr_div_ds_health.html(derived_stats['Health']);
    $ovr_div_ds_init.html(derived_stats['Initiative'] + 'd6');
    $ovr_div_ds_speed.html(derived_stats['Speed']);
    $ovr_div_ds_climb.html(derived_stats['Climb']);
    $ovr_div_ds_swim.html(derived_stats['Swim']);
    $ovr_div_ds_g.html(derived_stats['Zero-G'] + '/' + derived_stats['Low-G'] + '/' + derived_stats['High-G']);
    $ovr_div_ds_vert_jump.html(derived_stats['Vertical Jump Standing'] + '\'/' + derived_stats['Vertical Jump Running'] + '\'');
    $ovr_div_ds_hori_jump.html(derived_stats['Horizontal Jump Standing'] + '\'/' + derived_stats['Horizontal Jump Running'] + '\'');
    $ovr_div_ds_carry.html(derived_stats['Carry']);
    // Defenses
    $ovr_div_def_melee.html(derived_stats['Melee Defense']);
    $ovr_div_def_ranged.html(derived_stats['Ranged Defense']);
    $ovr_div_def_mental.html(derived_stats['Mental Defense']);
    $ovr_div_def_vital.html(derived_stats['Vital Defense']);


    // Stats
    let max_dice_pool = calc_max_dice_pool_size(woin_character.career_track.length);
    let str_dice_pool_size = calc_dice_pool_size(total_stats['STR']);
    let agi_dice_pool_size = calc_dice_pool_size(total_stats['AGI']);
    let end_dice_pool_size = calc_dice_pool_size(total_stats['END']);
    let int_dice_pool_size = calc_dice_pool_size(total_stats['INT']);
    let log_dice_pool_size = calc_dice_pool_size(total_stats['LOG']);
    let wil_dice_pool_size = calc_dice_pool_size(total_stats['WIL']);
    let cha_dice_pool_size = calc_dice_pool_size(total_stats['CHA']);
    let luc_dice_pool_size = calc_dice_pool_size(total_stats['LUC']);
    let rep_dice_pool_size = calc_dice_pool_size(total_stats['REP']);
    let mag_dice_pool_size = calc_dice_pool_size(total_stats['MAG']);
    let chi_dice_pool_size = calc_dice_pool_size(total_stats['CHI']);
    let psi_dice_pool_size = calc_dice_pool_size(total_stats['PSI']);

    // Cap dice pool size
    // let str_dice_pool = (str_dice_pool_size <= max_dice_pool) ? str_dice_pool_size : max_dice_pool;
    // let agi_dice_pool = (agi_dice_pool_size <= max_dice_pool) ? agi_dice_pool_size : max_dice_pool;
    // let end_dice_pool = (end_dice_pool_size <= max_dice_pool) ? end_dice_pool_size : max_dice_pool;
    // let int_dice_pool = (int_dice_pool_size <= max_dice_pool) ? int_dice_pool_size : max_dice_pool;
    // let log_dice_pool = (log_dice_pool_size <= max_dice_pool) ? log_dice_pool_size : max_dice_pool;
    // let wil_dice_pool = (wil_dice_pool_size <= max_dice_pool) ? wil_dice_pool_size : max_dice_pool;
    // let cha_dice_pool = (cha_dice_pool_size <= max_dice_pool) ? cha_dice_pool_size : max_dice_pool;
    // let luc_dice_pool = (luc_dice_pool_size <= max_dice_pool) ? luc_dice_pool_size : max_dice_pool;
    // let rep_dice_pool = (rep_dice_pool_size <= max_dice_pool) ? rep_dice_pool_size : max_dice_pool;
    // let mag_dice_pool = (mag_dice_pool_size <= max_dice_pool) ? mag_dice_pool_size : max_dice_pool;
    // let chi_dice_pool = (chi_dice_pool_size <= max_dice_pool) ? chi_dice_pool_size : max_dice_pool;
    // let psi_dice_pool = (psi_dice_pool_size <= max_dice_pool) ? psi_dice_pool_size : max_dice_pool;

    // Don't cap dice pool size
    let str_dice_pool = str_dice_pool_size;
    let agi_dice_pool = agi_dice_pool_size;
    let end_dice_pool = end_dice_pool_size;
    let int_dice_pool = int_dice_pool_size;
    let log_dice_pool = log_dice_pool_size;
    let wil_dice_pool = wil_dice_pool_size;
    let cha_dice_pool = cha_dice_pool_size;
    let luc_dice_pool = luc_dice_pool_size;
    let rep_dice_pool = rep_dice_pool_size;
    let mag_dice_pool = mag_dice_pool_size;
    let chi_dice_pool = chi_dice_pool_size;
    let psi_dice_pool = psi_dice_pool_size;


    $ovr_div_total_str.html(total_stats['STR'] + '(' + str_dice_pool + 'd6)');
    $ovr_div_total_agi.html(total_stats['AGI'] + '(' + agi_dice_pool + 'd6)');
    $ovr_div_total_end.html(total_stats['END'] + '(' + end_dice_pool + 'd6)');
    $ovr_div_total_int.html(total_stats['INT'] + '(' + int_dice_pool + 'd6)');
    $ovr_div_total_log.html(total_stats['LOG'] + '(' + log_dice_pool + 'd6)');
    $ovr_div_total_wil.html(total_stats['WIL'] + '(' + wil_dice_pool + 'd6)');
    $ovr_div_total_cha.html(total_stats['CHA'] + '(' + cha_dice_pool + 'd6)');
    $ovr_div_total_luc.html(total_stats['LUC'] + '(' + luc_dice_pool + 'd6)');
    $ovr_div_total_rep.html(total_stats['REP'] + '(' + rep_dice_pool + 'd6)');
    $ovr_div_total_mag.html(total_stats['MAG'] + '(' + mag_dice_pool + 'd6)');
    $ovr_div_total_chi.html(total_stats['CHI'] + '(' + chi_dice_pool + 'd6)');
    $ovr_div_total_psi.html(total_stats['PSI'] + '(' + psi_dice_pool + 'd6)');

    // Race tab
    $rce_btn_set_race.button('option', 'label', woin_character.race['Race'].name);
    $rce_sm_size.val(woin_character.race['Size']);
    $rce_sm_size.selectmenu("refresh");

    $rce_lst_skills.empty();

    let race_skills_sorted = sort_object(woin_character.race['Skills']);
    for (skill in race_skills_sorted)
    {
        $rce_lst_skills.append('<li>' + skill + ' (' + race_skills_sorted[skill] + ')</li>');
    }

    // We do have a deep_copy function, but this preserves the array for easier sorting
    race_exploits = JSON.parse(JSON.stringify(woin_character.race['Race'].exploits));
    race_exploits.sort(dynamic_sort_multiple('Name'));

    $rce_lst_exploits.empty();
    for (exploit in race_exploits)
    {
        $rce_lst_exploits.append('<li title="' + race_exploits[exploit]['Desc'] + '">' + race_exploits[exploit]['Name'] + '</li>')
    }

    $rce_div_race_str.html(format_num(woin_character.race['Stats']['STR']));
    $rce_div_race_agi.html(format_num(woin_character.race['Stats']['AGI']));
    $rce_div_race_end.html(format_num(woin_character.race['Stats']['END']));
    $rce_div_race_int.html(format_num(woin_character.race['Stats']['INT']));
    $rce_div_race_log.html(format_num(woin_character.race['Stats']['LOG']));
    $rce_div_race_wil.html(format_num(woin_character.race['Stats']['WIL']));
    $rce_div_race_cha.html(format_num(woin_character.race['Stats']['CHA']));
    $rce_div_race_luc.html(format_num(woin_character.race['Stats']['LUC']));
    $rce_div_race_rep.html(format_num(woin_character.race['Stats']['REP']));
    $rce_div_race_mag.html(format_num(woin_character.race['Stats']['MAG']));
    $rce_div_race_chi.html(format_num(woin_character.race['Stats']['CHI']));
    $rce_div_race_psi.html(format_num(woin_character.race['Stats']['PSI']));

    // Homeworld tab
    $hmw_btn_set_homeworld.button('option', 'label', woin_character.homeworld.name);

    $hmw_lst_skills.empty();

    let hmw_skills_sorted = sort_object(woin_character.homeworld['Skills']);
    for (skill in hmw_skills_sorted)
    {
        $hmw_lst_skills.append('<li>' + skill + ' (' + hmw_skills_sorted[skill] + ')</li>');
    }

    $hmw_div_hmw_str.html(format_num(woin_character.homeworld['Stats']['STR']));
    $hmw_div_hmw_agi.html(format_num(woin_character.homeworld['Stats']['AGI']));
    $hmw_div_hmw_end.html(format_num(woin_character.homeworld['Stats']['END']));
    $hmw_div_hmw_int.html(format_num(woin_character.homeworld['Stats']['INT']));
    $hmw_div_hmw_log.html(format_num(woin_character.homeworld['Stats']['LOG']));
    $hmw_div_hmw_wil.html(format_num(woin_character.homeworld['Stats']['WIL']));
    $hmw_div_hmw_cha.html(format_num(woin_character.homeworld['Stats']['CHA']));
    $hmw_div_hmw_luc.html(format_num(woin_character.homeworld['Stats']['LUC']));
    $hmw_div_hmw_rep.html(format_num(woin_character.homeworld['Stats']['REP']));
    $hmw_div_hmw_mag.html(format_num(woin_character.homeworld['Stats']['MAG']));
    $hmw_div_hmw_chi.html(format_num(woin_character.homeworld['Stats']['CHI']));
    $hmw_div_hmw_psi.html(format_num(woin_character.homeworld['Stats']['PSI']));

    // Career tab
    // stuff here

    // Race select dialog
    $rs_sm_race_module.val(woin_character.race['Source']['File']);
    $rs_sm_race_module.selectmenu("refresh");
    $rs_sm_race_module.change();

    $rs_sm_race_select.val(woin_character.race['Source']['Var']);
    $rs_sm_race_select.selectmenu("refresh");
    $rs_sm_race_select.change();
};
update_info();
});