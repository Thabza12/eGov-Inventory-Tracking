const express = require('express');
const router = express.Router();
const { exec } = require('child_process');

router.get('/departments', async (req, res) => {
    try {

        const command = `curl -X GET "https://msp.preyproject.com/api/v1/clients" -H 'accept: application/json' -H "apikey: ee2ba49ca14b3c3cecae4b7ab55e75c4"`
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error: ${error.message}`)
            }

            const response = JSON.parse(stdout);
            console.log(response[0].departments);
            return res.status(200).json(response[0].departments);

        });

    } catch (error) {
        console.error('Error fetching departments:', error);
        return res.status(500).json({ error: 'An error occurred while fetching departments.' });
    }
})


module.exports = router
