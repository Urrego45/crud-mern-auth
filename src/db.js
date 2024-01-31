import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://mongodb:27017/merndb", {
            authSource: "admin",
            user: "admin",
            pass: "password",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('>>> DB coneccted');
    } catch (error) {
        console.log(error)
    }
}
