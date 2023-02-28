const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name:{
      type:String,
    },
    dept:{
      type:String,
    },
    passoutYear:{
      type:Number,
    },
    phoneNo:{
      type:String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    img:{
      type:String,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
