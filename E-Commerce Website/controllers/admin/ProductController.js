const {addProducts} = require('../../utils/products')

exports.getAddProductPage =(req, res)=>{
    const viewsData ={
        pageTitle: "Add Products"
    }
    res.render('AddProduct.ejs', viewsData)
}

exports.postAddProductPage =(req, res)=>{
    const product ={
        title:req.body.title
    };
    addProducts(product);
    // console.log(req.body.username);
     res.redirect('/')
}