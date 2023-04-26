 const  generatePassword = function generatePassword(numbers, uppercase, symbols) {
    var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyz";
    password = "";
    if (numbers) {
        charset += "0123456789";
    }
    if (symbols) {
        charset += "$%^&)?'\"@";
    }
    if (uppercase) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    for (var i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

module.exports = generatePassword;