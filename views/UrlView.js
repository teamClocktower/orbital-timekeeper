'use strict';
var Url = Backbone.View.extend({

    model: Storage,
    tagname : "div",

    initialize: function(){
        this.listenTo(this.el, 'all', this.recordChange);
    },
    events: {
      'click': 'showAlert'
    },
    showAlert: function() {
      alert("You clicked me");
    },
    render : function(){
        console.log(this);
    },
    recordChange : function(){
        console.log(this);

    }



});
