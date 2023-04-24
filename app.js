const http = require('http');
const querystring = require('querystring');
const fs = require('fs');

function generatePassword(numbers, uppercase, symbols) {
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

const server = http.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/") {
        let body = "";
        req.on("data", chunk => {
           body += chunk.toString();
        });
        req.on("end", () => {
           const { numbers, uppercase, symbols } = querystring.parse(body);
           const password = generatePassword(numbers, uppercase, symbols);
           const html = fs.readFileSync('index.html', 'utf8');
           const updatedHtml = html.replace('{{password}}', password);
           res.end(updatedHtml);
        });
    } else {
        const password = generatePassword();
        const html = fs.readFileSync('index.html', 'utf8');
        const updatedHtml = html.replace('{{password}}', password);
        res.end(updatedHtml);
    }
});

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server listening on port ${process.env.PORT || 3000}`);
});
