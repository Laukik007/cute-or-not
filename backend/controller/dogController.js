
const dog = require("../models/dogModel");
let EloRating = require('elo-rating');
const CreateDog = (async (req, res) => {
    try{
    const { Name, Owner, url, thumbnail } = req.body;
    const newDog = new dog({
     Name, Owner, url, thumbnail 
    });
    const createdDog = await newDog.save();
    res.status(200).json({
        success:true,
        Dog:createdDog
    })
    }
    catch(err){
        res.status(400).json({
        success:false,
        error:err
    })
    }
    
});


const UpdateDog = (async (req, res) => {
  try{
  const {id1,id2,oldRating1,oldRating2,winnerId}=req.body;
  console.log(id1,id2,oldRating1,oldRating2,winnerId);
  let win=false;
  if(winnerId==id2){
    win=true;
  }
  let result=EloRating.calculate(oldRating1,oldRating2,win);
  console.log(result);
  let newrating1=result.playerRating;
  let newrating2=result.opponentRating;
  console.log(newrating1,newrating2);
  let doc1=await dog.findOneAndUpdate({_id:id1},{Rating:newrating1});
  let doc2=await dog.findOneAndUpdate({_id:id2},{Rating:newrating2});

  res.status(200).json({
    success:true,
    newdocument1:doc1,
    newdocument2:doc2
  })

  }catch(err){
    res.status(400).json({
      success:false,
      error:err
    })
  }
});



const getDogs=(async(req,res)=>{
  try{
     dog.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json(result);
    }
  });
  }catch(err){
    res.status(400).json({
      error:err
    })
  }
})

module.exports = {
 CreateDog,
 UpdateDog,
 getDogs
};