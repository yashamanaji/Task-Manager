const express = require('express')
const router = new express.Router
const User = require('../models/user')

router.post('/users', async (req,res) => {
    const user = new User(req.body)
 
     try {
         await user.save()
         res.status(201).send(user)
     }   catch(e){
         res.status(400).send(e)
     }
 
 //    user.save().then(()=>{
 //         res.status(201).send(user)
 //    }).catch((error) =>{
 //     res.status(400).send(error)
 
 //    })
 })
 
 router.get('/users', async (req,res) =>{
 
     try{
         const users = await User.find({ })
         res.send(users)
     } catch(e){
         res.send(e).status(500)
     }
 
 
     // User.find({ }).then((users) => {
     //     res.send(users)
     // }).catch((e)=> {
     //     res.status(500).send()
     // })
 })
 
 router.get('/users/:id', async (req,res) => {
     const _id = req.params.id
 
 
     try{
         const user = await User.findById(_id)
         if(!user){
             return res.send().status(404)
         }
 
         res.send(user)
 
     }   catch(e) { 
         res.status(500).send()
     }
 
     // User.findById(_id).then((user)=>{
     //     if(!user){
     //         return res.status(404).send()
     //     }
     //      res.send(user)
     // }).catch((e)=>{
     //     res.status(500).send()
     // })
 })
 
 router.patch('/users/:id',async (req,res) =>{
     const updates = Object.keys(req.body)
     const allowedUpdates = ['name','email','age','password']
     const isValidOperation = updates.every((update)=> {
         return allowedUpdates.includes(update)
     })
     if(!isValidOperation){
         return res.status(400).send({error:'Invalid Operation'})
     }
 
 
     try{
         const user = await User.findByIdAndUpdate(req.params.id,req.body,{ new: true, runValidators: true})
         if(!user){
             return res.status(404).send()
         }
 
         res.send(user).status(201)
     }catch(e){
         res.send().status(400)
     }
 })
 
 router.delete('/users/:id', async (req,res) =>{
     try{
         const user = await User.findByIdAndDelete(req.params.id)
         if(!user){
             return res.status(404).send()
         }
         res.send(user)
     }catch(e){
         res.send().status(500)
     }
 })

module.exports = router
