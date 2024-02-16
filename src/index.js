import app from "./app.js";
import { connectDB } from "./db.js"

connectDB()

app.listen(process.env.APP_PORT_1, () => {
    console.log(`>>> Server on port ${process.env.APP_PORT_1}`)
})
