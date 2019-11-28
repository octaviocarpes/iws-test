import express from 'express';
import router from './Routes';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));

app.use(cors());

app.get('/health', (req, res) => {
  res.status(200).send({
    status: 'up',
  });
});

app.use('/api', router);

app.listen(8080, () => {
  console.log('BFF Up on port 8080');
});
