$(function(){
	$('#addrow').click(function(){
		$('#rowcontainer').append(
			'<div class="row"><div class="input-field col m3"><i class="small mdi-action-account-circle prefix"></i>'
          +'<input id="icon_prefix" type="text" class="validate"><label for="icon_prefix"><a class="tooltipped"'
          +'data-position="bottom" data-delay="50" data-tooltip="Enter name">Name</a></label></div><div class="input-field col m6">'
          +'<i class="small mdi-editor-format-underline prefix"></i><input id="icon_prefix" type="text" class="validate">'
          +'<label for="icon_prefix"><a class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Input NUSmods timetable URL">Timetable URL</a></label>'
          +'</div><!-- one br for first, two for subsequent... experiment --><div class="col m3"><br><div class="switch"><label>'
          +'Hidden<input type="checkbox" onclick="Materialize.toast("Hidden/Visible toggled", 1000, "rounded")"><span class="lever"></span>'
          +'Visible</label></div></div></div>');

	});
});





