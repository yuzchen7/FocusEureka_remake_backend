import express from 'express';
import cors from 'cors';

export const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
    res.status(200).send({ status: '200', message: "FocusEureka_remake_endpoint health test" });
});
