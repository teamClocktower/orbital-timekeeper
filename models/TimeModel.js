'use strict'
var Time = Backbone.Model.extend({


    url: function() {
        return this.id ? '/TimeModel/' + this.id : '/TimeModel' ;
    }

});