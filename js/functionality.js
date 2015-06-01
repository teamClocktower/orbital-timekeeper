var numrow = 1;

(function( $ ){
   $.fn.rowcheck = function(row) {
   		$('#urlinput'+row).keyup(function(){
   			var url = $(this).val();
   			var check = url.split('/').pop();
   			console.log(check);
   			console.log("PASS");
   		});
   }; 
})(jQuery);



$(function(){
	$('#urlinput'+numrow).rowcheck(numrow);

	$('#addrow').click(function(){
		numrow += 1;
		
		$('#rowcontainer').append(
			'<div id="row'+numrow+'" class="row"><div class="input-field col m3"><i class="small mdi-action-account-circle prefix"></i>'
          +'<input id="nameinput'+numrow+'" type="text" class="validate"><label for="nameinput'+numrow+'"><a class="tooltipped"'
          +'data-position="bottom" data-delay="50" data-tooltip="Enter name">Name</a></label></div><div class="input-field col m6">'
          +'<i class="small mdi-editor-format-underline prefix"></i><input id="urlinput'+numrow+'" type="text" class="validate">'
          +'<label for="urlinput'+numrow+'"><a class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Input NUSmods timetable URL">Timetable URL</a></label>'
          +'</div><div class="col m3"><br><div id="switch'+numrow+'" class="switch"><label>'
          +'Hidden<input type="checkbox" onclick="Materialize.toast("Hidden/Visible toggled", 1000, "rounded")"><span class="lever"></span>'
          +'Visible</label></div></div></div>');

		$('#urlinput'+String(numrow)+'').rowcheck(numrow);


	});


	$('#removerow').click(function(){

		if (numrow == 1){
			return;
		}
		else{
			numrow -= 1;
			$('#rowcontainer').find('.row:last').remove();
			
		}
		
	});


	


});