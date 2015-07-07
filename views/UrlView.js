'use strict';
var Url = Backbone.View.extend({

    model: Storage,
    tagname : "div",


    events: {
      'change' : 'pushRaw',
        'keyup' : 'pushRaw'

    },
    pushRaw: function() {
        var model = this.model;
        var decoded;
        if(this.el.value.length == 21){
            $.getJSON('https://nusmods.com/redirect.php?timetable=' + this.el.value , function(json){
                decoded = decodeURIComponent(json.redirectedUrl);

                model.set('rawUrl', decoded);
            });
        } else{
            decoded = decodeURIComponent(this.el.value);
            model.set('rawUrl', decoded);
        }


    }


});
