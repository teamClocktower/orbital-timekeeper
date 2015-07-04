"use strict";
function hideShowNote(i){
    var togState = document.getElementsByName('hsbutton');
    var tSPos = i-1;
    //alert(tSPos);
    if (togState[tSPos].checked==1){
        Materialize.toast('Visible row ' + i, 300, 'rounded');
    }
    if (togState[tSPos].checked==0){
        Materialize.toast('Hidden row '+ i, 300, 'rounded');

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