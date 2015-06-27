'use strict';
var Timetable = Backbone.View.extend({


    tagname : "div",


    initialize : function(){
        this.listenTo(this.model, "updateComplete", this.displayLessons);
    },
    displayLessons: function() {
        // go through storage to display all lessons
        var modules = this.model.get('modules');

        _.forEach(modules.models, function(module){

            var lessons = module.get('lessons');
            _.forEach(lessons.models, function(lesson){
                var day = lesson.get('dayText');
                console.log(lesson);
                console.log(lesson.attributes);
                console.log(lesson.get('startTime'));
                var startHr = lesson.get('startTime').get('hr');
                var startMin = lesson.get('startTime').get('min');
                var endHr = lesson.get('endTime').get('hr');
                var endMin = lesson.get('endTime').get('min');
                console.log(day);
                console.log(typeof(day));

            },this);
        },this);
    }


});
