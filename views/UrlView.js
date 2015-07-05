'use strict';
var Url = Backbone.View.extend({

    model: Storage,
    tagname : "div",


    events: {
      'change' : 'pushRaw',
        'keyup' : 'pushRaw'

    },
    pushRaw: function() {
        var decoded = decodeURIComponent(this.el.value);
        this.model.set('rawUrl', decoded);
    }


});
