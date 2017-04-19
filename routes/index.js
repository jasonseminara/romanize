const home = require('express').Router();

home.route('/')
  .get((req, res) => res.render('pages/home',{
            title: "Convert to Roman", //page title
            action: "/", //post action for the form
            fields: [
            {name:'number',type:'numeric',property:'required'},   //first field for the form
            ]
        }))
  .post((req, res) => {
    console.log(req.body);
    res.redirect('/admin');
  });

module.exports = home;
