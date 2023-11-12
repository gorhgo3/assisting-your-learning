import express from "express"
import { checkVideo } from "../functions/youtubeTranscript.js"
import runAI from "../functions/aiYoutube.js";

const router = express.Router()

// router.use(`/`, async (req, res) => {
//   const url = req.query.url
//   console.log(url);
//   const data = await checkVideo(url)
//   res.send(data)
// })
router.post(`/`, async (req, res) => {
  try {
    const jsonData = req.body.url
    // console.log(jsonData)
    // Process the JSON data as needed
    const data = await checkVideo(jsonData)
    // console.log(data);
    
    const summary = await runAI(data)

    console.log(summary);
    

    // Send a response back if required
    // res.status(200).json(summary);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


export default router