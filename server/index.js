const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const shortUrl = require('./models/shortURL');
app.use(bodyParser.json());
app.use(cors());
mongoose.connect("mongodb://admin:admin@ds229878.mlab.com:29878/urlshorten")
app.use(express.static(__dirname +'/public'));
//creates the database entry
app.post('/new/:urlToShorten(*)',(req,res,next)=>{
  var {urlToShorten} = req.params;
  var regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
  if(regex.test(urlToShorten) == true){
    var short = Math.floor(Math.random()*100000).toString();
    var data = new shortUrl(
      {
        originalUrl: urlToShorten,
        shortUrl: short
      }
    );
    data.save(err=>{
      if(err){
        return res.send('Error saving to DB');
      }
    });
    res.send(data)
  }
  else{
      res.json({urlToShorten:'failed'})
  }

});
//Query database and forward to original URL
app.get('/:urlToForward',(req,res,next)=>{
  var {urlToForward} = req.params;
  shortUrl.findOne({'shortUrl': urlToForward},(err,data)=>{
    if(err) return res.send("Error reading database");
    var re = new RegExp("^(http||https)://","i");
    var strToCheck = data.originalUrl;
    if(re.test(strToCheck)){
      return res.redirect(301,data.originalUrl);
    }
    else{
      return res.redirect(301,'http://'+ data.originalUrl);
    }
  });
});



app.listen(process.env.PORT || 5000,()=>{
  console.log('Server running on 5000');
});
