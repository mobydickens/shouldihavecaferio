require('dotenv').config();
let express = require('express');
let session = require('express-session');
let controller = require('./controller');
let { SERVER_PORT, SESSION_SECRET } = process.env;
let checkForSession = require('./middlewares/checkForSession.js');

let app = express();

//middleware
app.use(express.static(`${ __dirname }/../build`));

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
//initializes user object for session ( I think )
app.use( checkForSession )

app.get('/api/question', controller.getQuestion);

app.listen(SERVER_PORT, () => console.log(`server is running at port ${SERVER_PORT}`))



//on digital ocean --> pm2 --> git pull --> npm run build