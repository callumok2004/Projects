const https = require("https"), http = require("http");
var links = [], interval = 60000;

setInterval(() => {
  links.forEach(link = {
    try {
       link.startsWith("https") ? https.get(link) : http.get(link);
       console.log(`Pinged ${link} successfully!`);
    } catch(e) {
      console.log(`Failed to ping ${link} with error: ${e}`);
    };
  });
}, interval);
