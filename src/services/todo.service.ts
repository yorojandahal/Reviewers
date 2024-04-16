// import { Prisma, PrismaClient } from "@prisma/client"
// import Boom from "@hapi/boom"
// const prisma= new PrismaClient()


// // export async function mainseender() {
// //     try{
// //         await prisma.todo.delete({where: {id:2}})
// //     } catch(err){
// //         console.log(err, " testing hudai xa ")
// //     }

// // }

// export const getTodos = async(active: boolean) => {
//     try {
//     return prisma.todo.findMany()
//     } catch(err: any) {
//         console.log(err)

//     if (err.code === 'P2025') {
    
//         throw Boom.notFound('Post not found')
//     } else {
//         throw(err)
//     }
//     }
// }


// export const update = async (id: number, todo: any) => {
//     try {
// await prisma.todo.update({
//     data:{
//         name:todo.name,
//         active : true
//     },

//     where:{
//         id: id
//     } 
// })
// }catch (err: any) {
//     console.log(err)

//     if (err.code === 'P2025') {
    
//         throw Boom.notFound('Post not found')
//     } else {
//         throw(err)
//     }
// }
// }


// export const postTodos = async (body: any, userId: number) =>{
//     try {
//    return await prisma.todo.create({
//         data: {
//             name: body.name,
//             active: body.active,
//             userId: userId
//         }

//     })

// } catch(err: any) {
//     console.log(err)

//     if (err.code === 'P2025') {
    
//         throw Boom.notFound('Post not found')
//     } else {
//         throw(err)
//     }
// }
// }
// // export const update  = async (id: string, todo: any) => {

// //         await prisma.todo.update({where: {id:2}})


// // }

// export const remove = async (id: any) =>{
//     try{
// return await prisma.todo.delete({where: {id:id}})

//     }catch(err: any){
//         console.log(err)

//     if (err.code === 'P2025') {
    
//         throw Boom.notFound('Post not found')
//     } else {
//         throw(err)
//     }
        
//     }

// }





// export const getById = async(id: number) => {
//     try {
//      return await prisma.todo.findFirstOrThrow({where: {
//         id: Number(id)
//     }})
// }
// catch (err: any) {
//     console.log(err)

//     if (err.code === 'P2025') {
    
//         throw Boom.notFound('Post not found')
//     } else {
//         throw(err)
//     }
//     }
// }