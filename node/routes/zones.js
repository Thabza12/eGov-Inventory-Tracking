const express = require('express');
const router = express.Router();
const { exec } = require('child_process');


router.get('/all', async (req, res) =>{
    try {

        const command = `curl -X GET "https://api.preyproject.com/v1/zones?page=1&page_size=20" -H 'accept: application/json' -H "apikey: ee2ba49ca14b3c3cecae4b7ab55e75c4"`
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`)
            }

            const response = JSON.parse(stdout);
            console.log(response);
            return res.status(200).json(response);

        });

    } catch (error) {
        console.error('Error fetching zones:', error);
        return res.status(500).json({ error: 'An error occurred while fetching zones.' });
    }
})




module.exports = router