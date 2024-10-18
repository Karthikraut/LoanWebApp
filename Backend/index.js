const express = require("express");
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./connection/index');
// const apiRoutes = require('./routes/index')
const User = require('./models/user');
const Admin =require('./models/admin');
const Loan =require('./models/loan');
const router = require("./routes/index");

dotenv.config();
const PORT = process.env.PORT

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT ,async ()=>{
    console.log(`Hello ${process.env.PORT}`);

    await connectDB();
    console.log(`Server has started AT ${PORT}`);
})

const createAdmin = async () => {
    try {
        const newAdmin = new Admin({
            first_name: "Jane",
            last_name: "Smith",
            email: "jane.smith@example.com",
            phone: "0987654321",
            password: "adminpassword123"
        });

        const savedAdmin = await newAdmin.save();
        console.log("Admin created successfully:", savedAdmin);
    } catch (error) {
        console.error("Error creating admin:", error.message);
    }
};

const createLoan = async () => {
    try {
        const newLoan = new Loan({
            user_id: "67127a9edbcdbfec494bd6f3", // Replace with actual user ObjectId
            loan_amount: 5000,
            loan_purpose: "Personal expenses",
            requested_tenure: 12, // in months
        });

        const savedLoan = await newLoan.save();
        console.log("Loan created successfully:", savedLoan);
    } catch (error) {
        console.error("Error creating loan:", error.message);
    }
};


const updateLoanWithAdminAction = async (loanId, adminId, decision, justification) => {
    try {
        // Find the loan by ID and update it
        const updatedLoan = await Loan.findByIdAndUpdate(
            loanId,
            {
                admin_action: {
                    admin_id: adminId,
                    decision: decision,
                    justification: justification,
                    action_timestamp: new Date() // Set the current date and time
                },
                is_approved_by_admin: decision === 'approved', // Set approval status based on decision
                loan_status: decision,
                model_interest_rate: 20
            },
            { new: true } // Return the updated document
        );

        console.log("Loan updated successfully:", updatedLoan);
    } catch (error) {
        console.error("Error updating loan:", error.message);
    }
};