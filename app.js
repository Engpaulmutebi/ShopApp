const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/Admin');
const shopRouter = require('./routes/shop');
const app = express();

app.use(express.static(path.join(__dirname, 'public' )));
app.use(bodyParser.urlencoded({ extended:false }));
app.use(adminData.routes);
app.use(shopRouter);

app.use((req, res,next) =>{res.status(404).sendFile(path.join(__dirname, '../','views','404.html'))});
 

app.listen(3000);
