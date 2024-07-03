const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
// const bodyParser = require("body-parser")
const app = express()
const Routes = require("./routes/route.js")

const PORT = process.env.PORT || 5000

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: '10mb' }))
app.use(cors())

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server started at port no. ${PORT}`)
})

const DB='mongodb+srv://shreepai123:Shreepai%4004@cluster0.jhoj67t.mongodb.net/'
mongoose.connect(DB,{
    useNewUrlParser:true,
}).then(()=>{
    console.log('Database connected.......')
})

// const Hotelbook=require('./model/hotel.js')

// app.post('/add-room',async(req,res)=>{
//     const Hotel=new Hotelbook(req.body)
//     try{
//         await Hotel.save()
//         res.status(201).json({
//             status:'Success',
//             Headers:{
//                 'Authorization':'',
//                 'Content-type':'',
//             },
//             data:{
//                 Hotel
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status:'Failed',
//             message:err
//         })
//     }

// })
// const AdminLogIn=require('./controllers/admin-controller.js')

// app.post('/add-room',async(req,res)=>{
//     const Admin=new AdminLogIn(req.body)
//     try{
//         await Admin.save()
//         res.status(201).json({
//             status:'Success',
//             Headers:{
//                 'Authorization':'',
//                 'Content-type':'',
//             },
//             data:{
//                 Admin
//             }
//         })
//     }catch(err){
//         res.status(500).json({
//             status:'Failed',
//             message:err
//          })
//     }

// })
