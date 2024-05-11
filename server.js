const fs = require('fs');
const https = require('https');

const options = {
  requestCert: true,
  rejectUnauthorized: true,
  ca: fs.readFileSync('root_ca.crt'),
  cert: fs.readFileSync('server.crt'),
  key: fs.readFileSync('server.key')
};

const hostname = 'localhost'; // Указываем localhost как имя хоста
const port = 9443; // Указываем порт

https
  .createServer(options, (req, res) => {
    console.log("req.client.authorized: ", req.client.authorized);
    if (req.client.authorized) {
      const cert = req.socket.getPeerCertificate(false); // true - получить все сертификаты, false - последний
      console.log("cert: ", cert);
    }
    res.end('Hello, world!');
  })
  .listen(port, hostname, () => {
    console.log(`Server running at https://${hostname}:${port}/`);
  });