'use strict';
var allrow = 1;
var path = 'http://api.nusmods.com/';
var store1 = new Storage();
var sview = new StorageView({model : store1});
var storeall = new StoreAll;
storeall.add(store1);


(function($){
    $.fn.urlscrape = function(row){
        $('#urlinput'+row).bind("change", function(){
           var strmdl = storeall.at(row-1);
           var url = $(this).val().split('/');
            var last = url.pop().split('?');
            strmdl.set('semstore', last[0]);
            var slots = last[1].split('&');
            if (strmdl.get('modules') == undefined){
                strmdl.set('modules', new Modules());
            }
            var modules = strmdl.get('modules');
            _.map(slots, function(slot){

                var modid = slot.split('[')[0];
                var classtype = slot.slice(slot.indexOf('[')+1, slot.indexOf(']')).toLowerCase();
                var session = slot.split('=').pop().toLowerCase();
                if (modules.get(modid)==undefined){
                    modules.add(new Module({ID : modid}));
                }
                var module = modules.get(modid);
                if (module.get('lessons')==undefined){
                    module.set('lessons', new Lessons());
                }
                var lessons = module.get('lessons');
                // check if lesson in lessons




            });
            strmdl.set('urlstore', last);
            strmdl.set('yearstore', url.pop());
        });
    } ;

    $.fn.namescrape = function(row){
        $('#nameinput'+row).bind("change", function(){
          storeall.at(row-1).set('namestore', $(this).val() );
        });
    };



})(jQuery);

$(function() {
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

        storeall.push(new Storage);
        new StorageView({model : storeall.at(allrow-1)});
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


