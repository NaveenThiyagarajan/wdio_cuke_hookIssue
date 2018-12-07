var { Given, When, Then } = require('cucumber');
var expect = require('chai').expect;

Given(/^I open the URL$/,function(){
   browser.url('/');
});

When(/^I click on the API section$/,function(){
    browser.click('=API');
    browser.pause(2000);
    // var elmnts = browser.elements('=API');
    // var element = elmnts.value[0].ELEMENT;
    // browser.elementIdClick(element);
});

When(/^Search with the keyword "([^"]*)"$/,function(keyword){
    browser.setValue('[name="search"]',keyword);
    browser.pause(2000);
    console.log('The search box is entered with the text: ' + keyword);
    expect(false,'Intentionally failed to show the issue').to.be.true;
});

Then(/^the search results should be filtered$/,function(){
    var count = 0;
    var elements_hidden = browser.elements('//div[contains(@class,"commands")]/a[not(@style)]');
//       console.log(elements_hidden);
    var noOfElements = elements_hidden.value.length;
    console.log("Number of elements identified: "+ noOfElements);
    for (let index = 0; index < noOfElements; index++) {
        var element = elements_hidden.value[index].ELEMENT;
        //var uiValue = browser.getText("("+element+")["+index+"]");
        var uiValue = browser.elementIdText(element).value;
        console.log("UIValue: " + uiValue);
        //console.log("Value of stye: " + browser.getCssProperty(element,'style'));
        if(uiValue.toLowerCase().includes("wait")){
            console.log("The value displayed on the UI: " + uiValue);
            count++;
        }           
    } 
    console.log('count: ' + count);
    //browser.debug();
    expect(count).to.be.equal(noOfElements);
});