import mongoose from "mongoose";


const { Schema } = mongoose;

const createUser = new mongoose.Schema ({

  UserName: {
    type:String ,
  },

  UserAge: {
   type: Number,
   default: 0,
  },
})

const  UserModuls = mongoose.model("user",createUser);

export default UserModuls;



