const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      middleware = require('./middleware'),
      app = express(),
      port = 3000;

// =========== TOP LEVEL MIDDLEWARE ============ //

app.use(bodyParser.json());
app.use(cors());


// ============== ENDPOINTS =============== //

app.post('/api/login', middleware.authenticate, (req, res) => {
  console.log('success!')

})




app.listen(port, () => console.log(`Listening on port ${port}`));