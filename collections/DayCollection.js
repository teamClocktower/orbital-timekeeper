'use strict';

var Days = Backbone.Collection.extend({

    url : "/models/DayModel",
    initialize: function () {
        this.add(new Day({id:'Monday'}));
        this.add(new Day({id:'Tuesday'}));
        this.add(new Day({id:'Wednesday'}));
        this.add(new Day({id:'Thursday'}));
        this.add(new Day({id:'Friday'}));


    }



});