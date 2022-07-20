const router = require("express").Router();
const axios = require("axios")
const constants = require('./constants')
//use hidden API KEY in .env
const dotenv = require("dotenv");
dotenv.config();

router.post('/new-message', async (req, res) => {
    //creating an object for message with all the details like chat id,text etc 
    //which will come through req.body.
    // In case a message is not present, or if our message does not have the word Hello
    //  in it, do nothing and return an empty response.

    const { message } = req.body;
    if (!message || message.text.toLowerCase().indexOf("Hello") < 0) {

        //res.send() implement
        return " type Hello " + res.end();
    }

    //IMPLEMENTATION OF axios
    /**
     * https://api.telegram.org/bot<token>/METHOD_NAME
     * 
     * METHOD_NAME -> send MEssage-> Using this method to send text messages. On success, the sent Message is returned.
     */


    axios.post(`https://api.telegram.org/bot/${process.env.TELEGRAM_BOT_API}/sendMessage`, constants.botresponse(message)).then((response) => {
        // We get here if the message was successfully posted
        console.log("Message posted")
        res.end("ok")
    })
        .catch((err) => {
            // ...and here if it was not
            console.log("Error :", err)
            res.end("Error :" + err)
        });



});








module.exports = router;