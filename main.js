//const express = require('express');
//const path = require('path');

//const app = express();

//app.get('/', (req, res) => { res.sendFile(path.join(__dirname)+'/index.html'); } );

//app.listen(8080, () => { console.log('running');  });

function mindText() {
  var x = document.getElementById("textForm");
  var text = "";
  var i; 
  for (i = 0; i < x.length; i++) {
    text += x.elements[i].value;
  }
  document.getElementById("user").innerHTML = text;
    gapi.client.init({
          'apiKey': 'AIzaSyD1dzard7zJfqertMINidp1lxCP1Dor0gc',
          'discoveryDocs': ['https://language.googleapis.com/$discovery/rest?version=v1beta1']
        }).then(function() {
          return gapi.client.language.documents.analyzeSentiment({
            // not sure how to put in a JSON object in here correctly
            "document": {
                      "text" : "PLAIN_TEXT",
                      "content" : text,
                   },
              "encodingType": "UTF8"
          });
        }).then(function(resp) {
          return resp.result.documentSentiment.score;
        }, function(reason) {
          console.log('Error: ' + reason.result.error.message);
        });
      gapi.load('client', start);
}

function sendScore() {
    var result = mindText();
    
    document.getElementById("magnitude").innerHTML = "Score: " + result;
}

//$("my-button").click(function() {
//    var result = mindText();
    
//    document.getElementById("magnitude").innerHTML = "Score: " + result;
//});