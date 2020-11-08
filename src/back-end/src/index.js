/* STREAMCHAT STUFF (API for chat functionality https://getstream.io/blog/create-a-chat-app-with-vue-js-and-stream/) */



const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { StreamChat } = require('stream-chat')
require('dotenv').config()

const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// initialize Stream Chat SDK
const serverSideClient = new StreamChat(
    process.env.STREAM_API_KEY,
    process.env.STREAM_APP_SECRET
)

app.post('/join', async (req, res) => {
    const { username } = req.body

    // generate Stream Chat token to use to authenticate user on the client
    const token = serverSideClient.createToken(username)

    return res.status(200).json({ user: { username }, token })
})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
    console.log(process.env.TEST)
})

app.get('/', (req, res) => {

    res.send('Hey there!');
});