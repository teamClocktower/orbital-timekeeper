'use strict';



(function($){
    $.fn.urlscrape = function(row){

        /*
        $('#urlinput'+row).bind("change", function(){
           var strmdl = storeall.at(row-1);
           var url = $(this).val().split('/');
            var year = url[4];
            var last = url.pop().split('?');

            strmdl.set('sem', last[0][3]);
            var sem = strmdl.get('sem');
            var slots = last[1].split('&');
            if (strmdl.get('modules')==undefined){
                strmdl.set('modules', new Modules);
            }
            var modules = strmdl.get('modules');
            // ACC1002X[LEC]=X2
            _.forEach(slots, function(slot){

                var modid = slot.split('[')[0];
                var classtype = slot.slice(slot.indexOf('[')+1, slot.indexOf(']')).toLowerCase();
                var session = slot.split('=').pop();
                if (modules.get(modid)==undefined){
                    modules.add(new Module({id:modid}));
                }
                var module = modules.get(modid);
                var lessons = module.get('lessons');
                // check if lesson in lessons
                var lesson = _.findWhere(lessons,{classNo:session, lessonType:classtype});
                if (lesson == undefined){
                    lessons.add(new Lesson({classNo:session, lessonType:classtype}));

                }

            });

            _.forEach(slots, function(slot){
                var modid = slot.split('[')[0];
                $.getJSON(path + year + '/' + sem + '/modules/' + modid + '/timetable.json', function(json){
                   //json = json.responseJSON; // might add/remove, not sure format of json response
                   var lessons = modules.get(modid).get('lessons') ;

                    for (var i=0; i < lessons.length; i++){

                        _.forEach(json, function(response){

                           // inefficiencies, doesnt break during forEach
                            if (lessons.at(i).get('classNo') == response.ClassNo && lessons.at(i).get('lessonType') == response.LessonType.toLowerCase().slice(0,3)){

                                lessons.at(i).set('weekText', response.WeekText);
                                lessons.at(i).set('dayText', response.DayText);
                                lessons.at(i).set('startTime', new Time({hr:response.StartTime.slice(2),min:response.StartTime.slice(2,4)}));
                                lessons.at(i).set('endTime', new Time({hr:response.EndTime.slice(2),min:response.EndTime.slice(2,4)}));
                                lessons.at(i).set('venue', response.Venue);


                            }

                        });
                    }
                });



            });

        });

    */
    } ;

    $.fn.namescrape = function(row){
        $('#nameinput'+row).bind("change", function(){
          storeall.at(row-1).set('name', $(this).val() );
        });
    };



})(jQuery);
var allrow, path, store1, sview, nview, uview, storeall;
$(function() {




    allrow = 1;
    path = 'http://api.nusmods.com/';
    store1 = new Storage();
    sview = new StorageView({el : '#urlinput1', model : store1});

    nview = new Name({el:'#nameinput1', model:store1});
    uview = new Url({el:'#urlinput1', model:store1});

    storeall = new StoreAll;
    storeall.add(store1);







    $('#urlinput'+allrow).urlscrape(allrow);
    $('#nameinput'+allrow).namescrape(allrow);
    // addrow button
    $('#addrow').click(function(){
        allrow += 1;

        $('#rowcontainer').append(
            '<div id="row'+allrow+'" class="row"><div class="input-field col m3"><i class="small mdi-action-account-circle prefix"></i>'
            +'<input id="nameinput'+allrow+'" type="text" class="validate"><label for="nameinput'+allrow+'"><a class="tooltipped"'
            +'data-position="bottom" data-delay="50" data-tooltip="Enter name">Name</a></label></div><div class="input-field col m6">'
            +'<i class="small mdi-editor-format-underline prefix"></i><input id="urlinput'+allrow+'" type="text" class="validate">'
            +'<label for="urlinput'+allrow+'"><a class="tooltipped" data-position="bottom" data-delay="50" data-tooltip="Input NUSmods timetable URL">Timetable URL</a></label>'
            +'</div><div class="col m3"><br><div id="switch'+allrow+'" class="switch"><label>'
            +'Hidden<input type="checkbox" onclick="Materialize.toast("Hidden/Visible toggled", 1000, "rounded")"><span class="lever"></span>'
            +'Visible</label></div></div></div>');

        storeall.push(new Storage());
        new StorageView({el : '#urlinputmodel', model : storeall.at(allrow-1)});
        $('#urlinput'+allrow).urlscrape(allrow);
        $('#nameinput'+allrow).namescrape(allrow);



    });

    // remove row button
    $('#removerow').click(function(){

        if (allrow == 1){
            return;
        }
        else{
            allrow -= 1;
            $('#rowcontainer').find('.row:last').remove();
            storeall.pop();

        }

    });







});


