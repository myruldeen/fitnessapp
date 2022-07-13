const config = require('./config/config');
const app = require('./express');
const mongoose = require('mongoose');

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.mongoUri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(config.port, (err) => {
      if (err) {
        console.log(err)
      }
      console.info('Server started on port %s.', config.port)
    })
  })
  .catch((err) => {
    console.log(err)
  })