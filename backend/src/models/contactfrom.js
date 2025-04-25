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
}
});



const Contact = mongoose.model("Contact", contactSchema);
export default Contact;