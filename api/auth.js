const express = require('express')
const passport = require('passport');
const User = require('./models/user')

passport.use(User.createStrategy());

passport.serializeUser(function(user, done) {
  done(null, user._id);
});

passport.deserializeUser(function(_id, done) {
  User.findById(_id, function(err, user) {
    done(err, user);
  });
});

var GoogleStrategy = require('passport-google-oauth2').Strategy;

const router = express.Router();

router.post('/register', function(req, res) {
    
    usuario = new User({ username : req.body.username , email: req.body.email});
  
          User.register(usuario, req.body.password, function(err, user) {
            if (err) {
              res.json({success:false, message:"Your account could not be saved. Error: ", err}) 
            }else{
              res.json({success: true, message: "Your account has been saved"})
            }
          });
});

router.post('/login', function(req, res, next) {

  passport.authenticate( 'local', function(err, user, info){
    if (err){ 
      return next(err); 
    }
    if(!user){ 
      return res.json({success:false, message:"Wrong credentials"})  
    }

    req.login(user, function(err){
      if (err){
        return next(err);
      }
        return res.json({success:true, message:"Logged in successfully"})  
  
    });

  })(req, res, next);

});

router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

router.get('/isAuthenticated', function(req, res){
  if(req.isAuthenticated())
    return res.json({authenticated :true})
  else
    return res.json({authenticated: false}) 
});

module.exports = router;