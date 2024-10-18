const {Schema, model, default:mongoose}  =require("mongoose");
const userSchema = new Schema({
    first_name: {
        type: String,
        required:"Name is required"
    },
    last_name: {
        type: String,
        required:"Name is required"
    },
    email: {
        type: String,
        trim: true,
        unique: 'Email already exists',
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
        required: 'Email is required'
    },
    phone: {
        type: String,
        required: "Phone Number is Required" 
    },
    password: {
        type: String,
        required: "Password is required."
    },
    credit_score: {
        type: Number, // Credit score of the user
        required: [true, "Credit score is required"], // Validation message
    },
    employment_status: {
        type: String, // e.g., employed, self-employed, unemployed
        enum: ['full-time', 'self-employed', 'unemployed', 'part-time'], // Specify valid options
        required: [true, "Employment status is required"], // Validation message
    },
    income: {
        type: Number, // Annual income of the applicant
        required: [true, "Income is required"], // Validation message
    },
    gender: {
        type: String, // Gender of the applicant
        enum: ['male', 'female', 'other'], // Specify valid options
        required: [true, "Gender is required"], // Validation message
    },
 
})

const User = mongoose.model('User',  userSchema);
module.exports =  User;