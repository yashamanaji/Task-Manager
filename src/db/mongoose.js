const mongoose = require('mongoose')
// const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser: true
})



// const me = new User({
//     name:'   Yash    ',
//     email:'YASHAMANAJI@GMAIL.COM    ',
//     password:'yash12356'

// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('error',error)
// })



// const task = new Task({
//     description:'   Eat Lunch'
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log(error)
// })