import app from "./app.js";
import { connectDB } from "./db.js"

connectDB()

app.listen(process.env.APP_PORT_1, process.env.HOST_LISTEN, () => {
    console.log(`>>> Server on port ${process.env.APP_PORT_1}`)
})
