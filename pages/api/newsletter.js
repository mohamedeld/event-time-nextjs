import { MongoClient } from "mongodb";
async function handler(req,res){
  if(req.method === 'POST'){
    const userEmail = req.body.email;
    if(!userEmail || !userEmail.includes('@')){
      res.status(422).json({
        message:"enter a valid email"
      })
      return;
    }
    const client = await MongoClient.connect('mongodb+srv://mohamedazoz20010:DlKcsRJqhoSOScDJ@cluster0.g5n9xya.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0');
    const db = client.db();
    await db.collection('emails').insertOne({email:userEmail});
    client.close();
    res.status(200).json({
      message:'registered successfully'
    })
  }
}
export default handler;