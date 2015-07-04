"use strict";
function hideShow(){
    var togState = document.getElementById('hsbutton');
    if (togState.checked==1){
        Materialize.toast('Visible', 300, 'rounded');
    }
    if (togState.checked==0){
        Materialize.toast('Hidden', 300, 'rounded');
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