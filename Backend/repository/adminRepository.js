const Admin = require("../models/admin");
class AdminRepository{
    async createAdmin(data){
        try{
            const admin = await Admin.create(data);
            return admin;
        }catch(error){
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }

    async destroy(adminId) {
        try {
            const result = await User.deleteOne({ _id: adminId });
            return result.deletedCount > 0; // Return true if a user was deleted
        } catch (error) {
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }

    async getById(adminId) {
        try {
            const admin = await Admin.findById(adminId, {
                name: 1,
                email: 1,
                _id: 1
            });
            return admin;
        } catch (error) {
            console.log("Something went Wrong in Repo Layer");
            throw error;
        }
    }

    async getByEmail(emailId) {
        try {
            const admin = await Admin.findOne({ email: emailId });
            return admin;
        } catch (error) {
            console.log("Something went wrong at repository layer.");
            throw error;
        }
    }
}

module.exports =AdminRepository;