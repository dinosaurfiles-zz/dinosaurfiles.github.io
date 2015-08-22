var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject("https://docs.google.com/spreadsheets/d/1n9JSWy5G04g8J5gmzK3Cl4SAZLb6y-CJ7znzLlzE3VM/pubhtml");

});

// pull data from google spreadsheet
function initializeTabletopObject(dataSpreadsheet){
    Tabletop.init({
        key: dataSpreadsheet,
        callback: writeTableWith,
        simpleSheet: true,
        debug: false
    });
}

// create table headers
function createTableColumns(){

    /* swap out the properties of mDataProp & sTitle to reflect
    the names of columns or keys you want to display.
    Remember, tabletop.js strips out spaces from column titles, which
    is what happens with the More Info column header */

    var tableColumns =   [
		{"mDataProp": "typename", "sTitle": "Type/Name of Natural Disaster", "sClass": "center"},
    {"mDataProp": "dateocurr", "sTitle": "Date of Occurence", "sClass": "center"},
    {"mDataProp": "noaffectedbgy", "sTitle": "No. of Affected Barangay", "sClass": "center"},
    {"mDataProp": "noaffectedfam", "sTitle": "No. of Affected Families", "sClass": "center"},
    {"mDataProp": "noaffectedper", "sTitle": "No. of Affected Persons", "sClass": "center"},
    {"mDataProp": "totaldamagehouse", "sTitle": "Totally Damaged Houses", "sClass": "center"},
    {"mDataProp": "partialdamagehouse", "sTitle": "Partially Damaged Houses", "sClass": "center"},
    {"mDataProp": "nodeaths", "sTitle": "No. of Deaths", "sClass": "center"},
    {"mDataProp": "noinjuredper", "sTitle": "No. of Injured", "sClass": "center"},
    {"mDataProp": "nomissper", "sTitle": "No. of Missing Persons", "sClass": "center"},
    {"mDataProp": "damages", "sTitle": "Damages in Agri/Infra (P1M)", "sClass": "center"},

	];
    return tableColumns;
}

// create the table container and object
function writeTableWith(dataSource){

    jqueryNoConflict("#demo").html("<table cellpadding='0' cellspacing='0' border='0' class='display table table-bordered table-striped' id='data-table-container'></table>");

    var oTable = jqueryNoConflict("#data-table-container").dataTable({
        "sPaginationType": "bootstrap",
        "iDisplayLength": 25,
        "aaData": dataSource,
        "aoColumns": createTableColumns(),
        "oLanguage": {
          "sLengthMenu": "_MENU_ records per page"
        }
    });

};

//define two custom functions (asc and desc) for string sorting
jQuery.fn.dataTableExt.oSort["string-case-asc"]  = function(x,y) {
	return ((x < y) ? -1 : ((x > y) ?  0 : 0));
};

jQuery.fn.dataTableExt.oSort["string-case-desc"] = function(x,y) {
	return ((x < y) ?  1 : ((x > y) ? -1 : 0));
};
