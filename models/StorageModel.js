'use strict';

var Storage = Backbone.Model.extend({
    url : "/models/StorageModel",
    initialize : function(){
        this.set('modules', new Modules());
    }
});