'use strict';
var Name = Backbone.View.extend({

    model: Storage,
    tagname : "div",
    initialize: function(){
        this.render();
    },
    render : function(){
        console.log('rendered Name view');
    }




});