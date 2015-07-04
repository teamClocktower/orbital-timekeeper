"use strict";
function hideShow(){
    alert("its working");
    var togState = document.getElementById('hsbutton');
    if (togState.checked){
        alert("Visible");
    }
}


}
//var hideshow;
//hideshow = Backbone.View.extend({
//
//    initialize: function {
//        this.listenTo(this.el, 'all', this.recordChange);
//    },
//
//    events: {
//        'click': 'tog'
//    },
//
//    tog: function(){
//        var togcount = 0;
//        togcount += 1;
//        var togstate = (togcount % 2);
//
//    }
//
//    render : function(){
//        alert(togcount);
//        alert(togstate);
//    }
//
//})


//$(function(){
//    $('#switch'+numrow)
//})