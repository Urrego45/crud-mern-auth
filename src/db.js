import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.URL_MONGO_ATLAS)
        console.log('>>> DB coneccted');
    } catch (error) {
        console.log(error)
    }
}
