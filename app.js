const express = require("express")

const PORT = process.env.PORT || 3000
const app = express()

app.set("view engine", "ejs")

app.use(require("./routes/main.js"))
app.use(require("./routes/ip-address.js"))

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
