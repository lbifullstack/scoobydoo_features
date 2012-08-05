var util = require ('util'),
    assert = require('assert');


var transformTableIntoStock = function(table){
    var stock = table.getContents().raw();
    var newStock = [];
    for(var i = 1 ; i < stock.length; i++){
        newStock.push({code : stock[i][0], description : stock[i][1] , quantity: stock[i][2]});
    }
    return newStock;
};

var stockRoomManagement = function(){

    var browser;

    this.World = require("../support/world.js").World;

    this.Given(/^we have a warehouse full of stock:$/, function(table, callback) {
        this.driver.setStock(transformTableIntoStock(table));
        assert.equal(this.driver.getAllStock().length , 2);
        callback();
    });

    this.When(/^I visit the stock page$/, function(callback) {
        browser = this.browser;
        browser.visit('http://localhost:3000/stock', function(){
            assert.equal(browser.statusCode, 200);
            callback();
        });
    });

    this.Then(/^I should see all the available stock$/, function(callback) {
        callback.pending();
    });
};

module.exports = stockRoomManagement;
