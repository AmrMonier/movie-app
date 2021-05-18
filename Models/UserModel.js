import mongoose from "mongoose";
import validator from "../Validators/validators.js";

const UserModelSchema = mongoose.Schema(
  {
    name: {
      type: String,
      validate: {
        validator: (value) => {
          return validator.sizeValidator(value, 3, 25);
        },
        message: " name must be at least 3 characters and 25 character at most",
      },
      trim: true,
    },
    username: {
      type: String,
      trim: true,
      validate: {
        validator: (value) => {
          return validator.sizeValidator(value, 5, 15);
        },
        message:
          "username must be at least 5 characters and 15 character at most",
      },
      unique: true,
    },
    email: { type: String,
      trim: true,
      validate: {
      validator: (value) => {
        return validator.emailValidator(value);
      },
      message:
        "Invalid email, Provide something like: example@domain.com",
    }, unique: true },
    password: { type: String, required: true},
  },
  {
    timestamps: true,
  }
);
UserModelSchema.methods.toJSON = function() {
  var obj = this.toObject();
  delete obj.password;
  return obj;
 }
export default mongoose.model("User", UserModelSchema);
