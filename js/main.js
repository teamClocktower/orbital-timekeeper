'use strict';



(function($){
    $.fn.urlscrape = function(row){

    } ;





})(jQuery);
var allrow, path, store1, nview, uview, storeall, tview;
$(function() {
    // clear cached input
    $('#urlinput1').val("");
    $('#nameinput1').val("");



    allrow = 1;
    path = 'http://api.nusmods.com/';
    store1 = new Storage({idx:allrow, name:""});


    nview = new Name({el:'#nameinput1', model:store1});
    uview = new Url({el:'#urlinput1', model:store1});

    storeall = new StoreAll;
    storeall.add(store1);
    tview = new Timetable({model:store1, el:'#timetable'});








    // addrow button
    $('#addrow').click(function(){
        console.log('clicked');
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

        var store = new Storage({idx:allrow, name:""});
        var nameView = new Name({el:'#nameinput'+allrow, model: store});
        var urlView = new Url({el:'#urlinput'+allrow, model: store});
        storeall.add(store);
        var timetableView = new Timetable({model:store, el:"#timetable"});



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


