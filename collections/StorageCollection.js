'use strict'

var StoreAll = Backbone.Collection.extend({
    model : Storage,
    url : "/models/StorageModel"

});