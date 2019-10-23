const express = require('express');
const path = require('path'); //path lets us navigate file system
//const hbs = require('hbs');


//require the sql connection file
/*const sql = require('./utils/sql');*/

// heroku assigns a port when it deploys via the process (environment variables - coming )
//locally this will run @ port 3000 remotely it'll run whenever heroku tells it to run
const port = process.env.PORT || 3000; //a double pipe means "or"

const app = express();

//app.use(express.static('public'));

// tell express to use hbs  engine to render data
//app.set('view engine','hbs');

// tell express to use views folder to find its template
//app.set('views',__dirname + '/views');


// a forward slash is the home route (same as index.html)

app.get('/index', (req, res) => {
 // res.send('hello world!');
  res.sendFile(path.join(__dirname + '/index.html'));
})

//app.get('/contact', (req, res) => {
  //res.send('on the contact page');
//})

res.render('home', {message: "hi there!", anothermessage: "This is easy!"});

app.listen(port, () => {
  console.log(`Server running at ${port}`);
});