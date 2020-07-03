const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/javascriptdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.err(err))