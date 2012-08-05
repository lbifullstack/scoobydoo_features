var apiDriver = {

    stock : [

        {code : "CODE#1", quantity : 1000},
        {code : "CODE#2", quantity : 2000}

    ],

    getAllStock : function () {
        return this.stock;
    }  ,

    setStock : function(stockItems){
        this.stock = stockItems;
    }

};

exports.ApiDriver = apiDriver;