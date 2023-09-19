const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  User.findById('6509aa020de3fa1ac4ee439e')
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect(
    "mongodb+srv://Biplab:Biplab1997@cluster27.j3ndx24.mongodb.net/biplab"
  )
  .then(result => {
    console.log("DB connected");
    app.listen(process.env.PORT || 3000, function () {
      console.log('Express app running on port ' + (process.env.PORT || 3000))
    })
    User.findOne().then(user => {
      if (!user) {
        const user = new User({
          name: "Biplab",
          email: "biplab@gmail.com",
          card: {
            items: []
          },

        })
        user.save();

      }
    })
  })

  .catch(err => {
    console.log(err);
  })
