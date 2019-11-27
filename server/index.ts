import express from 'express';
import router from './Routes';

const app = express();

app.get('/health', (req, res) => {
  res.status(200).send({
    status: 'up',
  });
});

app.use('/api', router);

app.listen(8080, () => {
  console.log('BFF Up on port 8080');
});
