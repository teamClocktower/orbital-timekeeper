'use strict'

var Lessons = Backbone.Collection.extend({
    model : Lesson,
    url : "/models/LessonModel"

});