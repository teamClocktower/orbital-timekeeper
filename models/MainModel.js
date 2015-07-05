'use strict';
var MainM = Backbone.Model.extend({



    url : "/models/MainModel",
    initialize: function () {
        this.set('days', new Days());


    }
});