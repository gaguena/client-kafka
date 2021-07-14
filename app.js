import express from "express"
import dotenv from "dotenv"

const start = () => {
  let app = express()
  dotenv.config()

  app.listen(process.env.PORT, () => {
    console.log(`Start Server in ${process.env.PORT}`)
  })

}
