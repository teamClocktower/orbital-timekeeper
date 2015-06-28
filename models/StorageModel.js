'use strict';

var Storage = Backbone.Model.extend({
    url : "/models/StorageModel",
    initialize : function(){
        this.set('modules', new Modules());
        this.on('change:rawUrl', this.processRawUrl);
        this.on('change:rawName', this.processRawName);

    },
    processRawName : function(){
     var raw = this.get('rawName');
        this.set('name', raw);
    },

    processRawUrl : function(){
        var raw = this.get('rawUrl');
        var rawSlash = raw.split('/');
        var year = rawSlash[rawSlash.length-2];
        this.set('year', year);
        var info = rawSlash.pop().split('?');
        this.set('sem', info[0][3]);
        var sem = this.get('sem');
        var sessions = info[1].split('&');

        // for looped async json loading
        $.ajaxSetup({
            async: false
        });


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
                            var lesson = lessons.at(i);
                            if (!lesson.has('weekText')){
                                lesson.set('weekText', json.WeekText);
                                lesson.set('dayText', json.DayText);

                                lesson.get('timing').add(new Time({type:"start", hr:json.StartTime.slice(0,2),min:json.StartTime.slice(2,4)}));
                                lesson.get('timing').add(new Time({type:"end", hr:json.EndTime.slice(0,2),min:json.EndTime.slice(2,4)}));
                                lesson.set('venue', json.Venue);

                            }

                            console.log(lesson.get('timing'));
                            console.log("loaded lesson");
                        }

                    });

                    //console.log(lessons.at(i));
                    //console.log(lessons.at(i).get('venue'));
                }




             });




        }, this);

       this.trigger("updateComplete");

    }




});
