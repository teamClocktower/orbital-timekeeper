'use strict';

var Storage = Backbone.Model.extend({
    url : "/models/StorageModel",
    initialize : function(){
        this.set('modules', new Modules());
        this.on('change:raw', this.processRaw);

    },
    // http://nusmods.com/timetable/2014-2015/sem2?ACC1002X[TUT]=X18&ACC1002X[LEC]=X1&ACC3601[SEC]=A2&CS1010E[SEC]=1&CS1010E[LAB]=9&CS1010E[TUT]=U01&ACC4611[SEC]=K1
    processRaw : function(){
        var raw = this.get('raw');
        var rawSlash = raw.split('/');
        var year = rawSlash[4];
        this.set('year', year);
        var info = rawSlash.pop().split('?');
        this.set('sem', info[0][3]);
        var sem = this.get('sem');
        var sessions = info[1].split('&');




        _.forEach(sessions, function(session){
            // initializing base details from URL into models
            var modId = session.split('[')[0];
            var classType = session.slice(session.indexOf('[')+1, session.indexOf(']')).toLowerCase();
            var classSlot = session.split('=').pop();
            var modules = this.get('modules');
            if (modules.get(modId) == undefined){
                modules.add(new Module({id:modId}));
            }
            var module = modules.get(modId);
            var lessons = module.get('lessons');
            // check if lesson in lessons
            var lesson = _.findWhere(lessons,{classNo:classSlot, lessonType:classType});
            if (lesson == undefined){
                lessons.add(new Lesson({classNo:classSlot, lessonType:classType}));

            }
            //supplement base details
            $.getJSON(path + year + '/' + sem + '/modules/' + modId + '/timetable.json', function(json){
                //json = json.responseJSON; // might add/remove, not sure format of json response

                for (var i=0; i < lessons.length; i++){

                    _.forEach(json, function(json){
                        //console.log("JSON");
                        //console.log(json.LessonType);
                        // inefficiencies, doesnt break during forEach
                        if (lessons.at(i).get('classNo') == json.ClassNo && lessons.at(i).get('lessonType') == json.LessonType.toLowerCase().slice(0,3)){

                            lessons.at(i).set('weekText', json.WeekText);
                            lessons.at(i).set('dayText', json.DayText);
                            lessons.at(i).set('startTime', new Time({hr:json.StartTime.slice(2),min:json.StartTime.slice(2,4)}));
                            lessons.at(i).set('endTime', new Time({hr:json.EndTime.slice(2),min:json.EndTime.slice(2,4)}));
                            lessons.at(i).set('venue', json.Venue);


                        }

                    });

                    console.log(lessons.at(i));
                    console.log(lessons.at(i).get('venue'));
                }


             });



        }, this);

    }




});
