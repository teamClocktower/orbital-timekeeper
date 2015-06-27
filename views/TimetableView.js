'use strict';
var Timetable = Backbone.View.extend({


    tagname : "div",


    initialize : function(){
        this.listenTo(this.model, "updateComplete", this.displayLessons);
    },
    displayLessons: function() {

        // reset async
        $.ajaxSetup({
            async: true
        });


        // go through storage to display all lessons
        var modules = this.model.get('modules');
        var mincycle = ["00", "30"];
        _.forEach(modules.models, function(module){

            var lessons = module.get('lessons');
            _.forEach(lessons.models, function(lesson){
                var day = lesson.get('dayText');


                var timing = lesson.get('timing');

                var startHr, startMin, endHr, endMin;
                _.forEach(timing.models, function(time){
                    if (time.get('type') == "start"){
                        startHr = time.get('hr');
                        startMin = time.get('min');
                    } else {
                        endHr = time.get('hr');
                        endMin = time.get('min');
                    }

                });

                var hrtrack = parseInt(startHr);

                while (hrtrack< parseInt(endHr)){
                    for (var i=0;i<2; i++){
                        if (hrtrack == parseInt(startHr) && startMin == "30"){
                            $('#'+day+ ' > .h'+starthr+'.m30').html("CLASS");
                            break;
                        } else if (hrtrack == parseInt(endHr) && endMin == "00"){
                            $('#'+day+ ' > .h'+endHr+'.m00').html("CLASS");
                            break;
                        } else {
                            $('#'+day+ ' > .h'+String(hrtrack)+'.m'+mincycle[i]).html("CLASS");
                        }
                    }
                    hrtrack+=1;
                }

            },this);
        },this);
    }


});
