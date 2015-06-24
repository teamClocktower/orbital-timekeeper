"use strict";

var numrow = 1;
var urlstore = [];
var namestore = [];
var yearstore = [];
var semstore = [];
var hrlst = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24"];
var minlst = ["00", "30"];


(function( $ ){
    // check name and url inputs
    $.fn.rowcheck = function(row) {
        $('#urlinput'+row).keyup(function(){
            var url = $(this).val();
            var urlcheck = url.split('/');
            urlstore[row] = urlcheck.pop();
            yearstore[row] = urlcheck.pop();
            semstore[row] = urlstore[row][3];

        });

        $('#nameinput'+row).keyup(function(){
            var name = $(this).val();
            namestore[row] = name;

        });

    };
    // refresh timetable ONLY WORKS FOR 14-15 currently
    $.fn.ttrefresh = function(row){
        for (var i=1; i<(row+1); i++){

            var splitmods = urlstore[i].split('?')[1].split('&');
            var splitmodsln = splitmods.length ;
            for (var j=0; j<splitmodsln; j++){

                (function(i,j){
                    var modid = splitmods[j].slice(0, splitmods[j].indexOf('['));

                    var classtype = splitmods[j].slice(splitmods[j].indexOf('[')+1, splitmods[j].indexOf(']')).toLowerCase();

                    var session = splitmods[j].split('=').pop().toLowerCase();

                    var modschedule;
                    $.getJSON('http://api.nusmods.com/2014-2015/'+urlstore[i][3]+'/modules/'+modid+'.json', function(json){
                        modschedule = json;
                        //console.log (modschedule.Timetable);
                        for (var k=0;k<modschedule.Timetable.length;k++){
                            console.log(modid, classtype, session, modschedule);
                            var modtimetable = modschedule.Timetable[k];

                            if (modtimetable.LessonType.slice(0,3).toLowerCase() == classtype && modtimetable.ClassNo.toLowerCase() == session){

                                var day = modtimetable.DayText.slice(0,3).toLowerCase();
                                var starthr = modtimetable.StartTime.slice(0,2);
                                var startmin = modtimetable.StartTime.slice(2);
                                var endhr = modtimetable.EndTime.slice(0,2);
                                var endmin = modtimetable.EndTime.slice(2);
                                var hstart = hrlst.indexOf(starthr);
                                var hstop = hrlst.indexOf(endhr)+1;

                                for (var h=hstart; h<hstop; h++){
                                    for (var m=0; m<2; m++){
                                        if (hrlst[h] == starthr){
                                            if (startmin == "00"){
                                                $('#'+day+ ' > .h'+starthr+'.m00').html("CLASS");
                                                $('#'+day+ ' > .h'+starthr+'.m30').html("CLASS");
                                            } else{
                                                $('#'+day+ ' > .h'+starthr+'.m30').html("CLASS");
                                            } //
                                        } else if (hrlst[h]==endhr ){

                                            if (endmin == "00"){
                                                continue;
                                            } else {
                                                $('#'+day+ ' > .h'+endhr+'.m00').html("CLASS");
                                            }

                                        } else {
                                            $('#'+day+' > .h'+hrlst[h]+'.m'+minlst[m]).html("CLASS");
                                        }
                                    }
                                };

                            }


                        };
                    });


                })(i,j);





            };
        };

    };

})(jQuery);



$(function(){
    $('#urlinput'+numrow).rowcheck(numrow);

    // addrow button
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

        $('#urlinput'+numrow).rowcheck(numrow);



    });

    // remove row button
    $('#removerow').click(function(){

        if (numrow == 1){
            return;
        }
        else{
            numrow -= 1;
            $('#rowcontainer').find('.row:last').remove();

        }

    });

    // for refreshing timetable
    $('#refresh').click(function(){
        $('#timetable').ttrefresh(numrow);

    });





});






