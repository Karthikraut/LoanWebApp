const AdminRepository = require("../repository/adminRepository"); // Updated repository name
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const { cookie } = require('cookie-parser');

dotenv.config();
const JWT_KEY = process.env.JWT_KEY;

class AdminService {

    constructor() {
        this.adminRepository = new AdminRepository(); // Updated repository reference
    }
    
    async create(data) {
        try {
            const hashedPassword = await bcrypt.hash(data.password, 10); // 10 is the salt rounds
            data.password = hashedPassword;
            const admin = await this.adminRepository.createAdmin(data); // Updated repository method
            return admin;
        } catch (error) {
            console.log("Something went wrong in the service layer.");
            throw error;
        }
    }

    async signIn(email, plainPassword) {
        try {
            // Step 1: Check for the Email in your database
            const admin = await this.adminRepository.getByEmail(email); // Updated repository method
            if (!admin) {
                throw new Error("Admin not found");
            }
            console.log("ADMIN ::- ", admin);

            // Step 2: Check if the admin password matches the plain password entered
            const passwordMatch = await this.checkPassword(plainPassword, admin.password); // Await password check
            console.log("PLAIN PASSWORD: ", plainPassword);
            console.log("Admin Password: ", admin.password);

            if (!passwordMatch) {
                console.log("Password doesn't match");
                throw { error: 'Incorrect Password' };
            }

            // Step 3: If password matches, create a token and send it to the admin
            const newJWT = this.createToken({ email: admin.email, id: admin.id }); // Updated token data
            console.log("NEW TOKEN: ", newJWT);
            return newJWT;
        } catch (error) {
            console.log("Error at Sign-In process.");
            throw error;
        }
    }

    createToken(admin) {
        try {
            var token = jwt.sign(admin, JWT_KEY, { expiresIn: '5d' }); // Updated variable name
            return token;
        } catch (error) {
            console.log("Error occurred while creating token.");
            throw error;
        }
    }

    verifyToken(admin) {
        try {
            var response = jwt.verify(admin, JWT_KEY); // Updated variable name
            if (!JWT_KEY) {
                throw new Error('JWT_KEY is not defined');
            }

            return response;
        } catch (error) {
            console.log("Error occurred while verifying token.");
            throw error;
        }
    }

    async checkPassword(adminInputPlainPassword, encryptedPassword) {
        try {
            return await bcrypt.compare(adminInputPlainPassword, encryptedPassword); // Updated variable name
        } catch (error) {
            console.log("Something went wrong in password comparison.");
            throw error;
        }
    }

    async isAuthenticated(token) {
        try {
            // Verify the token
            const decodedToken = this.verifyToken(token);

            console.log("Decoded Token ", decodedToken);
            // If token verification fails, throw an error
            if (!decodedToken) {
                throw new Error("Invalid token");
            }

            // Retrieve the admin using the admin ID from the token
            const admin = await this.adminRepository.getById(decodedToken.id); // Updated repository method

            // If admin not found, throw an error
            if (!admin) {
                throw new Error("Admin not found for the given token");
            }
            // Return the admin's details
            return admin;
        } catch (error) {
            console.error("Error in isAuthenticated:", error);
            throw error;
        }
    }

}

module.exports = AdminService; // Updated export name
