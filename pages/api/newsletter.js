function handler(req,res){
  if(req.method === 'POST'){
    const userEmail = req.body.email;
    if(!userEmail || !userEmail.includes('@')){
      res.status(422).json({
        message:"enter a valid email"
      })
      return;
    }
    res.status(200).json({
      message:'registered successfully'
    })
  }
}
export default handler;