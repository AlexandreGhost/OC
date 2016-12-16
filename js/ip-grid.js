$(document).ready(function () {

	$.fn.andSelf = function() {
	  return this.addBack.apply(this, arguments);
	}

    $('#grid').ip_Grid({ rows: 10000,  cols: 30 });

    $("#init-intro").on('click', function(){
    	introJs().start();
    });


    /***** Actions Spreadsheet *****/

    $("#undo").on('click', function(){
    	$("#grid").ip_Undo();
    })

    $("#show_id_col").on('click', function(){
    	$("#grid").ip_ColumnSelector({show:true});
    })

    $("#hide_id_col").on('click', function(){
    	$("#grid").ip_ColumnSelector({show:false});
    })

});