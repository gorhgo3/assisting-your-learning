import express from 'express';
import cors from 'cors';
import openAiRoutes from './routes/learning.ts';
// import initialTest from './functions/fireStore.js';

const app = express();
const port = process.env.PORT || 3000;

// Set up CORS middleware before defining routes
app.use(cors());
app.use(express.json());

// await initialTest()

app.use('/learning/v1/openAI', openAiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
