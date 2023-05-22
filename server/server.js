// Helps manage the server and routing
const express = require("express") 
const os = require("os")

// create an instance of the express, to use it obv.
const expressInstance = express()

// now use the express library

expressInstance.get("/", (req, res) => { res.send(os.hostname()) } )

// listen to some port
expressInstance.listen(3000, () => {
    console.log(`listening started at port 3000`)
})