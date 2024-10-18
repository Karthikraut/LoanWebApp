"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MenuItem,
  InputLabel,
  FormControl,
  Select,
  Button,
  TextField,
} from "@mui/material";
import { toast } from "react-hot-toast";
import Link from "next/link";
// Constants for personal and financial details (normally fetched from backend)
const PERSONAL_DETAILS = {
  fullName: "John Doe",
  email: "johndoe@example.com",
  phoneNumber: "+1234567890",
};

const FINANCIAL_DETAILS = {
  creditScore: 750,
  employmentStatus: "Employed", // Can be: "Employed", "Self-employed", "Unemployed"
  monthlyIncome: 5000,
  monthlyDebtPayments: 200,
};

const LoanApplication = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    loanType: "",
    loanAmount: "",
    tenure: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data (ensure all required fields are filled)
    if (isFormValid()) {
      // Handle form submission logic, including constants for personal and financial details
      console.log("Form Data Submitted:", {
        ...formData,
        ...PERSONAL_DETAILS,
        ...FINANCIAL_DETAILS,
      });

      // Show success toast
      toast.success("Form submitted successfully", {
        duration: 4000,
        position: "top-right",
        icon: "✅",
        className: "custom-toast-success",
      });
      router.push("/")
    } else {
      // Show error toast if form is invalid
      toast.error("Please fill out all required fields.", {
        duration: 4000,
        position: "top-right",
        icon: "❌",
        className: "custom-toast-error",
      });
    }
  };

  const isFormValid = () => {
    // Implement your form validation logic here
    // Return true if all required fields are filled, otherwise return false

    return (
     
      formData.loanType &&
      formData.loanAmount &&
      formData.tenure 
      
    );
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Loan Application Form
        </h2>

        {/* Form Grid for 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Full Name</label>
            <p className="bg-gray-100 p-2 rounded-md">
              {PERSONAL_DETAILS.fullName}
            </p>
          </div>

          {/* Email - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Email</label>
            <p className="bg-gray-100 p-2 rounded-md">
              {PERSONAL_DETAILS.email}
            </p>
          </div>

          {/* Phone Number - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Phone Number</label>
            <p className="bg-gray-100 p-2 rounded-md">
              {PERSONAL_DETAILS.phoneNumber}
            </p>
          </div>

          {/* Credit Score - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Credit Score</label>
            <p className="bg-gray-100 p-2 rounded-md">
              {FINANCIAL_DETAILS.creditScore}
            </p>
          </div>

          {/* Employment Status - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Employment Status</label>
            <p className="bg-gray-100 p-2 rounded-md">
              {FINANCIAL_DETAILS.employmentStatus}
            </p>
          </div>

          {/* Monthly Income - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Monthly Income</label>
            <p className="bg-gray-100 p-2 rounded-md">
              ${FINANCIAL_DETAILS.monthlyIncome}
            </p>
          </div>

          {/* Monthly Debt Payments - Static Display */}
          <div className="flex flex-col">
            <label className="text-gray-700">Monthly Debt Payments</label>
            <p className="bg-gray-100 p-2 rounded-md">
              ${FINANCIAL_DETAILS.monthlyDebtPayments}
            </p>
          </div>

          {/* Loan Type */}
          <FormControl fullWidth margin="normal">
            <InputLabel id="loan-type-label">Loan Type</InputLabel>
            <Select
              labelId="loan-type-label"
              name="loanType"
              value={formData.loanType}
              onChange={handleChange}
              required
              label="Loan Type"
            >
              <MenuItem value="home">Home Loan</MenuItem>
              <MenuItem value="personal">Personal Loan</MenuItem>
              <MenuItem value="auto">Auto Loan</MenuItem>
              <MenuItem value="education">Education Loan</MenuItem>
            </Select>
          </FormControl>

          {/* Loan Amount */}

          <TextField
            label="Loan Amount"
            name="loanAmount"
            type="number"
            value={formData.loanAmount}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            inputProps={{ min: 0 }}
          />

          {/* Tenure */}

          <TextField
            label="Tenure (in months)"
            name="tenure"
            type="number"
            value={formData.tenure}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
            inputProps={{ min: 0 }}
          />

        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-6"
          onClick={handleSubmit}
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default LoanApplication;
