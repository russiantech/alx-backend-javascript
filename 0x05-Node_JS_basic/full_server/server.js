import express from 'express';
import router from './routes/index.js';

const app = express();
const port = 1245;

// Set the database file as a property on the app instance
app.set('dbFile', process.argv[2]);

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default app;
