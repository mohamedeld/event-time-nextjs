import {MongoClient} from "mongodb";

async function handler(req,res){
  const eventId = req.query.eventId;
  const client = await MongoClient.connect('mongodb+srv://mohamedazoz20010:DlKcsRJqhoSOScDJ@cluster0.g5n9xya.mongodb.net/events?retryWrites=true&w=majority&appName=Cluster0');
  const db = client.db();

  if(req.method === 'POST'){
    const {email,name,text}= req.body;
    if(!email || !email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '' ){
      res.status(422).json({message:'please enter a valid data'});
      return;
    }
    const newComment = {
      id:new Date().toISOString(),
      email,
      name,
      text,
      eventId
    }
    const result = await db.collection('comments').insertOne(newComment);
    newComment._id = result.insertedId;
    res.status(200).json({
      message:'added successfully',
      comment:newComment
    })
  }
  if(req.method === 'GET'){
    const comments = await db.collection('comments').find().toArray();
    res.status(200).json({
      message:'get all comments',
      comments:comments
    })
  }
  client.close();
}
export default handler;