const PORT = process.env.PORT || 8080
var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    return res.status(200).send('This is the root of my express application');
  });

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));