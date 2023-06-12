import dbConnect from "../../db/db"
import Cliente from "../../db/model/ClientModel"

dbConnect()

const handler = async (req,res) => 
{
    // const client = await connectDB()
    // const db = client.db("DirectrackCM_DB")

    const {method} = req
   

    switch(method)
    {
        case "GET":
            // let bodyObject = JSON.parse(req.body)
            // let myPost = await db.collection("clientes").insertOne(bodyObject)
            // res.json(myPost.ops[0])
            // break;
            const clients = await Cliente.find({})
            res.status(200).json({success: true,data:clients})
            break
        case "POST":
            const client = await Cliente.create(req.body)
            res.status(201).json({success: true,data:client})
            break
       
        default:
            res.status(400).json({success:false})
            break
    }


    //res.json({test:"test"})

}

export default handler