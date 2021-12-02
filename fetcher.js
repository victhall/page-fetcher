//Use request library to HTTP request
const request = require('request');
//Use fs module to write the file
const fs = require('fs');
//command line args
const link = process.argv[2];
const localPath = process.argv[3];

const getResource = (link, localPath) => {
    request(link, (error, response, body) => {
      if (error) {
        throw new Error('invalid link'); // Print the error if one occurred
      }
      if (response && response.statusCode > 200) {
        throw new Error(`${response.statusCode}`)
      }
      fs.writeFile(localPath, body, (error) => {
        if (error) {
          throw new Error('file cannot be downloaded');
        }
        console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
      })
    });
  }
  getResource(link, localPath);


