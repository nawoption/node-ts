import express ,{Request,Response} from 'express'
const app = express();
const port =3000;

app.get("/",(req:Request,resp:Response)=>{
    resp.send('Hello worl')
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})