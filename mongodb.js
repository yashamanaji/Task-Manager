// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
const {MongoClient,ObjectID} = require('mongodb')

 const connectionURl = 'mongodb://127.0.0.1:27017'
 const databaseName = 'task-manager'
 
 MongoClient.connect(connectionURl,{useNewUrlParser: true},(error,client) =>{
    if(error){
      return  console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('tasks').deleteOne({
    //   _id:new ObjectID('62b86aec56e2a82f2807172a')
    // }).then((result)=>{
    //   console.log('item removed!',result)
    // }).catch((error)=>{
    //   console.log('failed',error)
    // })
    // db.collection('users').deleteMany({
    //   age: 23
    // }).then((result)=>{
    //   console.log(result)
    // }).catch((error)=>{
    //   console.log(error)
    // })


  //Update one value in db
    // db.collection('users').updateOne({
    //   _id: new ObjectID("62b85ca5c08b692d74c63b10") 
    // },{
    //   $inc: {
    //     age: 1
    //   }
    // }).then((result)=>{
    //   console.log(result)
    // }).catch((error)=>{
    //   console.log(error)
    // })
// --------------------------------------------------------------------------
    //update many values in db
    // db.collection('tasks').updateMany({
    //   completed: false
    // },{
    //   $set:{
    //     completed: true
    //   }
    // }).then((result)=>{
    //   console.log(result)
    // }).catch((error)=>{
    //   console.log(error)
    // })
// --------------------------------------------------------------------------

// InsertOne item into db
    // db.collection('users').insertOne({
    //     name: 'Vikram',
    //     age: 26
    // },(error,result) =>{
    //     if(error){
    //         return console.log('unable to insert user')
    //     }
    //     console.log(result.ops)

    // })
    // --------------------------------------------------------------------------
    
    //Insert Many in db
    // db.collection('users').insertMany([
    //     {
    //         Name: 'Yash',
    //         Age: '22'
    //     },{
    //         Name: 'Andrew',
    //         Age: '27'
    //     }
    // ],(error,result)=> {
    //     if(error){
    //         return console.log('unable to insert')
    //     }

    //     console.log(result.ops)
    // })
    // db.collection('tasks').insertMany([
    //     {
    //         description: 'washingmashine',
    //         completed: true
    //     },{
    //         description: 'car',
    //         completed: true
    //     },{
    //         description: 'bedroom',
    //         completed: true
    //     }

    // ],(error,result)=>{
    //     if(error){
    //         return console.log('unable to insert')
    //     }

    //     console.log(result.ops)
    // })
    // --------------------------------------------------------------------------
    
    //find one obj in db

    // db.collection('users').findOne({_id: new ObjectID("62baaa3944314530de84c45d")},(error,user)=>{
    //   if(error){
    //     return console.log('unable t fetch')

    //   }
    //   console.log(user)
    // })
// --------------------------------------------------------------------------
    
//find many obj in db

// db.collection('users').find({age:22}).toArray((error,user) =>{
    //   console.log(user)
    // })
    
    // db.collection('users').find({age:22}).count((error,count) =>{
    //   console.log(count)
    // })
    // db.collection('tasks').findOne({_id: new ObjectID("62b86aec56e2a82f2807172c")},(error,user)=>{
    //   console.log(user)
    // })

    // db.collection('tasks').find({completed:false}).toArray((error,user)=>{
    //   console.log(user)
    // })
    

 })
