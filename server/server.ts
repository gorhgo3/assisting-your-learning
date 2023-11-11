import express from 'express';
import cors from 'cors';
import router from './routes/learning.js';
import initialTest from './functions/fireStore.js';

const app = express();
const port = process.env.PORT || 3000;

// Set up CORS middleware before defining routes
app.use(cors());

// await initialTest()

app.use('/learning', router);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
