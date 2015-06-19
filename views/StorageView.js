'use strict';
var StorageView = Backbone.View.extend({

    model: Storage,
    tagname : "div",


    storeChange : function(){
        storeall.each(function(x){
            x.set('modstore', x.get('urlstore').split('?')[1].split('&'));
            var modln = x.get('modstore').length;
            for (var idx=0;idx<modln;idx++){
                $.getJson(path+ x.get('yearstore')+'/'+ x.get('semstore')+'/modeules/'+ x.get('modstore')[idx]+ '.json',function(json){
                    var allmods = json;
                    x.get('modstore')[idx]
                });
            }

        });

    },
    initialize: function() {
        this.listenTo(this.model, "change", this.storeChange);
    },
    render : function(){

        this.$el.html(this.model.get('namestore')+ "'s class<br>");
        return this;
    }



});