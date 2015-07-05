'use strict';

var Cells = Backbone.Collection.extend({

    url : "/models/CellModel",

    initialize: function () {
        this.add(new Cell({hrMin: "08,00"}));
        this.add(new Cell({hrMin: "08,30"}));
        this.add(new Cell({hrMin: "09,00"}));
        this.add(new Cell({hrMin: "09,30"}));
        this.add(new Cell({hrMin: "10,00"}));
        this.add(new Cell({hrMin: "10,30"}));
        this.add(new Cell({hrMin: "11,00"}));
        this.add(new Cell({hrMin: "11,30"}));
        this.add(new Cell({hrMin: "12,00"}));
        this.add(new Cell({hrMin: "12,30"}));
        this.add(new Cell({hrMin: "13,00"}));
        this.add(new Cell({hrMin: "13,30"}));
        this.add(new Cell({hrMin: "14,00"}));
        this.add(new Cell({hrMin: "14,30"}));
        this.add(new Cell({hrMin: "15,00"}));
        this.add(new Cell({hrMin: "15,30"}));
        this.add(new Cell({hrMin: "16,00"}));
        this.add(new Cell({hrMin: "16,30"}));
        this.add(new Cell({hrMin: "17,00"}));
        this.add(new Cell({hrMin: "17,30"}));
        this.add(new Cell({hrMin: "18,00"}));
        this.add(new Cell({hrMin: "18,30"}));
        this.add(new Cell({hrMin: "19,00"}));
        this.add(new Cell({hrMin: "19,30"}));
        this.add(new Cell({hrMin: "20,00"}));
        this.add(new Cell({hrMin: "20,30"}));
        this.add(new Cell({hrMin: "21,00"}));
        this.add(new Cell({hrMin: "21,30"}));
        this.add(new Cell({hrMin: "22,00"}));
        this.add(new Cell({hrMin: "22,30"}));
        this.add(new Cell({hrMin: "23,00"}));
        this.add(new Cell({hrMin: "23,30"}));



    }



});