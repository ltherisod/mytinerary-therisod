const User = require ('../models/User')
const bcryptjs = require('bcryptjs')

const userController = {
    addNewUser : (req, res) => {
        const {firstName, lastName, email, password, profilePhoto, country} = req.body
        let cryptPass = bcryptjs.hashSync(password)
        const newUser = new User ({firstName, lastName, email, password:cryptPass, profilePhoto, country })
        User.findOne({email:email})
        .then((user)=>{
            if(user){
                throw new Error ('This email is already in use')
            }else{
                newUser.save()
                .then((newUser) => res.json({success:true, response:newUser, error:null}))
                .catch((error) => res.json({success:false, response:error}) )
            }
        })
        .catch((error) => res.json({success:false, response:null, error: error.message}))
    },
    logInUser : (req, res) => {
        const { email, password} = req.body
        User.findOne({email:email})
        .then((user) =>{
            if(!user) throw new Error('Email/password incorrect')
            let correctPass = bcryptjs.compareSync(password, user.password)
            if(!correctPass) throw new Error('Email/password incorrect')
            res.json({ success:true, response: user})
         })
        .catch ((error) => res.json({success:false, error:error.message}))
    },
    deleteUser :(req, res) =>{
        User.findOneAndDelete({_id:req.params.id})
        .then(() =>res.json({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },

    editUser:(req, res) =>{
        User.findOneAndUpdate({_id:req.params.id}, {...req.body})
        .then(() => res.json({success:true}))
        .catch((error) => res.json({success:false, response:error.message}))
    },
    getAllUsers:  (req, res) => {
        User.find()
        .then((users)=>res.json({success:true, response:users}))
        .catch((error) =>res.json({success:false, response:error}))
    },
}

module.exports= userController