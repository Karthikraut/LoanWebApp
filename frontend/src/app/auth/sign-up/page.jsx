"use client";
import React, { useState } from 'react';
import { MenuItem, TextField, InputLabel, FormControl, Select, Button } from '@mui/material';

const SignupProfile = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    gender: '',
    maritalStatus: '',
    contactNo: '',
    email: '',
    password: '',
    employmentStatus: '',
    yearsOfEmployment: '',
    annualIncome: '',
    bankName: '',
    accountNo: '',
    ifcCode: '',
    creditScore: '',
    monthlyDebtPayment: '',
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
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        className="w-full max-w-6xl bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Complete Signup Profile</h2>

        {/* Personal Information Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

            {/* Date of Birth */}
            <TextField
              label="Date of Birth"
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              required
            />

            {/* Gender */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
            </FormControl>

            {/* Marital Status */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Marital Status</InputLabel>
              <Select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                required
              >
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
                <MenuItem value="divorced">Divorced</MenuItem>
              </Select>
            </FormControl>

            {/* Contact Number */}
            <TextField
              label="Contact No."
              name="contactNo"
              type="tel"
              value={formData.contactNo}
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

            {/* Password */}
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
          </div>
        </div>

        {/* Employment Information Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Employment Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Employment Status */}
            <FormControl fullWidth margin="normal">
              <InputLabel>Employment Status</InputLabel>
              <Select
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                required
              >
                <MenuItem value="full-time">Full-time</MenuItem>
                <MenuItem value="part-time">Part-time</MenuItem>
                <MenuItem value="self-employed">Self-employed</MenuItem>
                <MenuItem value="unemployed">Unemployed</MenuItem>
              </Select>
            </FormControl>

            {/* Years of Employment (in months) */}
            <TextField
              label="Years of Employment (Months)"
              name="yearsOfEmployment"
              type="number"
              value={formData.yearsOfEmployment}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />

            {/* Annual Income */}
            <TextField
              label="Annual Income"
              name="annualIncome"
              type="number"
              value={formData.annualIncome}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
          </div>
        </div>

        {/* Financial Information Section */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-4">Financial Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bank Name */}
            <TextField
              label="Bank Name"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />

            {/* Account Number */}
            <TextField
              label="Account Number"
              name="accountNo"
              value={formData.accountNo}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />

            {/* IFSC Code */}
            <TextField
              label="IFSC Code"
              name="ifcCode"
              value={formData.ifcCode}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />

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

            {/* Monthly Debt Payment */}
            <TextField
              label="Monthly Debt Payment"
              name="monthlyDebtPayment"
              type="number"
              value={formData.monthlyDebtPayment}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
          </div>
        </div>

        {/* Complete Button */}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className="mt-8"
        >
          Complete Signup
        </Button>
      </form>
    </div>
  );
};

export default SignupProfile;
