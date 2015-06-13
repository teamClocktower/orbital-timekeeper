'use strict'
var Time = Backbone.Model.extend({
    defaults : {
       hr : 0,
       min : 0
   },

    url: function() {
        return this.id ? '/TimeModel/' + this.id : '/TimeModel' ;
    }

});