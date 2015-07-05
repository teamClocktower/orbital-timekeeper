'use strict';
var Day = Backbone.Model.extend({



    url : "/models/DayModel",
    initialize: function () {
        this.set('cells', new Cells());


    }
});