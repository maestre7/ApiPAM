let app = require('express')();

app.use(require('express').json());
app.use('/', require('./routes'));

app.listen(3000, () => {
    console.log('Working!!!');
});