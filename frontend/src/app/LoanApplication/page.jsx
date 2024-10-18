"use client";
import React, { useState } from "react";
import {
  MenuItem,
  TextField,
  InputLabel,
  FormControl,
  Select,
  Button,
} from "@mui/material";

const LoanApplication = () => {
  const [formData, setFormData] = useState({
    loanType: "",
    loanAmount: "",
    tenure: "",
    creditScore: "",
    employmentStatus: "",
    monthlyIncome: "",
    monthlyDebtPayments: "",
    fullName: "",
    email: "",
    phoneNumber: "",
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
    // Handle form submission logic
    console.log("Form Data Submitted:", formData);
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
          {/* Full Name */}
          <TextField
            label="Full Name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />

          {/* Email */}
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />

          {/* Phone Number */}
          <TextField
            label="Phone Number"
            name="phoneNumber"
            type="tel"
            value={formData.phoneNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />

          {/* Loan Type */}
          <FormControl fullWidth margin="normal">
            <InputLabel id="demo-simple-select-label">Loan Type</InputLabel>
            <Select
             labelId="demo-simple-select-label"
              id="demo-simple-select"
             
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
          />

          {/* Tenure */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Tenure (Years)</InputLabel>
            <Select
            labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Tenure (Years)"
              value={formData.tenure}
              onChange={handleChange}
              required
            >
              <MenuItem value={1}>1 Year</MenuItem>
              <MenuItem value={3}>3 Years</MenuItem>
              <MenuItem value={5}>5 Years</MenuItem>
              <MenuItem value={10}>10 Years</MenuItem>
            </Select>
          </FormControl>

          {/* Credit Score */}
          <TextField
            label="Credit Score"
            name="creditScore"
            type="number"
            value={formData.creditScore}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />

          {/* Employment Status */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Employment Status</InputLabel>
            <Select

            labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Employment Status"
              value={formData.employmentStatus}
              onChange={handleChange}
              required
            >
              <MenuItem value="employed">Employed</MenuItem>
              <MenuItem value="self-employed">Self-employed</MenuItem>
              <MenuItem value="unemployed">Unemployed</MenuItem>
            </Select>
          </FormControl>

          {/* Monthly Income */}
          <TextField
            label="Monthly Income"
            name="monthlyIncome"
            type="number"
            value={formData.monthlyIncome}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />

          {/* Monthly Debt Payments */}
          <TextField
            label="Monthly Debt Payments"
            name="monthlyDebtPayments"
            type="number"
            value={formData.monthlyDebtPayments}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-6"
        >
          Submit Application
        </Button>
      </form>
    </div>
  );
};

export default LoanApplication;
