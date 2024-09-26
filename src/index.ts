import { config } from 'dotenv';
import { app } from './api';

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`local API available on http://localhost:${port}`);
});
