'use strict';
var StorageView = Backbone.View.extend({

    model: Storage,
    tagname : "div",
    initialize: function(){
        this.render();
    },
    render : function(){
        console.log('rendered Storage view');
    }


    /*
    modelChanged : function(){
        var modules = this.get('modules');
        var modulesln = modules.length;

        console.log(modules, modulesln);
        for (var loop=0; loop<modulesln; loop++){

            var modid = modules.at(loop).get('id');
            console.log(1233333333333333333);
            _.each(modules.at(loop).get('lessons'), function(lesson){
                var classNo = lesson.get('classNo');
                var lessonType = lesson.get('lessonType');
                var dayText = lesson.get('dayText');
                var startHr = lesson.get('startTime').get('hr');
                var startMin = lesson.get('startTime').get('min');
                var stopHr = lesson.get('stopTime').get('hr');
                var stopMin = lesson.get('stopTime').get('min');


                var hrtrack = parseInt(startHr);
                var mintrack = 0;
                console.log(lessonType + classNo + startHr + stopHr);
                while (hrtrack <= stopHr){
                    for (var i=0; i<2; i++){
                        if (hrtrack == startHr && mintrack < parseInt(startMin)){
                            continue;
                        } else if (hrtrack == stopHr && mintrack == parseInt(stopMin)){
                            $('#'+dayText+' > .h'+hrtrack.toString()+'.m'+mintrack.toString()).html(modid + lessonType);
                            break;
                        } else {
                            $('#'+dayText+' > .h'+hrtrack.toString()+'.m'+mintrack.toString()).html(modid + lessonType);
                        }

                        mintrack = (mintrack + 30)%60;
                    }
                    hrtrack += 1;
                }

            });

        };
    },

    initialize : function(){
        this.model.on("all", this.modelChanged, this.model);
    }*/

});