import express from "express"
// import todoRouter from './routes/todos.route'
import UserRouter from './routes/user.route'
import { genericErrorHandler } from "./middlewares/errors-middleware";
import cors from 'cors'
const PORT = 3000;
const app = express() 
app.use(express.json())

app.use(cors())
// app.use('/todos', todoRouter)
app.use('/users', UserRouter)
app.use(genericErrorHandler)


app.listen(PORT, ()=>{
    console.log('Runnig on port',PORT)
});

export default app;
