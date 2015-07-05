'use strict';

var R_Storage = Backbone.Model.extend({
    url: "/models/R_StorageModel",
    initialize: function () {
        this.set('modules', new Modules());
        this.on('change:modules', this.updateView);


    },

    updateView: function () {
        this.trigger("RemoveEls");

    }


});
