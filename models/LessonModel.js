'use strict';





var Lesson = Backbone.Model.extend({


    parse: function(response) {
        for (var responseElement in response){
            if (responseElement in this.model){
                var modelObj = this.model[responseElement];
                var modelData = responseElement;
                response[responseElement] = new modelObj(modelData, {parse : true});
            } else {
                this[responseElement] = response[responseElement];
            }
        }

        return response;

    },
    url : "/models/LessonModel"
    });