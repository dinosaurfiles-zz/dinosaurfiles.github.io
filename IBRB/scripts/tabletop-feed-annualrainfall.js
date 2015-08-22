var jqueryNoConflict = jQuery;

// begin main function
jqueryNoConflict(document).ready(function(){

    initializeTabletopObject("https://docs.google.com/spreadsheets/d/1mYd98zEmN0p9LV4q62VeqZh3Vkn1JKgmXIXLnUYPngY/pubhtml");

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
		{"mDataProp": "location", "sTitle": "Location", "sClass": "center"},
    {"mDataProp": "y1990", "sTitle": "1990", "sClass": "center"},
    {"mDataProp": "y1991", "sTitle": "1991", "sClass": "center"},
    {"mDataProp": "y1992", "sTitle": "1992", "sClass": "center"},
    {"mDataProp": "y1993", "sTitle": "1993", "sClass": "center"},
    {"mDataProp": "y1994", "sTitle": "1994", "sClass": "center"},
    {"mDataProp": "y1995", "sTitle": "1995", "sClass": "center"},
    {"mDataProp": "y1996", "sTitle": "1996", "sClass": "center"},
    {"mDataProp": "y1997", "sTitle": "1997", "sClass": "center"},
    {"mDataProp": "y1998", "sTitle": "1998", "sClass": "center"},
    {"mDataProp": "y1999", "sTitle": "1999", "sClass": "center"},
    {"mDataProp": "y2000", "sTitle": "2000", "sClass": "center"},
    {"mDataProp": "y2001", "sTitle": "2001", "sClass": "center"},
    {"mDataProp": "y2001", "sTitle": "2002", "sClass": "center"},
    {"mDataProp": "mean", "sTitle": "Mean", "sClass": "center"}
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
