const https = require('https');
const fs = require('fs');
const path = require('path');

const url = 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000';
const dest = path.join(__dirname, '..', 'public', 'hero-main.jpg');

const file = fs.createWriteStream(dest);
https.get(url, function(response) {
  if (response.statusCode === 302 || response.statusCode === 301) {
    https.get(response.headers.location, function(response2) {
      response2.pipe(file);
      file.on('finish', function() {
        file.close();
        console.log('Download completed');
      });
    });
  } else {
    response.pipe(file);
    file.on('finish', function() {
      file.close();
      console.log('Download completed');
    });
  }
}).on('error', function(err) {
  fs.unlink(dest);
  console.error(err.message);
});
