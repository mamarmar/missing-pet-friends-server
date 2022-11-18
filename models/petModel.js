import mongoose from "mongoose";
import validator from "validator";

const petSchema = new mongoose.Schema({
    // petImage: { 
    //     data: Buffer,
    //     contentType: String
    // },
    petName: { type: String },
    date: { type: Date },
    city: { type: String },
    email: {
        type: String,
        required: [true, 'Email is required'],
        lowercase: true,
        validate: [ validator.isEmail,{ message: "Valid email is required"}]
    },
    //more keys to be added:img (https://reactjs.org/docs/forms.html#the-file-input-tag), species, breed, owner name
});

export default mongoose.model("Pet", petSchema);