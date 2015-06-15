'use strict';
var Storage = Backbone.View.extend({

    el: '#timetable',

    initialize : function(){
        this.render();
    },

    events : {
        "change storeall" : "storeChange"
    },

    storeChange : function(){
        for (var i=1;, i<storeall.get('row')+1; i++){

        }

    },

    render : function(){

    }



});