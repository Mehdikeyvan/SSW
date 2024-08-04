const User = require('../models/User');

const user_route_get = (req,res)=>{
   res.render('home',{title:"Home"})
};
const user_signup_get = (req,res)=>{
   res.render('signUp',{title:"Sign-up"});
};
const user_login_get = (req,res)=>{
   res.render("login",{title:"Login",User:User})
};
const user_allUsers_get = async (req, res) => {
   try {
      const users = await User.find();
      res.render('allUsers', { title: "All Users", users });
   } catch (err) {
      console.log(err);
      res.status(500).send('Server error');
   }
};
const user_signup_post = async (req,res)=>{
   const {username, password} = req.body;

   try{
      const user = new User({username,password});
      const existingUser = await User.findOne({ username });
       if (existingUser) {
         return res.status(400).send('Username already exists');
      }
      await user.save();
      res.status(201).send('You signed up successfuly.');
   } catch(err){
      
   }
};
const user_login_post = async (req,res)=>{
   const {username,password} = req.body;
   try {
      const user = await User.findOne({username});
      if (!user) {
         return res.status(404).json({message:"User Not found."})
      };

      const isPasswordCorrect = await user.password == password
      if (!isPasswordCorrect) {
         return res.status(400).json({message:'Incorrect password'});
      }

      res.status(200).json({message:"Login was successful."});
   } catch (error) {
      res.status(500).send('Server error');
   }
};
const user_delete = async (req, res) => {
   try {
       const userId = req.params.id;
       await User.findByIdAndDelete(userId);
       res.status(200).send('User deleted');
   } catch (err) {
       console.log(err);
       res.status(500).send('Server error');
   }
};


module.exports = {
   user_route_get,
   user_login_get,
   user_signup_get,
   user_allUsers_get,
   user_signup_post,
   user_login_post,
   user_delete
}