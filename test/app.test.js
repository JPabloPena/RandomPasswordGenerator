const generatePassword = require('../src/helpers.js');

test("Test to verify that it generates passwords with numbers", () => {
    let numbers ='on'
    let uppercase = undefined
    let symbols = undefined
    let password = generatePassword(numbers, uppercase, symbols)
    
    const containsNumber = /\d/.test(password);
    expect(containsNumber).toBe(true);
});

test("Test to verify that it generates passwords with Uppercase", () => {
    let numbers =undefined
    let uppercase ='on' 
    let symbols = undefined
    let password = generatePassword(numbers, uppercase, symbols)
    const containsUppercase = /[A-Z]{2,}/g.test(password);
    expect(containsUppercase).toBe(true);
});
  
test("Test to verify that it generates passwords with Symbols", () => {
    let numbers =undefined
    let uppercase = undefined
    let symbols = 'on' 
    let password = generatePassword(numbers, uppercase, symbols)
    console.log(password)
    const containsSymbols =/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password);
    expect(containsSymbols).toBe(true);
});
