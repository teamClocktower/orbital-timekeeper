'use strict';
var Url = Backbone.View.extend({

    model: Storage,
    tagname : "div",
    initialize: function(){
        this.render();
        this.listenTo(this.model, 'change', this.logchange);
    },
    render : function(){
        console.log(this);
    },
    logchange : function(){
        console.log('change logged');
    },
    events : {
        "all input" : "logchange"
    }




});