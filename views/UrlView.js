'use strict';
var Url = Backbone.View.extend({

    model: Storage,
    tagname : "div",


    events: {
      'change': 'pushRaw'
    },
    pushRaw: function() {
        this.model.set('rawUrl', this.el.value);
    }


});
