import express from 'express';
import mongoose from 'mongoose';

//routes
import userRoutes from './routes';

const app = express();
const PORT = 3001;

app.use(express.json());
app.use('/user', userRoutes);

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
