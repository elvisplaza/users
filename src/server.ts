import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 3001;

app.use('/user', () => {
  console.log("i'm connected to /users routes");
});

mongoose
  .connect('mongodb://localhost:27017/url_office')
  .then(
    async () => {
      console.log('Connected to database at 27017');
      app.listen(PORT, () => {
        console.log(`Server is running on PORT: ${PORT}`);
      });
    },
  );
