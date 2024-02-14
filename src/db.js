import mongoose from 'mongoose'

export const connectDB = async () => {
    try {
        await mongoose.connect(`mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`, {
            authSource: `${process.env.MONGO_USERNAME}`,
            user: `${process.env.MONGO_USERNAME}`,
            pass: `${process.env.MONGO_PASSWORD}`,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('>>> DB coneccted');
    } catch (error) {
        console.log(error)
    }
}
