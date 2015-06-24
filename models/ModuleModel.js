'use strict'

var Module = Backbone.Model.extend({
    idAttribute : "id",

    url : "/models/ModuleModel",
    initialize : function() {
        this.set('lessons', new Lessons);
    }


});