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
    width: 350,
    modal: false,
    buttons: {
        Cancel: function() {
            dialog.dialog("close");
        }
    },
    close: function() 
    {

    },
    open: function()
    {
        // select_race_module(null, "races_new")
        let value = $("rce_sm_race_module").selectmenu("option", "NEW");
        $("rce_sm_race_module").val(value);
        $("rce_sm_race_module").selectmenu("refresh");
    }
});

race_modules = {
    "races_new": race_new_list,
    "races_now": race_now_list,
    "races_old": race_old_list
};

function select_race_module(event, data) {
    var options = [];
    console.log(race_modules[data.item.value])
    for (race in race_modules[data.item.value]){
        // console.log(race_modules[data.item.value][race])
        options.push("<option value'" + race_modules[data.item.value][race].name + "'>" + race_modules[data.item.value][race].name + "</option>");
    }

    // Clear the options first   
    $("#rce_sm_race_select option").each(function(index, option) {
            $(option).remove();
    });
    $("#rce_sm_race_select").append(options.join("")).selectmenu();
    $("#rce_sm_race_select").selectmenu("refresh");
    
    // console.log(data.item.value)
    // console.log(race_modules[data.item.value][0].name)
    // for (race in race_modules[$("#select_race_module").item.value])
};