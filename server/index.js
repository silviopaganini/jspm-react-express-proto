const PORT         = process.env.PORT || 8888;
const express      = require('express');
const http         = require('http');
const path         = require('path');

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');

const api          = require('./api');

///

const app = express();
const router = express.Router();
const STATIC = path.resolve(__dirname + '/../app/');

app.locals.title = "";
app.set('views', STATIC + "/views");
app.set('view engine', 'ejs');

app.use(cookieParser(''));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", express.static(STATIC));

router.post( '/post_url/', api.post);
router.get( '/', api.render);

app.use('/', router);

http.createServer(app).listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
