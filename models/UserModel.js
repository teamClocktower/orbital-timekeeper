'use strict'
var User = Backbone.Model.extend({

    initialize: function(){
        this.modules = new Modules;
        this.modules.url = 'models/UserModel/' + this.id + 'collections/ModulesCollection';

    },
    url : "/models/UserModel"


});