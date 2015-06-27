'use strict';
var Name = Backbone.View.extend({

    model: Storage,
    tagname : "div",


    events: {
        'change': 'pushRaw'
    },
    pushRaw: function() {
        this.model.set('rawName', this.el.value);
    }


});
