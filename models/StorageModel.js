'use strict';

var Storage = Backbone.Model.extend({
    url: "/models/StorageModel",
    initialize: function () {
        this.set('modules', new Modules());
        this.on('change:rawUrl', this.processRawUrl);
        this.on('change:rawName', this.processRawName);

    },
    processRawName: function () {
        var raw = this.get('rawName');
        this.set('name', raw);
        this.trigger("updateName");
    },

    processRawUrl: function () {
        var c_storage = new Storage();
        var raw = this.get('rawUrl');
      
        var rawSlash = raw.split('/');
        var year = rawSlash[rawSlash.length - 2];
        var last = rawSlash.pop();
        var sem = last[3];
        var info = last.split('?');
        var idx = this.get('idx');


        var sessions = info[1].split('&');
        $.ajaxSetup({
            async: false
        });
        // start load function
        var load = function(strMdl, sessionsArr){
            _.forEach(sessionsArr, function(session){
                strMdl.set('year', year);
                strMdl.set('sem', sem);

                var modId = session.split('[')[0];
                var classType = session.slice(session.indexOf('[') + 1, session.indexOf(']')).toLowerCase();
                var classSlot = session.split('=').pop();
                var modules = strMdl.get('modules');
                if (modules.get(modId) == undefined) {
                    modules.add(new Module({id: modId}));
                }
                var module = modules.get(modId);
                var lessons = module.get('lessons');
                // check if lesson in lessons
                var lesson = _.findWhere(lessons, {classNo: classSlot, lessonType: classType});
                if (lesson == undefined) {
                    lessons.add(new Lesson({classNo: classSlot, lessonType: classType}));

                }
                $.getJSON(path + year + '/' + sem + '/modules/' + modId + '/timetable.json', function(json){
                    _.forEach(lessons.models, function(lesson){
                        _.forEach(json, function(json){
                            var classNo = lesson.get('classNo');
                            var lessonType = lesson.get('lessonType');
                            if(json.ClassNo == classNo && json.LessonType.toLowerCase().slice(0,3) == lessonType){
                                lesson.set('weekText', json.WeekText);
                                lesson.set('dayText', json.DayText);
                                var timing = lesson.get('timing');
                                timing.add(new Time({
                                    type:"start",
                                    hr: json.StartTime.slice(0, 2),
                                    min: json.StartTime.slice(2, 4)
                                }));
                                lesson.get('timing').add(new Time({
                                    type: "end",
                                    hr: json.EndTime.slice(0, 2),
                                    min: json.EndTime.slice(2, 4)
                                }));
                                lesson.set('venue', json.Venue);


                                return;
                            }
                        });
                    });

                });

            });
        };
        // end load function
        load(c_storage, sessions);


        //this.set('year', year);
        //this.set('sem', info[0][3]);
        //this.set('modules', c_storage.get('modules'));
        var r_storage = new Storage();
        var r_modules = r_storage.get('modules');
        // asumming no change to year/sem data
        this.set('year', year);
        this.set('sem', info[0][3]);
        // iterating through storage first to delete removed
        var c_modules = c_storage.get('modules');

        _.forEach(this.get('modules').models, function(module){

            // remove if it does not exist in c_storage
            if (c_modules.get(module.get('id')) == undefined){
                r_modules.add(module);

                //this.remove(module).destroy(); // check if this works
                return;
            }
            var c_lessons = c_modules.get(module.get('id')).get('lessons');

           // var r_lessons = r_modules.get(module.get('id')).get('lessons');
            // continue iterating down the hierarchy if it exists

            _.forEach(module.get('lessons').models, function(lesson){

                var check = _.findWhere(c_lessons, {classNo : lesson.get('classNo'), lessonType : lesson.get('lessonType')});
                // remove if undefined
                if (check == undefined){
                    if (r_modules.get(this.get('id'))== undefined){
                        r_modules.add(new Module({id:this.get('id')}));
                    }

                    var r_lessons = r_modules.get(this.get('id')).get('lessons');

                    r_lessons.add(lesson);

                    //this.get('lessons').remove(lesson).destroy();
                    return;
                }


            }, this.get(module.get('id')));

        }, this.get('modules') );
        console.log(r_modules);
        rstore.set('idx', idx);
        rstore.set('modules', r_modules);

        this.set('modules', c_storage.get('modules'));




        this.trigger("updateComplete");

    }


});
