const express = require('express');
const morgan = require('morgan');

// initializations
const app = express();

// middlewares


// settings
app.set('port', 3000);

// start server
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});