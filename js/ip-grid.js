$(document).ready(function () {

	$.fn.andSelf = function() {
	  return this.addBack.apply(this, arguments);
	}

    $('#grid').ip_Grid({ rows: 10000,  cols: 30 });

    $("#init-intro").on('click', function(){
    	introJs().start();
    });

});