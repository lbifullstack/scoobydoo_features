var assert = require('assert');

var myStepDefinitionsWrapper = function () {

    this.World = require("../support/world.js").World;

    this.Then(/^I should get back a valid response from the application$/, function (callback) {
        var browser = this.browser;
        browser.visit('http://localhost:3000', function(){
            assert.equal(browser.text("title"), "Express");
            callback();
        });
    });

};

module.exports = myStepDefinitionsWrapper;