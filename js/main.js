'use strict';

var storeall = new Storage({urlstore:[],namestore:[],semstore:[],yearstore:[],row:1});

(function($){
    $.fn.urlscrape = function(row){
        $('#urlinput'+row).keyup(function(){
           var url = $(this).val().split('/');

            var timetable = storeall.get('urlstore');
            timetable[row] = url.pop();
            storeall.set('urlstore', timetable);

            var sem = storeall.get('semstore');
            sem[row] = timetable[row][3];
            storeall.set('semstore', sem);

            var year = storeall.get('yearstore');
            year[row] = url.pop();
            storeall.set('yearstore', year);

        });
    } ;

    $.fn.namescrape = function(row){
        $('#nameinput'+row).keyup(function(){
           var name = storeall.get('namestore');
            name[row] = $(this).val();
            storeall.set('namestore', name);
        });
    };

    // for initialising when first name and url already filled
    if($("#nameinput1").val() != ""){
        var name = storeall.get('namestore');
        name[1] = $(this).val();
        storeall.set('namestore', name);
    }

    if($("#urlinput1").val() != ""){
        var url = $(this).val().split('/');

        var timetable = storeall.get('urlstore');
        timetable[1] = url.pop();
        storeall.set('urlstore', timetable);

        var sem = storeall.get('semstore');
        sem[1] = timetable[1][3];
        storeall.set('semstore', sem);

        var year = storeall.get('yearstore');
        year[1] = url.pop();
        storeall.set('yearstore', year);
    }



});