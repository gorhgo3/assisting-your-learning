import express from "express"
import { checkVideo } from "../functions/index.js"

const router = express.Router()

// router.use(`/`, async (req, res) => {
//   const url = req.query.url
//   console.log(url);
//   const data = await checkVideo(url)
//   res.send(data)
// })
router.post(`/`, async (req, res) => {
  try {
    const jsonData = req.body; // Access the JSON data from the request body
    console.log(jsonData);
    console.log('jsonData');
    // Process the JSON data as needed

    // Send a response back if required
    res.status(200).json({ message: 'Data received successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


export default router