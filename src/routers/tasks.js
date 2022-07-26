const express = require('express')
const router = new express.Router()
const Task = require('../models/tasks')

router.post('/tasks', async (req,res) => {
    const task = new Task(req.body)
    try{
        await task.save()
        res.send(task).status(201)
    }catch(e){
        res.status(500).send(e)
    }

    // task.save().then(()=>{
    //     res.status(201).send(task)
    // }).catch((error)=>{
    //     res.status(400).send(error)
    // })
})

router.get('/tasks',async (req,res) =>{
    try{
        const tasks = await Task.find({ })
        res.send(tasks).status(401)
    }catch(e){
        res.send(e).status(500)
    }
    // Task.find({ }).then((tasks)=>{
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send(e)
    // })
})

router.get('/tasks/:id', async (req,res)=> {
    const _id = req.params.id
    try{
        const tasks = await Task.findById(_id)
        res.send(tasks).status(401)
    }catch(e){
        res.send().status(500)
    }
    
    // Task.findById(_id).then((task) => {
    //     if(!task){
    //         return res.send().status(404)
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

router.patch('/tasks/:id',async (req,res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=> {
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:'Invalid Updates '})
    }
    try{
        const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidation:true})
        if(!task){
            return res.send().status(404)
        }
        res.send(task).status(201)
    }catch(e){
        res.send().status(400)
    }
})
router.delete('/tasks/:id',async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
    }
        res.send(task)

    } catch(e){
        res.status(400).res.send()
    }
})



module.exports = router