'use strict'

var Module = Backbone.Model.extend({
    initialize: function(){
        this.lessons = new Lessons;
        this.lessons.url = '/models/ModuleModel' + this.id + 'collections/LessonsCollection';

    },
    url : "/models/ModuleModel"


});