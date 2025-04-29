import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  message: {
    type: String,
    required: true,
},
  user: { 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
}

},{ timestamps: true });



const Contact = mongoose.model("Contact", contactSchema);
export default Contact;
