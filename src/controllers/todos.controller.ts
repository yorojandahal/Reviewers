// /* eslint-disable @typescript-eslint/no-unused-vars */
// import { NextFunction,Request,Response } from "express"
// import * as TodoService from '../services/todo.service'
// import  HttpStatusCodes  from "http-status-codes"
// //import { number } from "zod"

// export const getAll = async (req: Request,res: Response,next: NextFunction)=>{
//     const activeStatus = req.query.active
//     try{
//     const todos = await TodoService.getTodos(Boolean(activeStatus))
//     res.status(HttpStatusCodes.ACCEPTED).send(todos)
// }catch(err){
//   next(err)

// }
// }

// export const postTodos =async (req: Request, res:Response) =>{
//     const todo: any  = req.body
//     console.log(req.body,'is request body')
//     try{
//     const todos = await TodoService.postTodos(req.body, (req as any).user.userId)
//     res.status(HttpStatusCodes.CREATED).send(todos)
// }catch(err){
  
// }
// }

// export const update = async (req: Request, res:Response, next:NextFunction)  =>{
//  const todo:any  = req.body
//  const id = Number(req.params.id)
//  try{
// const todos = await TodoService.update(id,todo)
// res.status(HttpStatusCodes.OK).send(todos)
//  }catch(err){
//   next(err)
//  }
// }


//   export const remove = async (req: Request, res: Response, next: NextFunction) => {
//     const id = Number(req.params.id)
//     console.log(id, ' request params ko id yo ho hai')
//     try{
//     const todos = await TodoService.remove(id)
//     res.status(HttpStatusCodes.NO_CONTENT).send(todos)
//   }catch(err){
//     next(err)
//   }
//   }

//   export const getById = async (req: Request, res: Response, next: NextFunction) => {
//     const id = Number(req.params.id)
//     console.log(id)
//     try {
    
//     const todos = await TodoService.getById(id)
//     res.status(HttpStatusCodes.CONTINUE).send(todos)
//     } catch (err) {
//       next(err)
//   }
// }