var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject("https://docs.google.com/spreadsheets/d/19hEsx57Yfw3kHGBfw9Nw7gefA4_RO90fHivj32UnOvY/pubhtml");

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
		{"mDataProp": "wellno", "sTitle": "Well No", "sClass": "center"},
    {"mDataProp": "localno", "sTitle": "Local No", "sClass": "center"},
    {"mDataProp": "otherno", "sTitle": "Other No", "sClass": "center"},
    {"mDataProp": "longitude", "sTitle": "Longitude", "sClass": "center"},
    {"mDataProp": "latitude", "sTitle": "Latitude", "sClass": "center"},
    {"mDataProp": "groundelevmasl", "sTitle": "Gound Elev MASL", "sClass": "center"},
    {"mDataProp": "owner", "sTitle": "Owner", "sClass": "center"},
    {"mDataProp": "location", "sTitle": "Location", "sClass": "center"},
    {"mDataProp": "welldepthmeters", "sTitle": "Well Depth Meters", "sClass": "center"},
    {"mDataProp": "casingdiammm", "sTitle": "Casing Diam mm", "sClass": "center"},
    {"mDataProp": "qcapls", "sTitle": "Q Cap L/s", "sClass": "center"},
    {"mDataProp": "strataloglayers", "sTitle": "Strata Log #Layers", "sClass": "center"},
    {"mDataProp": "recsdpt", "sTitle": "#Rec SDPT", "sClass": "center"},
    {"mDataProp": "reccdpt", "sTitle": "#Rec CDPT", "sClass": "center"},
    {"mDataProp": "recchem", "sTitle": "#Rec Chem", "sClass": "center"},
    {"mDataProp": "recwaterlevel", "sTitle": "#Rec Water Level", "sClass": "center"},
    {"mDataProp": "recdisc", "sTitle": "#Rec Disc", "sClass": "center"},
    {"mDataProp": "reccl", "sTitle": "#Rec CL", "sClass": "center"}
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
