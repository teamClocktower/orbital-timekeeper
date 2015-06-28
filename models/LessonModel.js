'use strict';
var Lesson = Backbone.Model.extend({



    url : "/models/LessonModel",
    initialize : function() {
        this.set('timing', new Times);
    }
    });