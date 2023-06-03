const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = new express();
const rootDir = require('./utils/path');

const hostName = "127.0.0.1";
const PORT =8000;

//ejs template
app.set('view engine', 'ejs');
app.set('views','views');

//Static files
app.use(express.static(path.join(rootDir,'public')))
app.use('/css', express.static(path.join(rootDir, 'node_modules', 'bootstrap', 'dist','css')))
app.use(bodyParser.urlencoded({extended:false}))

//Routes
const adminRoute = require('./routes/admin');
const homeRoute = require('./routes/home');

app.use(homeRoute);
app.use('/products', adminRoute);


// page not found
app.use('/*',(req, res, next)=>{
    //res.status(404).sendFile(path.join(rootDir,'views','404.html'));  //when html file serve
    const viewsData = {
        pageTitle:'Page Not Found'
    }
    res.status(404).render('404.ejs', viewsData);
})

//server running
app.listen(PORT,()=>{
    console.log(`Server Running at http://${hostName}:${PORT}/products/add`);
})