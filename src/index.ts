import express ,{Request,Response} from 'express'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port =3000;
app.use(bodyParser.json());

mongoose.connect(process.env.DB_LINK!)
.then(()=>console.log('Connected to MongoDB'))
.catch(err=>console.log('Failed to connect to MongoDB',err))

import postsRoutes from './routes/posts'

app.use('/posts',postsRoutes);

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})