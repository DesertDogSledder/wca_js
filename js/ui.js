// Tabs
$("#tabs").tabs();

// Career Accordion
$(function() 
{
    $("#accordion").accordion(
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
});

// Overview tab
$("#ovr_btn_jump_to_race").button().on("click", function(event) { // bind click event to link
    var index = $("#tabs-race").index()-1;
    $('#tabs').tabs("option", "active", index);
});
$("#ovr_btn_jump_to_homeworld").button().on("click", function(event) { // bind click event to link
    var index = $("#tabs-homeworld").index()-1;
    $('#tabs').tabs("option", "active", index);
});
$("#ovr_btn_set_trait").button();

// Race tab 
$("#rce_btn_set_race").button().on("click", function(){
    dialog.dialog("open");
});
$("#rce_btn_set_race_skills").button();
$("#rce_sm_size").selectmenu();
// $("#rce_sm_race_module").selectmenu({
//     change: select_race_module
// });
// $("#rce_sm_race_select").selectmenu();



// Homeworld tab
$("#hmw_btn_set_homeworld").button();
$("#hmw_btn_set_homeworld_skills").button();



// Race select dialog
dialog = $("#dialog_race_select").dialog({
    autoOpen: false,
    height: 400,
    width: 970,
    modal: false,
    // buttons: {
    //     Cancel: function() {
    //         dialog.dialog("close");
    //     }
    // },
    buttons: [
        {
            text: "OK",
            click: function()
            {
                woin_character.race['Stats']['STR'] = $("#rs_sp_race_str").val();
                woin_character.race['Stats']['AGI'] = $("#rs_sp_race_agi").val();
                woin_character.race['Stats']['END'] = $("#rs_sp_race_end").val();
                woin_character.race['Stats']['INT'] = $("#rs_sp_race_int").val();
                woin_character.race['Stats']['LOG'] = $("#rs_sp_race_log").val();
                woin_character.race['Stats']['WIL'] = $("#rs_sp_race_wil").val();
                woin_character.race['Stats']['CHA'] = $("#rs_sp_race_cha").val();
                woin_character.race['Stats']['LUC'] = $("#rs_sp_race_luc").val();
                woin_character.race['Stats']['REP'] = $("#rs_sp_race_rep").val();
                woin_character.race['Stats']['MAG'] = $("#rs_sp_race_mag").val();
                woin_character.race['Stats']['CHI'] = $("#rs_sp_race_chi").val();
                woin_character.race['Stats']['PSI'] = $("#rs_sp_race_psi").val();

                dialog.dialog("close");
                update_info();
            }
        },
        {
            text: "Cancel",
            click: function()
            {
                dialog.dialog("close");
            }
        },
    ],
    close: function() 
    {

    },
    open: function()
    {
        // select_race_module(null, "races_new")
        // let value = $("rce_sm_race_module").selectmenu("option", "NEW");
        // $("rce_sm_race_module").val(value);
        // $("rce_sm_race_module").selectmenu("refresh");
        // select_race_module(null, {item:{value: ''}})
        // console.log('I love lamp');
        // let value = $("rce_sm_race_module").selectmenu("option", "races_new");
        $("#rce_sm_race_module").val(woin_character.race['Source']);
        $("#rce_sm_race_module").selectmenu("refresh");
        select_race_module(null, {item:{value: woin_character.race['Source']}});
        $("#rce_sm_race_select").val(woin_character.race['Race'].name);
        $("#rce_sm_race_select").selectmenu("refresh");
        
        $("#rs_sp_race_str").val(woin_character.race['Stats']['STR']);
        $("#rs_sp_race_agi").val(woin_character.race['Stats']['AGI']);
        $("#rs_sp_race_end").val(woin_character.race['Stats']['END']);
        $("#rs_sp_race_int").val(woin_character.race['Stats']['INT']);
        $("#rs_sp_race_log").val(woin_character.race['Stats']['LOG']);
        $("#rs_sp_race_wil").val(woin_character.race['Stats']['WIL']);
        $("#rs_sp_race_cha").val(woin_character.race['Stats']['CHA']);
        $("#rs_sp_race_luc").val(woin_character.race['Stats']['LUC']);
        $("#rs_sp_race_rep").val(woin_character.race['Stats']['REP']);
        $("#rs_sp_race_mag").val(woin_character.race['Stats']['MAG']);
        $("#rs_sp_race_chi").val(woin_character.race['Stats']['CHI']);
        $("#rs_sp_race_psi").val(woin_character.race['Stats']['PSI']);

    }
});

$("#rs_sp_race_str").spinner().width(30);
$("#rs_sp_race_agi").spinner().width(30);
$("#rs_sp_race_end").spinner().width(30);
$("#rs_sp_race_int").spinner().width(30);
$("#rs_sp_race_log").spinner().width(30);
$("#rs_sp_race_wil").spinner().width(30);
$("#rs_sp_race_cha").spinner().width(30);
$("#rs_sp_race_luc").spinner().width(30);
$("#rs_sp_race_rep").spinner().width(30);
$("#rs_sp_race_mag").spinner().width(30);
$("#rs_sp_race_chi").spinner().width(30);
$("#rs_sp_race_psi").spinner().width(30);

$("#rs_sp_race_str").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_agi").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_end").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_int").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_log").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_wil").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_cha").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_luc").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_rep").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_mag").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_chi").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });
$("#rs_sp_race_psi").keyup(function() { if (isNaN($(this).val())) $(this).prop("value", "0"); });


race_modules = {
    "races_new": race_new_list,
    "races_now": race_now_list,
    "races_old": race_old_list
};

function validate_spinner()
{
    if (isNaN($(this).val()))
    {
        $(this).prop("value", "0");
    }
}

function select_race_module(event, data) 
{
    var options = [];
    // console.log(data)
    console.log(race_modules[data.item.value])
    for (race in race_modules[data.item.value])
    {
        // console.log(race)
        options.push("<option value=" + race + ">" + race_modules[data.item.value][race].name + "</option>");
    }

    // Clear the options first   
    $("#rce_sm_race_select option").each(
        function(index, option) 
        {
            $(option).remove();
        }
    );
    $("#rce_sm_race_select").append(options.join("")).selectmenu();
    $("#rce_sm_race_select").selectmenu("refresh");
    
    // console.log(data.item.value)
    // console.log(race_modules[data.item.value][0].name)
    // for (race in race_modules[$("#select_race_module").item.value])
};

function select_race(event, data)
{
    console.log(data.item.value);
}