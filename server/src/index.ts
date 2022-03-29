import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import path from 'path'

// CONFIG SERVER

dotenv.config()
const app = express()
import './data/database/database'

// IMPORTS ROUTES

import usersRoute from './router/users.routes'
import regardsRoute from './router/regards.routes'

app.set("port", process.env.PORT || 3950)

// MIDDLEWARES

app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// ROUTES

app.use(usersRoute)
app.use(regardsRoute)

// PUBLIC

app.use('/public', express.static(path.join(__dirname, "../public")))

// LISTEN PORT

app.listen(app.get("port"), () => {
    console.log("Server running.");
})
