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
        var hrcycle = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11","12","13","14","15","16","17","18","19","20","21","22","23"];

        var idx = this.model.get('idx');
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

                var fillText = function(len, idxArr){
                  var head = len==1?len + " Class, <br>": len + " Classes, <br>";
                    var body = "";
                    console.log(idxArr);
                    _.forEach(idxArr, function(fidx){

                        var name = storeall.where({idx:fidx})[0].get('name');
                        body += name + " ";
                    });
                    return head + body;
                };

                var selectEl = function(day, hr, min){
                  return   $('#'+day+ ' > .h'+hr+'.m'+min);
                };
                var initEl = function(day, hr, min){
                    if (selectEl(day,hr,min).data("num")==undefined){
                        selectEl(day,hr,min).data("num", []);
                    }
                };
                var fillEl = function(day, hr, min, idx){
                    initEl(day,hr,min);

                    var datum = selectEl(day,hr,min).data("num");

                    datum.push(idx);
                    selectEl(day,hr,min).html(fillText(datum.length, datum));

                };

                while (hrtrack< parseInt(endHr)){
                    for (var i=0;i<2; i++){
                        if (hrtrack == parseInt(startHr) && startMin == "30"){

                            fillEl(day,startHr,startMin,idx);
                            //$('#'+day+ ' > .h'+starthr+'.m30').html(filltext);
                            break;
                        } else if (hrtrack == parseInt(endHr) && endMin == "00"){

                            fillEl(day, hrcycle[hrtrack], "00", idx);
                            //$('#'+day+ ' > .h'+endHr+'.m00').html(filltext);
                            break;
                        } else {

                            fillEl(day, hrcycle[hrtrack], mincycle[i], idx);
                            //$('#'+day+ ' > .h'+String(hrtrack)+'.m'+mincycle[i]).html(filltext);
                        }
                    }
                    hrtrack+=1;
                }

            },this);
        },this);
    }


});
