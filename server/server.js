let express = require('express');
let port = process.env.PORT || 4000;

let app = express();

app.use(express.static(`${ __dirname }/../build`));
app.listen(port, () => console.log(`server is running at port ${port}`))