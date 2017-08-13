//index.js
const bodyParser = require('body-parser');
const config = require('./config/config.js');
const article = require('./controllers/articles.js');

require('./config/database.js')(config);


const app = express();
module.exports = app;

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader('access-control-allow-origin', '*');
  res.setHeader('access-control-allow-methods', 'POST, PUT, GET, DELETE');
  res.setHeader('access-control-allow-headers', 'x-parse-application-id, x-parse-rest-api-key, Content-Type, Accept');

  //res.setHeader('Content-Type', 'application/json');
  next();
});

app.post('/articles', function(req, res){
  article.create(req, res)
})

app.put('/articles/:article', function(req, res){
  //the put will include the article id in the request.params
  article.update(req, res)
})