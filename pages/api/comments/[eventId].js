
function handler(req,res){
  const eventId = req.query.eventId;
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
      text
    }
    res.status(200).json({
      message:'added successfully',
      comment:newComment
    })
  }
  if(req.method === 'GET'){
    const dummyList = [
      {id:'1',name:'ali',text:'welcome in programming'},
      {id:'2',name:'ahamed',text:'welcome in programming'},
    ]
    res.status(200).json({
      message:'get all comments',
      comments:dummyList
    })
  }
}
export default handler;