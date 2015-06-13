'use strict'

var Users = Backbone.Collection.extend({
    model : User,
    url : "/models/UserModel"

});