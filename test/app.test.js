const generatePassword = require('../src/helpers.js');

//testing the add function using toBe matcher
test("Test to verify that it generates passwords with numbers", () => {
    let numbers ='on'
    let uppercase = undefined
    let symbols = undefined
    let password = generatePassword(numbers, uppercase, symbols)
    
    const contieneNumero = /\d/.test(password);
    expect(contieneNumero).toBe(true);
});

test("Test to verify that it generates passwords with Uppercase", () => {
    let numbers =undefined
    let uppercase ='on' 
    let symbols = undefined
    let password = generatePassword(numbers, uppercase, symbols)
    console.log(password)
    const contieneuppercase = /[A-Z]{2,}/g.test(password);
    expect(contieneuppercase).toBe(true);
});
  
test("Test to verify that it generates passwords with Symbols", () => {
    let numbers =undefined
    let uppercase = undefined
    let symbols = 'on' 
    let password = generatePassword(numbers, uppercase, symbols)
    console.log(password)
    const contienesymbols =/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password);
    expect(contienesymbols).toBe(true);
});
